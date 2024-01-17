import { DateUtil } from "../core/index";

export class PlanDate {
    dayId?: string;
    dayOfWeek?: string;
    dayUK?: string;

    constructor(date: any) {
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        // var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let d = DateUtil.toDate(date);
        this.dayId = DateUtil.toString(d, 'YYYYMMDD');
        this.dayOfWeek = days[d.getDay()];
        this.dayUK = DateUtil.toString(d, 'YYYY/MM/DD');

    }
}