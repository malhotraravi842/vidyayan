// Get the new year 
const getLaunchDate = () => {
    return new Date('July 26 2021 13:30:00');
}


// select elements
const app = document.querySelector('.countdown-timer');
const message = document.querySelector('.message');
const heading = document.querySelector('.title');
const confetti = document.querySelector('#confetti');
const fireworkAudio = document.querySelector('.firework-audio');


function play_audio() {
    fireworkAudio.play();
}

const format = (t) => {
    return t < 10 ? '0' + t : t;
};

const render = (time) => {
    app.innerHTML = `
        <div class="count-down">
            <div class="timer">
                <h2 class="days">${format(time.days)}</h2>
                <small>Days</small>
            </div>
            <div class="timer">
                <h2>:</h2>
            </div>
            <div class="timer">
                <h2 class="hours">${format(time.hours)}</h2>
                <small>Hours</small>
            </div>
            <div class="timer">
                <h2>:</h2>
            </div>
            <div class="timer">
                <h2 class="minutes">${format(time.minutes)}</h2>
                <small>Minutes</small>
            </div>
            <div class="timer">
                <h2>:</h2>
            </div>
            <div class="timer">
                <h2 class="seconds">${format(time.seconds)}</h2>
                <small>Seconds</small>
            </div>
        </div>
        `;
};


const countdownTimer = new CountDown(
    getLaunchDate(),
    render,
);