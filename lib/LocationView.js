function LocationView(data, locationIndex) {
    this._data = data;
    this._locationIndex = locationIndex;
}

LocationView.prototype.getTalks = function() {
    var that = this;

    return this._data.map(function(slot) {
        return slot[that._locationIndex];
    }) ;
};

module.exports = LocationView;