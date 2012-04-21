function World(width, height) {

    char = new Character(this, 96, 96);
    station = new Station(this, 480, 48);

    this.characters = [char];
    this.stations = [station];
    this.width = width;
    this.height = height;

    char.goWork();
}

World.prototype.update = function(dt) {
    _.each(this.characters, function(character) {character.update(); });
}

World.prototype.getEmptyStation = function() {
    return _.find(this.stations, function(station) { return !station.isOccupied(); });
}