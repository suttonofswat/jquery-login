(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

	var unInput = $('#unInput');
	var userError = $('#userError');
	var pwInput = $('#pwInput');
	var passError = $('#passError');
	var combo = $('#combo');
	var button = $('button');

	button.on('click', function (e) {
		e.preventDefault();

		userError.text('');
		passError.text('');
		var hasError = false;

		if (unInput.val().indexOf('@') === -1) {
			hasError = true;
			userError.text('Email must contain "@" symbol');
		}
		if (unInput.val() === '') {
			hasError = true;
			userError.text('Please enter in a username.');
		}
		if (pwInput.val() === '') {
			hasError = true;
			passError.text('Please enter in a password.');
		}

		if (!hasError) {
			if (unInput.val() === 'aaron@theironyard.com' && pwInput.val() === 'password123' || unInput.val() === 'admin@google.com' && pwInput.val() === 'pandas' || unInput.val() === 'l4sutton@gmail.com' && pwInput.val() === 'honeycrisp') {
				window.location.replace('http://www.theironyard.com');
			} else {
				combo.text('Your username and password do not match.');
			}
		}
	});
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map