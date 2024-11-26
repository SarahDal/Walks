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
                popuplayertitle: "Walks",
                interactive: true,
    title: 'Walks<br />\
    <img src="styles/legend/Walks_4_0.png" /> up to 10 km<br />\
    <img src="styles/legend/Walks_4_1.png" /> 10 - 15 km<br />\
    <img src="styles/legend/Walks_4_2.png" /> 15 - 20 km<br />\
    <img src="styles/legend/Walks_4_3.png" /> 20 - 25 km<br />\
    <img src="styles/legend/Walks_4_4.png" /> 25 + km<br />'
        });
var format_SomeThingsofInterest_5 = new ol.format.GeoJSON();
var features_SomeThingsofInterest_5 = format_SomeThingsofInterest_5.readFeatures(json_SomeThingsofInterest_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SomeThingsofInterest_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SomeThingsofInterest_5.addFeatures(features_SomeThingsofInterest_5);
var lyr_SomeThingsofInterest_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SomeThingsofInterest_5, 
                style: style_SomeThingsofInterest_5,
                popuplayertitle: "Some Things of Interest",
                interactive: true,
    title: 'Some Things of Interest<br />\
    <img src="styles/legend/SomeThingsofInterest_5_0.png" /> Building<br />\
    <img src="styles/legend/SomeThingsofInterest_5_1.png" /> Earthworks<br />\
    <img src="styles/legend/SomeThingsofInterest_5_2.png" /> Memorial<br />\
    <img src="styles/legend/SomeThingsofInterest_5_3.png" /> Nothing<br />\
    <img src="styles/legend/SomeThingsofInterest_5_4.png" /> Plane Wreck<br />\
    <img src="styles/legend/SomeThingsofInterest_5_5.png" /> Ruin<br />\
    <img src="styles/legend/SomeThingsofInterest_5_6.png" /> Unknown<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_OpenTopo_1.setVisible(true);lyr_ThunderforestOutdoors_2.setVisible(true);lyr_ThunderforestLandscape_3.setVisible(true);lyr_Walks_4.setVisible(true);lyr_SomeThingsofInterest_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_OpenTopo_1,lyr_ThunderforestOutdoors_2,lyr_ThunderforestLandscape_3,lyr_Walks_4,lyr_SomeThingsofInterest_5];
lyr_Walks_4.set('fieldAliases', {'fid': 'fid', 'FileName': 'Walk Name', 'Length': 'Length (km)', 'Notes': 'Notes', 'link': 'link', });
lyr_SomeThingsofInterest_5.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Description': 'Description', 'Type': 'Type', });
lyr_Walks_4.set('fieldImages', {'fid': 'TextEdit', 'FileName': 'TextEdit', 'Length': 'TextEdit', 'Notes': 'TextEdit', 'link': 'TextEdit', });
lyr_SomeThingsofInterest_5.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Description': 'TextEdit', 'Type': 'TextEdit', });
lyr_Walks_4.set('fieldLabels', {'fid': 'hidden field', 'FileName': 'header label - always visible', 'Length': 'inline label - always visible', 'Notes': 'no label', 'link': 'no label', });
lyr_SomeThingsofInterest_5.set('fieldLabels', {'fid': 'hidden field', 'Name': 'no label', 'Description': 'no label', 'Type': 'inline label - visible with data', });
lyr_SomeThingsofInterest_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});