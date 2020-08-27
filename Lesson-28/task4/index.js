const addNum = value => value + 3;
const multNum = value => value * 2;
const divNum = value => value / 4;


const compose = (...funcs) => value => {
    return funcs.reduce((acc, func) => func(acc), value);
};

const doEverything = compose(
    addNum,
    multNum,
    divNum,
);

console.log(doEverything(9));

export { compose };