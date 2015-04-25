var SlotView = require('./SlotView');
var LocationView = require('./LocationView');

function Schedule(numberSlots, numberLocations) {
    this._structure = this._buildDataStructure(numberSlots, numberLocations);
    this._numberSlots = numberSlots;
    this._numberLocations = numberLocations;
}

Schedule.prototype.setTalk = function(slotIndex, locationIndex, talk) {
    if (slotIndex >= this._numberSlots) throw new Error('slot');
    if (locationIndex >= this._numberLocations) throw new Error('location');

    this._structure[slotIndex][locationIndex] = talk;
};

Schedule.prototype.getSlot = function(slotIndex) {
    return new SlotView(this._structure, slotIndex);
};

Schedule.prototype.getLocation = function(locationIndex) {
    return new LocationView(this._structure, locationIndex);
};

Schedule.prototype.getNumberSlots = function() {
    return this._numberSlots;
};

Schedule.prototype.getNumberLocations = function() {
    return this._numberLocations;
};

Schedule.prototype._buildDataStructure = function(slots, locations) {
    var ret = [];
    for(var i = 0; i < slots; i++) {
        ret[i] = [];

        for(var y = 0; y < locations; y++) {
            ret[i][y] = null;
        }
    }

    return ret;
};

module.exports = Schedule;