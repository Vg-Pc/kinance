export class Factory {
	factoryId?: string;
	factoryCode?: string;
	factoryName?: string;
	description?: string;
	managerId?: string;
    
    constructor(obj?:Factory){
        this.factoryId = obj && obj.factoryId;
        this.factoryCode = obj && obj.factoryCode;
        this.factoryName = obj && obj.factoryName;
        this.description = obj && obj.description;
        this.managerId = obj && obj.managerId;
    }
}
