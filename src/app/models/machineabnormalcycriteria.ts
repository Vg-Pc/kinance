export class MachineAbnormalcyCriteria {
    factoryId?: string;
    factoryName?: string;
    sectionName?: string;

    constructor(obj?: IMachineAbnormalcyCriteria) {
        this.factoryId = obj && obj.factoryId;
        this.factoryName = obj && obj.factoryName;
        this.sectionName = obj && obj.sectionName;
    }
}

export interface IMachineAbnormalcyCriteria {
    factoryId?: string;
    factoryName?: string;
    sectionName?: string;
}