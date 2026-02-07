var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_BingAerial_1 = new ol.layer.Tile({
            'title': 'Bing Aerial',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1'
            })
        });

        var lyr_ThunderforestLandscape_2 = new ol.layer.Tile({
            'title': 'Thunderforest Landscape',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=a17c8af5748d4df29e796b6c5dd78826'
            })
        });
var format_RockartPanels_3 = new ol.format.GeoJSON();
var features_RockartPanels_3 = format_RockartPanels_3.readFeatures(json_RockartPanels_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RockartPanels_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RockartPanels_3.addFeatures(features_RockartPanels_3);
var lyr_RockartPanels_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RockartPanels_3, 
                style: style_RockartPanels_3,
                popuplayertitle: 'Rockart Panels',
                interactive: true,
                title: '<img src="styles/legend/RockartPanels_3.png" /> Rockart Panels'
            });
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
var format_Walks_5 = new ol.format.GeoJSON();
var features_Walks_5 = format_Walks_5.readFeatures(json_Walks_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Walks_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Walks_5.addFeatures(features_Walks_5);
var lyr_Walks_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Walks_5, 
                style: style_Walks_5,
                popuplayertitle: 'Walks',
                interactive: true,
    title: 'Walks<br />\
    <img src="styles/legend/Walks_5_0.png" /> 0 - 8 km<br />\
    <img src="styles/legend/Walks_5_1.png" /> 8 - 10 km<br />\
    <img src="styles/legend/Walks_5_2.png" /> 10 - 15 km<br />\
    <img src="styles/legend/Walks_5_3.png" /> 15 - 20 km<br />\
    <img src="styles/legend/Walks_5_4.png" /> 20 - 25 km<br />\
    <img src="styles/legend/Walks_5_5.png" /> 25 - 50 km<br />\
    <img src="styles/legend/Walks_5_6.png" /> 50 + km<br />' });
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
    <img src="styles/legend/POI_6_0.png" /> Building<br />\
    <img src="styles/legend/POI_6_1.png" /> Chalybeate spring <br />\
    <img src="styles/legend/POI_6_2.png" /> Cup and Ring Marked Rock<br />\
    <img src="styles/legend/POI_6_3.png" /> Earthworks<br />\
    <img src="styles/legend/POI_6_4.png" /> Memorial<br />\
    <img src="styles/legend/POI_6_5.png" /> Nothing<br />\
    <img src="styles/legend/POI_6_6.png" /> Other<br />\
    <img src="styles/legend/POI_6_7.png" /> Plane Wreck<br />\
    <img src="styles/legend/POI_6_8.png" /> Ruin<br />\
    <img src="styles/legend/POI_6_9.png" /> Stone<br />\
    <img src="styles/legend/POI_6_10.png" /> Unknown<br />\
    <img src="styles/legend/POI_6_11.png" /> Well or Spring<br />\
    <img src="styles/legend/POI_6_12.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_BingAerial_1.setVisible(false);lyr_ThunderforestLandscape_2.setVisible(true);lyr_RockartPanels_3.setVisible(false);lyr_NorthumberlandNamedStones_4.setVisible(false);lyr_Walks_5.setVisible(true);lyr_POI_6.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_BingAerial_1,lyr_ThunderforestLandscape_2,lyr_RockartPanels_3,lyr_NorthumberlandNamedStones_4,lyr_Walks_5,lyr_POI_6];
lyr_RockartPanels_3.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'OSGB_TILE': 'OSGB_TILE', 'OSGB_X': 'OSGB_X', 'OSGB_Y': 'OSGB_Y', 'cmt': 'cmt', });
lyr_NorthumberlandNamedStones_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'Image': 'Image', 'alias': 'alias', });
lyr_Walks_5.set('fieldAliases', {'fid': 'fid', 'FileName': 'Walk Name', 'Length': 'Length (km)', 'link': 'link', 'Date Walked': 'Date Walked', 'Notes': 'Notes', 'name': 'name', });
lyr_POI_6.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Link': 'Link', 'Description': 'Description', });
lyr_RockartPanels_3.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'OSGB_TILE': 'TextEdit', 'OSGB_X': 'TextEdit', 'OSGB_Y': 'TextEdit', 'cmt': 'TextEdit', });
lyr_NorthumberlandNamedStones_4.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'Image': 'ExternalResource', 'alias': 'TextEdit', });
lyr_Walks_5.set('fieldImages', {'fid': 'TextEdit', 'FileName': 'TextEdit', 'Length': 'TextEdit', 'link': 'TextEdit', 'Date Walked': 'DateTime', 'Notes': 'TextEdit', 'name': '', });
lyr_POI_6.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Link': 'TextEdit', 'Description': 'TextEdit', });
lyr_RockartPanels_3.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'OSGB_TILE': 'hidden field', 'OSGB_X': 'hidden field', 'OSGB_Y': 'hidden field', 'cmt': 'no label', });
lyr_NorthumberlandNamedStones_4.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'description': 'inline label - visible with data', 'Image': 'no label', 'alias': 'no label', });
lyr_Walks_5.set('fieldLabels', {'fid': 'hidden field', 'FileName': 'inline label - always visible', 'Length': 'inline label - always visible', 'link': 'no label', 'Date Walked': 'inline label - always visible', 'Notes': 'no label', 'name': 'no label', });
lyr_POI_6.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Type': 'no label', 'Link': 'no label', 'Description': 'no label', });
lyr_POI_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});