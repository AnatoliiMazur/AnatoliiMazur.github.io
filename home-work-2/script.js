var
		names = ['Дима', 'Петя', 'Вася', 'Толик', 'Дима', 'Петя', 'Вася', 'Толик', 'Дима', 'Петя', 'Дима', 'Петя', 'Вася', 'Толик', 'Дима', 'Дима', 'Вася', 'Толик', 'Дима', 'Петя', 'Вася', 'Толик', 'Толик', 'Толик'],
		newObj1 = {},
		newObj2 = {};

names.forEach(function(el) {
	newObj1[el] = (newObj1[el] || 0) + 1;
});

names.reduce(function(acc, el) {
	newObj2[el] = (newObj2[el] || 0) + 1;
}, newObj2);

console.log(
		newObj1,
		newObj2
);
