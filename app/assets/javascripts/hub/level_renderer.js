function LevelRenderer(ctx, width, height) {
    this.sprite = new Image();
    this.sprite.src = 'assets/images/devquest-sprite.png';
    this.accumulator = 0;
    this.ctx = ctx;
    this.cols = width / LevelRenderer.TILE_SIZE;
    this.rows = height / LevelRenderer.TILE_SIZE;
}

LevelRenderer.TILE_SIZE = 48;

LevelRenderer.prototype.render = function(dt) {
    this.accumulator += dt;
    this.ctx.strokeStyle = "#000000";
    this.renderTiles();
};

LevelRenderer.prototype.renderTiles = function() {
    for (var col = 0; col < this.cols; col++) {
        for (var row = 0; row < this.rows; row++) {
            this.blit(this.sprite, 5, 2, col, row);
        }
    }
};

LevelRenderer.prototype.blit = function(sprite, srcCol, srcRow, col, row){
    var size = LevelRenderer.TILE_SIZE;
    this.ctx.drawImage(sprite, srcCol * size, srcRow * y, size, size, col * size, row * size, size, size);
};