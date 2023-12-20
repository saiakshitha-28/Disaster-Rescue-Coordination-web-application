if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        // Create a map centered at the user's location
        var map = L.map('map').setView([latitude, longitude], 13);

        // Add a tile layer (you can choose different map providers)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Add a marker at the user's location
        L.marker([latitude, longitude]).addTo(map)
            .bindPopup('Your Location')
            .openPopup();

        // Display the coordinates in the HTML element
        var locationElement = document.getElementById("location");

        // Define nearby locations
        var nearbyLocations = [
            // { name: "Abhi", lat: 17.321590, lon: 78.551704 },
            // { name: "A Sai Shashank", lat: 17.450156, lon: 78.370487 },
            // { name: "JANGAM MONESH", lat: 17.460230, lon: 78.559019 },
            // { name: "Mayukha Mohan T.", lat: 17.358750, lon: 78.497631 },
            // { name: "Tharshith.M", lat: 17.383552, lon: 78.364426 },
            
            { name: "R.Rishitha", lat: 17.447471, lon: 78.513842 },
            { name: "Gandham Hari Prasad", lat: 17.395774, lon: 78.449503 },
            { name: "Gatla Vijayendher", lat: 17.308536, lon: 78.456739 },
            { name: "Gavini Sumanth", lat: 17.396840, lon: 78.531237 },
            { name: "P. Hitaishi", lat: 17.351265, lon: 78.508019 },
            { name: "Rimsha Fatima", lat: 17.383209, lon: 78.431716 },
            { name: "S. Chethana", lat: 17.518827, lon: 78.571486 },
            { name: "Sai Durga Pujitha", lat: 17.319309, lon: 78.481617 },
            { name: "Sai Sreeja", lat: 17.428715, lon: 78.594443 },
            { name: "Shashidhar A", lat: 17.434606, lon: 78.552908 },
            { name: "Vedansh Gattupalli", lat: 17.455893, lon: 78.487802 },
            { name: "Sowjanya Reddy", lat: 17.377476, lon: 78.554669 },
            { name: "K. Praneeth Kumar", lat: 17.446173, lon: 78.570344 },
            { name: "S. Akhila", lat: 17.385546, lon: 78.581567 },
            { name: "Murali K", lat: 17.354091, lon: 78.542613 },
            { name: "D Asritha Reddy", lat: 17.327917, lon: 78.413857 }

        ];

        // Add nearby location markers
        // ...
        // Add nearby location markers
        nearbyLocations.forEach(function (location) {
            var marker = L.marker([location.lat, location.lon]).addTo(map);
            marker.bindPopup(location.name);

            // Add tooltip to display name on hover
            marker.on('mouseover', function (e) {
                this.bindTooltip(location.name).openTooltip();
            });

            // Remove tooltip on mouseout (optional)
            marker.on('mouseout', function (e) {
                this.closeTooltip();
            });

            // Add click event listener to navigate to profile.pug
            // Add click event listener to navigate to profile.pug with the name parameter
            marker.on('click', function (e) {
                // Redirect to profile.pug with the name parameter in the query string
                window.location.href = 'profile.pug?name=' + encodeURIComponent(location.name);
            });

        });
        // ...

    });
} else {
    var locationElement = document.getElementById("location");
    locationElement.textContent = "Geolocation is not supported by your browser.";
}