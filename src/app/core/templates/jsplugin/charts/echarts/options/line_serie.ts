export class LineSerie {
    private type: string;
    private label: any;
    name: string;
    smooth: boolean;
    data: Array<number>;
    labelColor?: string;
    labelFormatter?: Function;

    constructor(obj?: ILine) {
        this.type = 'line';
        this.label = {
            show: true,
            formatter: obj.labelFormatter,
            color: obj.labelColor
        };
        this.name = obj && obj.name;
        this.data = obj && obj.data;
        this.smooth = obj && obj.smooth;
    }
}

export interface ILine {
    name: string;
    smooth: boolean;
    data: Array<number>;
    labelColor?: string;
    labelFormatter?: Function;
}