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
                echo '<h2>' . $news->getTitreNews() . '</h2>';
                echo '<div>';
                echo '<img src="../' . $news->getImageNews() . '" alt="' . $news->getImageNews() . '">';
                echo '<p class="sous_conteneur">' . $news->getTextNews() . ' </p>';
                echo '<div>';
                echo '</section>';
            }
        }
        ?>

    </main>
</body>

<style>
    .intro {
        background: linear-gradient(#B0C4DE, #B0C4DE,  white);
    }

    .article div {
        display: flex
    }
    .article div>* {
        margin: 1vh 2vw;
    }

    .article div>* {
        margin: 1vh 2vw;
    }
</style>

</html>