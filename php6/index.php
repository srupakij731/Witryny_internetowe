<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    function sum($number1, $number2)
    {
        echo $number1+$number2;
    }
    sum(1,2);

    function basics($number1, $number2)
    {
        echo $number1-$number2;
        echo $number1*$number2;
        echo $number1/$number2;
    }
    basics(3,4);

    function calculator($number1, $number2, $operation)
    {
        switch($operation)
        {
            case '+':
            {    
            echo $number1+$number2;
            break;
            }

            case '-':
            {    
            echo $number1-$number2;
            break;
            }

            case '*':
            {    
            echo $number1*$number2;
            break;
            }

            case '/':
            {    
            echo $number1/$number2;
            break;
            }
        }
    }

    calculator(3,4,'*');

    function maxNumber($number1, $number2, $number3)
    {
        $numbers = array($number1, $number2, $number3); 
        echo max($numbers);
    }
    maxNumber(3, -3, 99999);

    function height($height)
    {
        if($height < 150)
            echo "krasnoludek";
        elseif ($height > 180)
            echo "wysoki";
        else {
            echo "średni";
        }
    }
    height(179);

    function BMI($height, $weight)
    {
        $BMI = $weight/(($height/100)*($height/100));
        if($BMI < 18.5)
            echo "za mało";
        elseif ($BMI > 25)
            echo "za dużo ";
        else {
            echo "ok";
        }
    }
    BMI(130, 200);

    function older($age1, $age2)
    {
        if($age1 > $age2)
            echo "osoba 1 jest starsza";
        else
            echo "osoba 2 jest starsza";
    }
    
    older(1, 99);

    function leepYear($year)
    {
            if (($year % 4 == 0 && $year % 100 != 0) || ($year % 400 == 0)) 
                echo "przestępny";
            else 
                echo "NIE przestępny";
    }

    function streangth($password)
    {
        $specialCharacters = array('*', '&', '$', '#', '@', '!', '%');
        $smallLetter = false;
        $bigLetter = false;
        $specialCharacter = false;
        $numberPresent = false;
        foreach(str_split($password) as $letter)
        {
            if(ctype_lower($letter))
                $smallLetter = true;
            if(ctype_upper($letter))
                $bigLetter = true;
            if(is_numeric($letter))
                $numberPresent = true;
            if(in_array($letter, $specialCharacters))
                $specialCharacter = true;
        }

        if(strlen($password) < 4 || !$numberPresent || !$bigLetter || !$smallLetter || !$specialCharacter)
        {
            echo "słabe hasło";
        }
        elseif(strlen($password) < 8)
            echo "średnie hasło";
        else
            echo "silne hasło";
    }

    function validTriangle($side1, $side2, $side3)
    {
        if($side1+ $side2 > $side3 && $side3+ $side2 > $side1 && $side1+ $side3 > $side2)
            echo "dobry trójkąt";   
        else
            echo "niedobry trójkąt";
    }

    function encryption($password)
    {
        echo "<br>";
        foreach(str_split($password) as $letter)
        {
            if($letter == 'z')
                echo 'b';
            elseif($letter == 'y')
                echo 'a';
            else
            echo chr(ord($letter)+2);
        }
        
    }
    encryption("abcz");

?>


</body>
</html>