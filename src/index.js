'use strict'

/*
 * Limits a number between a min and max value.
 * @public
 * @param {Number} min - Min number.
 * @param {Number} max - Max number.
 * @param {Number} num - Number.
 * @returns {Number} Limited number.
 */
module.exports = function(min, max, num) {

	return Math.min(Math.max(num, min), max)

}