const hourHand = document.querySelector('.hour-hand');
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const day = document.querySelector('.day');
const month = document.querySelector('.month');
const year = document.querySelector('.year');

function setDate() {
    //----------------------------Clock
    //get current date
    const now = new Date();
    //get hours from the date
    const hours = now.getHours();
    //number of hours / 12 * 360 degrees + 90 degrees due to the fact that the hand is horizontal by default
    const hoursDegrees = ((hours / 12) * 360) + 90;
    //add secondDegrees properties to the hand
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;


    const minutes = now.getMinutes();
    const minuteDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;


    // -------------------------Calendar
    //day
    const dateToday = now.getDate();
    day.innerHTML = dateToday;
    //month
    const monthToday = now.getMonth();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //select a month from the array based on number (0 stands for January etc)
    month.innerHTML = months[monthToday];
    
    //year
    const yearToday = now.getFullYear();
    year.innerHTML = yearToday;
}

setInterval(setDate, 1000);