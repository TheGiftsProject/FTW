function World(width, height) {

    char = new Character(this, 188, 240);
    station = new Station(this, 480, 48);

    this.bulletin = new Bulletin(this, 48, 96);
    this.characters = [char];
    this.stations = [station];
    this.width = width;
    this.height = height;

//    char.goToBulletin();
}

World.prototype.update = function(dt) {
    _.each(this.characters, function(character) {character.update(); });
}

World.prototype.getEmptyStation = function() {
    return _.find(this.stations, function(station) { return !station.isOccupied(); });
}

World.prototype.getCharacter = function() {
    return this.character[0];
}