function sendTimeMapRequest(geocodingResponse) {

    // The request for Time Map. Reference: http://docs.traveltimeplatform.com/reference/time-map/
    var coords = geocodingResponse.features[0].geometry.coordinates;
    var latLng = { lat: coords[1], lng: coords[0] };
                
    var request = {
    departure_searches: [{
        id: "first_location",
        coords: latLng,
        transportation: {
        type: "public_transport" },

        departure_time: departureTime,
        travel_time: travelTime }],
                
        arrival_searches: [] };
                
    var xhr = new XMLHttpRequest()
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
        drawTimeMap(this.response);
        }
    });
    xhr.open("POST", "https://api.traveltimeapp.com/v4/time-map")
    xhr.setRequestHeader("X-Application-Id", APPLICATION_ID);
    xhr.setRequestHeader("X-Api-Key", API_KEY);
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    xhr.responseType = "json";
    xhr.send(JSON.stringify(request)); 
