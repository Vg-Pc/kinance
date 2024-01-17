export class ToolsCriteria{
    toolId?: string;
    toolCode?: string;
    toolName?:string;
    Description?: string;
    createdBy?: string;
    createdDate?: Date;
    modifiedBy?: string;
    modifiedDate?: Date;

    constructor(obj?: ToolsCriteria){
        this.toolId = obj && obj.toolId;
        this.toolCode = obj && obj.toolCode;
        this.toolName= obj && obj.toolName;
        this.Description = obj && obj.Description;
        this.createdBy = obj && obj.createdBy;
        this.createdDate = obj && obj.createdDate;
        this.modifiedBy = obj && obj.modifiedBy;
        this.modifiedDate = obj && obj.modifiedDate;
    }
}

export interface ToolsCriteria{
    toolId?: string;
    toolCode?: string;
    toolName?:string;
    Description?: string;
    createdBy?: string;
    createdDate?: Date;
    modifiedBy?: string;
    modifiedDate?: Date;
}