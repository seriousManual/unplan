var SlotView = require('./SlotView');
var LocationView = require('./LocationView');

function Schedule(numberSlots, numberLocations) {
    this._numberSlots = numberSlots;
    this._numberLocations = numberLocations;

    this._structure = this._buildDataStructure(numberSlots, numberLocations);
    this._locations = this._buildLocations();
    this._slots = this._buildSlots();
}

Schedule.prototype.setTalk = function(slotIndex, locationIndex, talk) {
    if (slotIndex >= this._numberSlots) throw new Error('slot');
    if (locationIndex >= this._numberLocations) throw new Error('location');

    this._structure[slotIndex][locationIndex] = talk;
};

Schedule.prototype.getSlot = function(slotIndex) {
    return this._slots[slotIndex];
};

Schedule.prototype.getLocation = function(locationIndex) {
    return this._locations[locationIndex];
};

Schedule.prototype.getSlots = function() {
    return this._slots;
};

Schedule.prototype.getLocations = function() {
    return this._locations;
};

Schedule.prototype._buildSlots = function() {
    var ret = [];
    for(var i = 0; i < this._numberSlots; i++) {
        ret.push(new SlotView(this._structure, i));
    }
    return ret;
};

Schedule.prototype._buildLocations = function() {
    var ret = [];
    for(var i = 0; i < this._numberLocations; i++) {
        ret.push(new LocationView(this._structure, i));
    }
    return ret;
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