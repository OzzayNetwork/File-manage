Highcharts.chart('voting-rate', {
    chart: {
        type: 'spline',
        zoomType: 'x',
        backgroundColor:'transparent'
    },
    title: {
        text: null
    },
    legend: {
        enabled:false,
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 150,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'June',
            'July',
            'Aug',
            'Sept',
            'Oct',
            'Nov',
            'Dec'
            
        ],
        plotBands: [{ // visualize the weekend
            from: 6.5,
            to: 13,
            color: 'rgba(9, 175, 0, .2)'
        },{
        		from: 14,
            to: 18,
            color: 'rgba(9, 175, 0, .2)'
        }
        ],
        minRange:2,

        
    },
    yAxis: {
        title: {
            text: 'Outgoing Documents'
        },
        gridLineColor: '#95aac9',
        gridLineDashStyle: 'ShortDot',
        gridLineWidth: 0.3,
        min: 0,
    },
    tooltip: {
        shared: true,
        valueSuffix: ' Files'
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.5,
            threshold: null
        },
        series: {
            marker: {
                enabled: false
            }
        }
    },
    series: [
        {
            name: 'Emails Sent',
            data: [3, 4, 3, 5, 4, 102, 212,43,146,43,165,194]
        },{
            name: 'Files Downloaded',
            color: '#F26B29',
            data: [150, 25, 31, 50, 6, 104, 232,430,126,434,16,14]   
        }
]
});