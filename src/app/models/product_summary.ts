export class ProductSummary {
    workDate?: string;
    altWorkDate?: string;
    lineName?: string;
    shift?: string;
    totalQty?: number;
    targetQty?: number;
    constructor(obj?: IProductSummary) {
        this.workDate = obj && obj.workDate;
        this.altWorkDate = obj && obj.altWorkDate;
        this.lineName = obj && obj.lineName;
        this.shift = obj && obj.shift;
        this.totalQty = obj && obj.totalQty;
        this.targetQty = obj && obj.targetQty;
    }
}

export interface IProductSummary {

    workDate?: string;
    altWorkDate?: string;
    lineName?: string;
    shift?: string;
    totalQty?: number;
    targetQty?: number;
}