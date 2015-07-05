
// Function to draw your map
var drawMap = function() {
  // Create map and set viewd
  var map = L.map('container');
  map.setView([47.6, -122.3], 6); //12


  // Create an tile layer variable using the appropriate url
  var layer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
  // Add the layer to your map
  layer.addTo(map);

  // Execute your function to get data
  getData(map);
}

// Function for getting data
var getData = function(map) {

  // Execute an AJAX request to get the data in data/response.js
  var data;
  $.ajax({
    url:'./data/response.json',
    type: "get",
    success:function(dat) {
       data = dat;
       data.map(function(d){
         var circle = new L.circle([d.lat, d.lng], 200, {color:'red', opacity:.5}).addTo(map)
       })
       customBuild();
    }, 
    dataType:"json"
  }) 

  // When your request is successful, call your customBuild function
}

// Do something creative with the data here!  
var customBuild = function() {

  
}


