/**
 * Created by Churro on 5/3/16.
 */
'use strict';

/**
 * Returns a Date object from given String
 * @param string A Date string of fromat "hh:mm xM, DAY n", where
 * hh between 01 and 12 inclusive,
 * mm between 00 and 59 inclusive, and
 * d between 1 and 99 inclusive
 * "12:00 AM, DAY d" refers to midnight between DAY d-1 and DAY d
 * "12:00 PM, DAY d" refers to noon on DAY d
 */
function parseDate(string) {
    var pieces = /(\d{2}):(\d{2}) ([AP]M), DAY (\d{1,2})/.exec(string);
    if (!pieces) {
        throw new Error("Invalid format of time " + string);
    }
    var hour = pieces[1] - 0,
        min = pieces[2] - 0,
        ap = pieces[3],
        day = pieces[4] - 1;

    if (ap == 'AM' && hour === 12) {
        hour = 0;
    }
    else if (ap == 'PM' && hour < 12) {
        hour = hour + 12;
    }
    return new Date(0, 0, day, hour, min, 0, 0);
}

/**
 * Returns the difference between two Date objects as minutes
 * @param start Start Date
 * @param end End Date
 * @returns {number} Date difference in minutes
 */
function dateDiffToMinutes(start, end) {
    return (end - start) / 60000;
}

/**
 * The race starts on day 1 at 8:00 AM.
 * @constructor
 */
function RaceAverage() {
    this.startTime = parseDate("08:00 AM, DAY 1");
};

/**
 * returns the average number of minutes taken by the competitors to complete the race.
 * Rounds the returned value to the nearest minute, with .5 rounding up.
 * @param times list of strings, each of which has the format hh:mm xM, DAY n, where:
 * hh is exactly 2 digits giving the hour,
 * mm is exactly 2 digits giving the minute,
 * x is either 'A' or 'P', and
 * n is a positive integer less than 100 with no leading zeros.
 * So each string has exactly 15 or 16 characters (depending on whether n is less than 10).
 */
RaceAverage.prototype.avgMinutes = function avgMinutes(times) {
    if (!times || !times.length) {
        return null;
    }
    var divisor = times.length, sum = 0;
    for (var i = 0; i < times.length; i++) {
        sum += dateDiffToMinutes(this.startTime, parseDate(times[i]));
    }
    return Math.round(sum / divisor);
};

module.exports = exports = RaceAverage;
