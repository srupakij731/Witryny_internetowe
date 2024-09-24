function isFilled()
{
    let name = document.forms["MainForm"].name.value;
    let lastName = document.forms["MainForm"].lastName.value;
    let message = document.forms["MainForm"].message.value;
    let personalID = document.forms["MainForm"].personalID.value;
    let email = document.forms["MainForm"].email.value;
    

    if( name ==""  || lastName ==""  ||message == "" || personalID=="" || email=="")
    {
        alert("Pola NIEwypełnione")
    }
    else
    alert("Pola wypełnione")
}

function isCorrectSize()
{
    let name = document.forms["MainForm"].name.value;
    let lastName = document.forms["MainForm"].lastName.value;
    let message = document.forms["MainForm"].message.value;
    let personalID = document.forms["MainForm"].personalID.value;
    let email = document.forms["MainForm"].email.value;

    if(name.length >= 3 && lastName.length >= 3 && message.length >= 10 && personalID.length >= 11 && email.length >= 8)
    alert("poprawna ilość znaków")
    else
    alert("NIE poprawna ilość znaków")
}

function isCorrectInput()
{
    let name = document.forms["MainForm"].name.value;
    let lastName = document.forms["MainForm"].lastName.value;
    let message = document.forms["MainForm"].message.value;
    let personalID = document.forms["MainForm"].personalID.value;
    let email = document.forms["MainForm"].email.value;

    const c_name = /^[a-zA-Z]{2,}$/;
    const c_lastName = /^[a-zA-Z]{2,}$/;
    const c_message = /^.{10,}$/;
    const c_PersonalID = /^[0-9]{11}$/;
    const c_email = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,}$/;

    if (
        c_name.test(name)&&
        c_lastName.test(lastName) &&
        c_message.test(message) &&
        c_PersonalID.test(personalID) &&
        c_email.test(email)
    )
     {
        alert("Poprawne dane");
    } else {
        alert("Niepoprawne dane");
    }
}