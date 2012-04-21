function Station(world, x, y) {
    this.x = x || 0;
    this.y = y || 0;
    this.world = world;
    this.workingCharacter = null;
};

Station.prototype.isOccupied = function() {
    return this.workingCharacter != null;
};

Station.prototype.workingCharacter = function() {
    return this.workingCharacter;
};

Station.prototype.occupy = function(character) {
  this.workingCharacter = character;
};

Station.prototype.unoccupy = function() {
    this.workingCharacter = null;
};

