<?php

class DOMAINE
{
    protected int $idD;
    protected string $surnom;
    protected string $image;
    protected string $adresseWeb;
    protected string $text;

    public function __construct(array $domaine)
    {
        $this->idD = $domaine["idDomaine"];
        $this->surnom = $domaine["surnom"];
        $this->image = $domaine["image"];
        $this->adresseWeb = $domaine["adresseWeb"];
        $this->text = $domaine["text"];
    }

    //getteur
    function getIdDomaine()
    {
        return $this->idD;
    }
    function getSurnom()
    {
        return $this->surnom;
    }
    function getImage()
    {
        return $this->image;
    }
    function getAdresseWeb()
    {
        return $this->adresseWeb;
    }
    function geText()
    {
        return $this->text;
    }

}
?>