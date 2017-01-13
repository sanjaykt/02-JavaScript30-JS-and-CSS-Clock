/**
 * Created by sanjay on 2017-01-13.
 */
const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function mySetDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const min = now.getMinutes();
    const hour = now.getHours();
    // console.log(hour);

    // +90 to offset the [transform: rotate(90deg)] in .hand
    const secondsInDegree = ((seconds / 60) * 360) + 90;
    const minsInDegree = ((min / 60) * 360) + 90;
    const hoursInDegree = ((hour / 24 / 2) * 360) + 90;
    // console.log((seconds / 60) * 360);

    secondHand.style.transform = "rotate(" + secondsInDegree + "deg)";
    // console.log(secondsInDegree);

    minHand.style.transform = "rotate(" + minsInDegree + "deg)";
    hourHand.style.transform = "rotate(" + hoursInDegree + "deg)";
}

setInterval(mySetDate, 1000);