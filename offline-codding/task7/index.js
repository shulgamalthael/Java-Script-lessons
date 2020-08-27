const array = arr => {

const newArr = arr
    .map((value) => value)
    // .reduce((acc, value) => acc + value)
    .filter(value => value < 3)

console.log(newArr);

}