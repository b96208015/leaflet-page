document.addEventListener('DOMContentLoaded', function(event) {
    var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var hikebikemapUrl = 'https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png';

    var osm = new L.TileLayer(osmUrl);
    var hikebikemap = new L.TileLayer(hikebikemapUrl);
    
    var map = L.map('map', {
        center: [23.973875, 120.982024],
        zoom: 8,
        layers: osm
    });
    L.control.layers({
        "OpenStreetMap": osm,
        "HikeBikeMap": hikebikemap
    }).addTo(map);

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
