<?php
function connect_bd()
{
    // mysql -h servinfo-mariadb -u roquin -p
    require("connect.php");
    // pour oracle: $dsn="oci:dbname=//serveur:1521/base
    // pour sqlite: $dsn="sqlite:/tmp/base.sqlite"
    $dsn = "mysql:dbname=" . BASE . ";host=" . SERVER;
    try {
        $connexion = new PDO($dsn, USER, PASSWD);
        return $connexion;
    } catch (PDOException $e) {
        printf("Échec de la connexion : %s\n", $e->getMessage());
        exit();
    }
}
?>