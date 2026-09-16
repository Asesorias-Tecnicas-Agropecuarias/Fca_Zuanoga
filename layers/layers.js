var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Fca_SuelosVF_1 = new ol.format.GeoJSON();
var features_Fca_SuelosVF_1 = format_Fca_SuelosVF_1.readFeatures(json_Fca_SuelosVF_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fca_SuelosVF_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fca_SuelosVF_1.addFeatures(features_Fca_SuelosVF_1);
var lyr_Fca_SuelosVF_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fca_SuelosVF_1, 
                style: style_Fca_SuelosVF_1,
                popuplayertitle: 'Fca_SuelosVF',
                interactive: false,
    title: 'Fca_SuelosVF<br />\
    <img src="styles/legend/Fca_SuelosVF_1_0.png" /> RWIa<br />\
    <img src="styles/legend/Fca_SuelosVF_1_1.png" /> RWKa<br />' });
var format_Fca_CapacidadVF_2 = new ol.format.GeoJSON();
var features_Fca_CapacidadVF_2 = format_Fca_CapacidadVF_2.readFeatures(json_Fca_CapacidadVF_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fca_CapacidadVF_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fca_CapacidadVF_2.addFeatures(features_Fca_CapacidadVF_2);
var lyr_Fca_CapacidadVF_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fca_CapacidadVF_2, 
                style: style_Fca_CapacidadVF_2,
                popuplayertitle: 'Fca_CapacidadVF',
                interactive: false,
    title: 'Fca_CapacidadVF<br />\
    <img src="styles/legend/Fca_CapacidadVF_2_0.png" /> Cultivos de arroz y ganadería con pastos pará, alemán y brachiaria dulce<br />\
    <img src="styles/legend/Fca_CapacidadVF_2_1.png" /> Cultivos de arroz, maíz, plátano, ganadería semi-intensiva<br />' });
var format_Fca_Completa_3 = new ol.format.GeoJSON();
var features_Fca_Completa_3 = format_Fca_Completa_3.readFeatures(json_Fca_Completa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fca_Completa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fca_Completa_3.addFeatures(features_Fca_Completa_3);
var lyr_Fca_Completa_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fca_Completa_3, 
                style: style_Fca_Completa_3,
                popuplayertitle: 'Fca_Completa',
                interactive: false,
                title: '<img src="styles/legend/Fca_Completa_3.png" /> Fca_Completa'
            });
var format_Potreros_4 = new ol.format.GeoJSON();
var features_Potreros_4 = format_Potreros_4.readFeatures(json_Potreros_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Potreros_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Potreros_4.addFeatures(features_Potreros_4);
var lyr_Potreros_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Potreros_4, 
                style: style_Potreros_4,
                popuplayertitle: 'Potreros',
                interactive: false,
    title: 'Potreros<br />\
    <img src="styles/legend/Potreros_4_0.png" /> 1.00<br />\
    <img src="styles/legend/Potreros_4_1.png" /> 1.28<br />\
    <img src="styles/legend/Potreros_4_2.png" /> 3.60<br />\
    <img src="styles/legend/Potreros_4_3.png" /> 6.74<br />\
    <img src="styles/legend/Potreros_4_4.png" /> 6.98<br />\
    <img src="styles/legend/Potreros_4_5.png" /> 7.49<br />\
    <img src="styles/legend/Potreros_4_6.png" /> 8.39<br />\
    <img src="styles/legend/Potreros_4_7.png" /> 8.94<br />\
    <img src="styles/legend/Potreros_4_8.png" /> 9.86<br />\
    <img src="styles/legend/Potreros_4_9.png" /> 10.09<br />\
    <img src="styles/legend/Potreros_4_10.png" /> 10.27<br />\
    <img src="styles/legend/Potreros_4_11.png" /> 31.11<br />' });
var format_Curvas_1msnm_5 = new ol.format.GeoJSON();
var features_Curvas_1msnm_5 = format_Curvas_1msnm_5.readFeatures(json_Curvas_1msnm_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Curvas_1msnm_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curvas_1msnm_5.addFeatures(features_Curvas_1msnm_5);
var lyr_Curvas_1msnm_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Curvas_1msnm_5, 
                style: style_Curvas_1msnm_5,
                popuplayertitle: 'Curvas_1msnm',
                interactive: false,
    title: 'Curvas_1msnm<br />\
    <img src="styles/legend/Curvas_1msnm_5_0.png" /> 10.000000000000000<br />\
    <img src="styles/legend/Curvas_1msnm_5_1.png" /> 11.000000000000000<br />\
    <img src="styles/legend/Curvas_1msnm_5_2.png" /> 12.000000000000000<br />\
    <img src="styles/legend/Curvas_1msnm_5_3.png" /> 13.000000000000000<br />\
    <img src="styles/legend/Curvas_1msnm_5_4.png" /> 14.000000000000000<br />\
    <img src="styles/legend/Curvas_1msnm_5_5.png" /> 15.000000000000000<br />\
    <img src="styles/legend/Curvas_1msnm_5_6.png" /> 16.000000000000000<br />\
    <img src="styles/legend/Curvas_1msnm_5_7.png" /> 17.000000000000000<br />\
    <img src="styles/legend/Curvas_1msnm_5_8.png" /> 18.000000000000000<br />\
    <img src="styles/legend/Curvas_1msnm_5_9.png" /> 19.000000000000000<br />\
    <img src="styles/legend/Curvas_1msnm_5_10.png" /> 20.000000000000000<br />\
    <img src="styles/legend/Curvas_1msnm_5_11.png" /> 21.000000000000000<br />' });
