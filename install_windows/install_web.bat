@echo off
rem Installation de logiciels v1.0
rem Auteur : ROQUIN Baptiste
rem https://data.sigea.educagri.fr/download/sigea/supports/PostGIS/distance/initiation/PostGIS_Installation/co/Installer_Windows.html
echo Lancement des installations de logiciels :
echo ---
echo Installation de QGIS - Merci de patienter...
@echo off
Start /w https://qgis.org/downloads/QGIS-OSGeo4W-3.30.3-1.msi

echo Installation de la base de donnée postgreSQL - Merci de patienter...
@echo off
Start /w https://sbp.enterprisedb.com/getfile.jsp?fileid=1258514


PING localhost -n 7 >NUL<-<
echo Installation de PG admin - Merci de patienter...
@echo off
Start /w https://ftp.postgresql.org/pub/pgadmin/pgadmin4/v7.3/windows/pgadmin4-7.3-x64.exe


echo ---
echo Installations terminees - Merci de votre patience !
echo ---
@echo off



rem Attente de 7 secondes avant de fermer la fenêtre
