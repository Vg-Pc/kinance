export class JournalProductionDaily {
	journalProductionDailyId?: string;
	datekey?: number;
	cycleTime?: number;
	uph?: number;
	targetQty?: number;
	factEndPthPassQty?: number;
	factEndPthRepassQty?: number;
	factEndPthFailQty?: number;
	factEndPthRefailQty?: number;
	factEndTestPassQty?: number;
	factEndTestRepassQty?: number;
	factEndTestFailQty?: number;
	factEndTestRefailQty?: number;
	factEndLinePassQty?: number;
	factEndLineRepassQty?: number;
	factEndLineFailQty?: number;
	factEndLineRefailQty?: number;
	factStockPassQty?: number;
	factStockRepassQty?: number;
	factStockFailQty?: number;
	factStockRefailQty?: number;
	planEmployeeCount?: number;
	factEmployeeCount?: number;
	remark?: string;
	planId?: string;
	createdDate?: any;
    
    constructor(obj?:JournalProductionDaily){
        this.journalProductionDailyId = obj && obj.journalProductionDailyId;
        this.datekey = obj && obj.datekey;
        this.cycleTime = obj && obj.cycleTime;
        this.uph = obj && obj.uph;
        this.targetQty = obj && obj.targetQty;
        this.factEndPthPassQty = obj && obj.factEndPthPassQty;
        this.factEndPthRepassQty = obj && obj.factEndPthRepassQty;
        this.factEndPthFailQty = obj && obj.factEndPthFailQty;
        this.factEndPthRefailQty = obj && obj.factEndPthRefailQty;
        this.factEndTestPassQty = obj && obj.factEndTestPassQty;
        this.factEndTestRepassQty = obj && obj.factEndTestRepassQty;
        this.factEndTestFailQty = obj && obj.factEndTestFailQty;
        this.factEndTestRefailQty = obj && obj.factEndTestRefailQty;
        this.factEndLinePassQty = obj && obj.factEndLinePassQty;
        this.factEndLineRepassQty = obj && obj.factEndLineRepassQty;
        this.factEndLineFailQty = obj && obj.factEndLineFailQty;
        this.factEndLineRefailQty = obj && obj.factEndLineRefailQty;
        this.factStockPassQty = obj && obj.factStockPassQty;
        this.factStockRepassQty = obj && obj.factStockRepassQty;
        this.factStockFailQty = obj && obj.factStockFailQty;
        this.factStockRefailQty = obj && obj.factStockRefailQty;
        this.planEmployeeCount = obj && obj.planEmployeeCount;
        this.factEmployeeCount = obj && obj.factEmployeeCount;
        this.remark = obj && obj.remark;
        this.planId = obj && obj.planId;
        this.createdDate = obj && obj.createdDate;
    }
}

export interface IJournalProductionDaily{
	journalProductionDailyId?: string;
	datekey?: number;
	cycleTime?: number;
	uph?: number;
	targetQty?: number;
	factEndPthPassQty?: number;
	factEndPthRepassQty?: number;
	factEndPthFailQty?: number;
	factEndPthRefailQty?: number;
	factEndTestPassQty?: number;
	factEndTestRepassQty?: number;
	factEndTestFailQty?: number;
	factEndTestRefailQty?: number;
	factEndLinePassQty?: number;
	factEndLineRepassQty?: number;
	factEndLineFailQty?: number;
	factEndLineRefailQty?: number;
	factStockPassQty?: number;
	factStockRepassQty?: number;
	factStockFailQty?: number;
	factStockRefailQty?: number;
	planEmployeeCount?: number;
	factEmployeeCount?: number;
	remark?: string;
	planId?: string;
	createdDate?: any;
}
