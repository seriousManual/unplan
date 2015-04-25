var expect = require('chai').expect;

var Talk = require('../lib/Talk');
var Attendee = require('../lib/Attendee');

describe('Talk', function() {
    var talk0, talk1, attendee0, attendee1, attendee2;

    before(function() {
        talk0 = new Talk();
        talk1 = new Talk();

        attendee0 = new Attendee();
        attendee1 = new Attendee();
        attendee2 = new Attendee();

        talk0.addVoter(attendee0);
        talk0.addVoter(attendee1);

        talk1.addVoter(attendee1);
        talk1.addVoter(attendee2);
    });

    it('should work', function() {
        expect(talk0.getVoters()).to.deep.equal([attendee0, attendee1]);
        expect(talk1.getVoters()).to.deep.equal([attendee1, attendee2]);
    });

    it('should return the overlappings', function() {
        expect(talk0.getOverlappingVoters(talk1)).to.deep.equal([attendee1]);
        expect(talk1.getOverlappingVoters(talk0)).to.deep.equal([attendee1]);
    });
})