export class DuringTime {
    startDate?: Date;
    endDate?: Date;

    constructor(obj?: IDuringTime) {
        this.startDate = obj && obj.startDate;
        this.endDate = obj && obj.endDate;
    }
}

export interface IDuringTime {
    startDate?: Date;
    endDate?: Date;
}
