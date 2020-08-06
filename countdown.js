const dayTextValue = document.querySelector('.days');
const hourTextValue = document.querySelector('.hours');
const minuteTextValue = document.querySelector('.minutes');
const secondTextValue = document.querySelector('.seconds');

/// ending time
let target_date = new Date('10/16/2020').getTime();


setInterval(function () {
    let current_date = new Date().getTime();
    let seconds_left = (target_date - current_date) / 1000;

    const days = parseInt(seconds_left / 86400);  //per day seconds is 86400
    seconds_left = seconds_left % 86400;

    const hours = parseInt(seconds_left / 3600);  //per hour seconds is 3600
    seconds_left = seconds_left % 3600;

    const minutes = parseInt(seconds_left / 60);
    const seconds = parseInt(seconds_left % 60);

    dayTextValue.textContent = days;
    hourTextValue.textContent = hours;
    minuteTextValue.textContent = minutes;
    secondTextValue.textContent = seconds;

}, 1000);
