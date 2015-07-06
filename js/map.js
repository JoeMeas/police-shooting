
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

 			var markerIcon = L.icon({
 				iconUrl: 'img/armed.png',
 				iconSize:[15, 15],
 				popupAnchor:[-3, -7]
 			});

	       	if(d["Armed or Unarmed?"] == 'Unarmed'){
	       		markerIcon = L.icon({
	 				iconUrl: 'img/unarmed.png',
	 				iconSize:[15, 15],
	 				popupAnchor:[-3, -7]
	 			});
	       	}

	       	var popup = $('<div />');

			var markerDate = "Date: ";
	       	if(d["Date Searched"] == undefined){
	       	 	markerDate = markerDate + "Unknown";
	        }else{
	       		markerDate = markerDate + d["Date Searched"];
	       	}
	       	popup.append($('<p class="popup-line"></p>').text(markerDate));

			var markerRace = "Race: ";
			if(d["Race"] == undefined){
	       	 	markerRace = markerRace + "Unknown";
	        }else{
	       		markerRace = markerRace + d["Race"];
	       	}
	       	popup.append($('<p class="popup-line"></p>').text(markerRace));

	       	var markerDead = "Alive or Dead: ";
	       	if(d["Race"] == undefined){
	       	 	markerDead = markerDead + "Unknown";
	        }else{
	       		markerDead = markerDead + d["Hit or Killed?"];
	       	}
	       	popup.append($('<p class="popup-line"></p>').text(markerDead));

	       	var markerSummary = "Summary: "
	       	if(d["Summary"] == undefined){
	       	 	markerSummary = markerSummary + "None";
	        }else{
	       		markerSummary = markerSummary + d["Summary"];
	       	}
	       	popup.append($('<p class="popup-line"></p>').text(markerSummary));

        	var marker = new L.marker([d.lat, d.lng], {icon:markerIcon}).addTo(map).bindPopup(popup[0]);
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


