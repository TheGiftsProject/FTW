function Character(world, x, y) {
    this.x = x || 0;
    this.y = y || 0;
    this.world = world;
    this.orders = [];
};

Character.SPEED = 12;

Character.prototype.update = function(dt) {
    _.each(this.orders, function(order) { order.perform(this); });
};

Character.prototype.isMoving = function() {
    return this.orders.length > 0 && this.orders[0].isMoveOrder();
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

};

Order.prototype.isMoveOrder = function() {
    return this.type === Order.MOVE_ORDER;
};
