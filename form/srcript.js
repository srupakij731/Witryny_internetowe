function zad1() {
  var amountOfGuests = document.forms["form1"].amoutOfGuests.value;
  if (document.forms.form1["champagneBreakfast"].checked) {
    document.getElementById("zad1").innerHTML =
      Math.floor(amountOfGuests * 1.3 * 100);
  } else {
    document.getElementById("zad1").innerHTML = amountOfGuests*100;
  }
} 

function zad2() {
  var distance = document.forms["form2"].distance.value;
  if (document.forms.form2["isFromDanzig"].checked) {
    document.getElementById("zad2").innerHTML = "dowieziemy za darmo";
  } else {
    document.getElementById("zad2").innerHTML =
      "Dowóz kosztuje " + distance*2 + " zł";
  }
}

function zad3(operation){
  var a = parseFloat(document.forms.form3["number1"].value);
  var b = parseFloat(document.forms.form3["number2"].value);


  if(operation == '+'){
    document.getElementById("zad3").innerHTML = a + b;
  }
  else if(operation == '-'){
    document.getElementById("zad3").innerHTML = a - b;
  }
  else if(operation == '*'){
    document.getElementById("zad3").innerHTML = a * b;
  }
  else if(operation =='/'){
    document.getElementById("zad3").innerHTML = a / b;
  }
  else if(operation == '%'){
    document.getElementById("zad3").innerHTML = a % b;
  }
  else if(operation == '/c'){
    document.getElementById("zad3").innerHTML = Math.floor(a / b) ;
  }
}

function zad4()
 {
  var sum = 0;
  for (var i = 0; i < 5; i++) 
    {
    if (document.forms.form4["use" + i].checked)
       {
      sum +=  parseInt(document.forms.form4["number" + i].value);
    }
  }
  document.getElementById("zad4").innerHTML = sum;
}

function zad5()
{
  var x
  if(document.forms.form5.amoutOfAnnouncements.value < 50)
    x = 2;
  else if(document.forms.form5.amoutOfAnnouncements.value > 50 && document.forms.form5.amoutOfAnnouncements.value < 100)
    x = 1.5;
  else
    x=1;

    if(document.forms.form5.regularCustomer.checked)
      document.getElementById("zad5").innerHTML = document.forms.form5.amoutOfAnnouncements.value * x *0.8;
    else
      document.getElementById("zad5").innerHTML = document.forms.form5.amoutOfAnnouncements.value * x
}

function zad6()
{
  var amoutOfBricks = document.forms.form6.amoutOfBricks.value; 
  if(document.forms.form6.premiumBricks.checked)
    document.getElementById("zad6").innerHTML = "Zakupiona ilość cegieł: "+amoutOfBricks + " cegła premium, koszt zakupu cegieł: " +amoutOfBricks*2*1.3   + " waga cegieł: " + amoutOfBricks*1.75;
  else
  document.getElementById("zad6").innerHTML = "Zakupiona ilość cegieł: "+amoutOfBricks + " cegła zwykłą, koszt zakupu cegieł: " +amoutOfBricks*2+ " waga cegieł: " + amoutOfBricks*1.5;
}