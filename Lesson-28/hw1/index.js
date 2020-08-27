const getMethodsNames = {
    years: 'getFullYear',
    months: 'getMonth',
    days: 'getDate',
    hours: 'getHours',
    minutes: 'getMinutes',
    seconds: 'getSeconds',
    milliseconds: 'getMilliseconds',
};

const setMethodsNames = {
    years: 'setFullYear',
    months: 'setMonth',
    days: 'setDate',
    hours: 'setHours',
    minutes: 'setMinutes',
    seconds: 'setSeconds',
    milliseconds: 'setMilliseconds',
};

const shmoment = date => {
    let result = new Date(date);

    const calculator = {
        add(units, value) {
            const currentUnitValue = result[getMethodsNames[units]]();
            result = new Date(
                result[setMethodsNames[units]](currentUnitValue + value),
            );
            return this;
        },
        subtract(units, value) {
            return this.add(units, -value);
        },
        result() {
            return result;
        },
    };

    return calculator;
};

const result = shmoment(new Date(2020, 1, 2, 17, 10)).add('minutes', 8).add('days', 3).subtract('years', 1).result();

console.log(result)

export { shmoment };