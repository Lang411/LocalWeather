//Code to get users location. From FreeCodeCamp.org example 
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {
		$("#locationData").html("Latitude: " + position.coords.latitude + "&deg;   +     Longitude: " + position.coords.longitude+"&deg;");


		myLat = position.coords.latitude;
		myLon = position.coords.longitude;
		var WeatherAPI = "http://api.openweathermap.org/data/2.5/weather?lat="+myLat+"&lon="+myLon+"&appid=b4e4ecd77fc06e6944ca938ab6e909be";
//Get JSON from API	
	//$(document).ready(function() {	
		//$("#getMessage").on("click", function(){
		//var WeatherAPI = "http://api.openweathermap.org/data/2.5/forecast/city?id=3837675&APPID=b4e4ecd77fc06e6944ca938ab6e909be";
		console.log(WeatherAPI);
		$.getJSON( WeatherAPI, function(json) {
			console.log(json)
			$("#WeatherData").html(JSON.stringify(json));
			$("#yourCity").html('The weather in '+json.name+' is:');
			$("#yourWeather").html('Your Weather: '+json.weather[0].description);
			if (json.weather[0].main=='Rain'){
				console.log('Rain')
				 $("body").css('background-image', 'url("https://github.com/Lang411/LocalWeather/blob/master/Assets/san-francisco-city-landscape.jpg?raw=true")');
			}
			else if (json.weather[0].main=='Sunny'){
				console.log('Sun')
				 $("body").css('background-image', 'url("https://github.com/Lang411/LocalWeather/blob/master/Assets/04010_mcwayfalls_1600x900.jpg?raw=true")');
			}
			json.weather[0].description
			$("#yourTemp").html('Your Temprature: '+(9/5*(json.main.temp - 273) + 32).toFixed(2)+'&deg;F');
			$("#yourHumidity").html('Your Humidity: '+json.main.humidity+'%');
		});
		//});
	});
//});


}
else {
	$("#locationData").html("Cant obtain your location. Check your browser setting.");
}

/*
//get images from JSON returned object
json.forEach(function(val) {
var keys = Object.keys(val);
html += "<div class = 'cat'>";
keys.forEach(function(key) {
html += "<b>" + key + "</b>: " + val[key] + "<br>";
});
html += "</div><br>";
});
*/
