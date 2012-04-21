function RoomRenderer(renderer) {
    this.renderer = renderer;
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
};

// corners.
RoomRenderer.prototype.renderTopLeftCorner = function() {
    this.renderer.blit(4, 0, 0, 0);
};

RoomRenderer.prototype.renderTopRightCorner = function() {
    this.renderer.blit(6, 0, this.renderer.cols - 1, 0);
};

RoomRenderer.prototype.renderBottomLeftCorner = function() {
    this.renderer.blit(4, 2, 0, this.renderer.rows - 1);
};

RoomRenderer.prototype.renderBottomRightCorner = function() {
    this.renderer.blit(6, 2, this.renderer.cols - 1, this.renderer.rows - 1);
};

// walls.
RoomRenderer.prototype.renderTopWall = function() {
    for (var col = 1; col < this.renderer.cols - 1; col++) {
        this.renderer.blit(5, 0, col, 0);
    }
};

RoomRenderer.prototype.renderLeftWall = function() {
    for (var row = 1; row < this.renderer.rows - 1; row++) {
        this.renderer.blit(4, 1, 0, row);
    }
};

RoomRenderer.prototype.renderBottomWall = function() {
    for (var col = 1; col < this.renderer.cols - 1; col++) {
        this.renderer.blit(5, 2, col, this.renderer.rows - 1);
    }
};

RoomRenderer.prototype.renderRightWall = function() {
    for (var row = 1; row < this.renderer.rows - 1; row++) {
        this.renderer.blit(6, 1, this.renderer.cols - 1, row);
    }
};

// others.
RoomRenderer.prototype.renderFloor = function() {
    for (var col = 1; col < this.renderer.cols - 1; col++) {
        for (var row = 1; row < this.renderer.rows - 1; row++) {
            this.renderer.blit(5, 1, col, row);
        }
    }
};

RoomRenderer.prototype.renderDoor = function() {
//    this.blit(this.sprite, 6, 0, this.cols - 1, 0);
};