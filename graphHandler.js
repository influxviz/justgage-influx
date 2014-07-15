/*	This script will handle sidebar events
	and draw the proper graphics on the screen.
	Animations are done in jQuery, the pentahedral
	graph is created using Rapheal.js, and the gauges
	are justGage gauges which are implemented using Rapheal.js.
*/

var Hostname = "http://162.243.57.240:8086"; //Make sure no forward slash procedes the hostname.
var Database = "home-sensor-array";
var Username = "root";
var PassWord = "root";

var gauges = {

	//Gauges are objects with two properties, 
	//their actual gauge object and the query they send to the database.
	humidityGauge: {
		gauge: new JustGage({
								id: "humidity-gauge",
								min: 0,
								max: 100,
								value: 0,
								title: "Room Humidity %",
								gaugeWidthScale: 0.7,
								labelFontColor : "#000000",
								titleFontColor: "#000000"
							}),

		query: "select humidity from humidity-sensor"
	},



	tempGauge: {
		gauge: new JustGage({
								id: "temp-gauge",
								min: -60,
								max: 80,
								value: 0,
								title: "Room Temperature Celcius",
								gaugeWidthScale: 0.7,
								labelFontColor: "#000000",
								titleFontColor: "#000000"
							}),

		query: "select temp from temp-sensor"
	},



	electrGauge: {
		gauge: new JustGage({
								id: "electr-gauge",
								min: 0,
								max: 300,
								value: 0,
								title: "Electricty Cost $",
								gaugeWidthScale: 0.7,
								labelFontColor : "#000000",
								titleFontColor: "#000000"
							}),

		query: "select cost from electricity-cost"
	}
};

//GET request with the query will be sent to the influxDB database.
var influxDBUpdateGauge = function(hostname, database, username, password, query, gauge, callback) {
	var url = "" + hostname + "/db/" + database + "/series?u=" + username + "&p=" + password + "&q=" + query + "&" 
					+ Math.floor(Math.random()*11240912); //Keep from hitting browser cache.

	$.get(
		url, 
		function(res){
		
			var data = jQuery.parseJSON(res.substring(1,res.length - 1));

			var points = data["points"][0]
			callback(Math.floor(points[2]), gauge);
		},
		"text");
}

//This function allows the JustGage.refresh function to be used as a callback.
var refreshGauge = function(val, gauge) {
	gauge.refresh(val);
}

//This function will force all the gauges to sync with the latest value outputed by the database.
var sendQueries = function() {
	for (var g in gauges)
	{
		var gauge = gauges[g]["gauge"];
		var query = gauges[g]["query"];
		if (gauge instanceof JustGage)
		{
			influxDBUpdateGauge(Hostname, Database, Username, PassWord, query, gauge, refreshGauge);
		}
	}
};

setInterval(function() {sendQueries();}, 1500);

/*
TODO: second page with a graph and a widget handler.

var widgets = ["#indoor-stats", "#garden-stats"];

var activeWidget = widgets[0];

var swapWidgets = function(widgetNumber) {
	var num = (widgetNumber > widgets.length - 1) ? widgets.length - 1 : widgetNumber;

	$(activeWidget).slideUp("slow",function(){
		activeWidget = widgets[widgetNumber]
		$(activeWidget).slideDown();
	});
}
*/
