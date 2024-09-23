var password = "ab c d";
password = password.toUpperCase();
var hiddenPassword = "";
var numberOfWrongGuesses = 0;

String.prototype.setChar = function(index, character) {
    if (index > this.length - 1) return this.toString();
    else return this.substr(0, index) + character + this.substr(index + 1);
};

var letters = [
    "A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł",
    "M", "N", "Ń", "O", "Ó", "P", "Q", "R", "S", "Ś", "T", "U", "V", "W", "X", "Y",
    "Z", "Ź", "Ż"
];

function generateLetters() {
    var lettersInDiv = "";
    for (var i = 0; i < letters.length; i++) {
        lettersInDiv += '<div class="letter" id="l' + i + '" onclick="check('+i+')">' + letters[i] + '</div>';
        if((i+1)%7 ==0 )
        lettersInDiv +="<div style='clear:both'></div>"
    }
    document.getElementById("letters").innerHTML = lettersInDiv;
}

function generateHiddenPassword() {
    for (var i = 0; i < password.length; i++) {
        if (password.charAt(i) === " ")
            hiddenPassword += " ";
        else
            hiddenPassword += "-";
    }
    document.getElementById("password").innerHTML = hiddenPassword;
}

function check(letterNum) {
    rightLetter = false
    for (var i = 0; i < password.length; i++) {
        if (password.charAt(i) === letters[letterNum])
        {
            hiddenPassword = hiddenPassword.setChar(i, letters[letterNum]);
            rightLetter = true
        }

    }
    document.getElementById("password").innerHTML = hiddenPassword;
    if(rightLetter)
    {
        document.getElementById("l"+letterNum).style.backgroundColor = "#1BFD00"
        document.getElementById("l"+letterNum).style.color = "#FDFEDB"
        document.getElementById("l"+letterNum).style.borderColor = "#027F19"
        document.getElementById("l"+letterNum).style.cursor = "default"
    }
    else
    {
        numberOfWrongGuesses++;
        document.getElementById("l"+letterNum).style.backgroundColor = "#FD6060"
        document.getElementById("l"+letterNum).style.color = "#FDFEDB"
        document.getElementById("l"+letterNum).style.borderColor = "#B80D05"
        document.getElementById("l"+letterNum).style.cursor = "default"
        document.getElementById("l"+letterNum).setAttribute("onclick",";");
        var x = "img/img"+numberOfWrongGuesses+".png"
        document.getElementById("picture").innerHTML = '<img src ="img/img' +numberOfWrongGuesses +'.png">'
    }
    if(password == hiddenPassword)
    {
        document.getElementById("password").innerHTML = "Gratulacje Wygrałeś!!1"
        document.getElementById("letters").innerHTML = "<div onclick ='location.reload()'>Jeszcze raz?</div>"
    }
    if(numberOfWrongGuesses == 9)
    {
        document.getElementById("password").innerHTML = "Przegrałeś D:"
        document.getElementById("letters").innerHTML = "<div onclick ='location.reload()'>Jeszcze raz?</div>"
    }
}

function startGame() {
    generateLetters();
    generateHiddenPassword();
}

window.onload = startGame;