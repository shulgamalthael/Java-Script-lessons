  
const mult = a => b => a * b;

const multiplyTheNum = mult(5);

const result = multiplyTheNum(10);

console.log(result);

// -------------------------------------------------------------------

const twice = a => a + a;

const addNumTwo = twice(5);

console.log(addNumTwo);

// -------------------------------------------------------------------

const triple = a => a + a + a;

const addNumThree = triple(5);

console.log(addNumThree);

export { mult, twice, triple };