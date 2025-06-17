var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
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
    <img src="styles/legend/Walks_2_0.png" /> 0 - 8 km<br />\
    <img src="styles/legend/Walks_2_1.png" /> 8 - 10 km<br />\
    <img src="styles/legend/Walks_2_2.png" /> 10 - 15 km<br />\
    <img src="styles/legend/Walks_2_3.png" /> 15 - 20 km<br />\
    <img src="styles/legend/Walks_2_4.png" /> 20 - 25 km<br />\
    <img src="styles/legend/Walks_2_5.png" /> 25 - 62 km<br />' });
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
var format_POI_4 = new ol.format.GeoJSON();
var features_POI_4 = format_POI_4.readFeatures(json_POI_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POI_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POI_4.addFeatures(features_POI_4);
var lyr_POI_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POI_4, 
                style: style_POI_4,
                popuplayertitle: 'POI',
                interactive: true,
    title: 'POI<br />\
    <img src="styles/legend/POI_4_0.png" /> Boundary Stone<br />\
    <img src="styles/legend/POI_4_1.png" /> Building<br />\
    <img src="styles/legend/POI_4_2.png" /> Cup and Ring Marked Rock<br />\
    <img src="styles/legend/POI_4_3.png" /> Earthworks<br />\
    <img src="styles/legend/POI_4_4.png" /> Memorial<br />\
    <img src="styles/legend/POI_4_5.png" /> Nothing<br />\
    <img src="styles/legend/POI_4_6.png" /> Plane Wreck<br />\
    <img src="styles/legend/POI_4_7.png" /> Ruin<br />\
    <img src="styles/legend/POI_4_8.png" /> Unknown<br />\
    <img src="styles/legend/POI_4_9.png" /> Chalybeate spring <br />\
    <img src="styles/legend/POI_4_10.png" /> Other<br />\
    <img src="styles/legend/POI_4_11.png" /> <br />' });
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

lyr_OpenStreetMap_0.setVisible(false);lyr_ThunderforestLandscape_1.setVisible(true);lyr_Walks_2.setVisible(true);lyr_RockartPanels_3.setVisible(true);lyr_POI_4.setVisible(true);lyr_NorthumberlandNamedStones_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ThunderforestLandscape_1,lyr_Walks_2,lyr_RockartPanels_3,lyr_POI_4,lyr_NorthumberlandNamedStones_5];
lyr_Walks_2.set('fieldAliases', {'fid': 'fid', 'FileName': 'Walk Name', 'Length': 'Length (km)', 'link': 'link', 'Date Walked': 'Date Walked', 'Notes': 'Notes', });
lyr_RockartPanels_3.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'OSGB_TILE': 'OSGB_TILE', 'OSGB_X': 'OSGB_X', 'OSGB_Y': 'OSGB_Y', 'cmt': 'cmt', });
lyr_POI_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Link': 'Link', 'Description': 'Description', });
lyr_NorthumberlandNamedStones_5.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'Image': 'Image', 'alias': 'alias', });
lyr_Walks_2.set('fieldImages', {'fid': 'TextEdit', 'FileName': 'TextEdit', 'Length': 'TextEdit', 'link': 'TextEdit', 'Date Walked': 'DateTime', 'Notes': 'TextEdit', });
lyr_RockartPanels_3.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'OSGB_TILE': 'TextEdit', 'OSGB_X': 'TextEdit', 'OSGB_Y': 'TextEdit', 'cmt': 'TextEdit', });
lyr_POI_4.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Link': 'TextEdit', 'Description': 'TextEdit', });
lyr_NorthumberlandNamedStones_5.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'Image': 'ExternalResource', 'alias': 'TextEdit', });
lyr_Walks_2.set('fieldLabels', {'fid': 'hidden field', 'FileName': 'inline label - always visible', 'Length': 'inline label - always visible', 'link': 'no label', 'Date Walked': 'inline label - always visible', 'Notes': 'no label', });
lyr_RockartPanels_3.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'OSGB_TILE': 'hidden field', 'OSGB_X': 'hidden field', 'OSGB_Y': 'hidden field', 'cmt': 'no label', });
lyr_POI_4.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Type': 'no label', 'Link': 'no label', 'Description': 'no label', });
lyr_NorthumberlandNamedStones_5.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'description': 'inline label - visible with data', 'Image': 'no label', 'alias': 'no label', });
lyr_NorthumberlandNamedStones_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});