﻿
var map, infoWindow;
let markers= [];
function submit() {



}



function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -33.8688, lng: 151.2195 },
        zoom: 13,
    });
    const card = document.getElementById("pac-card");
    const input = document.getElementById("pac-input");

    const autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.bindTo("bounds", map);
    const marker = new google.maps.Marker({
        map,
        anchorPoint: new google.maps.Point(0, -29),
    });
    autocomplete.addListener("place_changed", () => {
        infowindow.close();
        marker.setVisible(false);
        const place = autocomplete.getPlace();

        if (!place.geometry) {
            // User entered the name of a Place that was not suggested and
            // pressed the Enter key, or the Place Details request failed.
            window.alert("No details available for input: '" + place.name + "'");
            return;
        }

        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17); // Why 17? Because it looks good.
        }

        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
    });

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
              

                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };

                const marker_current = new google.maps.Marker({
                    map,
                    icon: { url: "http://maps.google.com/mapfiles/ms/micons/homegardenbusiness.png" },
                    position:pos,
                });

                infoWindow = new google.maps.InfoWindow();
                infoWindow.setPosition(pos);
                infoWindow.setContent("Your location");
                infoWindow.open(map, marker_current);

                map.setCenter(pos);
                fetch(
                    "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + pos.lat + "," + pos.lng + "&sensor=true&key=AIzaSyBaptfzrd3_VALN-8knGS5eCXW5tXDDsz8"
                )
                    .then((x) => x.json())
                    .then((stations) => {
                        console.log(stations)
                        const length = stations.results.length
                        const location = stations.results[length - 3].geometry.bounds
                        google.maps.event.addDomListener(document.getElementById('places'), 'click', function (evt) {

                            markerPointsPlaces(pos, location)
                        });
                        google.maps.event.addDomListener(document.getElementById('hospitals'), 'click', function (evt) {

                            markerPointsHospitals( pos, location)
                        });
                    })
            }

        );
    }
    else {


    }
}

