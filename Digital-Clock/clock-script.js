function displayTime(){
    var dateTime= new Date();
    var hrs= dateTime.getHours();
    var min= dateTime.getMinutes();
    var sec= dateTime.getSeconds();
    var session= document.getElementById('session');

    if(hrs<10){
        hrs="0"+hrs
    }
    if(min<10){
        min="0"+min
    }

    if(sec<10){
        sec="0"+sec
    }

    if (hrs>=12){
        Selection.InnerHTML = 'PM';
    }else{
        Selection.InnerHTML = 'AM'; 
    }
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
    setInterval(displayTime,10);


