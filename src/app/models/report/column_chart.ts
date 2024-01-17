export class ColumnChart {
    x: string;
    y: number;

    constructor(obj?: IColumnChart) {
        this.x = obj && obj.x;
        this.y = obj && obj.y;
    }
}

export interface IColumnChart {
    x: string;
    y: number;
}