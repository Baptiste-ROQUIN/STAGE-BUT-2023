import {Vector, Map, Tile, OSM, } from './../static/open_layer/dist/ol.js';


function clique_unites_territorial() {

}

document.addEventListener('DOMContentLoaded', function () {
    var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          constrainResolution: true,
          center: ol.proj.fromLonLat([4, 32]), // starting position [lng, lat]
          zoom: 6 // starting zoom
        })
      });

      const unites_territorial = new ol.layer.Vector({
        source: new ol.source.Vector({
          url: `./../../assets/static/emplacement_point_carte_JSON/directions_regional.geojson`,
          format: new ol.format.GeoJSON()
        }),
        style: new ol.style.Style({
          image: new ol.style.Icon({
            src: './../../assets/static/emplacement_point_carte_JSON/image_directions_regional.png',
            anchor: [0.5, 1],
            size: [512, 512],
            scale: 0.05
          })
        }),
      });
      
      //le marqueur devient intéractif: click : PC uniquement !
      marker.events.register("click", unites_territorial,clique_unites_territorial);  
      //click ne marche pas sous openlayers sur mobile alors on met touchstart....
      marker.events.register("touchstart", unites_territorial,clique_unites_territorial);     
      
      map.addLayer(unites_territorial);
});





