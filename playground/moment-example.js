var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('curr:' + now.unix());

var timestamp = 1554560362;
var currentMoment = moment.unix(timestamp);

console.log('saved moment: ' + currentMoment.format());
console.log('saved moment: ' + currentMoment.format('YYYY MMM DD'));
console.log('saved moment: ' + currentMoment.format('MMMM'));
console.log('saved moment: ' + currentMoment.format('MMM D, YY @ h:mm a'));
console.log('saved moment: ' + currentMoment.format('MMMM Do, YYYY @ H:mm'));