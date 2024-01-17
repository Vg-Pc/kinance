export class Payment {
	trans_Id?: string;
	provider?: string;
	amount?: number;
	code?: string;
	serial?: string;
	depositType?: string;

	constructor(obj?: IPayment) {
		this.trans_Id = obj && obj.trans_Id;
		this.provider = obj && obj.provider;
		this.code = obj && obj.code;
		this.serial = obj && obj.serial;
		this.amount = obj && obj.amount;
		this.depositType = obj && obj.depositType;
	}
}

export interface IPayment {
	trans_Id?: string;
	provider?: string;
	amount?: number;
	code?: string;
	serial?: string;
	depositType?: string;
}
