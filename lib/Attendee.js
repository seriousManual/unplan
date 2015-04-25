function Attendee(id, name) {
    this._id = id;
    this._name = name;
}

Attendee.prototype.getId = function() {
    return this._id;
};

Attendee.prototype.getName = function() {
    return this._name;
};

module.exports = Attendee;