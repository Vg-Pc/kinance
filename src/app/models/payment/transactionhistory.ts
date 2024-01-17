export class TransactionHistory {
	trans_Id?: string;
	cardId?: number;
	type?: string;
	status?: number;
	code?: string;
	serial?: string;
	discount?: number;
	amount?: number;
	actual_amount?: number;
	net_amount?: number;
	account?: string;
	provider?: string;
	transTime?: any;
	depositType?: string;
    
    constructor(obj?:ITransactionHistory){
        this.trans_Id = obj && obj.trans_Id;
        this.cardId = obj && obj.cardId;
        this.type = obj && obj.type;
        this.status = obj && obj.status;
        this.code = obj && obj.code;
        this.serial = obj && obj.serial;
        this.discount = obj && obj.discount;
        this.amount = obj && obj.amount;
        this.actual_amount = obj && obj.actual_amount;
		this.net_amount = obj && obj.net_amount;
		this.provider = obj && obj.provider;
		this.account = obj && obj.account;
		this.transTime = obj && obj.transTime;
		this.depositType = obj && obj.depositType;
    }
}

export interface ITransactionHistory{
	trans_Id?: string;
	cardId?: number;
	type?: string;
	status?: number;
	code?: string;
	serial?: string;
	discount?: number;
	amount?: number;
	actual_amount?: number;
	net_amount?: number;
	account?: string;
	provider?: string;
	transTime?: any;
	depositType?: string;
}
