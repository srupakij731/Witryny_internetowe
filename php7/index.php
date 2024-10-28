<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- zad 1 -->
    <form method="post">
        <input type="text" name="login" id="login" placeholder="login" required>
        <input type="text" name="password" id="password" placeholder="hasło" required>
        <input type="checkbox" name="rememberMe" id="rememberMe"> zapamiętaj mnie
        <input type="submit" name="submit1">
    </form>
    <?php
if(isset($_POST['submit1'])) {
    $login = $_POST['login'];
    $password = $_POST['password'];

    if(isset($_POST['rememberMe']))
      $rememberMe = true;
    else
     $rememberMe = false;

    echo  $login." ";
    echo sha1($password)." ";
    if($rememberMe)
    echo " zapamiętano";
    else
    echo " NIEzapamiętano";
}
    ?>
    <!-- zad 2-->
     <br>
    <form method="post">
        <input type="text" name="nickname" id="nickname" placeholder="nickname" required>
        <textarea type="textarea" name="comment" id="comment" placeholder="comment" required></textarea><br>
        <input type="submit" name="submit2" value="Prześlij">
    </form>
    <?php
if(isset($_POST['submit2'])) {
    $nickname = $_POST['nickname'];
    $comment = $_POST['comment'];

    echo $nickname;
    echo $comment."<br>";
    echo htmlspecialchars($comment);
}
    ?>
    <!--zad 3-->
    <br>
    <form method="post">
        <select name="s" id="s">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>

        </select>

        <input type="radio" name="r" id="r" value="1">
        <input type="radio" name="r" id="r" value="2">
        <input type="radio" name="r" id="r" value="3">

        <input type="checkbox" name="c[]" id="c1" value="1">
        <input type="checkbox" name="c[]" id="c2" value="2">
        <input type="checkbox" name="c[]" id="c3" value="3">

        <input type="submit" name="submit3" value="Prześlij">
    </form>
    <?php
    if(isset($_POST['submit3'])) 
    {
        $s = $_POST['s'];
        echo $s;
        if(isset($_POST['r']))
        {
        $r = $_POST['r'];
        echo $r;
        }
        if(isset($_POST['c']))
        {
            $c = $_POST['c'];
        }
        else
        $c = [];
        foreach($c as $cv)
        {
            echo $cv;
        }
    }
    ?>

    <!--zad 4-->
    <form method="post">
        <input type="text" name="backgroudcolor" id="backgroudcolor" placeholder="backgroudcolor" required>
        <input type="text" name="textcolor" id="textcolor" placeholder="texxtcolor" required>
        <input type="submit" name="submit4">
    </form>
    <?php
    function validColor($color) {
        return preg_match('/^#[0-9A-Fa-f]{6}$/', $color);
    }

    if(isset($_POST['submit4']))
    {

    $bc = $_POST['backgroudcolor'];
    $tc = $_POST['textcolor'];
    if(validColor($bc) && validColor($tc))
    echo "<div style='color:$tc; background-color:$bc; height: 50%; width: 50%; border: 2px dashed red; margin 50px auto;'><p>Paweł Łata</p></div>";
    }
    ?>

<!-- zad 5-->
    <form method="post">
        <input type="text" name="oilcost" id="oilcost" placeholder="oil cost" required>
        <input type="number" name="km" id="km" placeholder="km" required>
        <input type="text" name="combustion" id="combustion" placeholder="combustion" required>

        <input type="submit" name="submit5">
    </form>
    <?php
    function validNumber($n) {
        return preg_match('/^[0-9]+([.,][0-9]+)?$/', $n);;
    }

    if(isset($_POST['submit5']))
    {
    $oc = $_POST['oilcost'];
    $km = $_POST['km'];
    $combustion = $_POST['combustion'];
    $total = ($km * $combustion / 100) *$oc;
    echo "$km $combustion $oc $total";
    }
    ?>
    <!-- zad6 -->
    <form method="post">
        <input type="text" name="distance" id="distance" placeholder="distance" required>
        <input type="checkbox" name="hot" id="hot"> gorąca?
        <input type="submit" name="submit6">
    </form>
    <?php
    if(isset($_POST['submit6']))
    {
    $d = $_POST['distance'];
    if(isset($_POST['hot']))
        $total = $d*0.5*1.15;
    else
        $total = $d*0.5;
    }
    echo $total;
    ?>

</body>
</html>