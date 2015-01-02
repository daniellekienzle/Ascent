var barometer;

var loadBarometer = function(seriesData){
  barometer = new Highcharts.Chart({
      chart: {
        type: 'solidgauge',
        renderTo: 'gauge_3',
        plotBorderWidth: 0,
        spacingTop: 0,
        spacingLeft: 0,
        spacingRight: 0,
        spacingBottom: 0
      },
      title: {
        text: 'Barometer'
      },
      pane: {
        center: ['50%', '85%'],
        size: '100%',
        startAngle: -90,
        endAngle: 90,
        background: {
          backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
          innerRadius: '60%',
          outerRadius: '100%',
          shape: 'arc'
        }
      },
      tooltip: {
        enabled: false
      },
      yAxis: {
        stops: [
          [0.5, '#DDDF0D'], // yellow
          [0.9, '#55BF3B'], // green
          [0.1, '#DF5353'] // red
        ],
        lineWidth: 0,
        minorTickInterval: null,
        tickPixelInterval: 100,
        tickWidth: 0,
        labels: {
          y: 16
        },
        min: 0,
        max: 1100
      },
      plotOptions: {
        solidgauge: {
          dataLabels: {
            y: 5,
            borderWidth: 0,
            useHTML: true
          }
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Pressure',
        data: [seriesData],
        dataLabels: {
          format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                   '<span style="font-size:14px;color:silver">mb</span></div>'
        }
      }]
  });
};

var playBarometer = function(interval_time) {
  var seriesIndex = 0;
  setInterval(function() {
    var point = barometer.series[0].points[0];
    seriesIndex++;
    if (seriesIndex < flight_data.length) {
      point.update(flight_data[seriesIndex].pressure);
    }
  }, interval_time);
};
