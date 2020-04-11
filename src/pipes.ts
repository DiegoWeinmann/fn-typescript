const pipe = <T>(...fns: Array<(arg: T) => T>) => (value: T) =>
	fns.reduce((acc, fn) => fn(acc), value);

const warn = (s: string) => {
	console.warn('Warn: ' + s);
	return s;
};

const log = (s: string) => {
	console.log('Log: ' + s);
	return s;
};

const error = (s: string) => {
	console.error('Error: ' + s);
	return s;
};

pipe(log, warn, error, (s: string) => {
	console.log('This is a string logged from an anonymous function: ' + s);
	return s;
})('test');

