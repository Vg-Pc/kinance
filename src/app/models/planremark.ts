export class PlanRemark {
	remarkDailyId?: string;
	planId?: string;
	factoryId?: string;
	sectionName?: string;
	lineId?: string;
	lineName?: string;
	shift?: string;
	dateKey?: number;
	employeeQty?: number;
	remark?: string;
	createdBy?: string;
	createdDate?: any;
	modifiedBy?: string;
	modifiedDate?: any;

	constructor(obj?: PlanRemark) {
		this.remarkDailyId = obj && obj.remarkDailyId;
		this.planId = obj && obj.planId;
		this.factoryId = obj && obj.factoryId;
		this.sectionName = obj && obj.sectionName;
		this.lineId = obj && obj.lineId;
		this.lineName = obj && obj.lineName;
		this.shift = obj && obj.shift;
		this.dateKey = obj && obj.dateKey;
		this.employeeQty = obj && obj.employeeQty;
		this.remark = obj && obj.remark;
		this.createdBy = obj && obj.createdBy;
		this.createdDate = obj && obj.createdDate;
		this.modifiedBy = obj && obj.modifiedBy;
		this.modifiedDate = obj && obj.modifiedDate;
	}
}

export interface IPlanRemark {
	remarkDailyId?: string;
	planId?: string;
	factoryId?: string;
	sectionName?: string;
	lineId?: string;
	lineName?: string;
	shift?: string;
	dateKey?: number;
	employeeQty?: number;
	remark?: string;
	createdBy?: string;
	createdDate?: any;
	modifiedBy?: string;
	modifiedDate?: any;
}
