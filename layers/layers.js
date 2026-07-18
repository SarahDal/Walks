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
    <img src="styles/legend/Walks_1_0.png" /> 0 - 6<br />\
    <img src="styles/legend/Walks_1_1.png" /> 6 - 10<br />\
    <img src="styles/legend/Walks_1_2.png" /> 10 - 15<br />\
    <img src="styles/legend/Walks_1_3.png" /> 15 - 20<br />\
    <img src="styles/legend/Walks_1_4.png" /> 20 - 30<br />\
    <img src="styles/legend/Walks_1_5.png" /> 30 - 40<br />\
    <img src="styles/legend/Walks_1_6.png" /> 40 +<br />' });
var format_NorthumberlandHillList_2 = new ol.format.GeoJSON();
var features_NorthumberlandHillList_2 = format_NorthumberlandHillList_2.readFeatures(json_NorthumberlandHillList_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NorthumberlandHillList_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NorthumberlandHillList_2.addFeatures(features_NorthumberlandHillList_2);
var lyr_NorthumberlandHillList_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NorthumberlandHillList_2, 
                style: style_NorthumberlandHillList_2,
                popuplayertitle: 'Northumberland Hill List',
                interactive: true,
    title: 'Northumberland Hill List<br />\
    <img src="styles/legend/NorthumberlandHillList_2_0.png" /> 23 - 203<br />\
    <img src="styles/legend/NorthumberlandHillList_2_1.png" /> 203 - 279<br />\
    <img src="styles/legend/NorthumberlandHillList_2_2.png" /> 279 - 380<br />\
    <img src="styles/legend/NorthumberlandHillList_2_3.png" /> 380 - 499<br />\
    <img src="styles/legend/NorthumberlandHillList_2_4.png" /> 499 - 816<br />' });
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
    <img src="styles/legend/POI_4_0.png" /> Building<br />\
    <img src="styles/legend/POI_4_1.png" /> Chalybeate spring <br />\
    <img src="styles/legend/POI_4_2.png" /> Cup and Ring Marked Rock<br />\
    <img src="styles/legend/POI_4_3.png" /> Earthworks<br />\
    <img src="styles/legend/POI_4_4.png" /> Memorial<br />\
    <img src="styles/legend/POI_4_5.png" /> Nothing<br />\
    <img src="styles/legend/POI_4_6.png" /> Other<br />\
    <img src="styles/legend/POI_4_7.png" /> Plane Wreck<br />\
    <img src="styles/legend/POI_4_8.png" /> ruin<br />\
    <img src="styles/legend/POI_4_9.png" /> Ruin<br />\
    <img src="styles/legend/POI_4_10.png" /> Stone<br />\
    <img src="styles/legend/POI_4_11.png" /> Unknown<br />\
    <img src="styles/legend/POI_4_12.png" /> Well or Spring<br />\
    <img src="styles/legend/POI_4_13.png" /> <br />' });
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
var format_EnglandScotlandBorder_6 = new ol.format.GeoJSON();
var features_EnglandScotlandBorder_6 = format_EnglandScotlandBorder_6.readFeatures(json_EnglandScotlandBorder_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnglandScotlandBorder_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EnglandScotlandBorder_6.addFeatures(features_EnglandScotlandBorder_6);
var lyr_EnglandScotlandBorder_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EnglandScotlandBorder_6, 
                style: style_EnglandScotlandBorder_6,
                popuplayertitle: 'England-Scotland Border',
                interactive: false,
                title: '<img src="styles/legend/EnglandScotlandBorder_6.png" /> England-Scotland Border'
            });

