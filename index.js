var Attendee = require('./lib/Attendee');
var Talk = require('./lib/Talk');
var Schedule = require('./lib/Schedule');

var s = new Schedule(4, 3);

var slotFoo = s.getSlot(0);
console.log(slotFoo.getTalks());

s.setTalk(0, 0, 1);
s.setTalk(0, 2, 123);
s.setTalk(3, 0, 'asdf');
s.setTalk(3, 2, 'foobar');

console.log(slotFoo.getTalks());