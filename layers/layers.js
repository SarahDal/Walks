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
    <img src="styles/legend/Walks_2_5.png" /> 25 - 50 km<br />\
    <img src="styles/legend/Walks_2_6.png" /> 50 + km<br />' });
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
    <img src="styles/legend/POI_3_8.png" /> Ruin<br />\
    <img src="styles/legend/POI_3_9.png" /> Stone<br />\
    <img src="styles/legend/POI_3_10.png" /> Unknown<br />\
    <img src="styles/legend/POI_3_11.png" /> Well or Spring<br />\
    <img src="styles/legend/POI_3_12.png" /> <br />' });
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
var format_NlandHillList_5 = new ol.format.GeoJSON();
var features_NlandHillList_5 = format_NlandHillList_5.readFeatures(json_NlandHillList_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NlandHillList_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NlandHillList_5.addFeatures(features_NlandHillList_5);
var lyr_NlandHillList_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NlandHillList_5, 
                style: style_NlandHillList_5,
                popuplayertitle: 'NlandHillList',
                interactive: true,
    title: 'NlandHillList<br />\
    <img src="styles/legend/NlandHillList_5_0.png" /> 23 - 109<br />\
    <img src="styles/legend/NlandHillList_5_1.png" /> 109 - 153<br />\
    <img src="styles/legend/NlandHillList_5_2.png" /> 153 - 175<br />\
    <img src="styles/legend/NlandHillList_5_3.png" /> 175 - 186<br />\
    <img src="styles/legend/NlandHillList_5_4.png" /> 186 - 203<br />\
    <img src="styles/legend/NlandHillList_5_5.png" /> 203 - 217<br />\
    <img src="styles/legend/NlandHillList_5_6.png" /> 217 - 235<br />\
    <img src="styles/legend/NlandHillList_5_7.png" /> 235 - 252<br />\
    <img src="styles/legend/NlandHillList_5_8.png" /> 252 - 268<br />\
    <img src="styles/legend/NlandHillList_5_9.png" /> 268 - 279<br />\
    <img src="styles/legend/NlandHillList_5_10.png" /> 279 - 301<br />\
    <img src="styles/legend/NlandHillList_5_11.png" /> 301 - 320<br />\
    <img src="styles/legend/NlandHillList_5_12.png" /> 320 - 336<br />\
    <img src="styles/legend/NlandHillList_5_13.png" /> 336 - 353<br />\
    <img src="styles/legend/NlandHillList_5_14.png" /> 353 - 380<br />\
    <img src="styles/legend/NlandHillList_5_15.png" /> 380 - 406<br />\
    <img src="styles/legend/NlandHillList_5_16.png" /> 406 - 433<br />\
    <img src="styles/legend/NlandHillList_5_17.png" /> 433 - 455<br />\
    <img src="styles/legend/NlandHillList_5_18.png" /> 455 - 484<br />\
    <img src="styles/legend/NlandHillList_5_19.png" /> 484 - 499<br />\
    <img src="styles/legend/NlandHillList_5_20.png" /> 499 - 516<br />\
    <img src="styles/legend/NlandHillList_5_21.png" /> 516 - 537<br />\
    <img src="styles/legend/NlandHillList_5_22.png" /> 537 - 569<br />\
    <img src="styles/legend/NlandHillList_5_23.png" /> 569 - 617<br />\
    <img src="styles/legend/NlandHillList_5_24.png" /> 617 - 816<br />' });

