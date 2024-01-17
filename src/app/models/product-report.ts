
export class ProductReport {
    factoryId?: string;
    factoryName?: string;
    modelId?: string;    
    modelName?: string;
    lineId?: string;
    lineName?: string;
    moNumber?: string;
    sectionName?: string;
    startDate?: any;
    endDate?: any;

    constructor(obj?: IProductReport) {
        this.factoryId = obj && obj.factoryId;
        this.factoryName = obj && obj.factoryName;
        this.modelId = obj && obj.modelId;
        this.modelName = obj && obj.modelName;
        this.lineId = obj && obj.lineId;
        this.lineName = obj && obj.lineName;
        this.moNumber = obj && obj.moNumber;
        this.sectionName = obj && obj.sectionName;
        this.startDate = obj && obj.startDate;
        this.endDate = obj && obj.endDate;
    }
}

export interface IProductReport {
    factoryId?: string;
    factoryName?: string;
    modelId?: string;
    modelName?: string;
    lineId?: string;
    lineName?: string;
    moNumber?: string;
    sectionName?: string;
    startDate?: any;
    endDate?: any;
}
