function br()
{
    document.write('<br>');
}
function write(string)
{
    document.write(string);
    br();
}

function task1()
{
    for(var i = 1; i <= 10; i++)
    {
        write(i);
    }
}
function task2()
{
    for(var i = 10; i >= 0; i--)
    {
        write(i);
    }
}
function task3()
{
    var amount = 0;
    for(var i = 1; i <= 10; i++)
    {
        amount += i;
    }
    write(amount);
}
function task4()
{
    for(var i = 2; i <= 10; i++)
    {
        if(i % 2 == 0)
            write(i);
    }
}
function task5()
{
    var months = parseFloat(prompt("Ile misiecy?"));
    var amount = parseFloat(prompt("Jaka kwota"));
    for(var i= 0; i < months; i++)
    {
        amount *= 1.8
    }
}


function task7()
{
    var amount = 0;
    var numberInArry =5;
    for(var i= 0; i < 100; i++)
    {
        amount += numberInArry;
        numberInArry += 10;
    }
    write(amount)
}
function task8()
{
    var brickAmount = 0;
    for(var i = 10; i > 1; i--)
    {
        brickAmount += i*i;
    }
    write(brickAmount)
}

function task9()
{
    var bricksInRow = parseFloat(prompt("ile ma miec podstawa cegiel"));
    var brickHeight = parseFloat(prompt("Wyokosc"));
    var brickSpace = parseFloat(prompt("odtep (ilosc cegiel)"));
    var brickAmount = 0;
    for(var row = 0; bricksInRow > 0 && brickHeight > row ; bricksInRow -= brickSpace)
    {
        brickAmount += bricksInRow;
        row++;
    }
    write(brickAmount)
}

function task10()
{
    var brickWeight = parseFloat(prompt("Podaj wage cegly"));
    var bricksInRow = parseFloat(prompt("ile ma miec podstawa cegiel"));
    var brickHeight = parseFloat(prompt("Wyokosc"));
    var brickSpace = parseFloat(prompt("odtep (ilosc cegiel)"));
    var brickAmount = 0;
    for(var row = 0; bricksInRow > 0 && brickHeight > row ; bricksInRow -= brickSpace)
    {
        brickAmount += bricksInRow;
        row++;
    }
    write(brickAmount*brickWeight)
}

function task11()
{
    var amount = parseFloat(prompt("Podaj 1 wartosc zedu"));; 
    var arryIncrise = parseFloat(prompt("Podaj o ile ma sie zwiekrzac ten zad"));
    var arrySize = parseFloat(prompt("Podaj wielkosc zedu"));
    for(var i= 0; i < arrySize; i++)
    {
        amount += numberInArry;
        write(amount)
    }
}
function task12()
{

    var numb1, numb2;
    do
    {
        numb1 = parseFloat(prompt("Podaj 1 liczbe"));
        numb2 = parseFloat(prompt("Podaj 2 liczbe"));
        write(numb1+numb2)
    }while(numb1+numb2 != 0)
}
function task13()
{
    var numb = parseFloat(prompt("Podaj liczbe"));
    var amount = 1;
    for(var i = 1; numb >= i; i++)
    {
        amount *= i
    }
    write(amount) 
}

function task14()
{
    var numb = parseFloat(prompt("Podaj liczbe"));
    for(var i =0 ; i < 100 ; i++)
    {
        write(Math.pow(numb + i, 2))
    }
    
}
function task15()
{
    var amount = 0
    for(var i = 0; i < 10; i++)
    {
        amount += Math.floor(Math.random() * (100 - 50 + 1) + 50);
    }
    write(amount)
    write(amount/10)
}