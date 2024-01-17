import { BarSerie } from './serie';
import { ElementRef } from '@angular/core';

declare var $: any;
declare var echarts: any;
declare var echarts_theme_limitless: any;

export class EchartColumn {
    private static initialize(selectorId: string, options: any): any {
        let chart = echarts.init(selectorId, echarts_theme_limitless);
        chart.setOption(options);
        return chart;
    }

    /**
     * Display rain fall column chart
     * @param selector ex: exampleId
     * @param title 
     * @param subtitle 
     * @param legend 
     * @param xAxis 
     * @param series 
     */
    public static rainFall(selector: ElementRef, title: string, subtitle: string, legend: string[], xAxis: string[], xAxisName: string, yAxisName: string, series: Array<BarSerie>, color?: string[]): any {
        let option = {
            title: {
                text: title,
                subtext: subtitle
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: legend
            },
            toolbox: {
                show: true,
                feature: {
                    dataView: { show: true, readOnly: true },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    name: xAxisName,
                    data: xAxis,
                    axisLabel: {
                        rotate: 45,
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: yAxisName
                }
            ],
            series: series
        };
        if (color) {
            option = $.extend({}, option, { color: color });
        } else {
            option = $.extend({}, option, { color: echarts_theme_limitless.color });
        }
        return this.initialize(selector.nativeElement, option);
    }
}