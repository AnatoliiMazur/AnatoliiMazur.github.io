var
		a = 2,
		b = -11,
		c = -21;

function quadraticEquation(a, b, c) {
	if(b === 0) return 0;
	if(c === 0) return 0;

	var D, x1, x2;

	D = Math.pow(b, 2) - 4 * a * c;
	x1 = (-b + Math.sqrt(D)) / (2 * a);
	x2 = (-b - Math.sqrt(D)) / (2 * a);

	return { x1, x2 };
}

console.log( quadraticEquation(a, b, c) );
