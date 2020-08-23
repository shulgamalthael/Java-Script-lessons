const startNewDate = new Date();
const endNewDate = new Date(2021, 1, 10, 10, 10, 10);

const getDiff = (startDate, endDate) => {

    console.log(startDate)
    let getNewDate = new Date(startDate - endDate);

    if (startDate < endDate)
    getNewDate = new Date(endDate) - new Date(startDate);

    const newDay = parseInt(getNewDate / (1000 * 60 * 60 * 24));
    const newHour = parseInt((getNewDate / (1000 * 60 * 60)) % 24);
    const newMin = parseInt((getNewDate / (1000 * 60)) % 60);
    const newSec = parseInt((getNewDate / 1000) % 60);

    // let newDay = getNewDate.getDate();
    // let newHour = getNewDate.getHours();
    // let newMin = getNewDate.getMinutes();
    // let newSec = getNewDate.getSeconds();

    // console.log(`${newDay}d ${newHour}h ${newMin}m ${newSec}s`);
    return `${newDay}d ${newHour}h ${newMin}m ${newSec}s`;
};

const myDate = getDiff(startNewDate, endNewDate);

console.log(myDate);

export { getDiff };