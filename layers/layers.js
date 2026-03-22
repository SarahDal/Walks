var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ThunderforestOutdoors_1 = new ol.layer.Tile({
            'title': 'Thunderforest Outdoors',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=a17c8af5748d4df29e796b6c5dd78826'
            })
        });
var format_POI_2 = new ol.format.GeoJSON();
var features_POI_2 = format_POI_2.readFeatures(json_POI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POI_2.addFeatures(features_POI_2);
var lyr_POI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POI_2, 
                style: style_POI_2,
                popuplayertitle: 'POI',
                interactive: true,
    title: 'POI<br />\
    <img src="styles/legend/POI_2_0.png" /> Building<br />\
    <img src="styles/legend/POI_2_1.png" /> Chalybeate spring <br />\
    <img src="styles/legend/POI_2_2.png" /> Cup and Ring Marked Rock<br />\
    <img src="styles/legend/POI_2_3.png" /> Earthworks<br />\
    <img src="styles/legend/POI_2_4.png" /> Memorial<br />\
    <img src="styles/legend/POI_2_5.png" /> Nothing<br />\
    <img src="styles/legend/POI_2_6.png" /> Other<br />\
    <img src="styles/legend/POI_2_7.png" /> Plane Wreck<br />\
    <img src="styles/legend/POI_2_8.png" /> Ruin<br />\
    <img src="styles/legend/POI_2_9.png" /> Stone<br />\
    <img src="styles/legend/POI_2_10.png" /> Unknown<br />\
    <img src="styles/legend/POI_2_11.png" /> Well or Spring<br />\
    <img src="styles/legend/POI_2_12.png" /> <br />' });
var format_Walks_3 = new ol.format.GeoJSON();
var features_Walks_3 = format_Walks_3.readFeatures(json_Walks_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Walks_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Walks_3.addFeatures(features_Walks_3);
var lyr_Walks_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Walks_3, 
                style: style_Walks_3,
                popuplayertitle: 'Walks',
                interactive: true,
    title: 'Walks<br />\
    <img src="styles/legend/Walks_3_0.png" /> 0 - 8 km<br />\
    <img src="styles/legend/Walks_3_1.png" /> 8 - 10 km<br />\
    <img src="styles/legend/Walks_3_2.png" /> 10 - 15 km<br />\
    <img src="styles/legend/Walks_3_3.png" /> 15 - 20 km<br />\
    <img src="styles/legend/Walks_3_4.png" /> 20 - 25 km<br />\
    <img src="styles/legend/Walks_3_5.png" /> 25 - 50 km<br />\
    <img src="styles/legend/Walks_3_6.png" /> 50 + km<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_ThunderforestOutdoors_1.setVisible(true);lyr_POI_2.setVisible(true);lyr_Walks_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ThunderforestOutdoors_1,lyr_POI_2,lyr_Walks_3];
lyr_POI_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Link': 'Link', 'Description': 'Description', });
lyr_Walks_3.set('fieldAliases', {'fid': 'fid', 'FileName': 'Walk Name', 'Length': 'Length (km)', 'link': 'link', 'Date Walked': 'Date Walked', 'Notes': 'Notes', 'name': 'name', });
lyr_POI_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Link': 'TextEdit', 'Description': 'TextEdit', });
lyr_Walks_3.set('fieldImages', {'fid': 'TextEdit', 'FileName': 'TextEdit', 'Length': 'TextEdit', 'link': 'TextEdit', 'Date Walked': 'DateTime', 'Notes': 'TextEdit', 'name': '', });
lyr_POI_2.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Type': 'no label', 'Link': 'no label', 'Description': 'no label', });
lyr_Walks_3.set('fieldLabels', {'fid': 'hidden field', 'FileName': 'inline label - always visible', 'Length': 'inline label - always visible', 'link': 'no label', 'Date Walked': 'inline label - always visible', 'Notes': 'no label', 'name': 'no label', });
lyr_Walks_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});