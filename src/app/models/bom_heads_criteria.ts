export class BomHeadsCriteria{
    bomHeadsId?: string;
    modelName?: string;
    modelDescription?: string;
    manufLimit?: string;
    unit?: string;
    description?: string;
    usage?: number;
    revision?: number;
    releaseDate?: Date;
    isActive?: boolean;
    statusCode?: string;
    createdDate?: Date;
    createdBy?: string;
    modifiedDate?: Date;
    modifiedBy?: string;

    constructor(obj?: BomHeadsCriteria){
        this.bomHeadsId = obj && obj.bomHeadsId;
        this.unit = obj && obj.unit;
        this.description = obj && obj.description;
        this.manufLimit = obj && obj.manufLimit;
        this.usage = obj && obj.usage;
        this.revision = obj && obj.revision;
        this.releaseDate = obj && obj.releaseDate;
        this.isActive = obj && obj.isActive;
        this.statusCode = obj && obj.statusCode;
        this.createdDate = obj && obj.createdDate;
        this.createdBy = obj && obj.createdBy;
        this.modifiedDate = obj && obj.modifiedDate;
        this.modifiedBy = obj && obj.modifiedBy;
    }
}

export interface BomHeadsCriteria{
    bomHeadsId?: string;
    unit?: string;
    description?: string;
    manufLimit?: string;
    usage?: number;
    revision?: number;
    releaseDate?: Date;
    isActive?: boolean;
    statusCode?: string;
    createdDate?: Date;
    createdBy?: string;
    modifiedDate?: Date;
    modifiedBy?: string;
}