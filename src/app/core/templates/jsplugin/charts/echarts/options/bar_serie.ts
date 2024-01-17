
export class BarSerie {
    private type: string;
    private label: any;
    private barGap: string;
    name: string;
    data: Array<number>;
    markPoint?: MarkPoint;
    markLine?: MarkLine;

    constructor(obj?: IBar) {
        this.type = 'bar';
        this.label = {
            show: true,
            position: 'top'
        };
        this.name = obj && obj.name;
        this.data = obj && obj.data;
        this.barGap = obj && obj.barGap || '1%';
        this.markPoint = obj && obj.markPoint;
        this.markLine = obj && obj.markLine;
    }
}

export interface IBar {
    name: string;
    barGap?: string;
    data: Array<number>;
    markPoint?: MarkPoint;
    markLine?: MarkLine;
}

export class MarkPoint {    
    data: Array<BarMark>;
    constructor(obj: IMarkPoint) {        
        this.data = obj.data;
    }
}

export interface IMarkPoint {
    distance?: number;
    data: Array<BarMark>;
}

export class MarkLine {
    data: Array<BarMark>;
    constructor(obj: IMarkLine) {
        this.data = obj.data;
    }
}

export interface IMarkLine {
    data: Array<BarMark>;
}

export class BarMark {
    type?: string;
    name?: string;
    value?: number
    constructor(obj: IMarkPointData) {
        this.name = obj && obj.name;
        this.value = obj && obj.value;
        this.type = obj && obj.type.toString();
    }
}
export interface IMarkPointData {
    type?: BarMarkType;
    name?: string;
    value?: number
}

export class MarkLineData {
    type: string;
    name: string;
    value: number
}

export enum BarMarkType {
    min = 'min',
    max = 'max',
    average = 'average'
}