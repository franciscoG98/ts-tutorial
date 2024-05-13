type Operations = 'multiply' | 'add' | 'divide';
type Result = number;

// devuelve un tipo numero
const calculator = (a: number, b: number, op: Operations): Result => {

    if (op === 'multiply') return a * b;
    if (op === 'add') return a + b;
    if (op === 'divide') {
        if (b === 0)  throw new Error('Cannot divide by 0!');
        return a / b;
    }

    throw new Error('Operation is not valid');
}

try {
    console.log(calculator(4, 20, 'divide'));
    console.log(calculator(20, 0, 'divide'));
} catch (e) {
    console.log('Something went wrong', e);
}

console.log(process.argv);

