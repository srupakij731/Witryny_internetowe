function br() { 
    document.write('<br>');
 }
 function write(string) { 
    document.write(string); br();
 }

 function task1(){
    window.open("https://www.onet.pl")
    window.open("https://zse-kielce.edu.pl/")
 }

 function task2(){
    write("height " + window.innerHeight)
    write("width " + window.innerWidth)
    
 }

 function task3(){
    write(document.URL);
 }

 function task4(){
    write(document.title);
 }

 function task5(){
    write(document.lastModified);
 }
 
 function task6(){
    /////////////////////////////////////////////////////////////////////////
 }

 function task7(){
    var today = new Date();
 var day = String(today.getDate());
 var month = String(today.getMonth()+1);
 var year = String(today.getFullYear());

 var hour = String(today.getHours());
 var minute = String(today.getMinutes());
 var second = String(today.getSeconds());

 document.getElementById("date").textContent = day + " : " + month + " : " + year + " / " + hour + " : "+ minute + " : "+ second;

 }
setInterval(task7, 1000);

function task8Back(){
   history.back();
}

function task8Forward(){
   history.forward();
}

function task9(){
   write(location.hostname);
}

function task10(){
   write(location.protocol);
}

function task11(){
   write(location.port);
}
function task12Date(){
   var today = new Date();
var day = String(today.getDate());
var month = String(today.getMonth()+1);
var year = String(today.getFullYear());

var hour = String(today.getHours());
var minute = String(today.getMinutes());
var second = String(today.getSeconds());

document.getElementById("footerDate").textContent = day + " : " + month + " : " + year +
                                      " / " + hour + " : "+ minute + " : "+ second;
}
setInterval(task12Date, 1000);

function task12LastModified() {
   document.getElementById("footerLastModyfied").textContent = document.lastModified;
 }