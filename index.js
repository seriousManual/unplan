var Attendee = require('./lib/Attendee');
var Talk = require('./lib/Talk');
var Schedule = require('./lib/Schedule');

var s = new Schedule(4, 3);
s.setTalk(0, 0, 123);
s.setTalk(3, 2, 'asdf');

console.log(s.getNumberLocations());
console.log(s.getNumberSlots());
console.log(s.getSlot(0));
console.log(s);