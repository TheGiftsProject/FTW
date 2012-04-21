function StationRenderer(renderer, world) {
    this.renderer = renderer;
    this.world = world;
}

StationRenderer.prototype.render = function() {
    var that = this;
    _.each(this.world.stations, function(station) { that.renderStation(station);} );
};

StationRenderer.prototype.renderStation = function(station) {
    if (station.isOccupied()) {
       this.renderer.pixelBlit(7, 7, station.x, station.y);
    }
    else {
       this.renderer.pixelBlit(7, 4, station.x, station.y);
    }
};
