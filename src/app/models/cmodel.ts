export class CModel {
	modelId?: string;
	modelName?: string;
	description?: string;
	createdBy?: string;
	createdDate?: any;
	modifiedBy?: string;
	modifiedDate?: any;

	constructor(obj?: CModel) {
		this.modelId = obj && obj.modelId;
		this.modelName = obj && obj.modelName;
		this.description = obj && obj.description;
		this.createdBy = obj && obj.createdBy;
		this.createdDate = obj && obj.createdDate;
		this.modifiedBy = obj && obj.modifiedBy;
		this.modifiedDate = obj && obj.modifiedDate;
	}
}

export interface ICModel {
	modelId?: string;
	modelName?: string;
	description?: string;
	createdBy?: string;
	createdDate?: any;
	modifiedBy?: string;
	modifiedDate?: any;
}