var format_Division_6 = new ol.format.GeoJSON();
var features_Division_6 = format_Division_6.readFeatures(json_Division_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Division_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Division_6.addFeatures(features_Division_6);
var lyr_Division_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Division_6, 
                style: style_Division_6,
                popuplayertitle: 'Division',
                interactive: true,
                title: '<img src="styles/legend/Division_6.png" /> Division'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Fca_SuelosVF_1.setVisible(false);lyr_Fca_CapacidadVF_2.setVisible(false);lyr_Fca_Completa_3.setVisible(true);lyr_Potreros_4.setVisible(true);lyr_Curvas_1msnm_5.setVisible(false);lyr_Division_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Fca_SuelosVF_1,lyr_Fca_CapacidadVF_2,lyr_Fca_Completa_3,lyr_Potreros_4,lyr_Curvas_1msnm_5,lyr_Division_6];
lyr_Fca_SuelosVF_1.set('fieldAliases', {'UCS': 'UCS', 'UCS_F': 'UCS_F', 'CLIMA': 'CLIMA', 'TIPO_RELIE': 'TIPO_RELIE', 'LITOLOGÍA': 'LITOLOGÍA', 'CARACTERÍ': 'CARACTERÍ', 'COMPONENTE': 'COMPONENTE', 'PERFIL': 'PERFIL', 'PORCENTAJE': 'PORCENTAJE', 'ÁREA_ha': 'ÁREA_ha', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Fca_CapacidadVF_2.set('fieldAliases', {'UCS_CP': 'UCS_CP', 'CLASE': 'CLASE', 'SUBCLASE': 'SUBCLASE', 'GRUPO_MANE': 'GRUPO_MANE', 'UCS': 'UCS', 'PRINCIPALE': 'PRINCIPALE', 'PRINCIPA_1': 'PRINCIPA_1', 'USOS_RECOM': 'USOS_RECOM', 'PRACTICAS_': 'PRACTICAS_', 'ÁREA_ha': 'ÁREA_ha', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Fca_Completa_3.set('fieldAliases', {'id': 'id', 'Área': 'Área', });
lyr_Potreros_4.set('fieldAliases', {'id': 'id', 'Área': 'Área (Ha)', 'Nombre': 'Identificación del Potrero', });
lyr_Curvas_1msnm_5.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'm.s.n.m.', });
lyr_Division_6.set('fieldAliases', {'id': 'id', 'Área': 'Área', 'Ha': 'Ha', });
lyr_Fca_SuelosVF_1.set('fieldImages', {'UCS': 'TextEdit', 'UCS_F': 'TextEdit', 'CLIMA': 'TextEdit', 'TIPO_RELIE': 'TextEdit', 'LITOLOGÍA': 'TextEdit', 'CARACTERÍ': 'TextEdit', 'COMPONENTE': 'TextEdit', 'PERFIL': 'TextEdit', 'PORCENTAJE': 'TextEdit', 'ÁREA_ha': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Fca_CapacidadVF_2.set('fieldImages', {'UCS_CP': 'TextEdit', 'CLASE': 'TextEdit', 'SUBCLASE': 'TextEdit', 'GRUPO_MANE': 'TextEdit', 'UCS': 'TextEdit', 'PRINCIPALE': 'TextEdit', 'PRINCIPA_1': 'TextEdit', 'USOS_RECOM': 'TextEdit', 'PRACTICAS_': 'TextEdit', 'ÁREA_ha': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Fca_Completa_3.set('fieldImages', {'id': 'TextEdit', 'Área': 'TextEdit', });
lyr_Potreros_4.set('fieldImages', {'id': 'TextEdit', 'Área': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Curvas_1msnm_5.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', });
lyr_Division_6.set('fieldImages', {'id': 'TextEdit', 'Área': 'TextEdit', 'Ha': 'TextEdit', });
lyr_Fca_SuelosVF_1.set('fieldLabels', {'UCS': 'no label', 'UCS_F': 'no label', 'CLIMA': 'no label', 'TIPO_RELIE': 'no label', 'LITOLOGÍA': 'no label', 'CARACTERÍ': 'no label', 'COMPONENTE': 'no label', 'PERFIL': 'no label', 'PORCENTAJE': 'no label', 'ÁREA_ha': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Fca_CapacidadVF_2.set('fieldLabels', {'UCS_CP': 'no label', 'CLASE': 'no label', 'SUBCLASE': 'no label', 'GRUPO_MANE': 'no label', 'UCS': 'no label', 'PRINCIPALE': 'no label', 'PRINCIPA_1': 'no label', 'USOS_RECOM': 'no label', 'PRACTICAS_': 'no label', 'ÁREA_ha': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Fca_Completa_3.set('fieldLabels', {'id': 'no label', 'Área': 'no label', });
lyr_Potreros_4.set('fieldLabels', {'id': 'no label', 'Área': 'no label', 'Nombre': 'no label', });
lyr_Curvas_1msnm_5.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'inline label - always visible', });
lyr_Division_6.set('fieldLabels', {'id': 'no label', 'Área': 'inline label - visible with data', });
lyr_Division_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});