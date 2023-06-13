<?php
require_once('../../bd/les_classes.php');
session_start();
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../assets/css/common_sous_page.css">
</head>

<body>
    <section class="intro">
        <img src="./../../assets/image/agence/image_vector.png" alt="">
        <div>
            <h1>NEWS</h1>
            <div class="barre_jaune"></div>
        </div>
    </section>
    <main>
        <?php
        foreach ($_SESSION['class_news'] as $news) {


            if ($news->getIdNews() == htmlspecialchars($_GET['id'])) {
                echo '<section class="article">';
                echo '<img src="../' . $news->getImageNews() . '" alt="' . $news->getImageNews() . '">';
                echo '<h2>' . $news->getTitreNews() . '</h2>';
                echo '<p>' . $news->getTextNews() . ' </p>';
                echo '</section>';
            }
        }


        ?>

    </main>
</body>

</html>