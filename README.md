# Typescript Tutorial

This repository was made following [midudev ts tutorial](https://youtu.be/xtp_DuPxo9Q). Big shout out to the great [@midudev](https://github.com/midudev).

```
npm install --save-dev ts-node typescript
```

define operation types in array and op type as string
```
const operations = ['multiply', 'divide', 'add']

const calculator = (a: number, b: number, op: string) => {

    if (!operations.includes(op)) {
        console.log('This operation is not defined');
    }

    if (op === 'multiply') return a * b;
    if (op === 'add') return a + b;
    if (op === 'divide') {
        if (b === 0) return 'Cannot divide by 0!'
        return a / b;
    }

}

console.log(calculator(1, 3, 'add'));
console.log(calculator(2, 3, 'multiply'));
console.log(calculator(20, 4, 'divide'));
// throws error because "string" it's not in operations array 
console.log(calculator(2, 4, 'string'));
```


define operation types not in array
```
const calculator = (a: number, b: number, op: 'multiply' | 'add' | 'divide') => {

    if (op === 'multiply') return a * b;
    if (op === 'add') return a + b;
    if (op === 'divide') {
        if (b === 0) return 'Cannot divide by 0!'
        return a / b;
    }
}

console.log(calculator(1, 3, 'add'));
console.log(calculator(2, 3, 'multiply'));
console.log(calculator(20, 4, 'divide'));
console.log(calculator(2, 4, 'coso'));
```

Best aproach
Type Operations
Type Result
```
type Operations = 'multiply' | 'add' | 'divide';
type Result = number;

// returns a Result type
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
```

Multiplier.ts

```
const multiplicator = (a: number, b: number, printText: string) => {
    console.log(printText, a * b);
}

// primera posicion de process.argv lo q se esta ejecutando
// sugunda posicion de process.argv archivo en especifico
// luego los argumentos
// console.log(process.argv);

const parseArguments = (args) => {
    if (args.length !== 4) throw new Error('Wrong number of arguments')

    const firstNumber = Number(args[2])
    const secondNumber = Number(args[3])

    if(!isNaN(firstNumber) && !isNaN(secondNumber)) {
        return [
            firstNumber,
            secondNumber
        ]
    }
    throw new Error('Provided values were not numbers!')
}

const cleanArguments = parseArguments(process.argv)

const a: number = Number(cleanArguments[0])
const b: number = Number(cleanArguments[1])

multiplicator(a, b, `Multiplied ${a} and ${b}, the result is: `)
```

parseArguments --> "limpia" los argumentos y se asegura que sean numeros (ni NaN ni otra cosa)