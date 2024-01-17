export class CCycleTimeCriteria {
    cycleTimeId?: string;
    factoryId?: string;
    sectionName?: string;
    modelId?: string;
    modelName?: string;
    lineId?: number;
    lineName?: string;
    moNumber?: string;
    value?: number;
    uph?: number;
    workHour?: number;
    targetQty?: number;
    isActive?: boolean;
    applyDate?: Date;

    constructor(obj?: ICCycleTimeCriteria) {
        this.cycleTimeId = obj && obj.cycleTimeId;
        this.modelId = obj && obj.modelId;
        this.factoryId = obj && obj.factoryId;
        this.sectionName = obj && obj.sectionName;
        this.lineId = obj && obj.lineId;
        this.moNumber = obj && obj.moNumber;
        this.value = obj && obj.value;
        this.uph = obj && obj.uph;
        this.workHour = obj && obj.workHour;
        this.targetQty = obj && obj.targetQty;
        this.applyDate = obj && obj.applyDate;
        this.isActive = obj && obj.isActive;
    }
}

export interface ICCycleTimeCriteria {
    cycleTimeId?: string;
    factoryId?: string;
    sectionName?: string;
    modelId?: string;
    modelName?: string;
    lineId?: number;
    lineName?: string;
    moNumber?: string;
    value?: number;
    uph?: number;
    workHour?: number;
    targetQty?: number;
    applyDate?: Date;
    isActive?: boolean;
}
