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
                popuplayertitle: "Walks",
                interactive: true,
    title: 'Walks<br />\
    <img src="styles/legend/Walks_1_0.png" /> up to 10 km<br />\
    <img src="styles/legend/Walks_1_1.png" /> 10 - 15 km<br />\
    <img src="styles/legend/Walks_1_2.png" /> 15 - 20 km<br />\
    <img src="styles/legend/Walks_1_3.png" /> 20 - 25 km<br />\
    <img src="styles/legend/Walks_1_4.png" /> 25 + km<br />'
        });
var format_SomeThingsofInterest_2 = new ol.format.GeoJSON();
var features_SomeThingsofInterest_2 = format_SomeThingsofInterest_2.readFeatures(json_SomeThingsofInterest_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SomeThingsofInterest_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SomeThingsofInterest_2.addFeatures(features_SomeThingsofInterest_2);
var lyr_SomeThingsofInterest_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SomeThingsofInterest_2, 
                style: style_SomeThingsofInterest_2,
                popuplayertitle: "Some Things of Interest",
                interactive: true,
    title: 'Some Things of Interest<br />\
    <img src="styles/legend/SomeThingsofInterest_2_0.png" /> Building<br />\
    <img src="styles/legend/SomeThingsofInterest_2_1.png" /> Earthworks<br />\
    <img src="styles/legend/SomeThingsofInterest_2_2.png" /> Memorial<br />\
    <img src="styles/legend/SomeThingsofInterest_2_3.png" /> Nothing<br />\
    <img src="styles/legend/SomeThingsofInterest_2_4.png" /> Plane Wreck<br />\
    <img src="styles/legend/SomeThingsofInterest_2_5.png" /> Ruin<br />\
    <img src="styles/legend/SomeThingsofInterest_2_6.png" /> Unknown<br />'
        });

lyr_ThunderforestLandscape_0.setVisible(true);lyr_Walks_1.setVisible(true);lyr_SomeThingsofInterest_2.setVisible(true);
var layersList = [lyr_ThunderforestLandscape_0,lyr_Walks_1,lyr_SomeThingsofInterest_2];
lyr_Walks_1.set('fieldAliases', {'fid': 'fid', 'FileName': 'Walk Name', 'Length': 'Length (km)', 'Notes': 'Notes', 'link': 'link', });
lyr_SomeThingsofInterest_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Description': 'Description', 'Type': 'Type', });
lyr_Walks_1.set('fieldImages', {'fid': 'TextEdit', 'FileName': 'TextEdit', 'Length': 'TextEdit', 'Notes': 'TextEdit', 'link': 'TextEdit', });
lyr_SomeThingsofInterest_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Description': 'TextEdit', 'Type': 'TextEdit', });
lyr_Walks_1.set('fieldLabels', {'fid': 'hidden field', 'FileName': 'header label - always visible', 'Length': 'inline label - always visible', 'Notes': 'no label', 'link': 'no label', });
lyr_SomeThingsofInterest_2.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'Description': 'no label', 'Type': 'inline label - visible with data', });
lyr_SomeThingsofInterest_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});