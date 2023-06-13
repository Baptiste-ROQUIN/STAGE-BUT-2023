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
  console.log(checkbox.checked)
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
  labelNewContent.setAttribute("id", nomLayer)
  divNewContent.appendChild(inputNewContent);
  divNewContent.appendChild(labelNewContent);
  document.getElementById('layerMap').appendChild(divNewContent);
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




function createMap() {
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
  const zoomslider = new ol.control.ZoomSlider();
  map.addControl(zoomslider);
  return map;
}

// une fois que la page est bien charger on execute le code suivant 
document.addEventListener('DOMContentLoaded', function () {
  var map = createMap();
  rechercheLayerGeoserver(map);
  // map.addLayer(algeria_administrative);




});