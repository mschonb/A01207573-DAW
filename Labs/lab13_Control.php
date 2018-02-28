<?php
    session_start();
    if($_POST["user"] == 'lalo' and $_POST["pass"] == 'hockey'){
        $_SESSION["user"] = $_POST["user"];
        $_SESSION["pass"] = $_POST["pass"];
    }
    else{
        header("Location: Lab13.php");
        die();
    }


?>

<html>

    <?php
        include('partials/_headerNav.html');
    ?>
    
    <section>
    
        <form action="subir.php" method="post" enctype="multipart/form-data">
            Selecciona una imagen
            <input type="file" name="fileToUpload" id="fileToUpload">
            <input type="submit" value="Upload Image" name="submit">
        </form>
                
    </section>
        


</html>