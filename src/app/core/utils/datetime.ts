declare var $: any;
export class DateTime {
    public datetimeFormatPicker = "dd-mm-yyyy";
    
    public initDatePicker(dateHtmlElement: string) {
        let self = this;
        $(dateHtmlElement).datepicker({
            todayBtn: "linked",
            keyboardNavigation: false,
            forceParse: false,
            autoclose: true,
            format: self.datetimeFormatPicker,
            calendarWeeks: true,
        });
    }

    public initDateRange(date1HtmlElement: string, date2HtmlElement: string) {
        let startDate = $(date1HtmlElement).datepicker("getDate");
        if (startDate)
            $(date2HtmlElement).datepicker("setStartDate", startDate);
        $(date1HtmlElement).datepicker().on("changeDate", (e: any) => {
            let endDate = $(date2HtmlElement).datepicker("getDate");
            if (e.date > endDate)
                $(date2HtmlElement).datepicker("setDate", e.date);
            $(date2HtmlElement).datepicker("setStartDate", e.date);
        })
    }
}