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
            '12AM',
            '1AM',
            '2AM',
            '3AM',
            '4AM',
            '4am',
            '6AM',
            '7AM',
            '8AM',
            '9AM',
            '10AM',
            '11M',
            '12PM',
            '1PM',
            '2PM',
            '3PM',
            '4PM',
            '5PM',
            '6PM',
            '7PM',
            '8PM',
            '9PM',
            '10PM',
            '11PM',
            
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
            data: [3, 4, 3, 5, 4, 102, 212,43,146,43,165,194,510,152,3,154,23, 105,94,100,12,3,4,45]
        },{
            name: 'Files Downloaded',
            color: '#F26B29',
            data: [150, 25, 31, 50, 6, 104, 232,430,126,434,16,14,51,185,30,164,231, 115,98,120,112,35,47,25]   
        }
]
});