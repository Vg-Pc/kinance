declare var $: any;
import * as moment from 'moment';
import { DateInterval, Interval } from './interval';
export class DateUtil {
    // public datetimePipeFormat = "dd-MM-yyyy";
    // public datetimePickerFormat = "dd-mm-yyyy";
    Interval: DateInterval = new DateInterval();

    /**
     * get current date
     */
    public static now(): Date {
        return new Date();
    }

    /**
     * Add interval time into source date
     * @date: source date
     * @interval: {Interval} the interval time are (year,month,week,day,hour,minute,second)
     * @units: unit add into source date
     */
    public static add(date: Date | moment.Moment, interval: Interval, units: number): Date {
        let newDate = new Date(date.toString());
        switch (interval) {
            case Interval.Year:
                newDate.setFullYear(newDate.getFullYear() + units);
                break;
            case Interval.Month:
                newDate.setMonth(newDate.getMonth() + units);
                break;
            case Interval.Week:
                newDate.setDate(newDate.getDate() + 7 * units);
                break;
            case Interval.Day:
                newDate.setDate(newDate.getDate() + units);
                break;
            case Interval.Hour:
                newDate.setTime(newDate.getTime() + 60 * 60 * 1000 * units);
                break;
            case Interval.Minute:
                newDate.setTime(newDate.getTime() + 60 * 1000 * units);
                break;
            case Interval.Second:
                newDate.setTime(newDate.getTime() + 1000 * units);
                break;
            default:
                newDate = undefined;
                break;
        }
        return newDate;
    }

    // /**
    //  * Convert string to DateTime
    //  * @dateVal {string} date format is same sql server format yyyy-MM-dd THH:mm:ss
    //  */
    public static toDate(dateVal: string | moment.Moment): Date {
        return dateVal !== null ? new Date(dateVal.toString()) : null;
    }

    /**
     * Convert string to moment datetime
     * @param strDate 
     */
    public static toDateMoment(strDate: string | Date): moment.Moment {
        let d = moment(strDate);
        return d;
    }

    // /**
    //  * Format date
    //  * @date {Date} source date
    //  * @format {string} format string
    //  */
    // public static toString(date: Date, formatString: string): string {
    //     return $.format.date(date, formatString);
    // }

    public static toString(date: Date, formatString: string): string {
        return moment(date).format(formatString);
    }

    /**
     * Format the date into url parameter.
     * @param date 
     */
    public static toURLParam(date: any): string {
        if (date == null) {
            return null;
        }
        let d = new Date(date);
        return moment(date).format('YYYY-MM-DD');
    }

    public static toURLParamFormat(date: any, format:string): string {
        if (date == null) {
            return null;
        }
        let d = new Date(date);
        return moment(date).format(format);
    }

}
