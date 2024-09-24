<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
 //1
 $a = 3;
 $b = 4;
 $c = 1;
 $d = 6;
 if($a == null || $b == null || $b == 0)
    echo "nie można obliczyć wyniku <br>";
 else
    echo $a/$b."<br>";
 
  //2

  if($a == null || $b == null || $b == 0 || $c == null || $d == null || $d == 0)
     echo "nie można obliczyć wyniku<br>";
  else
     echo $a/$b+$c/$d."<br>";

    //3

  
    if($a == null || $b == null || $b-4 == 0) 
       echo "nie można obliczyć wyniku<br>";
    else
       echo ($a+6)/($b-4)."<br>";
    //4
    if($a%2)
        echo "nieparzysta<br>";
    else
    echo "parzysta<br>";

    //5
    if($a%$b)
    echo "niepodzielna<br>";
else
echo "podzielna<br>";

//6
if($a > 0)
echo "dodatnia<br>";
elseif($a < 0)
echo "ujemna <br>";
else
echo "wynosi 0";

//7
if($a > $b && $a > $c)
echo $a;
elseif($b > $a && $b > $c)
echo $b;
else
echo $c;

echo"<br>";
//8
if($a > $b && $a > $c)
{
    echo $a." ";
    if($b > $c)
    echo $b." ".$c;
    else
    echo $c." ".$b;
}

if($b > $a && $b > $c)
{
    echo $b." ";
    if($a > $c)
    echo $a." ".$c;
    else
    echo $c." ".$a;
}

else
{
    echo $c." ";
    if($a > $b)
    echo $a." ".$b;
    else
    echo $b." ".$a;
}
echo"<br>";

//9
$birthYear= 2008;
$year = 2024;
if($year - $birthYear >=18)
echo "pełnoletni<br>";
else
echo "niepełnoletni<br>";

//10
$number = 18; 
$digit2 = $number % 10;
$digit1 = $number - $digit2; 


if ($digit1 % 2 == 0 && $digit2 % 2 == 0) {
    echo "parzyste<br>";
} else if (($digit1 + $digit2) == 4) {
    echo "Suma wynosi 4<br>";
} else {
    echo "nieparzyste i suma nie wynosi 4<br>";
}

//11
$points = 50;
if($points<=29)
echo "niedostateczny";
elseif($points >=30 && $points <=59)
echo "duszczający";
elseif($points >=60 && $points <=74)
echo "dostateczny";
elseif($points >=75 && $points <=89)
echo "dobry";
elseif($points >=90 && $points <=99)
echo "bardzo dobry";
else
echo "celujący";
?>
</body>
</html>