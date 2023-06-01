<?php

class NEWS
{
    protected int $idN;
    protected string $imageNews;
    protected string $titreNews;
    protected string $dateNews;
    protected string $textNews;

    public function __construct(array $news)
    {
        $this->idN = $news["idNews"];
        $this->imageNews = $news["imageNews"];
        $this->titreNews = $news["titreNews"];
        $this->dateNews = "10/10/2022";
        $this->textNews = $news["textNews"];
    }

    //getteur
    function getIdNews()
    {
        return $this->idN;
    }
    function getImageNews()
    {
        return $this->imageNews;
    }
    function getTitreNews()
    {
        return $this->titreNews;
    }
    function getDateNews()
    {
        return $this->dateNews;
    }
    function geTextNews()
    {
        return $this->textNews;
    }

    function getExtraitTextNews()
    {
        $extrait = substr($this->textNews, 0, 150) . '...';
        return $extrait;
    }

    function getExtraitTitreNews()
    {
        $extrait = substr($this->titreNews, 0, 75) . '...';
        return $extrait;
    }

}
?>