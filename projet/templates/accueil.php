<?php

require_once('../bd/connexion.php');
require_once('../bd/les_classes.php');
session_start();
$connexion = connect_bd();
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../assets/css/accueil.css">
    <link rel="stylesheet" href="../assets/css/common.css">
    <script src="./../assets/script/accueil.js"></script>
</head>

<body>



    <section class="page_intro">


        <img src="../assets/image/accueil/page_intro/presentation logo.png" alt="logo_entoure" id="presentation_logo">
        <h1>
            Agence Nationale des Ressources Hydriques
        </h1>
        <div class="barre_jaune"></div>
        <h2 class="bon">
            L’agence nationale des ressources hydriques est un établissement
            public à caractère commercial, à vocation scientifique et technique.
        </h2>

        <img src="../assets/image/accueil/page_intro/descend_page_intro.png" alt="image pour descendre"
            id="presentation_descendre" onclick="scrollPageBelowPresentation();">


    </section>

    <main>
        <section class="nos_missions">
            <div>
                <h2 class="sous_menu_gauche">Nos Missions</h2>
                <a href="./agence/missions.html">
                    <p>VOIR PLUS</p>
                </a>
            </div>
            <p>
                ANRH a pour mission de prospecter, de veiller et mettre à jour l’inventaire et l’évaluation des
                ressources en eau et des superficies irrigables. De préserver et protéger ces ressources contre toute
                forme de dégradation.
                Pour réaliser ses missions, l’ANRH développe des outils de mesure, de prospection, d’analyse et
                d’expérimentation.
                Elle effectue la collecte, le traitement et la mise à jour des données relatives aux ressources en eau
                et en sol.
            </p>
        </section>
        <img src="./../assets/image/accueil/decoration_mission.svg" alt="" class="decoration_mission">

        <div class="titre">
            <h1 class="sous_menu_gauche">Services</h1>
            <div class="barre_jaune_titre"></div>
        </div>

        <!-- SERVICES -->
        <section class="services">
            <a href="./page_solo/protocoles.html" class="presentation_services">
                <div id="protocoles"></div>
                <h2>Protocoles
                </h2>
                <p>
                    Explication de nos protocoles en vigueur
                </p>
            </a>
            <a href="./client/devis.html" class="presentation_services">
                <div id="devis"></div>
                <h2>Devis</h2>
                <p>Simuler un devis de nos services </p>
            </a>
            <a href="./page_solo/appel_offre.html" class="presentation_services">
                <div id="appel_offre"></div>
                <h2>Appel d'offres
                </h2>
                <p>
                    Consulter nos appels d'offre
                </p>
            </a>
            <a href="./client/prestations.html" class="presentation_services">
                <div id="que_faisons_nous"></div>
                <h2>Que faisons nous
                </h2>
                <p>
                    Nos prestations en format téléchargeable
                </p>
            </a>
        </section>

        <!-- ACTUALITES -->
        <img src="./../assets/image/accueil/actualites/vague_degrade.svg" alt="image de vague degrade"
            class="vague en_haut">
        <section class="actualites">
            <div class="titre">
                <h1 class="sous_menu_gauche">Nos Actualités</h1>
                <div class="barre_jaune_titre"></div>
            </div>
            <section class="les_articles">
                <img src="./../assets/image/accueil/fleche.png" alt="" class="fleche gauche">

                <?php
                $sql = "SELECT * FROM NEWS";
                $stmt_news = $connexion->prepare($sql);
                $stmt_news->execute();

                // gestion d'erreurs
                if (!$stmt_news)
                    echo "Pb d'accès au news";
                else {
                    if ($stmt_news->rowCount() == 0)
                        echo "Il n'existe aucune news <br/>";
                    else {
                        $_SESSION['class_news'] = [];
                        foreach ($stmt_news as $row_news) {
                            $class_news = new NEWS($row_news);
                            array_push($_SESSION['class_news'], $class_news);
                            echo '<section class="article">';
                            echo '<img src="' . $class_news->getImageNews() . '" alt="' . $class_news->getImageNews() . '">';
                            echo '<h2>' . $class_news->getExtraitTitreNews() . '</h2>';
                            echo '<p>' . $class_news->getExtraitTextNews() . ' </p>';
                            echo '<a href="./page_solo/news.php?id='. $class_news->getIdNews() .'">Lire la suite →</a>';
                            echo '</section>';
                        }
                    }
                }
                ?>

                <img src="./../assets/image/accueil/fleche.png" alt="" class="fleche">
            </section>

        </section>
        <img src="./../assets/image/accueil/actualites/vague_degrade.svg" alt="image de vague degrade retourné"
            class="vague" id="en_bas">


        <!-- DIRECTIONS -->
        <section class="directions">
            <div class="titre">
                <h1 id="directions" class="sous_menu_gauche">Nos Directions</h1>
                <div class="barre_jaune_titre"></div>
            </div>

            <div id="map">
                <iframe
                    src="./cartographie/carte.html"
                    frameborder="0"></iframe>
            </div>

            <section class="les_boutons_info">
                <?php
                $sql = "SELECT * FROM DIRECTIONS";
                $stmt_directions = $connexion->prepare($sql);
                $stmt_directions->execute();

                // gestion d'erreurs
                if (!$stmt_directions)
                    echo "Pb d'accès au directions";
                else {
                    if ($stmt_directions->rowCount() == 0)
                        echo "Il n'existe aucune directions <br/>";
                    else {
                        foreach ($stmt_directions as $row_direction) {
                            $class_direction = new DIRECTION($row_direction);


                            // creation du div
                            echo "<div class='bouton_info'>";
                            echo '<h3>' . $class_direction->getNom() . '</h3>';
                            echo '<p>';
                            echo '<span class="titre"> Adresse </span> : ' . $class_direction->getAdresse() . '<br>';
                            echo '<span class="titre">Tél </span>: ' . $class_direction->getTel1() . ' <br>';
                            if ($class_direction->getTel2() != '') {
                                echo '<span class="titre">Tél2 </span>: ' . $class_direction->getTel2() . ' <br>';
                            }
                            echo '<span class="titre">Fax </span>: ' . $class_direction->getFax() . ' <br>';
                            echo '<span class="titre">Mail </span>: <a href="mailto:' . $class_direction->getMail() . ';">' . $class_direction->getMail() . '</a>';
                            echo '</p>';
                            echo '</div>';
                        }
                    }
                }

                ?>
            </section>
        </section>


        <!-- DOMAINE -->
        <img src="./../assets/image/accueil/notre_domaine/deco_les_vagues.png" alt="" class="en_haut">
        <section class="domaine">
            <div class="titre">
                <h1 class="sous_menu_gauche">Dans notre Domaine</h1>
                <div class="barre_jaune_titre"></div>
            </div>
            <section class="partenaires">
                <img src="./../assets/image/accueil/fleche.png" alt="" class="fleche gauche">


                <?php
                $sql = "SELECT * FROM DOMAINE";
                $stmt_domaine = $connexion->prepare($sql);
                $stmt_domaine->execute();

                // gestion d'erreurs
                if (!$stmt_domaine)
                    echo "Pb d'accès au domaine";
                else {
                    if ($stmt_domaine->rowCount() == 0)
                        echo "Il n'existe aucun domaine <br/>";
                    else {
                        foreach ($stmt_domaine as $row_domaine) {
                            $classe_domaine = new DOMAINE($row_domaine);
                            echo '<a href="' . $classe_domaine->getAdresseWeb() . '" target="_blank"><img src="' . $classe_domaine->getImage() . '" alt="' . $classe_domaine->getSurnom() . '"></a>';
                        }
                    }
                }
                ?>

                <img src="./../assets/image/accueil/fleche.png" alt="" class="fleche droite">
            </section>

        </section>
        <img src="./../assets/image/accueil/notre_domaine/deco_pique.png" alt="">


        <!-- GALERIE -->
        <div class="titre">
            <h1 class="sous_menu_gauche">Galerie</h1>
            <div class="barre_jaune_titre"></div>
        </div>
        <section class="galerie">
            <h2>Photos</h2>
            <div>
                <div>
                    <h3>Terrains</h3>
                    <a href=""> <img src="./../assets/image/accueil/galerie/Amenagement-Agricole.jpg" alt=""></a>
                </div>
                <div>
                    <h3>Ouvrages</h3>
                    <a href=""> <img src="./../assets/image/accueil/galerie/Hammam-Salhine-1280x960-1-768x576.jpg"
                            alt=""></a>
                </div>
                <div>
                    <h3>Equipements</h3>
                    <a href=""> <img
                            src="./../assets/image/accueil/galerie/hydras-ii11D922F5-A7E9-FDC4-A40E-311AFC3E03A6-1.jpg"
                            alt=""></a>
                </div>
                <div>
                    <h3>Evenements</h3>
                    <a href=""> <img src="./../assets/image/accueil/galerie/evenements.jpeg" alt=""></a>
                </div>
                <div>
                    <h3>Regroupement</h3>
                    <a href=""> <img src="./../assets/image/accueil/galerie/regroupement.jpg" alt=""></a>
                </div>
            </div>

            <h2>Vidéos</h2>
            <div>
                <div>
                    <h3>Forage de reconnaissance (ANRH) de Ouled Djellal Biskra</h3>
                    <video controls width="250">
                        <source src="./../assets/video/video_1.mp4" type="video/mp4">
                        <a href="./../assets/video/video_1.mp4">MP4</a>
                    </video>
                </div>
                <div>
                    <h3>Forage de reconnaissance ANRH de Tébessa</h3>
                    <video controls width="250">
                        <source src="./../assets/video/video_2.mp4" type="video/mp4">
                    </video>
                </div>
                <div>
                    <h3>Forage de reconnaissance ANRH de Béni Ounif Béchar</h3>
                    <video controls width="250">
                        <source src="./../assets/video/video_3.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
        </section>
    </main>


    <!-- <button>
        Clique-moi
    </button> -->
</body>
</html>