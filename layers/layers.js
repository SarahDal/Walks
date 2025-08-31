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

lyr_ThunderforestLandscape_0.setVisible(true);lyr_Walks_1.setVisible(true);
var layersList = [lyr_ThunderforestLandscape_0,lyr_Walks_1];
lyr_Walks_1.set('fieldAliases', {'fid': 'fid', 'FileName': 'Walk Name', 'Length': 'Length (km)', 'link': 'link', 'Date Walked': 'Date Walked', 'Notes': 'Notes', });
lyr_Walks_1.set('fieldImages', {'fid': 'TextEdit', 'FileName': 'TextEdit', 'Length': 'TextEdit', 'link': 'TextEdit', 'Date Walked': 'DateTime', 'Notes': 'TextEdit', });
lyr_Walks_1.set('fieldLabels', {'fid': 'hidden field', 'FileName': 'inline label - always visible', 'Length': 'inline label - always visible', 'link': 'no label', 'Date Walked': 'inline label - always visible', 'Notes': 'no label', });
lyr_Walks_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});