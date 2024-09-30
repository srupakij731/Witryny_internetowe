<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kalkulator oszczędności</title>
</head>
<body>
    <?php
    for($i = 1; $i <= 10; $i++) {
        echo "$i  ";
    }
    echo "<br>";

    // 2
    for($i = 10; $i >= 1; $i--) {
        echo "$i  ";
    }
    echo "<br>";

    // 3
    $sum = 0;
    for($i = 1; $i <= 10; $i++) {
        $sum += $i;
    }
    echo "Suma: $sum <br>";

    // 4
    for($i = 2; $i <= 10; $i+=2) {
        echo "$i  ";
    }
    echo "<br>";
    ?>

    <!-- 5 -->
    <form method="post" action="">
        <input type="number" id="months" name="months" placeholder="miesiące" required>
        <input type="number" id="money" name="money" placeholder="kwota" required>
        <input type="submit" name="submit" value="wyślij">
    </form>

    <?php
    if (isset($_POST['submit'])) {
        $months = $_POST['months'];
        $money = $_POST['money'];
        $sum = 0;  
        $saved = 0;
        for($i = 0; $i < $months; $i++) {
            $sum += $money;
            $saved = $money*0.08;
        }

        echo $saved;
    }
    echo "<br>";
    //6
    $sum = 5;
    for($i = 0; $i < 100; $i++)
    {
        $sum += 5+$i*10;
    }
    echo $sum."<br>";
    //7
    $sum = 0;
    for ($i=10; $i >= 1 ; $i--) { 
        $sum += $i*$i;
    }
    echo $sum;
    ?>
    <!-- 8 -->

    <form method="post" action="">
        <input type="number" id="x" name="x" placeholder="x" required>
        <input type="number" id="y" name="y" placeholder="y" required>
        <input type="number" id="z" name="z" placeholder="z" required>
        <input type="number" id="k" name="k" placeholder="waga" required>

        <input type="submit" name="submit2" value="wyślij">
    </form>
    <?php
    if(isset($_POST['submit2']))
    {
        $x = $_POST['x'];
        $y = $_POST['y'];
        $z = $_POST['z'];
        $k = $_POST['k'];

        $sum = 0;
        for($i = 0; $i < $y; $i++)
        {
            $bricksInRow = $x - ($z * $i); 
            if ($bricksInRow <= 0) {
                break;
            }
            $sum += $bricksInRow; 
        }
        echo $sum." waga:".$sum *$k;;
    }
    ?>

<!-- 10 -->
    <form method="post" action="">
        <input type="number" id="x" name="x" placeholder="x" required>
        <input type="number" id="y" name="y" placeholder="y" required>
        <input type="number" id="n" name="n" placeholder="n" required>

        <input type="submit" name="submit3" value="wyślij">
    </form>
    <?php
    if(isset($_POST['submit3']))
    {
        $x = $_POST['x'];
        $y = $_POST['y'];
        $n = $_POST['n'];

        $sum = 0;
        for($i = 0; $i < $n; $i++)
        {
            echo $x +($i *$y)." ";
        }

    }
    ?>
</body>
</html>
