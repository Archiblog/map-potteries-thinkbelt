var wms_layers = [];


        var lyr_OSMStandard423756339841_0 = new ol.layer.Tile({
            'title': 'OSM Standard (423756, 339841)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenRailWayMapStandard_1 = new ol.layer.Tile({
            'title': 'OpenRailWayMap - Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://a.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png'
            })
        });
var format_PTbservicerailways_2 = new ol.format.GeoJSON();
var features_PTbservicerailways_2 = format_PTbservicerailways_2.readFeatures(json_PTbservicerailways_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PTbservicerailways_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTbservicerailways_2.addFeatures(features_PTbservicerailways_2);
var lyr_PTbservicerailways_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTbservicerailways_2, 
                style: style_PTbservicerailways_2,
                popuplayertitle: "PTb service railways",
                interactive: true,
                title: 'PTb service railways'
            });
var format_PTbserviceroads_3 = new ol.format.GeoJSON();
var features_PTbserviceroads_3 = format_PTbserviceroads_3.readFeatures(json_PTbserviceroads_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PTbserviceroads_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTbserviceroads_3.addFeatures(features_PTbserviceroads_3);
var lyr_PTbserviceroads_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTbserviceroads_3, 
                style: style_PTbserviceroads_3,
                popuplayertitle: "PTb service roads",
                interactive: true,
                title: 'PTb service roads'
            });
var format_HousingAreas_4 = new ol.format.GeoJSON();
var features_HousingAreas_4 = format_HousingAreas_4.readFeatures(json_HousingAreas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HousingAreas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HousingAreas_4.addFeatures(features_HousingAreas_4);
var lyr_HousingAreas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HousingAreas_4, 
                style: style_HousingAreas_4,
                popuplayertitle: "Housing Areas",
                interactive: true,
                title: 'Housing Areas'
            });
var format_TransferAreas_5 = new ol.format.GeoJSON();
var features_TransferAreas_5 = format_TransferAreas_5.readFeatures(json_TransferAreas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TransferAreas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TransferAreas_5.addFeatures(features_TransferAreas_5);
var lyr_TransferAreas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TransferAreas_5, 
                style: style_TransferAreas_5,
                popuplayertitle: "Transfer Areas",
                interactive: true,
                title: 'Transfer Areas'
            });

lyr_OSMStandard423756339841_0.setVisible(true);lyr_OpenRailWayMapStandard_1.setVisible(true);lyr_PTbservicerailways_2.setVisible(true);lyr_PTbserviceroads_3.setVisible(true);lyr_HousingAreas_4.setVisible(true);lyr_TransferAreas_5.setVisible(true);
var layersList = [lyr_OSMStandard423756339841_0,lyr_OpenRailWayMapStandard_1,lyr_PTbservicerailways_2,lyr_PTbserviceroads_3,lyr_HousingAreas_4,lyr_TransferAreas_5];
lyr_PTbservicerailways_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_PTbserviceroads_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_HousingAreas_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TransferAreas_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'measure': 'measure', 'type': 'type', });
lyr_PTbservicerailways_2.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_PTbserviceroads_3.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_HousingAreas_4.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_TransferAreas_5.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'measure': '', 'type': '', });
lyr_PTbservicerailways_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_PTbserviceroads_3.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_HousingAreas_4.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TransferAreas_5.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'measure': 'no label', 'type': 'no label', });
lyr_TransferAreas_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});