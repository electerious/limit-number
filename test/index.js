'use strict'

const assert = require('chai').assert
const index  = require('./../src/index')

describe('index()', function() {

	it('should return the initial number when number is between min and max', function() {

		const min = 0
		const max = 10
		const num = 5

		assert.strictEqual(index(min, max, num), num)

	})

	it('should return the max number when number is above max', function() {

		const min = 0
		const max = 10
		const num = 15

		assert.strictEqual(index(min, max, num), max)

	})

	it('should return the min number when number is below min', function() {

		const min = 0
		const max = 10
		const num = -5

		assert.strictEqual(index(min, max, num), min)

	})

	it('should return the initial number when number is between negative min and max', function() {

		const min = -15
		const max = -5
		const num = -10

		assert.strictEqual(index(min, max, num), num)

	})

	it('should return the max number when number is between a float min and max', function() {

		const min = 0.5
		const max = 10.5
		const num = 15

		assert.strictEqual(index(min, max, num), max)

	})

	it('should return the min number when number is below a float min and max', function() {

		const min = 0.5
		const max = 10.5
		const num = -5

		assert.strictEqual(index(min, max, num), min)

	})

})