lyr_ThunderforestLandscape_0.setVisible(true);lyr_Walks_1.setVisible(true);lyr_NorthumberlandHillList_2.setVisible(false);lyr_RockartPanels_3.setVisible(false);lyr_POI_4.setVisible(true);lyr_NorthumberlandNamedStones_5.setVisible(true);lyr_EnglandScotlandBorder_6.setVisible(true);
var layersList = [lyr_ThunderforestLandscape_0,lyr_Walks_1,lyr_NorthumberlandHillList_2,lyr_RockartPanels_3,lyr_POI_4,lyr_NorthumberlandNamedStones_5,lyr_EnglandScotlandBorder_6];
lyr_Walks_1.set('fieldAliases', {'fid': 'fid', 'FileName': 'FileName', 'Length': 'Length', 'link': 'link', 'Date Walked': 'Date Walked', 'Notes': 'Notes', });
lyr_NorthumberlandHillList_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'hillnumber': 'hillnumber', 'hillname': 'hillname', 'region': 'region', 'parent': 'parent', 'classification': 'classification', 'metres': 'metres', 'gridref': 'gridref', 'gridref10': 'gridref10', 'colgridref': 'colgridref', 'colheight': 'colheight', 'drop': 'drop', 'feature': 'feature', 'observations': 'observations', 'survey': 'survey', 'revision': 'revision', 'comments': 'comments', 'xcoord': 'xcoord', 'ycoord': 'ycoord', 'latitude': 'latitude', 'longitude': 'longitude', 'country': 'country', 'climbed': 'climbed', 'tumponly': 'tumponly', 'Marilyn': 'Marilyn', 'Marilyn twin-top': 'Marilyn twin-top', 'Hump': 'Hump', 'Hump twin-top': 'Hump twin-top', 'Tump (all)': 'Tump (all)', 'Simm': 'Simm', 'Dodd': 'Dodd', '4s': '4s', 'Munro': 'Munro', 'Munro Top': 'Munro Top', 'Furth': 'Furth', 'Corbett': 'Corbett', 'Graham': 'Graham', 'Donald': 'Donald', 'Donald Top': 'Donald Top', 'Hewitt': 'Hewitt', 'Nuttall': 'Nuttall', 'Dewey': 'Dewey', 'Donald Dewey': 'Donald Dewey', 'Highland Five': 'Highland Five', '300-399m hill': '300-399m hill', '200-299m hill': '200-299m hill', '100-199m hill': '100-199m hill', '0-99m hill': '0-99m hill', 'Wainwright': 'Wainwright', 'Wainwright Outlying Fell': 'Wainwright Outlying Fell', 'Birkett': 'Birkett', 'Ethel': 'Ethel', 'High Hills of Britain': 'High Hills of Britain', 'Synge': 'Synge', 'Fellranger': 'Fellranger', 'Historic County Top (pre-1889)': 'Historic County Top (pre-1889)', 'Administrative County Top (1889 to 1996)': 'Administrative County Top (1889 to 1996)', 'Current County/UA Top': 'Current County/UA Top', 'London Borough Top': 'London Borough Top', 'SIB': 'SIB', 'Submarilyn': 'Submarilyn', 'Subhump': 'Subhump', 'Subsimm': 'Subsimm', 'Subdodd': 'Subdodd', 'Sub490-499m hill': 'Sub490-499m hill', 'Murdo': 'Murdo', 'Corbett Top': 'Corbett Top', 'Graham Top': 'Graham Top', 'New Donald': 'New Donald', 'Buxton ': 'Buxton ', 'Bridge': 'Bridge', 'Yeaman': 'Yeaman', 'Clem': 'Clem', 'Trail 100': 'Trail 100', 'Deleted Munro Top': 'Deleted Munro Top', 'Deleted Corbett': 'Deleted Corbett', 'Deleted Graham': 'Deleted Graham', 'Deleted Nuttall': 'Deleted Nuttall', 'Deleted Donald Top': 'Deleted Donald Top', 'Other lists': 'Other lists', 'Unclassified': 'Unclassified', 'P600m Peaks': 'P600m Peaks', 'P500m Peaks': 'P500m Peaks', });
lyr_RockartPanels_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'name': 'name', 'OSGB_TILE': 'OSGB_TILE', 'OSGB_X': 'OSGB_X', 'OSGB_Y': 'OSGB_Y', 'cmt': 'cmt', });
lyr_POI_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Name': 'Name', 'Type': 'Type', 'Link': 'Link', 'Description': 'Description', });
lyr_NorthumberlandNamedStones_5.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'Name': 'Name', 'description': 'description', 'Image': 'Image', 'alias': 'alias', });
lyr_EnglandScotlandBorder_6.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Area_Code': 'Area_Code', 'Area_Descr': 'Area_Descr', 'File_Name': 'File_Name', 'Feature_Se': 'Feature_Se', 'Collection': 'Collection', 'Global_Pol': 'Global_Pol', 'Admin_Unit': 'Admin_Unit', 'Census_Cod': 'Census_Cod', 'Hectares': 'Hectares', 'Non_Inland': 'Non_Inland', 'Area_Type_': 'Area_Type_', 'Area_Typ_1': 'Area_Typ_1', 'Non_Area_T': 'Non_Area_T', 'Non_Area_1': 'Non_Area_1', });
lyr_Walks_1.set('fieldImages', {'fid': 'TextEdit', 'FileName': 'TextEdit', 'Length': 'TextEdit', 'link': 'TextEdit', 'Date Walked': 'DateTime', 'Notes': 'TextEdit', });
lyr_NorthumberlandHillList_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'hillnumber': 'TextEdit', 'hillname': 'TextEdit', 'region': 'TextEdit', 'parent': 'TextEdit', 'classification': 'TextEdit', 'metres': 'TextEdit', 'gridref': 'TextEdit', 'gridref10': 'TextEdit', 'colgridref': 'TextEdit', 'colheight': 'TextEdit', 'drop': 'TextEdit', 'feature': 'TextEdit', 'observations': 'TextEdit', 'survey': 'TextEdit', 'revision': 'TextEdit', 'comments': 'TextEdit', 'xcoord': 'TextEdit', 'ycoord': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'country': 'TextEdit', 'climbed': 'TextEdit', 'tumponly': 'TextEdit', 'Marilyn': 'TextEdit', 'Marilyn twin-top': 'TextEdit', 'Hump': 'TextEdit', 'Hump twin-top': 'TextEdit', 'Tump (all)': 'TextEdit', 'Simm': 'TextEdit', 'Dodd': 'TextEdit', '4s': 'TextEdit', 'Munro': 'TextEdit', 'Munro Top': 'TextEdit', 'Furth': 'TextEdit', 'Corbett': 'TextEdit', 'Graham': 'TextEdit', 'Donald': 'TextEdit', 'Donald Top': 'TextEdit', 'Hewitt': 'TextEdit', 'Nuttall': 'TextEdit', 'Dewey': 'TextEdit', 'Donald Dewey': 'TextEdit', 'Highland Five': 'TextEdit', '300-399m hill': 'TextEdit', '200-299m hill': 'TextEdit', '100-199m hill': 'TextEdit', '0-99m hill': 'TextEdit', 'Wainwright': 'TextEdit', 'Wainwright Outlying Fell': 'TextEdit', 'Birkett': 'TextEdit', 'Ethel': 'TextEdit', 'High Hills of Britain': 'TextEdit', 'Synge': 'TextEdit', 'Fellranger': 'TextEdit', 'Historic County Top (pre-1889)': 'TextEdit', 'Administrative County Top (1889 to 1996)': 'TextEdit', 'Current County/UA Top': 'TextEdit', 'London Borough Top': 'TextEdit', 'SIB': 'TextEdit', 'Submarilyn': 'TextEdit', 'Subhump': 'TextEdit', 'Subsimm': 'TextEdit', 'Subdodd': 'TextEdit', 'Sub490-499m hill': 'TextEdit', 'Murdo': 'TextEdit', 'Corbett Top': 'TextEdit', 'Graham Top': 'TextEdit', 'New Donald': 'TextEdit', 'Buxton ': 'TextEdit', 'Bridge': 'TextEdit', 'Yeaman': 'TextEdit', 'Clem': 'TextEdit', 'Trail 100': 'TextEdit', 'Deleted Munro Top': 'TextEdit', 'Deleted Corbett': 'TextEdit', 'Deleted Graham': 'TextEdit', 'Deleted Nuttall': 'TextEdit', 'Deleted Donald Top': 'TextEdit', 'Other lists': 'TextEdit', 'Unclassified': 'TextEdit', 'P600m Peaks': 'TextEdit', 'P500m Peaks': 'TextEdit', });
lyr_RockartPanels_3.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'name': 'TextEdit', 'OSGB_TILE': 'TextEdit', 'OSGB_X': 'TextEdit', 'OSGB_Y': 'TextEdit', 'cmt': 'TextEdit', });
lyr_POI_4.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Name': 'TextEdit', 'Type': 'TextEdit', 'Link': 'TextEdit', 'Description': 'TextEdit', });
lyr_NorthumberlandNamedStones_5.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'Image': 'ExternalResource', 'alias': 'TextEdit', });
lyr_EnglandScotlandBorder_6.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Area_Code': 'TextEdit', 'Area_Descr': 'TextEdit', 'File_Name': 'TextEdit', 'Feature_Se': 'TextEdit', 'Collection': 'TextEdit', 'Global_Pol': 'TextEdit', 'Admin_Unit': 'TextEdit', 'Census_Cod': 'TextEdit', 'Hectares': 'TextEdit', 'Non_Inland': 'TextEdit', 'Area_Type_': 'TextEdit', 'Area_Typ_1': 'TextEdit', 'Non_Area_T': 'TextEdit', 'Non_Area_1': 'TextEdit', });
lyr_Walks_1.set('fieldLabels', {'fid': 'hidden field', 'FileName': 'no label', 'Length': 'no label', 'link': 'no label', 'Date Walked': 'inline label - always visible', 'Notes': 'no label', });
lyr_NorthumberlandHillList_2.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'hillnumber': 'no label', 'hillname': 'no label', 'region': 'no label', 'parent': 'no label', 'classification': 'no label', 'metres': 'no label', 'gridref': 'no label', 'gridref10': 'no label', 'colgridref': 'no label', 'colheight': 'no label', 'drop': 'no label', 'feature': 'no label', 'observations': 'no label', 'survey': 'no label', 'revision': 'no label', 'comments': 'no label', 'xcoord': 'no label', 'ycoord': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'country': 'no label', 'climbed': 'no label', 'tumponly': 'no label', 'Marilyn': 'no label', 'Marilyn twin-top': 'no label', 'Hump': 'no label', 'Hump twin-top': 'no label', 'Tump (all)': 'no label', 'Simm': 'no label', 'Dodd': 'no label', '4s': 'no label', 'Munro': 'no label', 'Munro Top': 'no label', 'Furth': 'no label', 'Corbett': 'no label', 'Graham': 'no label', 'Donald': 'no label', 'Donald Top': 'no label', 'Hewitt': 'no label', 'Nuttall': 'no label', 'Dewey': 'no label', 'Donald Dewey': 'no label', 'Highland Five': 'no label', '300-399m hill': 'no label', '200-299m hill': 'no label', '100-199m hill': 'no label', '0-99m hill': 'no label', 'Wainwright': 'no label', 'Wainwright Outlying Fell': 'no label', 'Birkett': 'no label', 'Ethel': 'no label', 'High Hills of Britain': 'no label', 'Synge': 'no label', 'Fellranger': 'no label', 'Historic County Top (pre-1889)': 'no label', 'Administrative County Top (1889 to 1996)': 'no label', 'Current County/UA Top': 'no label', 'London Borough Top': 'no label', 'SIB': 'no label', 'Submarilyn': 'no label', 'Subhump': 'no label', 'Subsimm': 'no label', 'Subdodd': 'no label', 'Sub490-499m hill': 'no label', 'Murdo': 'no label', 'Corbett Top': 'no label', 'Graham Top': 'no label', 'New Donald': 'no label', 'Buxton ': 'no label', 'Bridge': 'no label', 'Yeaman': 'no label', 'Clem': 'no label', 'Trail 100': 'no label', 'Deleted Munro Top': 'no label', 'Deleted Corbett': 'no label', 'Deleted Graham': 'no label', 'Deleted Nuttall': 'no label', 'Deleted Donald Top': 'no label', 'Other lists': 'no label', 'Unclassified': 'no label', 'P600m Peaks': 'no label', 'P500m Peaks': 'no label', });
lyr_RockartPanels_3.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'name': 'no label', 'OSGB_TILE': 'no label', 'OSGB_X': 'no label', 'OSGB_Y': 'no label', 'cmt': 'no label', });
lyr_POI_4.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Name': 'no label', 'Type': 'no label', 'Link': 'no label', 'Description': 'no label', });
lyr_NorthumberlandNamedStones_5.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'Name': 'no label', 'description': 'no label', 'Image': 'no label', 'alias': 'no label', });
lyr_EnglandScotlandBorder_6.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'Area_Code': 'no label', 'Area_Descr': 'no label', 'File_Name': 'no label', 'Feature_Se': 'no label', 'Collection': 'no label', 'Global_Pol': 'no label', 'Admin_Unit': 'no label', 'Census_Cod': 'no label', 'Hectares': 'no label', 'Non_Inland': 'no label', 'Area_Type_': 'no label', 'Area_Typ_1': 'no label', 'Non_Area_T': 'no label', 'Non_Area_1': 'no label', });
lyr_EnglandScotlandBorder_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});