import { UstString } from "./ust_string";

export class ProductReviewCriteria {
	factoryId?: string;
	factoryName?: string;
	lineName?: string;
	modelNames?: Array<UstString>;
	sectionName?: string;

	constructor(obj?: ProductReviewCriteria) {
		this.factoryId = obj && obj.factoryId;
		this.factoryName = obj && obj.factoryName;
		this.lineName = obj && obj.lineName;
		this.modelNames = obj && obj.modelNames;
		this.sectionName = obj && obj.sectionName;
	}
}

export interface ProductReviewCriteria {
	factoryId?: string;
	factoryName?: string;
	lineName?: string;
	modelNames?: Array<UstString>;
	sectionName?: string;
}
