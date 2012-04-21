function CharacterRenderer(renderer, world) {
    this.renderer = renderer;
    this.world = world;
}

CharacterRenderer.MOVE_TOTAL_ANIM_TIME = 0.5;
CharacterRenderer.MOVE_FRAME_MAP       = [0, 1, 0 ,2];

CharacterRenderer.prototype.render = function() {
    var that = this;
    _.each(this.world.characters, function(character) { that.renderCharacter(character);} );
};

CharacterRenderer.prototype.renderCharacter = function(character) {
    if (character.isAvailable()) {
        if (character.isMoving()) {
            var this_accumulator = this.renderer.accumulator;
            while (this_accumulator > CharacterRenderer.MOVE_TOTAL_ANIM_TIME) {
                this_accumulator -= CharacterRenderer.MOVE_TOTAL_ANIM_TIME;
            }
            var animation_offset = this.getMoveAnimationOffset(this_accumulator);
            switch (character.vel) {
                case Direction.LEFT:   this.renderer.pixelBlit(3, animation_offset, character.x, character.y); break;
                case Direction.RIGHT:  this.renderer.pixelBlit(2, animation_offset, character.x, character.y); break;
                case Direction.TOP:    this.renderer.pixelBlit(1, animation_offset, character.x, character.y); break;
                case Direction.BOTTOM: this.renderer.pixelBlit(0, animation_offset, character.x, character.y); break;
            }
        }
        else {
            switch (character.lastDir) {
                case Direction.LEFT:   this.renderer.pixelBlit(3, 0, character.x, character.y); break;
                case Direction.RIGHT:  this.renderer.pixelBlit(2, 0, character.x, character.y); break;
                case Direction.TOP:    this.renderer.pixelBlit(1, 0, character.x, character.y); break;
                case Direction.BOTTOM: this.renderer.pixelBlit(0, 0, character.x, character.y); break;
            }
        }
    }
};

CharacterRenderer.prototype.getMoveAnimationOffset = function(accumulator) {
    var frame = Math.floor(accumulator / (CharacterRenderer.MOVE_TOTAL_ANIM_TIME / CharacterRenderer.MOVE_FRAME_MAP.length));
    return CharacterRenderer.MOVE_FRAME_MAP[frame];
};