<?php
    if($_POST["usuario"] == '' or $_POST["contraseña"] == ''){
        header("Location: index.php");
        die();
    }

?>

<html>
    <head>
            <title>FORMA</title>
            <meta charset="utf-8">
          <!--Import Google Icon Font-->
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
          <!--Import materialize.css-->
          <link type="text/css" rel="stylesheet" href="css/materialize.css"  media="screen,projection"/>

          <link type="text/css" rel="stylesheet" href="css/styles.css"  media="screen,projection"/>        

          <!--Let browser know website is optimized for mobile-->
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>

    <nav>
      <div class="nav-wrapper">
        <a href="#!" class="brand-logo">FORMA</a>
        <ul class="right hide-on-med-and-down">
          <li><a href="index.html.html">DAW</a></li>
          <li><a href="BD.html">BD</a></li>
          <!-- Dropdown Trigger -->
        </ul>
      </div>
    </nav>
    <body>
        <section>
            <h2>BIENVENIDO <?php echo strtoupper($_POST["usuario"])?></h2>
            Tu contaseña es: <?php echo $_POST["contraseña"]?>
    
    
        </section>
    </body>
</html>
