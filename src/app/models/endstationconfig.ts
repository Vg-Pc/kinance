export class EndStationConfig {
	modelName?: string;
	sectionName?: string;
	endStationName?: string;
	isActive?: boolean;
    
    constructor(obj?:IEndStationConfig){
        this.modelName = obj && obj.modelName;
        this.sectionName = obj && obj.sectionName;
        this.endStationName = obj && obj.endStationName;
        this.isActive = obj && obj.isActive || false;
    }
}

export interface IEndStationConfig{
	modelName?: string;
	sectionName?: string;
	endStationName?: string;
	isActive?: boolean;
}
