function Character(world, x, y) {
    this.x = x || 0;
    this.y = y || 0;
    this.vel = Direction.NONE;
    this.lastDir = Direction.BOT;
    this.world = world;
    this.orders = [];
    this.workingAt = null;
};

Character.SPEED = 2; // MUST be a divisor of TILE_SIZE (48).

Character.prototype.update = function(dt) {
    if (this.orders.length > 0) {
        _.first(this.orders).perform(this);
    }
};

Character.prototype.isAvailable = function() {
    return this.workingAt === null;;
};

Character.prototype.isMoving = function() {
    return this.vel != Direction.NONE;
};

Character.prototype.goWork = function() {
    var emptyStation = this.world.getEmptyStation();
    this.orders.push(new Order(Order.MOVE_ORDER, emptyStation.x, emptyStation.y));
    this.orders.push(new Order(Order.WORK_ORDER, emptyStation.x, emptyStation.y, emptyStation));
}

Character.prototype.stopWorking = function() {
    if (this.workingAt != null) {
        this.orders.push(new Order(Order.STOP_ORDER));
        this.orders.push(new Order(Order.MOVE_ORDER, this.workingAt.x, this.workingAt.y + 48));
    }
}

//========================== ORDERS =============================/
function Order(type, destX, destY, destObject) {
    this.type = type;
    this.destX = destX;
    this.destY = destY;
    this.destObject = destObject;
};

Order.MOVE_ORDER = 'move';
Order.WORK_ORDER = 'work';
Order.STOP_ORDER = 'stop';

Order.prototype.perform = function(character) {
    switch (this.type) {
        case Order.MOVE_ORDER: this.performMoveOrder(character); break;
        case Order.WORK_ORDER: this.performWorkOrder(character); break;
        case Order.STOP_ORDER: this.performStopOrder(character); break;
    }
};

Order.prototype.performMoveOrder = function(character) {
    var horDist = this.destX - character.x;
    var verDist = this.destY - character.y;

    if (horDist != 0 ) {
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
        character.orders.splice(0, 1);
    }
};

Order.prototype.performWorkOrder = function(character) {
    character.workingAt = this.destObject;
    this.destObject.occupy(character);
};

Order.prototype.performStopOrder = function(character) {
    this.destObject.unoccupy();
    character.workingAt = null;
}

//========================== DIRECTION =============================/
function Direction() {};

Direction.NONE   = 'none';
Direction.LEFT   = 'left';
Direction.RIGHT  = 'right';
Direction.BOTTOM = 'bottom';
Direction.TOP    = 'top';