function markerPointsPlaces(latlng, location) {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();

    fetch(
        "https://api.waqi.info/map/bounds/?latlng=" +

        location.northeast.lat + "," + location.northeast.lng + "," + location.southwest.lat + "," + location.southwest.lng +
        "&token=f8374c905020baa429a38d91ccc2e80a950cad40"
    )
        .then((x) => x.json())
        .then((stations) => {
            for (var i = 0; i < stations.data.length; i++) {

                if (stations.data[i].aqi <= 50) {
                    const contentString = '<div>' +
                        '<p> Name-' + stations.data[i].station.name +'<br> AQI-'
                     + stations.data[i].aqi + '</p>'

                    '</div>'
                    const myLatLng = { lat: stations.data[i].lat, lng: stations.data[i].lon };

                    const infowindow = new google.maps.InfoWindow({
                        content: contentString
                    });
                    const marker = new google.maps.Marker({
                        position: myLatLng,
                        icon: { url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png" },
                        map
                    });
                    markers.push(marker);
                    marker.addListener("click", () => {
                       
                        infowindow.open(map, marker);




                        directionsRenderer.setMap(map); // Existing map object displays directions
                        // Create route from existing points used for markers
                        const route = {
                            origin: latlng,
                            destination: myLatLng,
                            travelMode: 'DRIVING'
                        }

                        directionsService.route(route,
                            function (response, status) { // anonymous function to capture directions
                                if (status !== 'OK') {
                                    window.alert('Directions request failed due to ' + status);
                                    return;
                                } else {
                                    
                                    directionsRenderer.setDirections(response); // Add route to the map
                                    var directionsData = response.routes[0].legs[0]; // Get data about the mapped route
                                    if (!directionsData) {
                                        window.alert('Directions request failed');
                                        return;
                                    }
                                    else {
                                        document.getElementById('msg').innerHTML = " Driving distance is " + directionsData.distance.text + " (" + directionsData.duration.text + ").";
                                    }
                                }
                            });
                    });

                }

            }
        })

}

function calculateAndDisplayRoute(origin, destination) {




}
function markerPointsHospitals(latlng) {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }

    var request = {
        location: latlng,
        radius: '500',
        query: 'lung hospitals near me'
    };

    service = new google.maps.places.PlacesService(map);
    service.textSearch(request, callback);
}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            var place = results[i];

            console.log(results[i]);
            createMarker(results[i]);
            
        }
    }
}
function createMarker(place) {
    const contentString = '<div>' + '<p>' + place.name + '<br>' + place.formatted_address
        '</p>'+'</div>';
    const infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    const marker = new google.maps.Marker({
        map,
        place: {
            placeId: place.place_id,
            location: place.geometry.location
        },
        icon: { url: "http://maps.google.com/mapfiles/ms/micons/hospitals.png" }
    });
    markers.push(marker);
    marker.addListener("click", () => {

        infowindow.open(map, marker);
        directionsService = new google.maps.DirectionsService();
        directionsRenderer = new google.maps.DirectionsRenderer();



        directionsRenderer.setMap(map); // Existing map object displays directions
        // Create route from existing points used for markers
        const route = {
            origin: latlng,
            destination: place.geometry.location,
            travelMode: 'DRIVING'
        }

        directionsService.route(route,
            function (response, status) { // anonymous function to capture directions
                if (status !== 'OK') {
                    window.alert('Directions request failed due to ' + status);
                    return;
                } else {

                    directionsRenderer.setDirections(response); // Add route to the map
                    var directionsData = response.routes[0].legs[0]; // Get data about the mapped route
                    if (!directionsData) {
                        window.alert('Directions request failed');
                        return;
                    }
                    else {
                        document.getElementById('msg').innerHTML = " Driving distance is " + directionsData.distance.text + " (" + directionsData.duration.text + ").";
                    }
                }
            });
    });

}




//    fetch(
//        "https://maps.googleapis.com/maps/api/place/textsearch/json?query=lung+hospitals&key=AIzaSyBaptfzrd3_VALN-8knGS5eCXW5tXDDsz8"
//        , {
//            mode: 'no-cors' // 'cors' by default
//        })
//        .then((results) => {
//            for (var i = 0; i < results.data.length; i++) {

                
//                const myLatLng = { lat: results.data[i].geometry.location.lat, lng: results.data[i].geometry.location.lon };
//                    let directionsService;
//                    let directionsRenderer;
//                    const infowindow = new google.maps.InfoWindow({
//                        content: contentString
//                    });
//                    const marker = new google.maps.Marker({
//                        position: myLatLng,
//                        map
//                    });
//                    marker.addListener("click", () => {

//                        infowindow.open(map, marker);
//                        directionsService = new google.maps.DirectionsService();
//                        directionsRenderer = new google.maps.DirectionsRenderer();



//                        directionsRenderer.setMap(map); // Existing map object displays directions
//                        // Create route from existing points used for markers
//                        const route = {
//                            origin: latlng,
//                            destination: myLatLng,
//                            travelMode: 'DRIVING'
//                        }

//                        directionsService.route(route,
//                            function (response, status) { // anonymous function to capture directions
//                                if (status !== 'OK') {
//                                    window.alert('Directions request failed due to ' + status);
//                                    return;
//                                } else {

//                                    directionsRenderer.setDirections(response); // Add route to the map
//                                    var directionsData = response.routes[0].legs[0]; // Get data about the mapped route
//                                    if (!directionsData) {
//                                        window.alert('Directions request failed');
//                                        return;
//                                    }
//                                    else {
//                                        document.getElementById('msg').innerHTML = " Driving distance is " + directionsData.distance.text + " (" + directionsData.duration.text + ").";
//                                    }
//                                }
//                            });
//                    });

//                }

           
//        })

//}


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
}