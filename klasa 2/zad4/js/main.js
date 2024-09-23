function updateClock(){
    var today = new Date();
 var day = String(today.getDate());
 var month = String(today.getMonth()+1);
 var year = String(today.getFullYear());

 var hour = String(today.getHours());
 var minute = String(today.getMinutes());
 var second = String(today.getSeconds());

 var godzinaDiv = 
 document.getElementById("date").textContent = day + " : " + month + " : " + year;
 document.getElementById("hour").textContent = hour + " : "+ minute + " : "+ second
}
setInterval(updateClock, 1000);