const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fry', 'Set'];

const getWeekDay = (date, days) => {

    const day = new Date(date).getDate();
    const dateInFuture = new Date(date).setDate(day + days);

    return weekDays[new Date(dateInFuture).getDay()];
}

// const result = getWeekDay(new Date(2019, 0, 1),20);

// console.log(result);
// console.log(weekDays);