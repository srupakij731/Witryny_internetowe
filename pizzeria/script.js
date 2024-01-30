function oblicz(){
    if(document.getElementById("czyZielona").checked)
    {
        document.getElementById("wynik").textContent = "Za darmo";
    }
    else
    {
        document.getElementById("wynik").innerHTML = "Dowózbędzie Cię kosztował " + document.getElementById("odleglosc").value * 2 +"zł"
    }
}