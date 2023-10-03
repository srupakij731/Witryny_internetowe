function br(){
    document.write('<br>');
}
function writeString(string){

    document.write(string)
    br()
}
function writeResult(result){

    document.write(result)
    br()
}
//zad 1
var a = parseFloat(prompt("podaj 1 liczbe"));
var b = parseFloat(prompt("podaj 2 liczbe"));
var c = parseFloat(prompt("podaj 3 liczbe"));

writeString("1) Oblicza sumę trzech liczb wprowadzonych przez użytkownika prompt(), a następnie wyświetli ją na ekranie.")
writeResult(a+b+c)

//zad 2
writeString("2) Oblicza Średnią trzech liczb wprowadzonych przez użytkownika, a następnie wyświetli ją na ekranie.")
writeResult((a+b+c)/3)

//zad 3
writeString("3) Wczytuje wartość dwóch liczb. Wypisuje wynik sumy, różnicy oraz iloczynu w trzech kolejnych liniach na ekranie.")

 var d = parseFloat(prompt("podaj 1 liczbe (zad 3)"));
 var e = parseFloat(prompt("podaj 2 liczbe (zad 3)"));

writeString("suma")
writeResult(d+e)

writeString("różnica");
writeResult(d-e)

writeString("iloczyn");
writeResult(d*e)

//zad 4
var f = parseFloat(prompt("podaj 1 liczbe (zad 4)"));
writeString("4) Oblicza pierwiastek z wprowadzonej liczby. Wynik wyświetli na ekranie.")
writeResult(Math.sqrt(f))

//zad 5
var g = parseFloat(prompt("podaj bok kwadratu (zad 5)"));
writeString("5) Oblicza pole kwadratu o długości boku wprowadzonej przez użytkownika. Wynik wyświetli na ekranie.")
writeResult(Math.pow(g, 2))

var sideLengh1 = parseFloat(prompt("podaj 1 bok prostopadłościanu (zad 6)"));
var sideLengh2 = parseFloat(prompt("podaj 2 bok prostopadłościanu (zad 6)"));
var sideLengh3 = parseFloat(prompt("podaj 3 bok prostopadłościanu (zad 6)"));

//zad 6
writeString("6) Oblicza pole prostopadłościanu, którego długości boków podane będą w czasie działania programu. Wynik wyświetli na ekranie")
writeResult(2*(sideLengh1*sideLengh2 + sideLengh2*sideLengh3 + sideLengh1*sideLengh3))

var r = parseFloat(prompt("podaj promień koła (zad 7)"));

//zad 7
writeString("7) Oblicza pole i obwód koła. Wynik wyświetli na ekranie.")
writeString("pole koła :")
writeResult(Math.PI * Math.pow(r, 2))

writeString("obwód koła :")
writeResult(2*Math.PI * r)

//zad 8
var gasolinePrice = parseFloat(prompt("podaj cene benzyny (zad 8/9)"));

writeString("8) Wczytuje obecną cenę benzyny. Oblicza koszt przejazdu z Gdańska do Szczecina 360 km, przy założeniu, że samochód spala 8 litrów benzyny na 100 km..")
writeResult((360/100)*8*gasolinePrice); 

//zad 9
var tripLength = parseFloat(prompt("podaj długość trasy (zad 9)"));
var carFuelConsumptionValue = parseFloat(prompt("ile auto spala na 100km (zad 8)"));

writeString("Wczytuje cenę benzyny, długość trasy oraz wartość spalania samochodu. Oblicza koszt przejazdu i wypisuje go na ekran.")
writeResult((tripLength/100)* carFuelConsumptionValue * gasolinePrice);

//zad 10\
var kwota = parseFloat(prompt("podaj kwote lokaty (zad 10)"));
var zyskBezPodatku = kwota* (1 + 8.0 / 100) - kwota;

writeString("10) Oblicza zysk z lokaty dla dowolnej kwoty wprowadzonej przez użytkownika i wypisuje ją na ekran. Aktualna oferta lokaty wynosi 8% rocznie. Uwzględnij „podatek Belki”.")
writeResult(zyskBezPodatku -(zyskBezPodatku * 19/ 100))