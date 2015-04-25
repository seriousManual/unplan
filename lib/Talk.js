function Talk(id, name) {
    this._id = id;
    this._name = name;
    this._voters = [];
}

Talk.prototype.getName = function() {
    return this._name;
};

Talk.prototype.getId = function() {
    return this._id;
};

Talk.prototype.addVoter = function(voter) {
    this._voters.push(voter);
};

Talk.prototype.getVoters = function() {
    return this._voters;
};

Talk.prototype.getOverlappingVoters = function(talk) {
    var otherVoters = talk.getVoters();

    return this._voters.filter(function(voter) {
        return otherVoters.indexOf(voter) >= 0;
    });
};

module.exports = Talk;