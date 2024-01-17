export class Account {
	Id?: string;
	accountId?: string;
	password?: string;
	accountName?: string;
	address?: string;
	phone?: string;
	autoEndTime?: any;
	botEndTime?: any;
	botId?: string;
	botReceiver?: string;
	tokenVal?: string;
	tokenDate?: any;
	isDisabled?: boolean;
	isExcept?: boolean;
	isPaid?: boolean;
	createdDate?: any;
	updateDate?: any;
	passwordNew?: string;
	createdBy?: string;
	type?: string;
	money?: number;
	fromAccId?: string;
	toAccId?: string;
	day?: number;

    constructor(obj?:IAccount){
		this.Id = obj && obj.Id;
		this.accountId = obj && obj.accountId;
        this.password = obj && obj.password;
        this.accountName = obj && obj.accountName;
		this.address = obj && obj.address;
		this.phone = obj && obj.phone;
		this.autoEndTime = obj && obj.autoEndTime;
		this.botEndTime = obj && obj.botEndTime;
		this.botId = obj && obj.botId;
		this.botReceiver = obj && obj.botReceiver;
		this.tokenVal = obj && obj.tokenVal;
		this.tokenDate = obj && obj.tokenDate;
		this.isDisabled = obj && obj.isDisabled;
		this.isPaid = obj && obj.isPaid;
		this.createdDate = obj && obj.createdDate;
		this.updateDate = obj && obj.updateDate;
		this.passwordNew = obj && obj.passwordNew;
		this.createdBy = obj && obj.createdBy;
		this.type = obj && obj.type;
		this.money = obj && obj.money;
		this.fromAccId = obj && obj.fromAccId;
		this.toAccId = obj && obj.toAccId;
		this.day = obj && obj.day;
    }
}

export interface IAccount{
	Id?: string;
	accountId?: string;
	password?: string;
	accountName?: string;
	address?: string;
	phone?: string;
	autoEndTime?: any;
	botEndTime?: any;
	botId?: string;
	botReceiver?: string;
	tokenVal?: string;
	tokenDate?: any;
	isDisabled?: boolean;
	isExcept?: boolean;
	isPaid?: boolean;
	createdDate?: any;
	updateDate?: any;
	passwordNew?: string;
	createdBy?: string;
	type?: string;
	money?: number;
	fromAccId?: string;
	toAccId?: string;
	day?: number;
}
