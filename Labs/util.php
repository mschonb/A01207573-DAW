<?php
class TableRows extends RecursiveIteratorIterator { 
    function __construct($it) { 
        parent::__construct($it, self::LEAVES_ONLY); 
    }

    function current() {
        return "<td style='width:150px;border:1px solid black;'>" . parent::current(). "</td>";
    }

    function beginChildren() { 
        echo "<tr>"; 
    } 

    function endChildren() { 
        echo "</tr>" . "\n";
    } 
} 

function connect(){
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "Lab14";

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE,      PDO::ERRMODE_EXCEPTION);
    }
    
    catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
    }
    return $conn;
}

function closeDb($mysql){
    $mysql = null;
}

function getFruits($conn){

    try {
    $stmt = $conn->prepare("SELECT name, units, price FROM frutos"); 
    $stmt->execute();

    $result = $stmt->setFetchMode(PDO::FETCH_ASSOC); 
    foreach(new TableRows(new RecursiveArrayIterator($stmt->fetchAll())) as $k=>$v) { 
        echo $v;
        }
    echo "</table>";
    }
    
    catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
    }

}

?>