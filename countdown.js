const dayTextValue = document.querySelector('.days');
const hourTextValue = document.querySelector('.hours');
const minuteTextValue = document.querySelector('.minutes');
const secondTextValue = document.querySelector('.seconds');
// ending date time
let target_date = new Date('12/16/2020').getTime();
let days, hours, minutes, seconds;
let current_date = new Date().getTime();

/// target time is over
if (current_date >= target_date) {
    console.log('Time Up!!!');
}
else {
    setInterval(function () {
        let seconds_left = (target_date - current_date) / 1000;

        days = parseInt(seconds_left / 86400);  //per day seconds is 86400
        seconds_left = seconds_left % 86400;

        hours = parseInt(seconds_left / 3600);  //per hour seconds is 3600
        seconds_left = seconds_left % 3600;

        minutes = parseInt(seconds_left / 60);
        seconds = parseInt(seconds_left % 60);

        dayTextValue.textContent = days;
        hourTextValue.textContent = hours;
        minuteTextValue.textContent = minutes;
        secondTextValue.textContent = seconds;

    }, 1000);
}
