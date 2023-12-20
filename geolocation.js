let watchId; // Variable to store the ID of the location watch
function startWatchingLocation() {
    if (navigator.geolocation) {
        watchId = navigator.geolocation.watchPosition(updateLiveLocation);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function updateLiveLocation(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Now you can use latitude and longitude as needed
    document.getElementById("liveLatitude").textContent = latitude;
    document.getElementById("liveLongitude").textContent = longitude;
}

function stopWatchingLocation() {
    if (watchId) {
        navigator.geolocation.clearWatch(watchId);
    }
}


function submitLocation() {
    const latitude = document.getElementById("inputLatitude").value;
    const longitude = document.getElementById("inputLongitude").value;

    // Now you can use latitude and longitude as needed
    console.log("Latitude:", latitude);
    console.log("Longitude:", longitude);

    // Add any further processing here
}

