const trim = (s: string) => s.trim();
const capitalize = (s: string) => s.toUpperCase();
const replace = (f: string, r: string) => (s: string) => s.split(f).join(r);

const testString = 'Diego    ';

const compose = <T>(f: (x: T) => T, g: (x: T) => T) => (x: T) => f(g(x));
const composeMany = <T>(...functions: Array<(arg: T) => T>) => (arg: any) =>
	functions.reduce((prev, currentFunction) => currentFunction(prev), arg);

const trimAndCapitalize = compose(trim, capitalize);

console.log(trimAndCapitalize(testString));

console.log(composeMany(trim, capitalize, replace('D', 'd'))(testString));

