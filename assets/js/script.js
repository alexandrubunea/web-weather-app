// Init
const api_key = 'c28755c509e48b8b5c12a12b65ffddae';
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Bucharest,ro&lang=ro&units=metric&appid=" + api_key, (data) => {
    console.log(data);
    updateWeather(data);
});

// On button click
$("#searchBtn").click(() => {
    let input = $("#cityInput").val();

    if(input.length === 0)
        return alert("Trebuie să specificați un oraș!");
    if(input[0] === ' ')
        return alert("Trebuie să specificați un oraș!");

    let link = "https://api.openweathermap.org/data/2.5/weather?q=" + input +",ro&lang=ro&units=metric&appid=" + api_key;
    $.getJSON(link, (data) => {
        updateWeather(data);
    });
});

// Update weather
function updateWeather(result) {
    $("#cityName").text(result.name);
    $("#cityCoords").text("LAT: " + result.coord.lat + " & " + "LON: " + result.coord.lon);
    $("#weatherName").text(result.weather[0].description);
    if(result.weather[0].icon == "01d" || result.weather[0].icon == "01n") {
        $("#weatherIcon").html('<i class="fas fa-sun"></i>');
    }
    else if(result.weather[0].icon == "02d" || result.weather[0].icon == "02n") {
        $("#weatherIcon").html('<i class="fas fa-cloud-sun"></i>');
    }
    else if(result.weather[0].icon == "03d" || result.weather[0].icon == "03n") {
        $("#weatherIcon").html('<i class="fas fa-cloud"></i>');
    }
    else if(result.weather[0].icon == "04d" || result.weather[0].icon == "04n") {
        $("#weatherIcon").html('<i class="fas fa-cloud"></i>');
    }
    else if(result.weather[0].icon == "09d" || result.weather[0].icon == "09n") {
        $("#weatherIcon").html('<i class="fas fa-cloud-showers-heavy"></i>');
    }
    else if(result.weather[0].icon == "10d" || result.weather[0].icon == "10n") {
        $("#weatherIcon").html('<i class="fas fa-cloud-rain"></i>');
    }
    else if(result.weather[0].icon == "11d" || result.weather[0].icon == "11n") {
        $("#weatherIcon").html('<i class="fas fa-poo-storm"></i>');
    }
    else if(result.weather[0].icon == "13d" || result.weather[0].icon == "13n") {
        $("#weatherIcon").html('<i class="fas fa-snowflake"></i>');
    }
    else if(result.weather[0].icon == "50d" || result.weather[0].icon == "50n") {
        $("#weatherIcon").html('<i class="fas fa-smog"></i>');
    }
    $("#windSpeedInfo").text(result.wind.speed + " M/S");
    $("#weatherHumidity").text(result.main.humidity + "% UMIDITATE");
    $("#feelsLike").text("SE SIMT " + Math.round(result.main.feels_like) + "° C");
    $("#tempMax").text("TEMPERATURA MAXIMA: " + Math.round(result.main.temp_max) + "° C");
    $("#tempMin").text("TEMPERATURA MINIMA: " + Math.round(result.main.temp_min) + "° C");
}