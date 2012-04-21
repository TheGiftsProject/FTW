function Character(world, x, y) {
    this.x = x || 0;
    this.y = y || 0;
    this.vel = Direction.NONE;
    this.world = world;
    this.orders = [new Order(Order.MOVE_ORDER, 188, 188), new Order(Order.MOVE_ORDER, 288, 188), new Order(Order.MOVE_ORDER, 188, 48)];
};

Character.SPEED = 2; // MUST be a divisor of TILE_SIZE (48).

Character.prototype.update = function(dt) {
    if (this.orders.length > 0) {
        _.first(this.orders).perform(this);
    }
};

Character.prototype.isMoving = function() {
    return this.vel != Direction.NONE;
};

//========================== ORDERS =============================/
function Order(type, destX, destY) {
    this.type = type;
    this.destX = destX;
    this.destY = destY;
};

Order.MOVE_ORDER = 'move';

Order.prototype.perform = function(character) {
    switch (this.type) {
        case Order.MOVE_ORDER: this.performMoveOrder(character);
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
        character.vel = Direction.NONE;
        character.orders.splice(0, 1);
    }
};

//========================== DIRECTION =============================/
function Direction() {};

Direction.NONE   = 'none';
Direction.LEFT   = 'left';
Direction.RIGHT  = 'right';
Direction.BOTTOM = 'bottom';
Direction.TOP    = 'top';