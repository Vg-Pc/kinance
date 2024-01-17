export class PredictPrice {
	predictId?: string;
	period?: number;
	timeFrame?: any;
	workDate?: any;
	workHour?: number;
	workMinute?: number;
	openPrice?: number;
	closePrice?: number;
	lowPrice?: number;
	highPrice?: number;
    
    constructor(obj?:IPredictPrice){
        this.predictId = obj && obj.predictId;
        this.period = obj && obj.period;
        this.timeFrame = obj && obj.timeFrame;
        this.workDate = obj && obj.workDate;
        this.workHour = obj && obj.workHour;
        this.workMinute = obj && obj.workMinute;
        this.openPrice = obj && obj.openPrice;
        this.closePrice = obj && obj.closePrice;
        this.lowPrice = obj && obj.lowPrice;
        this.highPrice = obj && obj.highPrice;
    }
}

export interface IPredictPrice{
	predictId?: string;
	period?: number;
	timeFrame?: any;
	workDate?: any;
	workHour?: number;
	workMinute?: number;
	openPrice?: number;
	closePrice?: number;
	lowPrice?: number;
	highPrice?: number;
}
