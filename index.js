//Code to get users location. From FreeCodeCamp.org example 
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {
$("#locationData").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
});
}

//Get JSON from API		
$("#getMessage").on("ready", function(){
      $.getJSON("/json/cats.json", function(json) {
$(".message").html(JSON.stringify(json));
});

//get images from JSON returned object
json.forEach(function(val) {
var keys = Object.keys(val);
html += "<div class = 'cat'>";
keys.forEach(function(key) {
html += "<b>" + key + "</b>: " + val[key] + "<br>";
});
html += "</div><br>";
});