
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    //ZAD 1
    $tab1 = array(7, 3, 1, 6, 9, 5, 4, 10, 2, 2);
    echo $tab1[5];
    $tab1[7] = 12;
    $tab2 = $tab1;
    $tab3 = array();
    for($i = 0;$i<count($tab1); $i++)
    {
        $tab3[$i] = $tab1[$i] + $tab2[$i];
    }
    for($i = 0;$i<count($tab1); $i++)
    {
        $tab2[$i] = $tab1[count($tab1)-$i-1];
    }
    echo"<br> zad2 <br>";

    //ZAD 2
    $array = array(3, 4, 6, 3, 0, 12, 12847, 47);
    
    //min max
    echo min($array) . " " . max($array) . "<br>";
    
    //średnia
    $average = array_sum($array) / count($array);
    echo $average . "<br>";
    
    // ile 3
    $sum = 0;
    foreach ($array as $value) 
    {
        if ($value == 3)
         {
            $sum += 1;
        }
    }
    echo $sum . "<br>";

    //sortowanie
    sort($array);
    print_r($array)."<br>";

    //mediana
    $count = count($array);
    if ($count % 2 == 0) {
        $mid1 = $array[$count / 2 - 1];
        $mid2 = $array[$count / 2];
        echo ($mid1 + $mid2) / 2; 
    } else {
        echo $array[floor($count / 2)]; 
    }

    $count = count($array);
    //najmniejsze
        echo $array[0]." ".$array[1]." ".$array[2]."<br>";

    //najwiękrze
    echo $array[$count-1]." ".$array[$count-2]." ".$array[$count-3]."<br>";

    //do kwadratu
    $arraySquared = array();
    for($i = 0; $i < count($array); $i++)
    {
        $arraySquared[$i] = $array[$i]*$array[$i];
    }

    //ile parzystych
    $sum1 = 0;
    $sum2 = 0;

    foreach ($array as $value) 
    {
        if ($value %2 == 0)
        {
            $sum1 += 1;
        }
        else
        {
            $sum2 += 1;
        }
    }
    echo "parzyste = ".$sum1." nieparzyste = ".$sum2."<br>";

    // ile podzielnych przez 3
    $sum = 0;
    foreach ($array as $value) 
    {
        if ($value % 3 == 0)
         {
            $sum += 1;
        }
    }
    echo $sum . "<br>";
    
    //ZAD 3
    $array2 = array('a', 'c', 'd', 'g', 'u', 'p', 'o', 'q', 'f', 'n');
    //2
    $string = "pawełek";
    $array21 = str_split($string);
    print_r($array21);


    foreach($array2 as $a)
    {
        echo strtolower($a);
    }
    foreach($array2 as $a)
    {
        echo strtoupper($a);
    }
    echo "<br>";
    shuffle($array2);
    print_r($array2);

    //ZAD 4
    echo "<br>";
    $array3 = array();
    for($i = 0; $i<100;$i++)
    {
        array_push($array3, floor(rand(0, 100)));
    }
    //max
    echo max($array3);
    $sum = 0;
    foreach($array3 as $a)
    {
        if($a == max($array3))
        $sum+=1;
    }
    echo $sum."<br>";
    //nieparzyste
    foreach($array3 as $a)
    {
        if($a %2 == 1)
        echo $a." ";
    }
    echo "<br>";

    //nieparzyste indexy
    for($i = 0;$i<count($array3);$i++)
    {
        if($i   %2 == 1)
        echo $array3[$i]." ";
    }
    echo "<br>";

    //  przediał <5,15)
    $sum = 0;
    foreach($array3 as $a)
    {
        if($a >=5 && $a<15)
        {
        $sum+=1;
        echo $a;
        }
    }
    echo $sum."<br>";

    // najbliższa liczba
    $a = 7; 
    $nearest = $array3[0];
    foreach ($array3 as $liczba) {
        if (abs($liczba - $a) < abs($nearest - $a)) {
            $nearest = $liczba;
        }
    }
    //najmniejsza liczba
    $min =min($array3);
    $i = array_search($min, $array3);
    echo $array3[$i-1]." ".$array3[$i+1]."<br>";

    //tablica>10
    $tab4 = array();
    foreach($array3 as $a) {
        if($a > 10) {
            array_push($tab4, $a);
        }
    }

    //nowa tablica
    $B =array();
    for($i = 0; $i<100; $i++)
    {
        $number  = 0;
        for($j = $i; $j<100; $j++)
        {
            $number += $array3[$j]; 
        }
        array_push($B, $number);
    }

    //przynajmniej 3 razy
    for($i = 0; $i<count($array3); $i++)
    {
        $sum = 0;
        for($j = 0; $j<count($array3); $j++)
        {
            if($array3[$i] == $array3[$j])
            {
                $sum+=1;
            } 
            if($sum == 3)
            {
                break;
            }
        }
    }    

    //ZAD 5

    //1
    $fib1 = 0;
    $fib2 = 1;
    for ($i = 0; $i < 100; $i++) 
    {
        $tablica[$i] = $fib1;
        $next = $fib1 + $fib2;
        $fib1 = $fib2;
        $fib2 = $next;
    }
    print_r($tablica);
    echo " ";
    //2
    for ($i = 0; $i < 100; $i++) 
    {
        $tablica[$i] = pow(2, $i);
    }
    print_r($tablica);
    echo " ";
    //3
    for ($i = 0; $i < 100; $i++) 
    {
        $tablica[$i] = 3 * ($i + 1);
    }
    print_r($tablica);
    echo " ";
    //4
    for ($i = 0; $i < 100; $i++) 
    {
        $tablica[$i] = pow(2, $i + 1);
    }
    print_r($tablica);
    echo "";
    ?>
</body>
</html>