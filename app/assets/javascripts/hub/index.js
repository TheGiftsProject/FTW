//= require_tree .

function Hub(canvas, targetFPS) {
    this.ctx = canvas.getContext("2d");
    this.ctxWidth = canvas.width;
    this.ctxHeight = canvas.height;
    this.targetInterval = Math.floor(1000 / targetFPS);
    this.world = new World(this.ctxWidth, this.ctxHeight);
    this.renderer = new Renderer(this.ctx, this.world);
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
        this.world.update(dt);
        this.frameTimeAccumulator -= this.targetInterval;
        updated = true;
    }
    if (updated) {
        this.renderer.render(this.renderAccumulator);
        this.renderAccumulator = 0;
    }
    window.requestAnimFrame(_.bind(this.loop, this));
};

Hub.prototype.questStart = function() {
    this.world.getCharacter().goWork();
}

Hub.prototype.questEnd = function() {
    this.world.getCharacter().stopWorking();
    this.world.getCharacter().levelUp();
}

Hub.prototype.questQuery = function() {
    this.world.getCharacter().goToBulletin();
}

Hub.prototype.questQueryOut = function() {
    this.world.getCharacter().lookDown();
}

