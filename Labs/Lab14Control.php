<?php
    session_start();
    if($_POST["user"] == 'lalo' and $_POST["pass"] == 'hockey'){
        $_SESSION["user"] = $_POST["user"];
        $_SESSION["pass"] = $_POST["pass"];
        header("Location: Lab14success.php");
    }
    else{
        header("Location: Lab14.php");
        die();
    }


?>

