// OpenLayers_03_wms.js

///////////////////////////////////////////////////////////////////////////////
// define layer objects

var basemap_tiled = new ol.layer.Tile({
	source: new ol.source.TileWMS({
	url: 'http://internetmapping.net:8080/geoserver/wms?',
	  params: {
		LAYERS: 'kbene:BMNG_west',
		FORMAT: 'image/png',
		TRANSPARENT: true
	  },
	  attributions: [
	    new ol.Attribution({
		  html: 'Data provided by the GEOG x85 GeoServer.'
		})
	  ]
	})
})

var basemap_single = new ol.layer.Image({
	source: new ol.source.ImageWMS({
		url: 'http://internetmapping.net:8080/geoserver/wms?',
	  	params: {
			LAYERS: 'kbene:BMNG_west',
			FORMAT: 'image/png',
			TRANSPARENT: true
	  	},
	  	attributions: [
	    	new ol.Attribution({
		  		html: 'Data provided by the GEOG x85 GeoServer.'
			})
	  	]
	})
})

var states_single = new ol.layer.Image({
	source: new ol.source.ImageWMS({
		attributions: new ol.Attribution({
			html: 'Data provided by the GEOG x85 GeoServer.'
		}),
		params: {'LAYERS':'kbene:statep010'},
		url: 'http://internetmapping.net:8080/geoserver/wms?',
		serverType: 'geoserver'
	})
})

var states_tiled = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		attributions: new ol.Attribution({
			html: 'State Boundary Restructured - USGS, National Atlas Release 5-14-12'
		}),
		params: {'LAYERS':'kbene:statep010'},
		url: 'http://internetmapping.net:8080/geoserver/wms?',
		serverType: 'geoserver'
	})
})



///////////////////////////////////////////////////////////////////////////////
// create our base map objects 
var singleMap = new ol.Map({
	target: 'map_image',
	layers: [basemap_single,states_single], //[basemap_single,states_single]
	view: new ol.View({
		center: ol.proj.fromLonLat([-98.58,39.83]), // the approximate geographic center of the continental US
		zoom: 3,
		projection: 'EPSG:3857'
		})
	});


var tiledMap = new ol.Map({
	target: 'map_tiled',
	layers: [basemap_tiled,states_tiled], //[basemap_tiled,states_tiled]
	view: new ol.View({
		center: ol.proj.fromLonLat([-98.58,39.83]), // the approximate geographic center of the continental US
		zoom: 3,
		projection: 'EPSG:3857'
		})
	});
	
var mixedMap = new ol.Map({
	target: 'map_mixed',
	layers: [basemap_tiled,states_single], //[basemap_tiled,states_single]
	view: new ol.View({
		center: ol.proj.fromLonLat([-98.58,39.83]), // the approximate geographic center of the continental US
		zoom: 3,
		projection: 'EPSG:3857'
		})
	});

///////////////////////////////////////////////////////////////////////////////



