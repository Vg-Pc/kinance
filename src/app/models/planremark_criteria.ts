export class PlanRemarkCriteria {
    planId?: string;
    factoryId?: string;
    sectionName?: string;
    startDate?: any;
    endDate?: any;

    constructor(obj?: IPlanRemarkCriteria) {
        this.planId = obj && obj.planId;
        this.factoryId = obj && obj.factoryId;
        this.sectionName = obj && obj.sectionName;
        this.startDate = obj && obj.startDate;
        this.endDate = obj && obj.endDate;
    }
}

export interface IPlanRemarkCriteria {
    planId?: string;
    factoryId?: string;
    sectionName?: string;
    startDate?: any;
    endDate?: any;
}
