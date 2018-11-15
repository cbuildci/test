'use strict';

const index = require('./index.js');

describe('index', () => {
	describe('getFoobar', () => {
		it('should return "foobar"', () => {
			expect(index.getFoobar())
				.toEqual('foobar');
		})
	});

	describe('getBar', () => {
		it('should return "bar"', () => {
			// expect(index.getBar())
			// 	.toEqual('bar');
		})
	});
});
