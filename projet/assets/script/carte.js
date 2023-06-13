// cle pour recup une map
const key = 'izsC4a5EZcD9ViO7PDvZ';
const url_all_layer = 'http://127.0.0.1:8080/geoserver/rest/workspaces/myws/featuretypes.json';
const header = {
  method: 'GET',
  headers: {
    'Content-Type': 'text/plain; charset=UTF-8',
    'Content-Transfer-Encoding': 'quoted-printable'
  },
};

function afficherLayer(checkbox, source, layer) {
  if (checkbox.checked) layer.setSource(source);
  else layer.setSource(null);
}

function creationMenuAffichageLayers(layer, source, nomLayer) {
  // création du bouton pour gérer l'affichage
  let divNewContent = document.createElement('div');
  let inputNewContent = document.createElement('input');
  inputNewContent.setAttribute("type", "checkbox");
  inputNewContent.setAttribute("id", nomLayer);
  inputNewContent.addEventListener('click', () => {
    afficherLayer(inputNewContent, source, layer)
  });
  let labelNewContent = document.createElement('label');
  labelNewContent.innerHTML = nomLayer;
  labelNewContent.setAttribute("for", nomLayer)
  divNewContent.appendChild(inputNewContent);
  divNewContent.appendChild(labelNewContent);
  document.getElementById('layerMap').appendChild(divNewContent);
}

function majMap(listeLayer) {
  let layerTitleToSelect = null
  let radioButtons = document.getElementsByName('basemap_item')
  for (let radBut of radioButtons){
    if (radBut.checked) {
      layerTitleToSelect = radBut.id
    }
  }

  for (let layer of listeLayer){
    let layerTitle = layer.get('title')
    layer.setVisible(layerTitle == layerTitleToSelect)
  }



}

function creationBasemap(listeLayer) {
  let divNewContent = document.createElement('div');
  for (var layer of listeLayer) {
    let inputNewContent = document.createElement('input');
    let labelNewContent = document.createElement('label');
    if (layer.get('title') == 'Base') inputNewContent.checked = true;
    inputNewContent.setAttribute("type", "radio");
    inputNewContent.setAttribute("id", layer.get('title'));
    inputNewContent.setAttribute("name", "basemap_item");
    labelNewContent.setAttribute("for", layer.get('title'));
    inputNewContent.onclick = function(){
      majMap(listeLayer)
    };
    labelNewContent.innerHTML = layer.get('title');
    divNewContent.appendChild(inputNewContent);
    divNewContent.appendChild(labelNewContent);
    document.getElementById('basemap').appendChild(divNewContent);
  }
}

async function rechercheLayerGeoserver(map) {
  let response = await fetch(url_all_layer, header);
  if (response.ok) { // if HTTP-status is 200-299
    // obtenir le corps de réponse (la méthode expliquée ci-dessous)
    response = response.json();
    response.then(
      response => {

        for (let info_layer of response.featureTypes.featureType) {
          let source = new ol.source.Vector({
            url: `http://localhost:8080/geoserver/edt_stage/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=edt_stage%3A${info_layer.name}&outputFormat=application/json`,
            format: new ol.format.GeoJSON(),
          });
          let layer = new ol.layer.Vector({
            source: null
          });
          creationMenuAffichageLayers(layer, source, info_layer.name);
          map.addLayer(layer);
        }
      }
    )
  } else {
    alert("HTTP-Error: " + response.status);
  }
}




function createMap(layerGroup) {
  const source = new ol.source.OSM();
  const overviewMapControl = new ol.control.OverviewMap({
    layers: [
      new ol.layer.Tile({
        source: source,
      }),
    ],
  });

  var map = new ol.Map({
    controls: ol.control.defaults.defaults().extend([overviewMapControl]),
    target: 'map',
    layers: [layerGroup],
    view: new ol.View({
      constrainResolution: true,
      center: ol.proj.fromLonLat([4, 32]), // starting position [lng, lat]
      zoom: 6 // starting zoom
    })
  });
  const zoomslider = new ol.control.ZoomSlider();
  map.addControl(zoomslider);
  return map;
}

// une fois que la page est bien charger on execute le code suivant 
document.addEventListener('DOMContentLoaded', function () {
  const layerGroup = new ol.layer.Group({
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
        title: "Base",
        visible: true
      }),

      new ol.layer.Tile({
        source: new ol.source.XYZ({
          url: 'https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg',
          attributions: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
        }),
        visible: false,
        title: "Satellite"
      }),
    ],
  });

  var map = createMap(layerGroup);
  rechercheLayerGeoserver(map);
  const listeLayer = layerGroup.getLayers()["array_"];
  creationBasemap(listeLayer);



});