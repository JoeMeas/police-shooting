
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

	       	var markerImage = new Icon({iconUrl: 'img/armed.png'});
	       	if(d["Armed or Unarmed?"] == 'Unarmed'){
	       		markerImage = new Icon({iconUrl: 'img/unarmed.png'});
	       	}

	       	var markerSummary = "Summary: "
	       	if(d["Summary"] == undefined){
	       	 	markerSummary = markerSummary + "None";
	        }else{
	       		markerSummary = markerSummary + d["Summary"];
	       	}

        	var marker = new L.circle([d.lat, d.lng], {icon:markerImage, iconSize:[15, 15], popupAnchor:[-3, -7]}).addTo(map).bindPopup(markerSummary);
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


