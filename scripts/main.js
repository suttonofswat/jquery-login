'use strict';

$(document).ready(function() {

var unInput = $('#unInput');
var userError = $('#userError');
var pwInput = $('#pwInput');
var passError = $('#passError');
var combo= $('#combo');
var button = $('button');
var hasError = false;

button.on('click', function(e) {
e.preventDefault();

if (unInput.val().indexOf('@') === -1) {
	hasError = true;
	userError.text('Email must contain "@" symbol')
}
if(unInput.val() === ''){
	hasError = true;
	userError.text('Please enter in a username.')
}
if(pwInput.val() === ''){
	hasError = true;
	passError.text('Please enter in a password.')
}

if (!hasError){
	if(unInput.val()==='aaron@theironyard.com' && pwInput.val()==='password123' || unInput.val()==='admin@google.com' && pwInput.val()==='pandas' || unInput.val()==='l4sutton@gmail.com' && pwInput.val()==='honeycrisp'){
		window.location.replace('http://www.theironyard.com');
	} else{
		combo.text('Your username and password do not match.')
	
	}


}


});

});

