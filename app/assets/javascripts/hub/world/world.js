function World(width, height) {

    char = new Character(this, 96, 96);

    this.characters = [char];
    this.width = width;
    this.height = height;
}

World.prototype.update = function(dt) {
    _.each(this.characters, function(character) {character.update(); });
}