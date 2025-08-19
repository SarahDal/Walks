var wms_layers = [];


        var lyr_ThunderforestLandscape_0 = new ol.layer.Tile({
            'title': 'Thunderforest Landscape',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=a17c8af5748d4df29e796b6c5dd78826'
            })
        });
var format_Walks_1 = new ol.format.GeoJSON();
var features_Walks_1 = format_Walks_1.readFeatures(json_Walks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Walks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Walks_1.addFeatures(features_Walks_1);
var lyr_Walks_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Walks_1, 
                style: style_Walks_1,
                popuplayertitle: 'Walks',
                interactive: true,
    title: 'Walks<br />\
    <img src="styles/legend/Walks_1_0.png" /> 0 - 8 km<br />\
    <img src="styles/legend/Walks_1_1.png" /> 8 - 10 km<br />\
    <img src="styles/legend/Walks_1_2.png" /> 10 - 15 km<br />\
    <img src="styles/legend/Walks_1_3.png" /> 15 - 20 km<br />\
    <img src="styles/legend/Walks_1_4.png" /> 20 - 25 km<br />\
    <img src="styles/legend/Walks_1_5.png" /> 25 - 50 km<br />\
    <img src="styles/legend/Walks_1_6.png" /> 50 + km<br />' });
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
    <img src="styles/legend/POI_2_0.png" /> Boundary Stone<br />\
    <img src="styles/legend/POI_2_1.png" /> Building<br />\
    <img src="styles/legend/POI_2_2.png" /> Cup and Ring Marked Rock<br />\
    <img src="styles/legend/POI_2_3.png" /> Earthworks<br />\
    <img src="styles/legend/POI_2_4.png" /> Memorial<br />\
    <img src="styles/legend/POI_2_5.png" /> Nothing<br />\
    <img src="styles/legend/POI_2_6.png" /> Plane Wreck<br />\
    <img src="styles/legend/POI_2_7.png" /> Ruin<br />\
    <img src="styles/legend/POI_2_8.png" /> Unknown<br />\
    <img src="styles/legend/POI_2_9.png" /> Chalybeate spring <br />\
    <img src="styles/legend/POI_2_10.png" /> Other<br />\
    <img src="styles/legend/POI_2_11.png" /> <br />' });

lyr_ThunderforestLandscape_0.setVisible(true);lyr_Walks_1.setVisible(true);lyr_POI_2.setVisible(true);
var layersList = [lyr_ThunderforestLandscape_0,lyr_Walks_1,lyr_POI_2];
lyr_Walks_1.set('fieldAliases', {'fid': 'fid', 'FileName': 'Walk Name', 'Length': 'Length (km)', 'link': 'link', 'Date Walked': 'Date Walked', 'Notes': 'Notes', });
lyr_POI_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Link': 'Link', 'Description': 'Description', });
lyr_Walks_1.set('fieldImages', {'fid': 'TextEdit', 'FileName': 'TextEdit', 'Length': 'TextEdit', 'link': 'TextEdit', 'Date Walked': 'DateTime', 'Notes': 'TextEdit', });
lyr_POI_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Link': 'TextEdit', 'Description': 'TextEdit', });
lyr_Walks_1.set('fieldLabels', {'fid': 'hidden field', 'FileName': 'inline label - always visible', 'Length': 'inline label - always visible', 'link': 'no label', 'Date Walked': 'inline label - always visible', 'Notes': 'no label', });
lyr_POI_2.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Type': 'no label', 'Link': 'no label', 'Description': 'no label', });
lyr_POI_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});