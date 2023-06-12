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

// response = fetch(url_all_layer, header)
//   .then()
//   .then(response => console.log(response))
//   .catch(err => console.error(err));





// source (mis séparement pour pouvoir les sauvegarder)
let source_layer = new ol.source.Vector({
  url: `http://localhost:8080/geoserver/edt_stage/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=edt_stage%3A${key}&outputFormat=application/json`,
  format: new ol.format.GeoJSON(),
  // attribution: '@geoserver',
  // crossOrigin: 'anonymous'
});


// variable de couches
let layer = new ol.layer.Vector({
  source: null
});

// let algeria_administrative = new ol.layer.Vector({
//   source: new ol.source.Vector({
//     url: 'http://localhost:8080/geoserver/edt_stage/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=edt_stage%3Aalgeria_administrative&outputFormat=application/json',
//     format: new ol.format.GeoJSON(),
//     attribution: '@geoserver',
//     crossOrigin: 'anonymous'
//   })
// });


// const rotateWithView = document.getElementById('rotateWithView');

// const overviewMapControl = new ol.control.OverviewMap({
//   // see in overviewmap-custom.html to see the custom CSS used
//   className: 'ol-overviewmap ol-custom-overviewmap',
//   layers: [
//     new ol.layer.Tile({
//       source: new ol.source.OSM(),
//     }),
//   ],
//   collapseLabel: '\u00BB',
//   label: '\u00AB',
//   collapsed: false,
// });

// rotateWithView.addEventListener('change', function () {
//   overviewMapControl.setRotateWithView(this.checked);
// });

function afficherLayer(checkbox, source, layer) {
  if (checkbox.checked) layer.setSource(source);
  else layer.setSource(null);
  console.log(checkbox.checked)
}

function creationMenuAffichageLayers(layer, source, nomLayer) {
  // création du bouton pour gérer l'affichage
  const id_layerMap = document.getElementById('layerMap');
  let newContent = document.createElement('input');
  newContent.setAttribute("type", "checkbox");
  newContent.setAttribute("id", nomLayer);
  newContent.addEventListener('click', () => {
    afficherLayer(newContent, source, layer)
  });
  let labelNewContent = document.createElement('label');
  labelNewContent.innerHTML = nomLayer;
  labelNewContent.setAttribute("id", nomLayer)
  id_layerMap.appendChild(newContent);
  id_layerMap.appendChild(labelNewContent);
}

async function truc(map) {
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
  const zoomslider = new ol.control.ZoomSlider();
  map.addControl(zoomslider);
  return map;
}

// une fois que la page est bien charger on execute le code suivant 
document.addEventListener('DOMContentLoaded', function () {
  var map = createMap();
  truc(map);
  // map.addLayer(algeria_administrative);




});