function CharacterRenderer(renderer, world) {
    this.renderer = renderer;
    this.world = world;
}

CharacterRenderer.prototype.render = function() {
    var that = this;
    _.each(this.world.characters, function(character) { that.renderCharacter(character);} );
};

CharacterRenderer.prototype.renderCharacter = function(character) {
    if (character.isMoving()) {
        switch (character.vel) {
            case Direction.LEFT:   this.renderer.pixelBlit(3, 0, character.x, character.y); break;
            case Direction.RIGHT:  this.renderer.pixelBlit(2, 0, character.x, character.y); break;
            case Direction.TOP:    this.renderer.pixelBlit(1, 0, character.x, character.y); break;
            case Direction.BOTTOM: this.renderer.pixelBlit(0, 0, character.x, character.y); break;
        }
    }
    else this.renderer.pixelBlit(0, 0, character.x, character.y);
};