lyr_OpenStreetMap_0.setVisible(false);lyr_ThunderforestLandscape_1.setVisible(true);lyr_Walks_2.setVisible(true);lyr_POI_3.setVisible(false);lyr_NorthumberlandNamedStones_4.setVisible(false);lyr_NlandHillList_5.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_ThunderforestLandscape_1,lyr_Walks_2,lyr_POI_3,lyr_NorthumberlandNamedStones_4,lyr_NlandHillList_5];
lyr_Walks_2.set('fieldAliases', {'fid': 'fid', 'FileName': 'Walk Name', 'Length': 'Length (km)', 'link': 'link', 'Date Walked': 'Date Walked', 'Notes': 'Notes', 'name': 'name', });
lyr_POI_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Type': 'Type', 'Link': 'Link', 'Description': 'Description', });
lyr_NorthumberlandNamedStones_4.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'Image': 'Image', 'alias': 'alias', });
lyr_NlandHillList_5.set('fieldAliases', {'fid': 'fid', 'hillnumber': 'hillnumber', 'hillname': 'hillname', 'region': 'region', 'parent': 'parent', 'classification': 'classification', 'metres': 'metres', 'gridref': 'gridref', 'gridref10': 'gridref10', 'colgridref': 'colgridref', 'colheight': 'colheight', 'drop': 'drop', 'feature': 'feature', 'observations': 'observations', 'survey': 'survey', 'revision': 'revision', 'comments': 'comments', 'xcoord': 'xcoord', 'ycoord': 'ycoord', 'latitude': 'latitude', 'longitude': 'longitude', 'country': 'country', 'climbed': 'climbed', 'tumponly': 'tumponly', 'Marilyn': 'Marilyn', 'Marilyn twin-top': 'Marilyn twin-top', 'Hump': 'Hump', 'Hump twin-top': 'Hump twin-top', 'Tump (all)': 'Tump (all)', 'Simm': 'Simm', 'Dodd': 'Dodd', '4s': '4s', 'Munro': 'Munro', 'Munro Top': 'Munro Top', 'Furth': 'Furth', 'Corbett': 'Corbett', 'Graham': 'Graham', 'Donald': 'Donald', 'Donald Top': 'Donald Top', 'Hewitt': 'Hewitt', 'Nuttall': 'Nuttall', 'Dewey': 'Dewey', 'Donald Dewey': 'Donald Dewey', 'Highland Five': 'Highland Five', '300-399m hill': '300-399m hill', '200-299m hill': '200-299m hill', '100-199m hill': '100-199m hill', '0-99m hill': '0-99m hill', 'Wainwright': 'Wainwright', 'Wainwright Outlying Fell': 'Wainwright Outlying Fell', 'Birkett': 'Birkett', 'Ethel': 'Ethel', 'High Hills of Britain': 'High Hills of Britain', 'Synge': 'Synge', 'Fellranger': 'Fellranger', 'Historic County Top (pre-1889)': 'Historic County Top (pre-1889)', 'Administrative County Top (1889 to 1996)': 'Administrative County Top (1889 to 1996)', 'Current County/UA Top': 'Current County/UA Top', 'London Borough Top': 'London Borough Top', 'SIB': 'SIB', 'Submarilyn': 'Submarilyn', 'Subhump': 'Subhump', 'Subsimm': 'Subsimm', 'Subdodd': 'Subdodd', 'Sub490-499m hill': 'Sub490-499m hill', 'Murdo': 'Murdo', 'Corbett Top': 'Corbett Top', 'Graham Top': 'Graham Top', 'New Donald': 'New Donald', 'Buxton & Lewis': 'Buxton & Lewis', 'Bridge': 'Bridge', 'Yeaman': 'Yeaman', 'Clem': 'Clem', 'Trail 100': 'Trail 100', 'Deleted Munro Top': 'Deleted Munro Top', 'Deleted Corbett': 'Deleted Corbett', 'Deleted Graham': 'Deleted Graham', 'Deleted Nuttall': 'Deleted Nuttall', 'Deleted Donald Top': 'Deleted Donald Top', 'Other lists': 'Other lists', 'Unclassified': 'Unclassified', 'P600m Peaks': 'P600m Peaks', 'P500m Peaks': 'P500m Peaks', });
lyr_Walks_2.set('fieldImages', {'fid': 'TextEdit', 'FileName': 'TextEdit', 'Length': 'TextEdit', 'link': 'TextEdit', 'Date Walked': 'DateTime', 'Notes': 'TextEdit', 'name': '', });
lyr_POI_3.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Link': 'TextEdit', 'Description': 'TextEdit', });
lyr_NorthumberlandNamedStones_4.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'Image': 'ExternalResource', 'alias': 'TextEdit', });
lyr_NlandHillList_5.set('fieldImages', {'fid': 'TextEdit', 'hillnumber': 'Range', 'hillname': 'TextEdit', 'region': 'Range', 'parent': 'Range', 'classification': 'TextEdit', 'metres': 'TextEdit', 'gridref': 'TextEdit', 'gridref10': 'TextEdit', 'colgridref': 'TextEdit', 'colheight': 'TextEdit', 'drop': 'TextEdit', 'feature': 'TextEdit', 'observations': 'TextEdit', 'survey': 'TextEdit', 'revision': 'TextEdit', 'comments': 'TextEdit', 'xcoord': 'Range', 'ycoord': 'Range', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'country': 'TextEdit', 'climbed': 'TextEdit', 'tumponly': 'CheckBox', 'Marilyn': 'CheckBox', 'Marilyn twin-top': 'CheckBox', 'Hump': 'CheckBox', 'Hump twin-top': 'CheckBox', 'Tump (all)': 'CheckBox', 'Simm': 'CheckBox', 'Dodd': 'CheckBox', '4s': 'CheckBox', 'Munro': 'CheckBox', 'Munro Top': 'CheckBox', 'Furth': 'CheckBox', 'Corbett': 'CheckBox', 'Graham': 'CheckBox', 'Donald': 'CheckBox', 'Donald Top': 'CheckBox', 'Hewitt': 'CheckBox', 'Nuttall': 'CheckBox', 'Dewey': 'CheckBox', 'Donald Dewey': 'CheckBox', 'Highland Five': 'CheckBox', '300-399m hill': 'CheckBox', '200-299m hill': 'CheckBox', '100-199m hill': 'CheckBox', '0-99m hill': 'CheckBox', 'Wainwright': 'CheckBox', 'Wainwright Outlying Fell': 'CheckBox', 'Birkett': 'CheckBox', 'Ethel': 'CheckBox', 'High Hills of Britain': 'CheckBox', 'Synge': 'CheckBox', 'Fellranger': 'CheckBox', 'Historic County Top (pre-1889)': 'CheckBox', 'Administrative County Top (1889 to 1996)': 'CheckBox', 'Current County/UA Top': 'CheckBox', 'London Borough Top': 'CheckBox', 'SIB': 'CheckBox', 'Submarilyn': 'CheckBox', 'Subhump': 'CheckBox', 'Subsimm': 'CheckBox', 'Subdodd': 'CheckBox', 'Sub490-499m hill': 'CheckBox', 'Murdo': 'CheckBox', 'Corbett Top': 'CheckBox', 'Graham Top': 'CheckBox', 'New Donald': 'CheckBox', 'Buxton & Lewis': 'CheckBox', 'Bridge': 'CheckBox', 'Yeaman': 'CheckBox', 'Clem': 'CheckBox', 'Trail 100': 'CheckBox', 'Deleted Munro Top': 'CheckBox', 'Deleted Corbett': 'CheckBox', 'Deleted Graham': 'CheckBox', 'Deleted Nuttall': 'CheckBox', 'Deleted Donald Top': 'CheckBox', 'Other lists': 'CheckBox', 'Unclassified': 'CheckBox', 'P600m Peaks': 'CheckBox', 'P500m Peaks': 'CheckBox', });
lyr_Walks_2.set('fieldLabels', {'fid': 'hidden field', 'FileName': 'inline label - always visible', 'Length': 'inline label - always visible', 'link': 'no label', 'Date Walked': 'inline label - always visible', 'Notes': 'no label', 'name': 'no label', });
lyr_POI_3.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Type': 'no label', 'Link': 'no label', 'Description': 'no label', });
lyr_NorthumberlandNamedStones_4.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'description': 'inline label - visible with data', 'Image': 'no label', 'alias': 'no label', });
lyr_NlandHillList_5.set('fieldLabels', {'fid': 'no label', 'hillnumber': 'no label', 'hillname': 'no label', 'region': 'no label', 'parent': 'no label', 'classification': 'no label', 'metres': 'no label', 'gridref': 'no label', 'gridref10': 'no label', 'colgridref': 'no label', 'colheight': 'no label', 'drop': 'no label', 'feature': 'no label', 'observations': 'no label', 'survey': 'no label', 'revision': 'no label', 'comments': 'no label', 'xcoord': 'no label', 'ycoord': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'country': 'no label', 'climbed': 'no label', 'tumponly': 'no label', 'Marilyn': 'no label', 'Marilyn twin-top': 'no label', 'Hump': 'no label', 'Hump twin-top': 'no label', 'Tump (all)': 'no label', 'Simm': 'no label', 'Dodd': 'no label', '4s': 'no label', 'Munro': 'no label', 'Munro Top': 'no label', 'Furth': 'no label', 'Corbett': 'no label', 'Graham': 'no label', 'Donald': 'no label', 'Donald Top': 'no label', 'Hewitt': 'no label', 'Nuttall': 'no label', 'Dewey': 'no label', 'Donald Dewey': 'no label', 'Highland Five': 'no label', '300-399m hill': 'no label', '200-299m hill': 'no label', '100-199m hill': 'no label', '0-99m hill': 'no label', 'Wainwright': 'no label', 'Wainwright Outlying Fell': 'no label', 'Birkett': 'no label', 'Ethel': 'no label', 'High Hills of Britain': 'no label', 'Synge': 'no label', 'Fellranger': 'no label', 'Historic County Top (pre-1889)': 'no label', 'Administrative County Top (1889 to 1996)': 'no label', 'Current County/UA Top': 'no label', 'London Borough Top': 'no label', 'SIB': 'no label', 'Submarilyn': 'no label', 'Subhump': 'no label', 'Subsimm': 'no label', 'Subdodd': 'no label', 'Sub490-499m hill': 'no label', 'Murdo': 'no label', 'Corbett Top': 'no label', 'Graham Top': 'no label', 'New Donald': 'no label', 'Buxton & Lewis': 'no label', 'Bridge': 'no label', 'Yeaman': 'no label', 'Clem': 'no label', 'Trail 100': 'no label', 'Deleted Munro Top': 'no label', 'Deleted Corbett': 'no label', 'Deleted Graham': 'no label', 'Deleted Nuttall': 'no label', 'Deleted Donald Top': 'no label', 'Other lists': 'no label', 'Unclassified': 'no label', 'P600m Peaks': 'no label', 'P500m Peaks': 'no label', });
lyr_NlandHillList_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});