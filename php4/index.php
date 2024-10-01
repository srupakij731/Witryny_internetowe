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
    $a =1;
    $b =2.3;
    $c = "ciag znaków";
    echo"$a $b $c <br>";

    //2
    $s1 = 's1';
    $s2 = "s2";
    $s3 = <<<EOD
    s3
EOD;
$s4 = <<<'EOD'
s4
EOD;
    echo "$s1 $s2 $s3 $s4 <br>";

    //3
$imiona = array("Paweł", "Marel");

foreach ($imiona as $imiona) {
    echo "$imiona ";
}
    echo "<br>";
    //4
    $nazwiska = array(
        "Paweł" => "Łata",
        "Karol" => "Bakalarz");

    foreach ($nazwiska as $imie => $nazwiska) {
        echo "$nazwiska $imie <br>";
    }
    ?>
</body>
</html>