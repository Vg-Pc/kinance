
export class ProductReview {
    factoryName?: string;
    lineName?: string;    
    modelName?: string;
    fqaQty?: number;
    ctnQty?: number;
    targetQty?: number;
    constructor(obj?: ProductReview) {
        this.factoryName = obj && obj.factoryName;
        this.lineName = obj && obj.lineName;
        this.modelName = obj && obj.modelName;
        this.fqaQty = obj && obj.fqaQty;
        this.ctnQty = obj && obj.ctnQty;
        this.targetQty = obj && obj.targetQty;
    }
}

export interface ProductReview {
    factoryName?: string;
    lineName?: string;    
    modelName?: string;
    fqaQty?: number;
    ctnQty?: number;
    targetQty?: number;
}
