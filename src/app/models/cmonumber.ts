export class CMoNumber {
	moNumberId?: string;
	modelId?: string;
	modelName?: string;
    
    constructor(obj?:CMoNumber){
        this.moNumberId = obj && obj.moNumberId;
        this.modelId = obj && obj.modelId;
        this.modelName = obj && obj.modelName;
    }
}

export interface ICMoNumber{
	moNumberId?: string;
	modelId?: string;
	modelName?: string;
}
