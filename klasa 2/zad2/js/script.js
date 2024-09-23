
const addNewLine = (text) => {
   
    let paragraph = document.createElement("li");

    paragraph.innerText = text;
    numbersList.appendChild(paragraph);
}

const numberText = prompt("podaj liczbe: ");
const number = parseFloat(numberText);

const numbersList = document.getElementById("output");

addNewLine(number);
addNewLine(-number);
addNewLine(number+15);
addNewLine(number+0.5);
addNewLine(number * number);
addNewLine(number/2);
addNewLine(number%2);
addNewLine(number+1);
addNewLine(number-1);
addNewLine(Math.floor(number/3));
addNewLine(Math.ceil(number/3));
addNewLine(Math.round(number));
addNewLine(Math.sqrt(number));
addNewLine(number * Math.random()*50);
addNewLine(Math.abs(number));
