export class Department {
	departmentId?: string;
    factoryId?: string;
    factoryName?: string;
	departmentCode?: string;
	departmentName?: string;
	description?: string;
    
    constructor(obj?:Department){
        this.departmentId = obj && obj.departmentId;
        this.factoryId = obj && obj.factoryId;
        this.factoryName = obj && obj.factoryName;
        this.departmentCode = obj && obj.departmentCode;
        this.departmentName = obj && obj.departmentName;
        this.description = obj && obj.description;
    }
}
