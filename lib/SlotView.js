function SlotView(data, slotIndex) {
    this._data = data;
    this._slotIndex = slotIndex;
}

SlotView.prototype.getTalks = function() {
    return this._data[this._slotIndex];
};

module.exports = SlotView;