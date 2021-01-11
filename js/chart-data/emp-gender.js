Highcharts.chart('emp-gender', {
    chart: {
        type: 'column',
        backgroundColor:'transparent'
    },
    title: {
        text: null
    },
    xAxis: {
        categories: ['President', 'Captain', 'Positio2', 'Position3', 'Position4'],
        title: {
            text: 'Positions'
        },
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Candidates'
        },
        gridLineColor: '#95aac9',
        gridLineDashStyle: 'ShortDot',
        gridLineWidth: 0.3,
        min: 0,
        stackLabels: {
            enabled: false,
            style: {
                fontWeight: 'bold',
                color: ( // theme
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || 'gray'
            }
        }
    },
    legend: {
        enabled:false,
        align: 'right',
        x: 2,
        verticalAlign: 'bottom',
        y: -0,
        floating: false,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total  Candidates: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: false
            },
            borderWidth: 0,
            borderColor: 'transparent',
        }
    },
    series: [{
    		color: '#b73377',
        name: 'Female Candidates',
        data: [5, 3, 4, 7, 2]
    }, {
    		color:'#2ca9d9',
        name: 'Male Candidates',
        data: [2, 2, 3, 2, 1]
    }]
});