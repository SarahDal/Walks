var wms_layers = [];


        var lyr_BingAerial_0 = new ol.layer.Tile({
            'title': 'Bing Aerial',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1'
            })
        });

        var lyr_ThunderforestLandscape_1 = new ol.layer.Tile({
            'title': 'Thunderforest Landscape',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=a17c8af5748d4df29e796b6c5dd78826'
            })
        });
var format_Walks_2 = new ol.format.GeoJSON();
var features_Walks_2 = format_Walks_2.readFeatures(json_Walks_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Walks_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Walks_2.addFeatures(features_Walks_2);
var lyr_Walks_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Walks_2, 
                style: style_Walks_2,
                popuplayertitle: 'Walks',
                interactive: true,
    title: 'Walks<br />\
    <img src="styles/legend/Walks_2_0.png" /> 0 - 6<br />\
    <img src="styles/legend/Walks_2_1.png" /> 6 - 12<br />\
    <img src="styles/legend/Walks_2_2.png" /> 12 - 18<br />\
    <img src="styles/legend/Walks_2_3.png" /> 18 - 25<br />\
    <img src="styles/legend/Walks_2_4.png" /> 25 - 36<br />\
    <img src="styles/legend/Walks_2_5.png" /> 36 - 500<br />' });
var format_POI_3 = new ol.format.GeoJSON();
var features_POI_3 = format_POI_3.readFeatures(json_POI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POI_3.addFeatures(features_POI_3);
var lyr_POI_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POI_3, 
                style: style_POI_3,
                popuplayertitle: 'POI',
                interactive: true,
    title: 'POI<br />\
    <img src="styles/legend/POI_3_0.png" /> Building<br />\
    <img src="styles/legend/POI_3_1.png" /> Chalybeate spring <br />\
    <img src="styles/legend/POI_3_2.png" /> Cup and Ring Marked Rock<br />\
    <img src="styles/legend/POI_3_3.png" /> Earthworks<br />\
    <img src="styles/legend/POI_3_4.png" /> Memorial<br />\
    <img src="styles/legend/POI_3_5.png" /> Nothing<br />\
    <img src="styles/legend/POI_3_6.png" /> Other<br />\
    <img src="styles/legend/POI_3_7.png" /> Plane Wreck<br />\
    <img src="styles/legend/POI_3_8.png" /> ruin<br />\
    <img src="styles/legend/POI_3_9.png" /> Ruin<br />\
    <img src="styles/legend/POI_3_10.png" /> Stone<br />\
    <img src="styles/legend/POI_3_11.png" /> Unknown<br />\
    <img src="styles/legend/POI_3_12.png" /> Well or Spring<br />\
    <img src="styles/legend/POI_3_13.png" /> <br />' });
var format_NorthumberlandNamedStones_4 = new ol.format.GeoJSON();
var features_NorthumberlandNamedStones_4 = format_NorthumberlandNamedStones_4.readFeatures(json_NorthumberlandNamedStones_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NorthumberlandNamedStones_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NorthumberlandNamedStones_4.addFeatures(features_NorthumberlandNamedStones_4);
var lyr_NorthumberlandNamedStones_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NorthumberlandNamedStones_4, 
                style: style_NorthumberlandNamedStones_4,
                popuplayertitle: 'Northumberland Named Stones',
                interactive: true,
                title: '<img src="styles/legend/NorthumberlandNamedStones_4.png" /> Northumberland Named Stones'
            });

lyr_BingAerial_0.setVisible(true);lyr_ThunderforestLandscape_1.setVisible(true);lyr_Walks_2.setVisible(true);lyr_POI_3.setVisible(true);lyr_NorthumberlandNamedStones_4.setVisible(true);
var layersList = [lyr_BingAerial_0,lyr_ThunderforestLandscape_1,lyr_Walks_2,lyr_POI_3,lyr_NorthumberlandNamedStones_4];
lyr_Walks_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'FileName': 'FileName', 'Length': 'Length', 'link': 'link', 'Date Walked': 'Date Walked', 'Notes': 'Notes', 'name': 'name', });
lyr_POI_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Name': 'Name', 'Type': 'Type', 'Link': 'Link', 'Description': 'Description', });
lyr_NorthumberlandNamedStones_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Name': 'Name', 'description': 'description', 'Image': 'Image', 'alias': 'alias', });
lyr_Walks_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'FileName': 'TextEdit', 'Length': 'TextEdit', 'link': 'TextEdit', 'Date Walked': 'DateTime', 'Notes': 'TextEdit', 'name': 'TextEdit', });
lyr_POI_3.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Link': 'TextEdit', 'Description': 'TextEdit', });
lyr_NorthumberlandNamedStones_4.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'Image': 'ExternalResource', 'alias': 'TextEdit', });
lyr_Walks_2.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'FileName': 'no label', 'Length': 'no label', 'link': 'no label', 'Date Walked': 'inline label - always visible', 'Notes': 'no label', 'name': 'no label', });
lyr_POI_3.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Name': 'no label', 'Type': 'no label', 'Link': 'no label', 'Description': 'no label', });
lyr_NorthumberlandNamedStones_4.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Name': 'no label', 'description': 'no label', 'Image': 'no label', 'alias': 'no label', });
lyr_NorthumberlandNamedStones_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});