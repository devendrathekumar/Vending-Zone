var wms_layers = [];

var format_Ajmer_wending_zones_0 = new ol.format.GeoJSON();
var features_Ajmer_wending_zones_0 = format_Ajmer_wending_zones_0.readFeatures(json_Ajmer_wending_zones_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ajmer_wending_zones_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ajmer_wending_zones_0.addFeatures(features_Ajmer_wending_zones_0);
var lyr_Ajmer_wending_zones_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ajmer_wending_zones_0, 
                style: style_Ajmer_wending_zones_0,
                interactive: true,
                title: 'Ajmer_wending_zones'
            });

lyr_Ajmer_wending_zones_0.setVisible(true);
var layersList = [lyr_Ajmer_wending_zones_0];
lyr_Ajmer_wending_zones_0.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Ajmer_wending_zones_0.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Ajmer_wending_zones_0.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Ajmer_wending_zones_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});