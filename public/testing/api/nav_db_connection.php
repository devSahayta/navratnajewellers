<?php

// Database connection
$dsn = 'mysql:host=127.0.0.1;dbname=u710987265_navJ56546';
$username = 'u710987265_navadmin66425'; // Change to your database username
$password = 'nav74@455Jew';     // Change to your database password
try {
    $pdo = new PDO($dsn, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(['status' => 'error', 'message' => 'Database connection failed']);
    exit;
}

?>
