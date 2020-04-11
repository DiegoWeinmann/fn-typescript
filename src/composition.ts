const trim = (s: string) => s.trim();
const capitalize = (s: string) => s.toUpperCase();

const testString = 'Diego    ';

const compose = <T>(f: (x: T) => T, g: (x: T) => T) => (x: T) => f(g(x));
const composeMany = <T>(...functions: Array<(arg: T) => T>) => (arg: any) =>
<<<<<<< HEAD
	functions.reduce(
		(prev, currentFunction) => currentFunction(prev),
		arg
	);
=======
	functions.reduce((prev, current) => current(prev), arg);
>>>>>>> 74a7c69e96f244aeee7902f140bc49806895b45d

const trimAndCapitalize = compose(trim, capitalize);

console.log(trimAndCapitalize(testString));

<<<<<<< HEAD
console.log(composeMany(trim, capitalize)(testString));
=======
console.log(composeMany(trim, capitalize)(testString))
>>>>>>> 74a7c69e96f244aeee7902f140bc49806895b45d
