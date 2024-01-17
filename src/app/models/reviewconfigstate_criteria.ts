export class ReviewStateConfigCriteria {
	reviewStateConfigId?: string;
	modelName?: string;
	stationName?: string;
	productQuantity?: number;
	createdBy?: string;
	createdDate?: any;
	modifiedBy?: string;
	modifiedDate?: string;

	constructor(obj?: ReviewStateConfigCriteria) {
		this.reviewStateConfigId = obj && obj.reviewStateConfigId;
		this.modelName = obj && obj.modelName;
		this.stationName = obj && obj.stationName;
		this.productQuantity = obj && obj.productQuantity;
		this.createdBy = obj && obj.createdBy;
		this.createdDate = obj && obj.createdDate;
		this.modifiedBy = obj && obj.modifiedBy;
		this.modifiedDate = obj && obj.modifiedDate;
	}
}

export interface ReviewStateConfigCriteria {
	reviewStateConfigId?: string;
	modelName?: string;
	stationName?: string;
	productQuantity?: number;
	createdBy?: string;
	createdDate?: any;
	modifiedBy?: string;
	modifiedDate?: string;

}
