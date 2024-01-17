export class Tools{
    toolId?: string;
    toolCode?: string;
    toolName?:string;
    description?: string;
    createdBy?: string;
    createdDate?: Date;
    modifiedBy?: string;
    modifiedDate?: Date;

    constructor(obj?: Tools){
        this.toolId = obj && obj.toolId;
        this.toolCode = obj && obj.toolCode;
        this.toolName= obj && obj.toolName;
        this.description = obj && obj.description;
        this.createdBy = obj && obj.createdBy;
        this.createdDate = obj && obj.createdDate;
        this.modifiedBy = obj && obj.modifiedBy;
        this.modifiedDate = obj && obj.modifiedDate;
    }
}

export interface Tools{
    toolId?: string;
    toolCode?: string;
    toolName?:string;
    description?: string;
    createdBy?: string;
    createdDate?: Date;
    modifiedBy?: string;
    modifiedDate?: Date;
}