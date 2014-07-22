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


The rest is handled by influxDBGauge.js, jQuery.js and your div's css properties.
