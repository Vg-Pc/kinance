export class LineEmployee {
	lineEmployeeId?: string;
	employeeId?: number;
	datekey?: number;
	lineId?: string;
	createdBy?: string;
	createdDate?: any;
	modifiedBy?: string;
	modifiedDate?: any;
    
    constructor(obj?:LineEmployee){
        this.lineEmployeeId = obj && obj.lineEmployeeId;
        this.employeeId = obj && obj.employeeId;
        this.datekey = obj && obj.datekey;
        this.lineId = obj && obj.lineId;
        this.createdBy = obj && obj.createdBy;
        this.createdDate = obj && obj.createdDate;
        this.modifiedBy = obj && obj.modifiedBy;
        this.modifiedDate = obj && obj.modifiedDate;
    }
}

export interface ILineEmployee{
	lineEmployeeId?: string;
	employeeId?: number;
	datekey?: number;
	lineId?: string;
	createdBy?: string;
	createdDate?: any;
	modifiedBy?: string;
	modifiedDate?: any;
}
