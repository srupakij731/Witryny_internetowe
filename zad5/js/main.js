function updateClock(){
    var today = new Date();
 var day = String(today.getDate());
 var month = String(today.getMonth()+1);
 var year = String(today.getFullYear());

 var hour = String(today.getHours());
 if(hour < 10)
    hour = "0"+hour;
 var minute = String(today.getMinutes());
 if(minute < 10)
    minute = "0"+ minute;
 var second = String(today.getSeconds());
if(second < 10)
    second = "0" + second;
 document.getElementById("date").textContent = day + " : " + month + " : " + year;
 document.getElementById("hour").textContent = hour + " : "+ minute + " : "+ second
}
setInterval(updateClock, 1000);