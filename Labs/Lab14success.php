<html>
<?php include("partials/_headerNav.html"); ?>
    <section>
        <?php require_once ("util.php"); 
            echo "<table class='striped'>";
            echo "<tr><th>Name</th><th>Units</th><th>Price</th></tr>";
            $conn = connect();
            getFruits($conn);
            closeDb($conn);
        ?>
    </section>
</html>