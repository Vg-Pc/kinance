export class DateInterval {
    get Year() {
        return Interval.Year
    };
    get Month() {
        return Interval.Month
    };
    get Week() {
        return Interval.Week
    };
    get Day() {
        return Interval.Day
    };
    get Hour() {
        return Interval.Hour
    };
    get Minute() {
        return Interval.Minute
    };
    get Second() {
        return Interval.Second
    };
}
export enum Interval {
    Year,
    Month,
    Week,
    Day,
    Hour,
    Minute,
    Second
}