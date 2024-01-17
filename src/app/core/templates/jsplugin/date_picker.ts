declare var $: any;

export class DatePicker {
    public static initialize(selector?: string, options?: IDatePickerOption): any {
        selector = selector || ".datepicker";
        let opt = $.extend({ todayHighlight: true }, options);
        let datePicker = $(selector).datepicker(opt);
        return datePicker;
    }

    public static addEvents(selector: string, events: IDatePickerEvent, options?: IDatePickerOption): void {
        if (events.show) {
            this.registerEvent(selector, "show", events.show, options);
        }
        if (events.hide) {
            this.registerEvent(selector, "hide", events.hide, options);
        }
        if (events.changeDate) {
            this.registerEvent(selector, "changeDate", events.changeDate, options);
        }
        if (events.changeMonth) {
            this.registerEvent(selector, "changeMonth", events.changeMonth, options);
        }
        if (events.changeYear) {
            this.registerEvent(selector, "changeYear", events.changeYear, options);
        }
        if (events.changeCentury) {
            this.registerEvent(selector, "changeCentury", events.changeCentury, options);
        }
        if (events.changeDecade) {
            this.registerEvent(selector, "changeDecade", events.changeDecade, options);
        }

    }

    public static method(selector: string, functionName: string, arg1?: any, arg2?: any) {
        //$(selector).datepicker("setStartDate", arg1, arg2)
        //$(selector).datepicker({startDate:'16-12-2017'})
    }

    private static registerEvent(selector: string, funcName: string, event: Function, options?: IDatePickerOption): void {
        $(selector).datepicker(options).on(funcName, (e: any) => {
            event(e);
        })
    }
}

interface IDatePickerEvent {
    show?: Function;
    hide?: Function;
    clearDate?: Function;
    changeDate?: Function;
    changeMonth?: Function;
    changeYear?: Function;
    changeDecade?: Function;
    changeCentury?: Function;
}

interface IDatePickerMethod {
    clearDates?: Function;
}

interface IDatePickerOption {
    autoclose?: boolean;
    assumeNearbyYear?: boolean;
    beforeShowDay?: Function;
    beforeShowMonth?: Function;
    beforeShowYear?: Function;
    beforeShowDecade?: Function;
    beforeShowCentury?: Function;
    calendarWeeks?: boolean;
    clearBtn?: boolean;
    container?: string;
    datesDisabled?: Array<any>;
    daysOfWeekDisabled?: Array<any>;
    daysOfWeekHighlighted?: Array<any>;
    defaultViewDate?: string;
    disableTouchKeyboard?: boolean;
    enableOnReadonly?: boolean;
    endDate?: string;
    forceParse?: boolean;
    format?: any;
    immediateUpdates?: boolean;
    inputs?: any;
    keepEmptyValues?: boolean;
    keyboardNavigation?: boolean;
    language?: string;
    maxViewMode?: any;
    minViewMode?: any;
    multidate?: boolean;
    multidateSeparator?: string;
    orientation?: string;
    showOnFocus?: boolean;
    startDate?: any;
    startView?: any;
    templates?: any;
    title?: string;
    todayBtn?: boolean;
    todayHighlight?: boolean;
    toggleActive?: boolean;
    weekStart?: any;
    zIndexOffset?: number;
}