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
<?php
require_once('../bd/connexion.php');
require_once('../bd/les_classes.php');
$connexion = connect_bd();
?>

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
                <article>
                    <section class="article">
                        <img src="./../assets/image/accueil/actualites/news_1.png" alt="">
                        <h2>Les eaux souterraines: rendre l’invisible visible</h2>
                        <p>Lorem Ipsum is centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <a href="">Lire la suite →</a>
                    </section>
                </article>
                <article>
                    <section class="article">
                        <img src="./../assets/image/accueil/actualites/news_1.png" alt="">
                        <h2>Les eaux souterraines: rendre l’invisible visible</h2>
                        <p>Lorem Ipsum is centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <a href="">Lire la suite →</a>
                    </section>
                </article>
                <article>
                    <section class="article">
                        <img src="./../assets/image/accueil/actualites/news_1.png" alt="">
                        <h2>Les eaux souterraines: rendre l’invisible visible</h2>
                        <p>Lorem Ipsum is centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently with desktop publishing software like
                            Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <a href="">Lire la suite →</a>
                    </section>
                </article>
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
            <div class="directions_image">
                <img src="" alt="">
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
                            echo "<div class='bouton_info' id='info_CONSTANTINE'>";
                            
                                echo '<h3>'.$class_direction->getNom().'</h3>';
                                echo '<p>';
                                    echo '<strong>Adresse</strong> :'. $class_direction->getAdresse() .'<br>';
                                    echo 'Tél: '. $class_direction->getTel1() .' <br>';
                                    echo 'Fax: '. $class_direction->getFax() .' <br>';
                                    echo 'Mail: <a href="mailto:'. $class_direction->getMail() .';">'. $class_direction->getMail() .'</a>';
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
                <div>
                    <a href=""><img src="./../assets/image/accueil/notre_domaine/ANBT.png" alt=""></a>
                    <a href=""><img src="./../assets/image/accueil/notre_domaine/ANBT.png" alt=""></a>
                    <a href=""><img src="./../assets/image/accueil/notre_domaine/ANBT.png" alt=""></a>
                    <a href=""><img src="./../assets/image/accueil/notre_domaine/ANBT.png" alt=""></a>
                </div>
                <img src="./../assets/image/accueil/fleche.png" alt="" class="fleche">
            </section>

        </section>
        <img src="./../assets/image/accueil/notre_domaine/deco_pique.png" alt="">


        <!-- GALERIE -->
        <div class="titre">
            <h1 class="sous_menu_gauche">Galerie</h1>
            <div class="barre_jaune_titre"></div>

        </div>
    </main>

    <footer>
        <p>COPYRIGHT © 2022 AGENCE NATIONALE DES RESSOURCES HYDRIQUES. TOUS DROITS RÉSERVÉS</p>
    </footer>

    <!-- <button>
        Clique-moi
    </button> -->
</body>