function br() { 
    document.write('<br>');
 }
 function write(string) { 
    document.write(string); br();
 }

     var info =  "Informatyk to osoba, która " + prompt("Informatyk to osoba, która...(dodaj do wyrażenia coś od siebie)") // zad 1 

     function task2(){ 
        write(info.length)
     }
     function task3(){ 
        write(info + "Nieprawdaz?") 
     } 
     function task4(){
        write("3 wprowadzony znak to: " + info.charAt(2)) 
     } 
     function task5(){ 
       write("6 wprowadzony znak OD KONCA to: " + info.charAt(info.length-6)) 
     }
     function task6(){
        write("KOD 3 wprowadzonego znaku to: " + info.charCodeAt(2)) 
     } 
     function task7(){
        write("7. Wypisz tekst wielkimi literami " + info.toUpperCase()) 
     } 
     function task8(){
        write("8. Podaj indeks położenia ciągu znaków \"Nieprawdaż?\" w zawartości" + info.indexOf("Nieprawdaż?")) 
     } 
     function task9(){
        write("9. Wypisz za pomocą metody substr słowo Informatyk " + info.substr(0, 10)) ;
     } 
     function task10(){
        write("Wypisz tekst położony pomiędzy znakiem o indeksie 7, a 30 znakiem od końca " + info.substring(7, info.length-30)) 
     } 
     function task11(){
        write("Wypisz za pomocą metody slice 10 ostatnich znaków z tekstu. " + info.slice(info.length-10)) 
     } 
     function task12(){
        info = info.replace("Informatyk", "Webmaste?")
        write(info)
     }
     function task13(){
        write(encodeURI(info.toLowerCase()))
     }