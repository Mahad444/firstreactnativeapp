// functions
// Description: This file contains all the functions that are used in the application

// Function to get the current date
function getCurrentDate() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return year + "-" + month + "-" + day;
}

// Function to get the current time
function getCurrentTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    return hours + ":" + minutes + ":" + seconds;
}

//function to check location
function getLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser, try reloading the page.");
    }
    // fuction for weather
    function showPosition(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        console.log("Latitude: " + lat + " Longitude: " + lon);
    }
    // function for weather
    function getWeather() {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        var url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "" + "&appid=4f0e1d1e7c6f6a4a0e6f3c2e1e6f3c2e";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log("Error: " + error);
            });
        }
}