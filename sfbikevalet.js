                    var valeticon = L.Icon.extend({
            	options: {
                                   iconSize: [32,37],
                                   iconAnchor: [15,18.5],
                                   popupAnchor: [0, 0]
                                   }
                                   });
            var sfbikeicon = new valeticon({iconUrl :'SFbikeValet-mapicon.png'})
       		var wPicon = new valeticon({iconUrl :'bikeparking.svg' })

            var layer = "toner";
            var map = new L.Map(layer, {
    	            center: new L.LatLng(37.75, -122.45),
                     zoom: 12
                                        });

            map.addLayer(new L.StamenTileLayer(layer));

                function onEachFeature(feature, layer) {

                    if (feature.properties && feature.properties.Dates[0]) {
                      var popUP = [];
                        for(i=0; i<feature.properties.Dates.length; i++){
                            popUP[i] = feature.properties.Dates[i];
                        }
                           layer.bindPopup("<h4>" + feature.properties.Bike_Valet +"</h4><p>Come Park your bike on: </p>" + String(popUP));
                    }
                }

            var geojson = L.geoJson(valetlocations, {

                    pointToLayer: function (feature, latlng){
                    if(feature.properties.id<100){
                    return L.marker(latlng, {icon: sfbikeicon});}
                    else{
                    return L.marker(latlng, {icon: wPicon});
                          }
                          },
                           onEachFeature: onEachFeature
                          }).addTo(map)

                linky = []
                var options = '<option value="Select a Feature">Select a Feature</option>';
                geojson.eachLayer(function (layer) {
		    var id = layer._leaflet_id;
		    var name = layer.feature.properties.Bike_Valet;
		    var coords = layer.feature.geometry.coordinates;
			var lng = layer.feature.geometry.coordinates[0];
			var lat = layer.feature.geometry.coordinates[1];

			linky.push({id: id, label: name, value: name, lat: lat, lng: lng});

		    console.log(coords);



		    $("#featurelist table").append('<tr><td><a href="#" onclick="map._layers['+id+'].openPopup(); map.setView(['+lat+', '+lng+'], 16); return false;">'+name+'</a></td></tr>');
			// Add features to zoom dropdown
			options += '<option value="' + lng + "," + lat + '", id="' + id + '">' + name + '</option>';
		});
      	$("#zoom").html(options);

      	// Function call by "zoom" dropdown onSelect  really need to fix this so that I don't have this stupdity of if that will never really be true.
		function zoomToFeature (state, coords, id) {
			if (name === "Select a Feature") {
				map.fitBounds(geojson.getBounds());
			}
			else {
				lnglat = coords.split(",");
				map.setView([lnglat[1], lnglat[0]],16);
				map._layers[id].openPopup();
			};
		}
             function centermap(){

              map.setView([37.75, -122.45], 12)

                }

            function giantsvalet(){
               map.setView([37.77796, -122.38885], 17)
               }
         	function winterfest(){
         	map.setView([ 37.78306,-122.40538 ], 16)
         		}

                  function onMapClick(e) {
                    alert("You clicked the map at " + e.latlng);
                }

                  map.on('click', onMapClick);
