@echo off
rem Installation de logiciels v1.0
rem Auteur : ROQUIN Baptiste
echo Lancement des installations de logiciels :
echo ---
echo Installation de QGIS - Merci de patienter...
@echo off
rem ouverture de l'exécutable
Start /w C:\Users\bab\Downloads\QGIS-OSGeo4W-3.30.3-1.msi

echo Installation d'une base de donnée postgreSQL - Merci de patienter...
@echo off
rem ouverture de l'exécutable
Start C:\Users\bab\Downloads\pgadmin4-7.3-x64.exe /L=1036 /S /t 10

echo Installation de PG admin - Merci de patienter...
@echo off
rem ouverture de l'exécutable
Start C:\Users\bab\Downloads\pgadmin4-7.3-x64.exe /L=1036 /S /t 10



echo ---
echo Installations terminees - Merci de votre patience !
echo ---
@echo off
rem Attente de 7 secondes avant de fermer la fenêtre
PING localhost -n 7 >NUL<-<