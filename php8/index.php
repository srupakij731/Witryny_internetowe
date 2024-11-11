<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=\\, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $dniTygodnia = [
        "Sunday" => "niedziela", "Monday" => "poniedziałek", "Tuesday" => "wtorek", "Wednesday" => "środa", 
        "Thursday" => "czwartek", "Friday" => "piątek", "Saturday" => "sobota"
    ];
    $miesiace = [
        1 => "stycznia", 2 => "lutego", 3 => "marca", 4 => "kwietnia", 5 => "maja", 6 => "czerwca",
        7 => "lipca", 8 => "sierpnia", 9 => "września", 10 => "października", 11 => "listopada", 12 => "grudnia"
    ];
    //1
    $class = array("Paweł", "Marcel", "Karol", "Damian");
    sort($class);
    rsort($class);

    //2
    $numbers = array(1,2,3,4,5,6,7,8,9,11);
    $even = 0;
    $odd = 0;
    for($i = 0; $i < count($numbers); $i++){
        if($numbers[$i] % 2 == 0)
            $even++;
        else
            $odd++;    
    }
    echo "$even $odd <br>";

    //3
    $date = getdate();
    echo $date["mday"]." ".$miesiace[$date["mon"]]." ".$date["year"]."<br>";
    
    //4
    echo "<i><b>dzisiaj jest ".$dniTygodnia[$date["weekday"]]."</i></b><br>";

    //5
    echo $date["yday"]." ". 365-$date["yday"]." ". 365-$date["yday"]+157 ."<br>";

    //6
    $birthday = mktime(0,0,0,9,30, date("Y"));
    echo $dniTygodnia[date("l", $birthday )]."<br>";

    //7
    if ($birthday < time()) 
        $birthday = mktime(0, 0, 0, 9, 30, date('Y') + 1);

    echo ceil(($birthday - time()) / (60 * 60 * 24));;
        ?>

</body>
</html>


