var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenTopo_1 = new ol.layer.Tile({
            'title': 'OpenTopo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png '
            })
        });

        var lyr_ThunderforestOutdoors_2 = new ol.layer.Tile({
            'title': 'Thunderforest Outdoors',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=a17c8af5748d4df29e796b6c5dd78826'
            })
        });

        var lyr_ThunderforestLandscape_3 = new ol.layer.Tile({
            'title': 'Thunderforest Landscape',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=a17c8af5748d4df29e796b6c5dd78826'
            })
        });
var format_Walks_4 = new ol.format.GeoJSON();
var features_Walks_4 = format_Walks_4.readFeatures(json_Walks_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Walks_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Walks_4.addFeatures(features_Walks_4);
var lyr_Walks_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Walks_4, 
                style: style_Walks_4,
                popuplayertitle: 'Walks',
                interactive: true,
    title: 'Walks<br />\
    <img src="styles/legend/Walks_4_0.png" /> up to 10 km<br />\
    <img src="styles/legend/Walks_4_1.png" /> 10 - 15 km<br />\
    <img src="styles/legend/Walks_4_2.png" /> 15 - 20 km<br />\
    <img src="styles/legend/Walks_4_3.png" /> 20 - 25 km<br />\
    <img src="styles/legend/Walks_4_4.png" /> 25 + km<br />' });
var format_NorthumberlandNamedStones_5 = new ol.format.GeoJSON();
var features_NorthumberlandNamedStones_5 = format_NorthumberlandNamedStones_5.readFeatures(json_NorthumberlandNamedStones_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NorthumberlandNamedStones_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NorthumberlandNamedStones_5.addFeatures(features_NorthumberlandNamedStones_5);
var lyr_NorthumberlandNamedStones_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NorthumberlandNamedStones_5, 
                style: style_NorthumberlandNamedStones_5,
                popuplayertitle: 'Northumberland Named Stones',
                interactive: true,
                title: '<img src="styles/legend/NorthumberlandNamedStones_5.png" /> Northumberland Named Stones'
            });
var format_POI_6 = new ol.format.GeoJSON();
var features_POI_6 = format_POI_6.readFeatures(json_POI_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POI_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POI_6.addFeatures(features_POI_6);
var lyr_POI_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POI_6, 
                style: style_POI_6,
                popuplayertitle: 'POI',
                interactive: true,
    title: 'POI<br />\
    <img src="styles/legend/POI_6_0.png" /> Boundary Stone<br />\
    <img src="styles/legend/POI_6_1.png" /> Building<br />\
    <img src="styles/legend/POI_6_2.png" /> Cup and Ring Marked Rock<br />\
    <img src="styles/legend/POI_6_3.png" /> Earthworks<br />\
    <img src="styles/legend/POI_6_4.png" /> Memorial<br />\
    <img src="styles/legend/POI_6_5.png" /> Nothing<br />\
    <img src="styles/legend/POI_6_6.png" /> Plane Wreck<br />\
    <img src="styles/legend/POI_6_7.png" /> Ruin<br />\
    <img src="styles/legend/POI_6_8.png" /> Unknown<br />\
    <img src="styles/legend/POI_6_9.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(false);lyr_OpenTopo_1.setVisible(false);lyr_ThunderforestOutdoors_2.setVisible(false);lyr_ThunderforestLandscape_3.setVisible(true);lyr_Walks_4.setVisible(true);lyr_NorthumberlandNamedStones_5.setVisible(true);lyr_POI_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_OpenTopo_1,lyr_ThunderforestOutdoors_2,lyr_ThunderforestLandscape_3,lyr_Walks_4,lyr_NorthumberlandNamedStones_5,lyr_POI_6];
lyr_Walks_4.set('fieldAliases', {'fid': 'fid', 'FileName': 'Walk Name', 'Length': 'Length (km)', 'Notes': 'Notes', 'link': 'link', });
lyr_NorthumberlandNamedStones_5.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', });
lyr_POI_6.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Description': 'Description', 'Type': 'Type', });
lyr_Walks_4.set('fieldImages', {'fid': 'TextEdit', 'FileName': 'TextEdit', 'Length': 'TextEdit', 'Notes': 'TextEdit', 'link': 'TextEdit', });
lyr_NorthumberlandNamedStones_5.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', });
lyr_POI_6.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Description': 'TextEdit', 'Type': 'TextEdit', });
lyr_Walks_4.set('fieldLabels', {'fid': 'hidden field', 'FileName': 'header label - always visible', 'Length': 'inline label - always visible', 'Notes': 'no label', 'link': 'no label', });
lyr_NorthumberlandNamedStones_5.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'description': 'inline label - visible with data', });
lyr_POI_6.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Description': 'no label', 'Type': 'no label', });
lyr_POI_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});