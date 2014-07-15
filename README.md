justgage-influx
===============

How to:
=======
The graphHandler.js script contains an interface to creating the gauges.

first you'll want to enter the credentials of your database where you see:

var Hostname = "http://162.243.57.240:8086"; //Make sure no forward slash procedes the hostname.
var Database = "home-sensor-array";
var Username = "root";
var PassWord = "root";

Create a div inside your html page where id="gauge-id" and create
a new object inside the gauges object as follows:

var gauges = {
  exampleGauge: { //This is how your new object begins
    gauge: new JustGage({
      id: "gauge-id",
      min: 0,
      max: 100,
      value: 0,
      title: "title of gauge"
      //...etc (visit http://www.justgage.com for more formatting options)
    }),
    
    query: "select entryName from timeSeries"
  }, //This is where it ends.

The property names that you cannot change are the gauge property and the query propterty
for they are used to actually update the gauge itself and send the query to the database
respectively.

The rest is handled by jQuery and your div's css properties.
