import { BarSerie, LineSerie } from './serie';
import { ElementRef } from '@angular/core';

declare var $: any;
declare var echarts: any;
declare var echarts_theme_limitless: any;

export class EchartLine {
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
    public static basic(selector: ElementRef, title: string, subtitle: string, legend: string[], xAxis: string[], series: Array<LineSerie>, color?: string[], opt?: any): any {
        let option = {
            toolbox: {
                show: true,
                feature: {
                    dataView: { show: true, readOnly: true },
                    magicType: { show: true, type: ['bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            title: {
                text: title,
                subtext: subtitle
            },
            xAxis: {
                type: 'category',
                data: xAxis,
                axisLabel: {
                    rotate: 60
                }
            },
            yAxis: {
                type: 'value'
            },
            series: series
        };

        if (color) {
            option = $.extend({}, option, { color: color });
        } else {
            option = $.extend({}, option, { color: echarts_theme_limitless.color });
        }
        if (opt)
            option = $.extend({}, option, opt);
        return this.initialize(selector.nativeElement, option);
    }

    /**
     * Display line chart with rotate label
     * @param selector ex: exampleId
     * @param title 
     * @param subtitle 
     * @param legend 
     * @param xAxis 
     * @param series 
     */
    public static basicWithRotateLabel(selector: ElementRef, title: string, subtitle: string, legend: string[], xAxis: string[], series: Array<LineSerie>): any {
        let option = {
            toolbox: {
                show: true,
                feature: {
                    dataView: { show: true, readOnly: true },
                    magicType: { show: true, type: ['bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            xAxis: {
                type: 'category',
                data: xAxis,
                axisLabel: {
                    rotate: -90
                }
            },
            yAxis: {
                type: 'value'
            },
            series: series
        };

        return this.initialize(selector.nativeElement, option);
    }
}