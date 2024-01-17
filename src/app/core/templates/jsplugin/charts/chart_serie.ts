export class ChartSerie {
    name: string;
    data: any;
    constructor(obj: IChartSerie) {
        this.name = obj.name;
        this.data = obj.data
    }
}

export interface IChartSerie {
    name: string;
    data: any
}