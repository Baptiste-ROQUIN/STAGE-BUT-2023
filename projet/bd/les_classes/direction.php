<?php

class DIRECTION
{
    protected string $nom;
    protected string $adresse;
    protected string $tel1;
    protected string $tel2;
    protected string $fax;
    protected string $mail;

    public function __construct(array $direction)
    {
        $this->nom = $direction["nom"];
        $this->adresse = $direction["adresse"];
        $this->tel1 = $direction["tel1"];
        $this->tel2 = $direction["tel2"];
        $this->fax = $direction["fax"];
        $this->mail = $direction["mail"];
    }

    //getteur
    function getNom()
    {
        return $this->nom;
    }
    function getAdresse()
    {
        return $this->adresse;
    }
    function getTel1()
    {
        return $this->tel1;
    }
    function getTel2()
    {
        return $this->tel2;
    }
    function getFax()
    {
        return $this->fax;
    }
    function getMail()
    {
        return $this->mail;
    }
}
?>