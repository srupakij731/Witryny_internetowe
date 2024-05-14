function changeParagraph(color)
{
document.getElementById("paragraph").style.color = color;

size = document.getElementById("size").value / 100;
document.getElementById("paragraph").style.transform ="scale(" + size + ")";

var style = document.getElementById("type").value;
if(style == "notStraight")
    {
        document.getElementById("paragraph").innerHTML = " <i> To jest przykład paragrafu, który może być dowolnie formatowany przez JavaScript </i>"
    }
    else
    {
        document.getElementById("paragraph").innerHTML = "To jest przykład paragrafu, który może być dowolnie formatowany przez JavaScript"
    }
}