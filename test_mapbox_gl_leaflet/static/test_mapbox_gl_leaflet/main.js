// source code header

// initialize
initialize = function(){
    console.log("initialize.");
    console.log("mapbox_gl_leaflet test.");
};

$(document).ready(function(){
    initialize();
    console.log(test_var);


    // leaflet
    var map = L.map('map').setView([35.65, 139.7], 15);

    /*
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    */

    var token = accessToken;
    var attribution_mapbox = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';

    //var gl = L.mapboxGL({
    //    accessToken: token,
    //    style: 'mapbox://styles/mapbox/bright-v8',
    //    attribution: attribution_mapbox
    //}).addTo(map);

    L.marker([35.66, 139.75]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.');
        //.openPopup();
    
    var light_v10 = L.mapboxGL({
      accessToken: token,
      style: 'mapbox://styles/mapbox/light-v10',
      attribution: attribution_mapbox
    });

    var dark_v10 = L.mapboxGL({
      accessToken: token,
      style: 'mapbox://styles/mapbox/dark-v10',
      attribution: attribution_mapbox
    });

    var outdoors_v11 = L.mapboxGL({
      accessToken: token,
      style: 'mapbox://styles/mapbox/outdoors-v11',
      attribution: attribution_mapbox
    });

    var satellite_v9 = L.mapboxGL({
      accessToken: token,
      style: 'mapbox://styles/mapbox/satellite-v9',
      attribution: attribution_mapbox
    });
   
    var bright_v8 = L.mapboxGL({
      accessToken: token,
      style: 'mapbox://styles/mapbox/bright-v8',
      attribution: attribution_mapbox
    });    

    var streets = L.mapboxGL({
      accessToken: token,
      style: 'mapbox://styles/mapbox/streets-v8',
      attribution: attribution_mapbox
    }).addTo(map);

    // http://ktgis.net/service/leafletlearn/index.html
    //地理院地図の標準地図タイル
    var gsi =L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', 
      {attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>"});
    //地理院地図の淡色地図タイル
    var gsipale = L.tileLayer('http://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png',
      {attribution: "<a href='http://portal.cyberjapan.jp/help/termsofuse.html' target='_blank'>地理院タイル</a>"});
    //オープンストリートマップのタイル
    var osm = L.tileLayer('http://tile.openstreetmap.jp/{z}/{x}/{y}.png',
      {  attribution: "<a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors" });


    var baseMaps = {
      "streets": streets ,
      "bright_v8": bright_v8,   
      "light_v10": light_v10,
      "dark_v10": dark_v10,
      "outdoors_v11": outdoors_v11,
      "satellite_v9": satellite_v9,
      "gsi": gsi,
      "gsi pale": gsipale,
      "OpenStreetMap": osm
    };

    L.control.layers(baseMaps).addTo(map);

    L.control.scale().addTo(map);


    // event test
    var myLines = [{
        "type": "LineString",
        "coordinates": [[138, 34.5], [139, 35.5], [140, 35]]
    }, {
        "type": "LineString",
        "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
    }];
    var myStyle = {
        "color": "#ff7800",
        "weight": 5,
        "opacity": 0.65
    };
    var myLines_Geo = L.geoJSON(myLines, {
        style: myStyle
    }).addTo(map);
    myLines_Geo.on('click', function(){
      console.log("LineString clicked.");
    });


    var latlngs = [[34.5, 138.3], [35.5, 139.3], [35, 140.3]];
    var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
    polyline.on('mouseover', function(){
      console.log("mouseover");
    }).on('mouseout', function(){
      console.log("mouseout");
    });



});
