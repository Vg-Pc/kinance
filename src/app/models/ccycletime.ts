export class CCycleTime {
	cycleTimeId?: string;
	factoryId?: string;
	sectionName?: string;
	endStationName?: string;
	modelId?: string;
	modelName?: string;
	lineId?: number;
	lineName?: string;
	moNumber?: string;
	value?: number;
	uph?: number;
	workHour?: number;
	coefficient?: number;
	targetQty?: number;
	manPower?: number;
	isActive?: boolean;
	applyDate?: Date;

	constructor(obj?: ICCycleTime) {
		this.cycleTimeId = obj && obj.cycleTimeId;
		this.modelId = obj && obj.modelId;
		this.factoryId = obj && obj.factoryId;
		this.sectionName = obj && obj.sectionName;
		this.endStationName = obj && obj.endStationName;
		this.lineId = obj && obj.lineId;
		this.moNumber = obj && obj.moNumber;
		this.value = obj && obj.value;
		this.uph = obj && obj.uph;
		this.workHour = obj && obj.workHour;
		this.coefficient = obj && obj.coefficient;
		this.targetQty = obj && obj.targetQty;
		this.manPower = obj && obj.manPower;
		this.applyDate = obj && obj.applyDate;
		this.isActive = obj && obj.isActive;
	}
}

export interface ICCycleTime {
	cycleTimeId?: string;
	factoryId?: string;
	sectionName?: string;
	endStationName?: string;
	modelId?: string;
	modelName?: string;
	lineId?: number;
	lineName?: string;
	moNumber?: string;
	value?: number;
	uph?: number;
	workHour?: number;
	coefficient?: number;
	targetQty?: number;
	manPower?: number;
	applyDate?: Date;
	isActive?: boolean;
}
