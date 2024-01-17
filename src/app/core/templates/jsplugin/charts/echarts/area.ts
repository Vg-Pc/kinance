declare var $: any;
declare var echarts: any;
declare var echarts_theme_limitless: any;

export class EchartArea {

    public static initialize(selectorId: string, options: any): any {
        let chart = echarts.init(document.getElementById(selectorId), echarts_theme_limitless);
        chart.setOption(options);
        return chart;
    }

    public static basic(selectorId: string, legend: string[], xAxis: string[], series: any): any {
        let chart = echarts.init(document.getElementById(selectorId), echarts_theme_limitless);
        chart.setOption(this.loadAreaOption(legend, xAxis, series));
        return chart;
    }

    private static loadAreaOption(legend: string[], xAxis: string[], series: any): any {
        // //
        // // Basic area options
        // //

        let options = {

            // Setup grid
            grid: {
                x: 40,
                x2: 20,
                y: 35,
                y2: 25
            },

            // Add tooltip
            tooltip: {
                trigger: 'axis'
            },

            // Add legend
            legend: {
                data: ['New orders', 'In progress', 'Closed deals']
            },


            // Enable drag recalculate
            calculable: true,

            // Horizontal axis
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                data: xAxis
            }],

            // Vertical axis
            yAxis: [{
                type: 'value'
            }],

            // Add series
            series: series
        };
        return options;
    }
}
