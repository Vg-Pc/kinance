export class Plan {
	planId?: string;
	planName?: string;
	targetQty?: number;
	modelId?: string;
	modelName?: string;
	moNumber?: string;	
	lineId?: string;
	lineName?: string;
	sectionName?: string;
	altSectionName?: string;
	endStationName?: string;
	factoryId?: string;
	factoryName?: string;
	employeeQty?: number;
	cycleTimeId?: string;
	cycleTime?: number;
	uph?: number;
	workHour?: number;
	closed?: boolean;
	createdBy?: string;
	createdDate?: any;
	modifiedBy?: string;
	modifiedDate?: any;
	startDate?: any;
	endDate?: any;
	dateKey?: string;

	constructor(obj?: IPlan) {
		this.planId = obj && obj.planId;
		this.planName = obj && obj.planName;
		this.targetQty = obj && obj.targetQty;
		this.modelId = obj && obj.modelId;
		this.modelName = obj && obj.modelName;
		this.moNumber = obj && obj.moNumber;		
		this.lineId = obj && obj.lineId;
		this.lineName = obj && obj.lineName;
		this.sectionName = obj && obj.sectionName;
		this.altSectionName = obj && obj.altSectionName;
		this.endStationName = obj && obj.endStationName;
		this.factoryId = obj && obj.factoryId;
		this.factoryName = obj && obj.factoryName;
		this.employeeQty = obj && obj.employeeQty;
		this.cycleTimeId = obj && obj.cycleTimeId;
		this.cycleTime = obj && obj.cycleTime;
		this.uph = obj && obj.uph;
		this.workHour = obj && obj.workHour;
		this.closed = obj && obj.closed || false;
		this.createdBy = obj && obj.createdBy;
		this.createdDate = obj && obj.createdDate;
		this.modifiedBy = obj && obj.modifiedBy;
		this.modifiedDate = obj && obj.modifiedDate;
		this.startDate = obj && obj.startDate;
		this.endDate = obj && obj.endDate;
		this.dateKey = obj && obj.dateKey;
	}
}

export interface IPlan {
	planId?: string;
	planName?: string;
	targetQty?: number;
	modelId?: string;
	modelName?: string;
	moNumber?: string;	
	lineId?: string;
	lineName?: string;
	sectionName?: string;
	altSectionName?: string;
	endStationName?: string;
	factoryId?: string;
	factoryName?: string;
	employeeQty?: number;
	cycleTimeId?: string;
	cycleTime?: number;
	uph?: number;
	workHour?: number;
	closed?: boolean;
	createdBy?: string;
	createdDate?: any;
	modifiedBy?: string;
	modifiedDate?: any;
	startDate?: any;
	endDate?: any;
	dateKey?: string;
}
