export class MachineCriteria {
	machineId?: string;
	machineName?: string;
	lineName?: string;
	factoryName?: string;
	ordinal?: number;
	createdBy?: string;
	createdDate?: any;
	modifiedBy?: string;
	modifiedDate?: any;
	currentState?: string;
	machineState?: MachineState;
    isActive?: boolean;
    
	constructor(obj?: IMachine) {
		this.machineId = obj && obj.machineId;
		this.machineName = obj && obj.machineName;
		this.lineName = obj && obj.lineName;
		this.createdBy = obj && obj.createdBy;
		this.createdDate = obj && obj.createdDate;
		this.modifiedBy = obj && obj.modifiedBy;
		this.modifiedDate = obj && obj.modifiedDate;
		this.factoryName = obj && obj.factoryName;
		this.ordinal = obj && obj.ordinal;
		this.isActive = obj && obj.isActive;
	}
}

export interface IMachine {
	machineId?: string;
	machineName?: string;
	lineName?: string;
	factoryName?: string;
	ordinal?: number;
	createdBy?: string;
	createdDate?: any;
	modifiedBy?: string;
	modifiedDate?: any;
	currentState?: string;
	machineState?: MachineState;
	isActive?: boolean;
}

export class MachineState {
	s?: number;
	y?: number;
	r?: number;

	constructor(obj?: IMachineState) {
		this.s = obj && obj.s;
		this.y = obj && obj.y;
		this.r = obj && obj.r;
	}
}

export interface IMachineState {
	s?: number;
	y?: number;
	r?: number;
}