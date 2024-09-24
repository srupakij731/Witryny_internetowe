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
echo "pełnoletni";
else
echo "niepełnoletni";

//10

//11
$points = 50;
if($points<29)
{


}
?>
</body>
</html>