export class BomDetails{
    bomDetailId?: string;
    bomHeadId?: string;
    bomDetailLevel?: string;
    component?: string;
    description?: string;
    validFrom?: Date;
    validTo?: Date;
    unit?: string;
    quantity?: number;
    refDoc?: string;

    constructor(obj?: BomDetails){
        this.bomDetailId = obj && obj.bomDetailId;
        this.bomHeadId = obj && obj.bomHeadId;
        this.bomDetailLevel = obj && obj.bomDetailLevel;
        this.component = obj && obj.component;
        this.description = obj && obj.description;
        this.validFrom = obj && obj.validFrom;
        this.validTo = obj && obj.validTo;
        this.unit = obj && obj.unit;
        this.quantity = obj && obj.quantity;
        this.refDoc = obj && obj.refDoc;
    }
}

export interface BomDetails{
    bomDetailId?: string;
    bomHeadId?: string;
    bomDetailLevel?: string;
    component?: string;
    description?: string;
    validFrom?: Date;
    validTo?: Date;
    unit?: string;
    quantity?: number;
    refDoc?: string;
}