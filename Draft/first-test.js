// button hide and show js
        function toggle() {
            var x = document.getElementById("div1");
            if (x.style.display === "none") {
                x.style.display = "block";
            }
            else {
                x.style.display = "none";
            }
        }
        function roggle() {
            var x = document.getElementById("div2");
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

    if(h>=12){
        h= h - 12;
        ampm= "PM";
    }

 h= h == 0 ? h=12 : h;
 h = h<10 ? "0" + h : h;
 m = m<10 ? "0" + m : m;
 s = s<10 ? "0" + s : s;

 currentTime.innerText=`${h}:${m}:${s} ${ampm}`;
 
 if (alarmTime == `${h}:${m}:${s} ${ampm}`){
    alarm.play();
    alarm.loop  = true ;
    // console.log("Alarm ringing...");
}
},1000);

function setAlarm(){

    if(isAlarmSet){
        alarmTime="";
        alarm.pause();
        content.classList.add("disable");
        setAlarmBtn.innerText = "Set Alarm";
        return isAlarmSet = false;

    }


    let time= `${selectMenu[0].value}:${selectMenu[1].value}:${selectMenu[2].value} ${selectMenu[3].value}`;
    if(time.includes("Hour") || time.includes("Minute") || time.includes("Second") || time.includes("AM/PM")){
        return alert("Invalid time set!");
    }
    isAlarmSet = true;
    alarmTime = time;
    content.classList.add("disable");
    setAlarmBtn.innerText = "Clear Alarm";
    //console.log(time)

}
setAlarmBtn.addEventListener("click",setAlarm);


