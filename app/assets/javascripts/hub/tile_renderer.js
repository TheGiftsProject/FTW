//function TileRenderer(row, col, world, context, renderer){
//
//    this.coin_offset = Math.random() * 60;
//
//
//TileRenderer.prototype.render = function(render_row, render_col){
//    this.render_row = render_row;
//    this.render_col = render_col;
//    if (this.isWall(0,0)) {
//        this.renderWall();
//    } else {
//        this.renderRoad();
//    }
//    var cell = this.world.getCellAt(this.row, this.col);
//    if (cell.hasContent()) {
//        if (cell.content.isCoin()) {
//            this.renderCoin(cell.content.value);
//        }
//        else if (cell.content.isPowerup()) {
//            this.renderPowerup(cell.content.value)
//        } else if (cell.content.isLife()){
//            this.renderLife(cell.content.value)
//        }
//    }
//};
//
//TileRenderer.prototype.renderCoin = function(content_type) {
//    this.coin_frame = this.coin_offset + this.renderer.accumulator;
//    var tmp = Math.floor((this.coin_frame * 5) % 4);
//    var animation = (tmp % 2) ? 0 : Math.floor(tmp/2)+1;
//    this.tileBlit(this.renderer.coins, 16 * animation, 16 * content_type)
//}
//
//TileRenderer.prototype.renderPowerup = function(content_type) {
//    var tmp = Math.floor((this.renderer.accumulator*5) % 4);
//    var animation = (tmp % 2) ? 0 : Math.floor(tmp/2)+1;
//    this.tileBlit(this.renderer.coins, 16 * animation, 16 * content_type + 64)
//}
//TileRenderer.prototype.renderLife = function(content_type) {
//    var tmp = Math.floor((this.renderer.accumulator*5) % 4);
//    var animation = [0,1,2,1][tmp];
//    this.tileBlit(this.renderer.coins, 16 * animation, 16 * content_type + 112)
//};
//
