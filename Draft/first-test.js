// button hide and show js
function clock() {
    var x = document.getElementById("div1");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}
function alarmclock() {
    var x = document.getElementById("div2");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}
function stopwatch() {
    var x = document.getElementById("div3");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}
function worldclock() {
    var x = document.getElementById("div4");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}

//clock js
function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');

    if (hrs < 10) {
        hrs = "0" + hrs
    }
    if (min < 10) {
        min = "0" + min
    }

    if (sec < 10) {
        sec = "0" + sec
    }

    if (hrs >= 12) {
        hrs = hrs - 12;
        Selection.InnerHTML = 'PM';
    } else {
        Selection.InnerHTML = 'AM';
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 10);

// alarm clock js

const currentTime = document.querySelector("h1"),
    content = document.querySelector(".content"),
    selectMenu = document.querySelectorAll("select"),
    setAlarmBtn = document.querySelector("button");

let alarmTime, isAlarmSet = false;
alarm = new Audio("./files/alarm.mp3");

for (let i = 12; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`
    selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option)
}
for (let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`
    selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option)
}
for (let i = 59; i >= 0; i--) {
    i = i < 10 ? "0" + i : i;
    let option = `<option value="${i}">${i}</option>`
    selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option)
}
for (let i = 2; i > 0; i--) {
    let ampm = i == 1 ? "AM" : "PM";
    let option = `<option value="${ampm}">${ampm}</option>`
    selectMenu[3].firstElementChild.insertAdjacentHTML("afterend", option)
}

setInterval(() => {
    let date = new Date(),
        h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds(),
        ampm = "AM";

    if (h >= 12) {
        h = h - 12;
        ampm = "PM";
    }

    h = h == 0 ? h = 12 : h;
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

    if (alarmTime == `${h}:${m}:${s} ${ampm}`) {
        alarm.play();
        alarm.loop = true;
        // console.log("Alarm ringing...");
    }
}, 1000);

function setAlarm() {

    if (isAlarmSet) {
        alarmTime = "";
        alarm.pause();
        content.classList.add("disable");
        setAlarmBtn.innerText = "Set Alarm";
        return isAlarmSet = false;

    }


    let time = `${selectMenu[0].value}:${selectMenu[1].value}:${selectMenu[2].value} ${selectMenu[3].value}`;
    if (time.includes("Hour") || time.includes("Minute") || time.includes("Second") || time.includes("AM/PM")) {
        return alert("Invalid time set!");
    }
    isAlarmSet = true;
    alarmTime = time;
    content.classList.add("disable");
    setAlarmBtn.innerText = "Clear Alarm";
    //console.log(time)

}
setAlarmBtn.addEventListener("click", setAlarm);

// stopwatch js

let [seconds, minutes, hours] = [0, 0, 0];
let timerRef = document.querySelector('.timerDisplay');
let bit = null;

// Define the timerResults array
const timerResults = [];

document.getElementById('Start').addEventListener('click', () => {
    if (bit !== null) {
        clearInterval(bit);
    }
    bit = setInterval(displayTimer, 1000);
});

document.getElementById('Pause').addEventListener('click', () => {
    clearInterval(bit);
});

document.getElementById('Reset').addEventListener('click', () => {
    clearInterval(bit);
    [seconds, minutes, hours] = [0, 0, 0];
    timerRef.innerHTML = `00 : 00 : 00`;
});

document.getElementById('Done').addEventListener('click', () => {
    let result = document.querySelector('.result');

    [seconds, minutes, hours] = [0, 0, 0];
    Done = result;

    // Save the  result in the array
    timerResults.push(timerRef.innerHTML);

    // Display the results in "displayTimer" element
    const displayTimer = document.querySelector('.displayTimer');
    let html = '';

    timerResults.forEach((result) => {
        html += `<div>${result}</div>`;
    });

    displayTimer.innerHTML = html;
});

function displayTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;

    timerRef.innerHTML = `${h} : ${m} : ${s}`
};

// World Clock js

function getTime() {
    // Get the value of the input field
    var location = document.getElementById("location").value;

    // Make requests to the World Time API using the fetch function
    const fetchEuropeTimezone = () =>
        fetch(`http://worldtimeapi.org/api/timezone/Europe/${location}`).catch(error => {
            console.log("Error fetching Europe timezone:", error);
        });

    const fetchAmericaTimezone = () =>
        fetch(`http://worldtimeapi.org/api/timezone/America/${location}`).catch(error => {
            console.log("Error fetching America timezone:", error);
        });

    const fetchAfricaTimezone = () =>
        fetch(`http://worldtimeapi.org/api/timezone/Africa/${location}`).catch(error => {
            console.log("Error fetching Africa timezone:", error);
        });

    const fetchAsiaTimezone = () =>
        fetch(`http://worldtimeapi.org/api/timezone/Asia/${location}`).catch(error => {
            console.log("Error fetching Asia timezone:", error);
        });

    const fetchAustraliaTimezone = () =>
        fetch(`http://worldtimeapi.org/api/timezone/Australia/${location}`).catch(error => {
            console.log("Error fetching Australia timezone:", error);
        });



    Promise.all([
        fetchEuropeTimezone(),
        fetchAfricaTimezone(),
        fetchAsiaTimezone(),
        fetchAustraliaTimezone(),
        fetchAmericaTimezone()

    ])
        .then(responses => Promise.all(responses.map(response => response.json())))
        .then(data => {
            // Extract the current time from the API responses
            let time = data.map(response => response.datetime);

            // Create a new Date object from the unix timestamp
            let date = new Date(time);

            // Use the .toLocaleString() method to format the date and time in a human-readable format

           
            console.log(time)

            // Update the time div with the formatted time
            document.getElementById("time").innerHTML = time;
        })

        .catch(_error => {
            // handle error
        });
}
