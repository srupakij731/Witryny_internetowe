function br() { 
    document.write('<br>');
 }
 function write(string) { 
    document.write(string); br();
 }


function task1(){
    var text = prompt("Podaj tekst: ")
    write(text.length)
}

function task2(){
    var text = prompt("Podaj tekst: ")
    document.write(text.toUpperCase())
}

function task3(){
    var text = prompt("Podaj tekst: ")
    write(text.toLowerCase())
}

function task4(){
    var nameAndSurename = prompt("Podaj imie i nazwisko: ")
    var splitted = nameAndSurename.split(' ')
    write("twoje imie to :" + splitted[0])
}

function task5(){
    var date = new Date;
    write(date.getDate() + " : " + date.getMonth() + 1 + " : " + date.getFullYear() + "        " + date.getHours()+"h")
}

function task6(){
    var date = new Date;
    write(date.getDate() + " : " + date.getMonth() + 1 + " : " + date.getFullYear())
}

function task7(){
    var date = new Date;
    write(date.getHours()+"h")
}

function task8(){
    var peopleFromGroup =[];
    for(var i = 0; true ; i++ )
    {
        var a = prompt("Podaj imiona osób z grupy wpisz '/' by zakończyć ")
        if(a !="/")
            peopleFromGroup[i] = a;
        else
            break;
    }
    return peopleFromGroup;
}

function task9(){
    var peopleFromGroup = task8();
    for(var i = 0; i < peopleFromGroup.length; i++)
    {
        write(peopleFromGroup[i])
    }
}

function task10(){
    var peopleFromGroup = task8();
    write(peopleFromGroup.join())
    
}

function task11(){
    var peopleFromGroup = task8();
    peopleFromGroup.sort();
    write(peopleFromGroup.join())
}