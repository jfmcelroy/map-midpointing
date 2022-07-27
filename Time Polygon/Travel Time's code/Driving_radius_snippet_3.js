function sendGeocodingRequest(location) {
    // The request for the geocoder. Reference: http://docs.traveltimeplatform.com/reference/geocoding-search/
    var request = {
    query: location };
    document.getElementById("error").style.display = "none";
    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", "https://api.traveltimeapp.com/v4/geocoding/search?query="+ location)
    xhr.setRequestHeader( "X-Application-Id", APPLICATION_ID);
    xhr.setRequestHeader( "X-Api-Key", API_KEY);
    xhr.setRequestHeader( "Accept-Language", " en-US");
    xhr.onreadystatechange = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        if(xhr.readyState === 4){
        sendTimeMapRequest(xhr.response)
        }
    } else {
        if(APPLICATION_ID === "place your app id here" || API_KEY ===  "place your api key here") {
        document.getElementById("error").style.display = "block";
        }
    }
};
xhr.send();
};
