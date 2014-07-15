//Database handle
var influxdb = require("influx");

var client = new influxdb.InfluxDB({
		// or single-host configuration
		host : '162.243.57.240',
		port : 8086,
		username : 'root',
		password : 'root',
		database : 'home-sensor-array'
	});

var curTemp = Math.floor(23 + Math.random()*10 - 5);
var electricityCost = Math.floor(30 + Math.random()*50);
var curHumidity = Math.floor(50 + Math.random()*20 - 10);

client.writePoint("humidity-sensor", { "humidity": curHumidity }, client.options, function(err, res){console.log(err);})
client.writePoint("temp-sensor", { "temp": curTemp }, client.options, function(err, res){console.log(err);});
client.writePoint("electricity-cost", { "cost": electricityCost }, client.options, function(err, res){console.log(err);});
