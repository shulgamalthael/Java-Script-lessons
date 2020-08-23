const formatSeconds = seconds => {
    if (seconds < 10) {
        return `0${seconds}`;
    }
    return seconds;
}

const formatMinutes = minutes => {
    if (minutes < 10) {
        return `0${minutes}`;
    }
    return minutes;
}

const formatHours = hours => {
    if (hours < 10) {
        return `0${hours}`;
    }
    return hours;
}

const timer = {

    secondsPassed: 0,
    minsPassed: 0,
    hoursPassed: 0,
    intervalId: null,
    date: new Date(),

    startTimer() {
        this.intervalId = setInterval(() => {

            this.secondsPassed += 1;
            //console.log(this.secondsPassed);

            if( this.secondsPassed === 60 ) {
                this.secondsPassed = 0;
                this.minsPassed += 1;
                //console.log(this.minsPassed);
            }

            if( this.minsPassed === 60 ) {
                this.minsPassed = 0;
                this.hoursPassed += 1;
                // console.log('Hours: ' + this.hoursPassed);
            }

            if( this.hoursPassed === 24 ) {
                this.hoursPassed = 0;
            }

        }, 1000);
    },

    stopTimer() {
        console.log('This interval is STOPED');
        clearInterval(intervalId);
    },

    getTime() {
        const formattedSeconds = formatSeconds(this.secondsPassed);
        const formattedMinutes = formatMinutes(this.minsPassed);
        const formattedHours = formatHours(this.hoursPassed);
        const result = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
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
console.log(timer.getTime());