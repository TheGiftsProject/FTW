function RoomRenderer(renderer, world) {
    this.renderer = renderer;
    this.world = world;
};

RoomRenderer.prototype.render = function() {
    this.renderTopLeftCorner();
    this.renderTopRightCorner();
    this.renderBottomLeftCorner();
    this.renderBottomRightCorner();
    this.renderTopWall();
    this.renderLeftWall();
    this.renderBottomWall();
    this.renderRightWall();
    this.renderFloor();
    this.renderDoor();
    this.renderLeftTorches();
    this.renderRightTorches();
    this.renderBulletin();
};

// corners.
RoomRenderer.prototype.renderTopLeftCorner = function() {
    this.renderer.tileBlit(4, 0, 0, 0);
};

RoomRenderer.prototype.renderTopRightCorner = function() {
    this.renderer.tileBlit(6, 0, this.renderer.cols - 1, 0);
};

RoomRenderer.prototype.renderBottomLeftCorner = function() {
    this.renderer.tileBlit(4, 2, 0, this.renderer.rows - 1);
};

RoomRenderer.prototype.renderBottomRightCorner = function() {
    this.renderer.tileBlit(6, 2, this.renderer.cols - 1, this.renderer.rows - 1);
};

// walls.
RoomRenderer.prototype.renderTopWall = function() {
    for (var col = 1; col < this.renderer.cols - 1; col++) {
        this.renderer.tileBlit(5, 0, col, 0, true);
    }
};

RoomRenderer.prototype.renderLeftWall = function() {
    for (var row = 1; row < this.renderer.rows - 1; row++) {
        this.renderer.tileBlit(4, 1, 0, row);
    }
};

RoomRenderer.prototype.renderBottomWall = function() {
    for (var col = 1; col < this.renderer.cols - 1; col++) {
        this.renderer.tileBlit(5, 2, col, this.renderer.rows - 1);
    }
};

RoomRenderer.prototype.renderRightWall = function() {
    for (var row = 1; row < this.renderer.rows - 1; row++) {
        this.renderer.tileBlit(6, 1, this.renderer.cols - 1, row);
    }
};

// others.
RoomRenderer.prototype.renderFloor = function() {
    for (var col = 1; col < this.renderer.cols - 1; col++) {
        for (var row = 1; row < this.renderer.rows - 1; row++) {
            this.renderer.tileBlit(5, 1, col, row);
        }
    }
};

RoomRenderer.prototype.renderDoor = function() {
    this.renderer.tileBlit(5, 3, Math.floor(this.renderer.cols / 2), this.renderer.rows - 1);
};

RoomRenderer.prototype.renderLeftTorches = function() {
    for (var row = 1; row < this.renderer.rows - 1; row++) {
        if (row % 2 == 0) this.renderer.tileBlit(4, 3, 0, row);
    }
};

RoomRenderer.prototype.renderRightTorches = function() {
    for (var row = 1; row < this.renderer.rows - 1; row++) {
        if (row % 2 == 0) this.renderer.tileBlit(4, 4, this.renderer.cols - 1, row);
    }
};

RoomRenderer.prototype.renderBulletin = function() {
    this.renderer.pixelBlit(6, 3, this.world.bulletin.x, this.world.bulletin.y);
};