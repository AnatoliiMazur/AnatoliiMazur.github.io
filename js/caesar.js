
function shift(char, distance) {
	const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'.split('');
	if (distance >= alphabet.length) {
		throw new Error('distance is too big, max is ' + (alphabet.length - 1));
	}
	
	let encrypted = '';
	let ai = alphabet.indexOf(char);
	let al = alphabet.length;
	let id = ai+distance;
	
	(ai!==-1) ? ((id>=al) ? encrypted = alphabet[id-al] : encrypted = alphabet[id]) : encrypted=char;
	
	return encrypted;
	
}

export function caesar(text, key) {
	const allChars = text.split("");
	let result = "";
	for (let i = 0; i < allChars.length; i++) {
		result = result + shift(allChars[i], key);
	}
	return result;
}

