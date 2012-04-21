//= require 'request_frame'
//= require_tree .

function Hub(canvas, targetFPS) {
    this.ctx = canvas.getContext("2d");
    this.ctxWidth = canvas.width;
    this.ctxHeight = canvas.height;
    this.targetInterval = Math.floor(1000 / targetFPS);
    this.levelRenderer = new LevelRenderer(ctx, ctxWidth, ctxHeight);
//    this.world = new HubWorld();
}

Hub.prototype.startLoop = function() {
    this.currentTime = new Date().getTime();
    this.frameTimeAccumulator = 0;
    this.renderAccumulator = 0;
    this.loop();
}

Hub.prototype.loop = function() {
    var newTime = new Date().getTime();
    var updated = false;
    this.frameInterval = newTime - this.currentTime;
    this.currentTime = newTime;
    this.frameTimeAccumulator += this.frameInterval;

    while (this.frameTimeAccumulator >= this.targetInterval) {
        var dt = this.targetInterval / 1000;
        this.renderAccumulator += dt;
        this.update(dt);
        this.frameTimeAccumulator -= this.targetInterval;
        updated = true;
    }
    if (updated) {
        this.render(this.renderAccumulator);
        this.renderAccumulator = 0;
    }
    window.requestAnimFrame(_.bind(this.loop, this));
};

Hub.prototype.update = function(dt) {
//    this.level.update(dt);
//    for (var i = 0; i < this.world.entities.length; i++){
//        this.world.entities[i].update(dt);
//    }
};

Hub.prototype.render = function(dt) {
    // clear last frame
    this.ctx.clearRect(0, 0, this.ctxWidth, this.ctxHeight);

    // render game
    this.ctx.save();

    this.levelRenderer.render(dt);
//    for (var i=0; i < this.world.entities.length ; i++){
//        this.world.entities[i].render(this.ctx);
//    }
    this.ctx.restore();
};

var hub = new Hub($('canvas'), 60);
hub.startLoop();
