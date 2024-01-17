export class PlanSchedule {
    level?: number;
    modelName?: string;
    moNumber?: string;
    workDate?: string;
    altWorkDate?: string;
    groupName?: string;
    sectionName?: string;
    lineName?: string;
    shift?: string;
    uph?: number;
    targetQty?: number;
    totalQty?: number;
    planEmpQty?: number;
    actEmpQty?: number;
    accumulationQty?: number;
    remark?: string;
    planId?: string;
    constructor(obj?: IPlanSchedule) {
        this.level = obj && obj.level;
        this.modelName = obj && obj.modelName;
        this.moNumber = obj && obj.moNumber;
        this.workDate = obj && obj.workDate;
        this.altWorkDate = obj && obj.altWorkDate;
        this.groupName = obj && obj.groupName;
        this.sectionName = obj && obj.sectionName;
        this.lineName = obj && obj.lineName;
        this.shift = obj && obj.shift;
        this.uph = obj && obj.uph;
        this.targetQty = obj && obj.targetQty;
        this.totalQty = obj && obj.totalQty;
        this.planEmpQty = obj && obj.planEmpQty;
        this.actEmpQty = obj && obj.actEmpQty;
        this.accumulationQty = obj && obj.accumulationQty;
        this.remark = obj && obj.remark;
        this.planId = obj && obj.planId;
    }
}

export interface IPlanSchedule {
    level?: number;
    modelName?: string;
    moNumber?: string;
    workDate?: string;
    altWorkDate?: string;
    groupName?: string;
    sectionName?: string;
    lineName?: string;
    shift?: string;
    uph?: number;
    targetQty?: number;
    totalQty?: number;
    planEmpQty?: number;
    actEmpQty?: number;
    accumulationQty?: number;
    remark?: string;
    planId?: string;
}