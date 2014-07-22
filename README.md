justgage-influx
===============

How to:
=======
The graphHandler.js script contains an interface to creating and placing gauges in your html page.

First you'll want to enter the credentials inside a metatag like so:

```
<meta name="influxDBCredentials" content="databaseIP: 162.243.57.240; port: 8086; database: home-sensor-array; username: root; password: root;">
```

Create a div in your html page with a meta-tag inside it containing the gauges configuration as follows:

Note: The div MUST HAVE an id associated with it or the gauge will not shop up.

```
<div id="gauge-id" class="gauge">
	<meta content="influxValue: value; influxTimeSeries: sensor; min: 0; max: 100; title: awesome gauge example;">
</div>
```
Note: the influxValue and influxTimeSeries values are used to form the query "select influxValue from influxTimeSeries".


The rest is handled by influxDBGauge.js, justgage.1.0.1.js, raphael.2.1.0.min.js, jQuery.js and your div's css properties.

This means you'll need to call for them in your html file.

Example:

```
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<script type="text/javascript" src="justGage.1.0.1/resources/js/raphael.2.1.0.min.js"></script>
<script type="text/javascript" src="justGage.1.0.1/resources/js/justgage.1.0.1.js"></script>
<script type="text/javascript" src="influxDBGauge.js"></script>
```