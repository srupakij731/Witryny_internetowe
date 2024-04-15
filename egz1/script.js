function count()
{
    var total = document.getElementById("amountOfGuests").value * 100;
    if(document.getElementById("withExtra").checked)
    {
        total *= 1.3;
        
    }
    document.getElementById("result").innerHTML ="Koszt Twojego wesela to "+ total +" złotych"
}