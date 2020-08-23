export const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Set', 'Thu', 'Fri'];

const getdayOfWeek = (date, days) => {

    const day = new Date(date).getDate();
    const dateInFuture = new Date(date).setDate(day + days);

    return weekDays[new Date(dateInFuture).getDay()];
}

// const result = weekDays[getdayOfWeek(new Date(2019, 0, 3), 14)];

// console.log(result);