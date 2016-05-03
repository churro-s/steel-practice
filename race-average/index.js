"use strict";

var RaceAverage = require("./RaceAverage");
var ra = new RaceAverage();

console.log(ra.avgMinutes(["12:00 PM, DAY 1", "12:01 PM, DAY 1"])); //-> 241
console.log(ra.avgMinutes(["12:00 AM, DAY 2"])); //-> 960
console.log(ra.avgMinutes(["02:00 PM, DAY 19", "02:00 PM, DAY 20", "01:58 PM, DAY 20"])); //-> 27239
