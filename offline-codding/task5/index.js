const formatMiliSeconds = mSeconds => {
    if (mSeconds < 10) {
        return `0${mSeconds}`;
    }
    return mSeconds;
};

const formatSeconds = seconds => {
    if (seconds < 10) {
        return `0${seconds}`;
    }
    return seconds;
};

const formatMinutes = minutes => {
    if (minutes < 10) {
        return `0${minutes}`;
    }
    return minutes;
};

const formatHours = hours => {
    if (hours < 10) {
        return `0${hours}`;
    }
    return hours;
};

const timer = {

    miliSecondsPassed: 0,
    secondsPassed: 0,
    minsPassed: 0,
    hoursPassed: 0,
    intervalId: null,
    date: new Date(),

    startTimer() {
        this.intervalId = setInterval(() => {

            // console.log(this.getTime());
            this.miliSecondsPassed += 1;
            // console.log('Sec: ' +   this.miliSecondsPassed);

            if( this.miliSecondsPassed === 60 ) {
                this.miliSecondsPassed = 0;
                this.secondsPassed += 1;
                // console.log(this.getTime());
            }

            if( this.secondsPassed === 60 ) {
                this.secondsPassed = 0;
                this.minsPassed += 1;
                // console.log('Mins: ' + this.minsPassed);
                // console.log(this.getTime());
            }

            if( this.minsPassed === 60 ) {
                this.minsPassed = 0;
                this.hoursPassed += 1;
                // console.log('Hours: ' + this.hoursPassed);
                // console.log(this.getTime())
            }

            if( this.hoursPassed === 24 ) {
                this.hoursPassed = 0;
            }

        }, 10);
    },

    stopTimer() {
        console.log('This interval is STOPED');
        clearInterval(intervalId);
    },

    getTime() {
        const formattedMiliSeconds = formatMiliSeconds(this.miliSecondsPassed);
        const formattedSeconds = formatSeconds(this.secondsPassed);
        const formattedMinutes = formatMinutes(this.minsPassed);
        const formattedHours = formatHours(this.hoursPassed);
        const result = `${formattedHours}:${formattedMinutes}:${formattedSeconds}:${formattedMiliSeconds}`;
        return result;
    },

    resetTimer() {
        this.stopTimer();
        this.minsPassed = 0;
        this.secondsPassed = 0;
    },
}

timer.startTimer();
timer.getTime();
console.log(timer.getTime(timer));