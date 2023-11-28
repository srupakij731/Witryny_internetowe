function br(){
    document.write('<br>');
}
function writeString(string)
{

    document.write(string)
    br()
}
function writeResult(result)
{

    document.write(result)
    br()
}

function task1()
{
    var firstNumber = parseFloat(prompt("podaj 1 liczbe"));
    var divisor = parseFloat(prompt("podaj dzielnik (b)"));
    if(divisor === 0)
        writeString("dzielenie przez 0")
    else
      writeResult(firstNumber/divisor)
}


function task2()
{
    var firstNumber = parseFloat(prompt("podaj 1 liczbe"));
    var secondNumber = parseFloat(prompt("podaj 2 liczbe"));
    var firstDivisor = parseFloat(prompt("podaj dzielnik (b)"));
    var secondDivisor = parseFloat(prompt("podaj dzielnik (d)"));

    if(firstDivisor === 0 || secondDivisor === 0)
        writeString("dzielenie przez 0")
    else
      writeResult((firstNumber/firstdivisor)+(secondNumber/secondDivisor))
}

function task3()
{
    var firstNumber = parseFloat(prompt("podaj 1 liczbe"));
    var secondNumber = parseFloat(prompt("podaj 2 liczbe"));


    if((secondNumber - 4) === 0)
        writeString("dzielenie przez 0")
    else
      writeResult((firstNumber + 6)+(secondNumber - 4))
}

function task4()
{
    var number = parseFloat(prompt("podaj liczbe"));
    if(number % 2 === 0)
        writeString("parzysta")
    else
    writeString("NIE parzysta")
      
}

function task5()
{
    var firstNumber = parseFloat(prompt("podaj 1 liczbe"));
    var secondNumber = parseFloat(prompt("podaj 2 liczbe"));

    if(secondNumber === 0)
        writeString("nie da się podzielić przez 0")
    else if (firstNumber % secondNumber === 0)
        writeString("jest podzielna")
    else
        writeString("NIE podzielna")
      
}

function task6()
{
    var number = parseFloat(prompt("podaj liczbe"));

    if (number > 0)
        writeString("dodatnia")
    else if (number <0)
        writeString("ujemna")
      else
      writeString("zero")

}

function task7()
{
    var firstNumber = parseFloat(prompt("podaj 1 liczbe"));
    var secondNumber = parseFloat(prompt("podaj 2 liczbe"));
    var thirdNumber = parseFloat(prompt("podaj 3 liczbe"));

    const arr = [firstNumber, secondNumber, thirdNumber];
    arr.sort(function(a, b){return a - b});
    writeResult(arr[2]);

}

function task8()
{
    var firstNumber = parseFloat(prompt("podaj 1 liczbe"));
    var secondNumber = parseFloat(prompt("podaj 2 liczbe"));
    var thirdNumber = parseFloat(prompt("podaj 3 liczbe"));

    const arr = [firstNumber, secondNumber, thirdNumber];
    arr.sort(function(a, b){return a - b});
    writeResult(arr[0]);
    writeResult(arr[1]);
    writeResult(arr[2]);

}

function task9()
{
    var userAge = parseFloat(prompt("podaj wiek"));
    if(userAge >= 18)
        writeString("pełnoletni")
    else
        writeString("niepełnoletni")

}

function task10()
{
    var year = parseFloat(prompt("podaj rok"));
    if((year%4==0 && year%100!=0) || year%400==0) 
     writeString("przestępny")
    else
     writeString("NIE przestępny")

}

function task11()
{
    const moth = ["styczeń","luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień" ]
    var monthFromUser = parseFloat(prompt("podaj miesiąc"));
    document.write(moth[monthFromUser-1])
}

function task12()
{
    var userHeight = parseFloat(prompt("podaj wysokość"));
    var userMass = parseFloat(prompt("podaj mase"));
    var userBMI = (userMass/ (userHeight*userHeight))*10000;
    if(userBMI < 16)
     writeString("wygłodzenie")
    else if(userBMI >= 16 && userBMI < 17)
     writeString("wychudzeie")
     else if(userBMI >= 17 && userBMI < 18.5)
     writeString("niedowaga")
     else if(userBMI >= 18.5 && userBMI < 25)
     writeString("waga prawidłowa")
     else if(userBMI >= 25 && userBMI < 30)
     writeString("nadwaga")
     else if(userBMI >= 30 && userBMI < 35)
     writeString("otyłość 1")
     else if(userBMI >= 35 && userBMI < 40)
     writeString("otyłość 2")
     else if(userBMI >= 40)
     writeString("otyłość 3")
}

function task13()
{
    const day = ["poniedizałek", "wtorek","środa", "czwartek", "piątek", "sobota", "niedziela"]
    var dayFromUser = parseFloat(prompt("podaj dzień"));
    document.write(day[dayFromUser-1])
}