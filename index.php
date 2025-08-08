<?php
session_start();
if(!isset($_SESSION['valid'])){
    header("Location: auth/login.php");
}

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MANUALBOOK ALAT BERAT</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2196f3" />
        <link rel="icon" href="/images/icon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/style.css" />
    </head>
    <body>
        <header>
            <span class="logo">🚜</span>
            <h1>PWA Manual Book</h1>
            <p>Digital Alat Berat</p>
        </header>
        <div class="container">
            <nav id="sidebar" class="sidebar"></nav>
            <main id="gallery-container"></main>
        </div>
        <div id="img-modal" class="img-modal">
            <span class="img-modal-close">&times;</span>
            <div class="img-modal-content-wrapper">
                <img class="img-modal-content" id="img-modal-content-element" alt="" />
            </div>
            <div class="img-modal-caption" id="img-modal-caption"></div>
        </div>
        <footer id="main-footer" style="display: none; text-align: center; padding: 1rem; color: #888; font-size: 0.95rem; background: #f8f8f8; border-top: 1px solid #e0e0e0">&copy; 2025 PWA Manual Book Alat Berat. All rights reserved.</footer>
        <!-- Ganti script utama menjadi modular -->
        <script type="module" src="js/main.js"></script>
    </body>
</html>
