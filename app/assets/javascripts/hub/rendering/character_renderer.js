function CharacterRenderer(renderer, world) {
    this.renderer = renderer;
    this.world = world;
}

CharacterRenderer.prototype.render = function() {
    var that = this;
    _.each(this.world.characters, function(character) { that.renderCharacter(character);} );
};

CharacterRenderer.prototype.renderCharacter = function(character) {

};