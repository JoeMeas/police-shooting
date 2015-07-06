
// Function to draw your map
var drawMap = function() {
  // Create map and set viewd
  var map = L.map('container');
  map.setView([39.50, -98.35], 4); //12


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
       	 var markerColor = 'red';
       	 if(d["Armed or Unarmed?"] == 'Unarmed'){
       	 	markerColor = 'blue';
       	 }
         var marker = new L.circle([d.lat, d.lng], 200, {color:markerColor, popupAnchor:[-3, -7], opacity:.5}, ).addTo(map).bindPopup("Test Information");
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


