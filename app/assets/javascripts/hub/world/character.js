function Character(world, x, y) {
    this.x = x || 0;
    this.y = y || 0;
    this.vel = Direction.NONE;
    this.lastDir = Direction.BOTTOM;
    this.world = world;
    this.orders = [];
    this.workingAt = null;
    this.state = Character.STATE_IDLE;

};

Character.STATE_IDLE    = 'idle';
Character.STATE_WORKING = 'work';
Character.STATE_DANCING = 'dance';
Character.STATE_MOVING  = 'move';
Character.STATE_LOOKING = 'look';

Character.SPEED = 2; // MUST be a divisor of TILE_SIZE (48).

Character.prototype.update = function(dt) {
    if (this.orders.length > 0) {
        _.first(this.orders).perform(this);
    }
};

Character.prototype.isAvailable = function() {
    return this.state != Character.STATE_WORKING;
};

Character.prototype.isMoving = function() {
    return this.state === Character.STATE_MOVING;
};

Character.prototype.isDancing = function() {
    return this.state === Character.STATE_DANCING;
};

Character.prototype.completeOrder = function() {
   this.orders.splice(0, 1);
};

// "API"
Character.prototype.goWork = function() {
    var emptyStation = this.world.getEmptyStation();
    this.orders.push(new Order(Order.MOVE_ORDER, emptyStation.x, emptyStation.y));
    this.orders.push(new Order(Order.WORK_ORDER, emptyStation.x, emptyStation.y, emptyStation));
};

Character.prototype.stopWorking = function() {
    if (this.workingAt != null) {
        this.orders.push(new Order(Order.STOP_ORDER, this.workingAt.x, this.workingAt.y + 48, this.workingAt));
        this.orders.push(new Order(Order.MOVE_ORDER, this.workingAt.x, this.workingAt.y + 48));
    }
};

Character.prototype.goToBulletin = function() {
    if (this.state === Character.STATE_IDLE) {
        this.orders.push(new Order(Order.MOVE_ORDER, this.world.bulletin.x, this.world.bulletin.y + 24));
        this.orders.push(new Order(Order.LOOK_ORDER, this.world.bulletin.x, this.world.bulletin.y + 24, Direction.TOP));
    }
};

Character.prototype.lookDown = function() {
    this.orders.push(new Order(Order.FACE_ORDER, this.world.bulletin.x, this.world.bulletin.y + 24, Direction.BOTTOM));
};

Character.prototype.levelUp = function() {
    this.orders.push(new Order(Order.DANCE_ORDER, this.x, this.y));
};

//========================== ORDERS =============================/
function Order(type, destX, destY, destObject) {
    this.type = type;
    this.destX = destX;
    this.destY = destY;
    this.destObject = destObject;
};

Order.MOVE_ORDER  = 'move';
Order.WORK_ORDER  = 'work';
Order.STOP_ORDER  = 'stop';
Order.FACE_ORDER  = 'face';
Order.LOOK_ORDER  = 'look';
Order.DANCE_ORDER = 'dance';

Order.prototype.perform = function(character) {
    switch (this.type) {
        case Order.MOVE_ORDER:  this.performMoveOrder(character);  break;
        case Order.WORK_ORDER:  this.performWorkOrder(character);  break;
        case Order.STOP_ORDER:  this.performStopOrder(character);  break;
        case Order.FACE_ORDER:  this.performFaceOrder(character);  break;
        case Order.LOOK_ORDER:  this.performLookOrder(character);  break;
        case Order.DANCE_ORDER: this.performDanceOrder(character); break;
    }
};

Order.prototype.performMoveOrder = function(character) {
    var horDist = this.destX - character.x;
    var verDist = this.destY - character.y;

    if (horDist != 0 ) {
        character.state = Character.STATE_MOVING;
        if (horDist > 0) {
            character.vel = Direction.RIGHT;
            character.x += Character.SPEED;
        }
        else {
            character.vel = Direction.LEFT;
            character.x -= Character.SPEED;
        }
    }
    else if (verDist != 0) {
        character.state = Character.STATE_MOVING;
        if (verDist > 0) {
            character.vel = Direction.BOTTOM;
            character.y += Character.SPEED;
        }
        else {
            character.vel = Direction.TOP;
            character.y -= Character.SPEED;
        }
    }
    // reached destination.
    else {
        character.lastDir = character.vel;
        character.vel = Direction.NONE;
        character.state = Character.STATE_IDLE;
        character.completeOrder();
    }
};

Order.prototype.performWorkOrder = function(character) {
    character.workingAt = this.destObject;
    this.destObject.occupy(character);
    character.state = Character.STATE_WORKING;
    character.completeOrder();
};

Order.prototype.performStopOrder = function(character) {
    this.destObject.unoccupy();
    character.workingAt = null;
    character.state = Character.STATE_IDLE;
    character.completeOrder();
}

Order.prototype.performLookOrder = function(character) {
    this.performFaceOrder(character);
    character.state = Character.STATE_LOOKING;
}

Order.prototype.performFaceOrder = function(character) {
    character.lastDir = this.destObject;
    character.state = Character.STATE_IDLE;
    character.completeOrder();
}

Order.prototype.performDanceOrder = function(character) {
    character.state = Character.STATE_DANCE;
    character.completeOrder();
}

//========================== DIRECTION =============================/
function Direction() {};

Direction.NONE   = 'none';
Direction.LEFT   = 'left';
Direction.RIGHT  = 'right';
Direction.BOTTOM = 'bottom';
Direction.TOP    = 'top';