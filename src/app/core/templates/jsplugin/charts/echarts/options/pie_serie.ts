export class PieSerie {
    private label?: any;
    name?: string;
    type: string;
    data: Array<PieSeriesData>;
    radius?: string

    constructor(obj?: IPieSerie) {
        this.name = obj && obj.name;
        this.data = obj && obj.data;
        this.type = 'pie';
        this.radius = obj && obj.radius || '75%';
        this.label = obj && obj.label || {
            normal: {
                show: true,
                position: 'outside',
                formatter: '{b} ({d})'
            },
            emphasis: {
                show: true                
            }
        }
    }
}

export interface IPieSerie {
    name?: string;
    data: Array<PieSeriesData>;
    radius?: string;
    label?: any;
}

export class PieSeriesData {
    name?: string;
    value?: number;
    constructor(obj?: IPieSeriesData) {
        this.name = obj && obj.name;
        this.value = obj && obj.value;
    }
}

export interface IPieSeriesData {
    name?: string;
    value?: number;
}