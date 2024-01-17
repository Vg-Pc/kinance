import { ElementRef } from "@angular/core";

declare var $: any;
declare var echarts: any;
declare var echarts_theme_limitless: any;

export class EchartPie {

    /**
     * 
     * @param selector id example: idChart
     * @param options
     */
    public static initialize(selector: ElementRef, options: any) {
        let chart = echarts.init(selector.nativeElement, echarts_theme_limitless);        
        let defaultOpt = {
            // Display toolbox
            toolbox: {
                show: true,
                orient: 'vertical',
                feature: {
                    mark: {
                        show: true,
                        title: {
                            mark: 'Markline switch',
                            markUndo: 'Undo markline',
                            markClear: 'Clear markline'
                        }
                    },
                    dataView: {
                        show: true,
                        readOnly: false,
                        title: 'View data',
                        lang: ['View chart data', 'Close', 'Update']
                    },
                    magicType: {
                        show: true,
                        title: {
                            pie: 'Switch to pies',
                            funnel: 'Switch to funnel',
                        },
                        type: ['pie', 'funnel']
                    },
                    restore: {
                        show: true,
                        title: 'Restore'
                    },
                    saveAsImage: {
                        show: true,
                        title: 'Same as image',
                        lang: ['Save']
                    }
                }
            }
        }
        options = $.extend({}, options, defaultOpt);
        chart.setOption(options);
        window.onresize = function () {
            setTimeout(function () {
                chart.resize();
            }, 200);
        }
        return chart;
    }

    /**
     * 
     * @param selector 
     * @param innerData 
     * @param outerData 
     * @param serieLabel 
     */
    public static nestPie(selector: ElementRef, legend: string[], innerData: any, outerData: any, serieLabel: string) {
        let chart = echarts.init(selector.nativeElement, echarts_theme_limitless);
        chart.setOption(this.loadNestPie(innerData, legend, outerData, serieLabel));
        window.onresize = function () {
            setTimeout(function () {
                chart.resize();
            }, 200);
        }
        return chart;
    }


    /**
     * Draw pie chart
     * @param innerData
     * @param outerData
     */
    private static loadNestPie(innerData: any, legend: string[], outerData: any, serieLabel: string): any {
        let options = {

            // Add tooltip
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)'
            },

            // Add legend
            legend: {
                orient: 'vertical',
                x: 'left',
                data: legend
            },

            // Display toolbox
            toolbox: {
                show: true,
                orient: 'vertical',
                feature: {
                    mark: {
                        show: true,
                        title: {
                            mark: 'Markline switch',
                            markUndo: 'Undo markline',
                            markClear: 'Clear markline'
                        }
                    },
                    dataView: {
                        show: true,
                        readOnly: false,
                        title: 'View data',
                        lang: ['View chart data', 'Close', 'Update']
                    },
                    magicType: {
                        show: true,
                        title: {
                            pie: 'Switch to pies',
                            funnel: 'Switch to funnel',
                        },
                        type: ['pie', 'funnel']
                    },
                    restore: {
                        show: true,
                        title: 'Restore'
                    },
                    saveAsImage: {
                        show: true,
                        title: 'Same as image',
                        lang: ['Save']
                    }
                }
            },

            // Enable drag recalculate
            calculable: false,

            // Add series
            series: [

                // Inner
                {
                    name: serieLabel,
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '40%'],
                    itemStyle: {
                        normal: {
                            label: {
                                position: 'inner'
                            },
                            labelLine: {
                                show: false
                            }
                        },
                        emphasis: {
                            label: {
                                show: true
                            }
                        }
                    },

                    data: innerData
                },

                // Outer
                {
                    name: serieLabel,
                    type: 'pie',
                    radius: ['60%', '85%'],
                    label: {
                        normal: {
                            formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            // shadowBlur:3,
                            // shadowOffsetX: 2,
                            // shadowOffsetY: 2,
                            // shadowColor: '#999',
                            // padding: [0, 7],
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                // abg: {
                                //     backgroundColor: '#333',
                                //     width: '100%',
                                //     align: 'right',
                                //     height: 22,
                                //     borderRadius: [4, 4, 0, 0]
                                // },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    data: outerData
                }
            ]
        };
        return options;
    }
}
