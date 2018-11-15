'use strict';

exports.getFoobar = getFoobar;
function getFoobar() {
	return 'foobar';
}

exports.getBar = getBar;
function getBar() {
	return 'bar';
}

// eslint-disable-next-line no-console
console.log(getFoobar());
