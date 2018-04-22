// todo: imort encoding function from the separate JS module

import {caesar} from './caesar'

let input  = document.querySelector('.clear-input');
let output = document.querySelector('.encoded-output');
let select = document.getElementById('shift');

input.addEventListener('input', onInput);
select.addEventListener('input', onSelect);

function onInput(event) {
	output.value = caesar(event.target.value, 2);
}

function onSelect(event) {
	console.log(event.target.value);
}