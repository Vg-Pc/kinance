export class MachineAbnormalcy {
	abnormalcyId?: string;
	remarkGroupId?: string;
	factoryName?: string;
	shift?: string;
	shiftWorkDate?: string;
	shiftWorkSection?: number;
	workDateByTime?: string;
	workSectionByTime?: number;
	lineName?: string;
	machineName?: string;
	startTime?: any;
	endTime?: any;
	amount?: number;
	abnormalcyType?: string;
	remarkId?: string;
	remark?: string;
	isClose?: boolean;

	constructor(obj?: IMachineAbnormalcy) {
		this.abnormalcyId = obj && obj.abnormalcyId;
		this.remarkGroupId = obj && obj.remarkGroupId;
		this.factoryName = obj && obj.factoryName;
		this.shift = obj && obj.shift;
		this.shiftWorkDate = obj && obj.shiftWorkDate;
		this.shiftWorkSection = obj && obj.shiftWorkSection;
		this.workDateByTime = obj && obj.workDateByTime;
		this.workSectionByTime = obj && obj.workSectionByTime;
		this.lineName = obj && obj.lineName;
		this.machineName = obj && obj.machineName;
		this.startTime = obj && obj.startTime;
		this.endTime = obj && obj.endTime;
		this.amount = obj && obj.amount;
		this.abnormalcyType = obj && obj.abnormalcyType;
		this.remarkId = obj && obj.remarkId;
		this.remark = obj && obj.remark;
		this.isClose = obj && obj.isClose || false;
	}
}

export interface IMachineAbnormalcy {
	abnormalcyId?: string;
	remarkGroupId?: string;
	factoryName?: string;
	shift?: string;
	shiftWorkDate?: string;
	shiftWorkSection?: number;
	workDateByTime?: string;
	workSectionByTime?: number;
	lineName?: string;
	machineName?: string;
	startTime?: any;
	endTime?: any;
	amount?: number;
	abnormalcyType?: string;
	remarkId?: string;
	remark?: string;
	isClose?: boolean;
}
