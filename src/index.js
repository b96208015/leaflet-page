document.addEventListener('DOMContentLoaded', function(event) {
    var map = L.map('map').setView([23.973875, 120.982024], 8);

    var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osm = new L.TileLayer(osmUrl);
    map.addLayer(osm);

    var drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);
    var drawControl = new L.Control.Draw({
        edit: {
            featureGroup: drawnItems
        }
    });
    map.addControl(drawControl);

    map.on('draw:created', function(e) {
        var layer = e.layer;
        drawnItems.addLayer(layer);
    });
});
