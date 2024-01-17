import { Machine } from "./machine";

export class CLineDescT {
	cLineDestTId?: string;
	lineName?: string;
	lineType?: string;
	lineDesc?: string;
	lineCode?: string;
	pcasLineName?: string;
	altLineName?: string;
	uph?: number;
	workHour?: number;
	cycleTimeValue?: number;
	targetQty?: number;
	machines?: Array<Machine>;

	constructor(obj?: CLineDescT) {
		this.cLineDestTId = obj && obj.cLineDestTId;
		this.lineName = obj && obj.lineName;
		this.lineType = obj && obj.lineType;
		this.lineDesc = obj && obj.lineDesc;
		this.lineCode = obj && obj.lineCode;
		this.pcasLineName = obj && obj.pcasLineName;
		this.altLineName = obj && obj.altLineName;
		this.uph = obj && obj.uph;
		this.workHour = obj && obj.workHour;
		this.cycleTimeValue = obj && obj.cycleTimeValue;
		this.targetQty = obj && obj.targetQty;
		this.machines = obj && obj.machines;
	}
}

export interface ICLineDescT {
	cLineDestTId?: string;
	lineName?: string;
	lineType?: string;
	lineDesc?: string;
	lineCode?: string;
	pcasLineName?: string;
	altLineName?: string;
	uph?: number;
	workHour?: number;
	cycleTimeValue?: number;
	targetQty?: number;
	machines?: Array<Machine>;
}
