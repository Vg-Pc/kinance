import { ElementRef } from "@angular/core"
declare var $: any;

export class Calendar {

    /**
     *Initialize FullCalendar events
     * @param calendar 
     * @param data 
     * @param options 
     * @param left 
     * @param center 
     * @param right 
     */
    public static fullCalendar(calendar: ElementRef, data: any, options?: any, left?: string, center?: string, right?: string): void {
        $(calendar.nativeElement).fullCalendar("destroy");
        let now = $.fullCalendar.moment(options.defaultDate);
        $(calendar.nativeElement).fullCalendar({
            defaultDate: now,
            header: {
                left: left,
                center: center || "title",
                right: right || "month,agendaWeek,agendaDay"
            },
            editable: false,
            droppable: true, // this allows things to be dropped onto the calendar            
            events: data,
            dayRender: (date: Date, cell: any) => {
                if (options && typeof options.dayRender === "function")
                    options.dayRender(date, cell);
            },
            eventRender: (event: any, element: any) => {
                if (options && typeof options.eventRender === "function")
                    options.eventRender(event, element);
            },
            eventClick: (calEvent: any, jsEvent: any, view: any) => {
                if (options && typeof options.eventClick === "function")
                    options.eventClick(calEvent, jsEvent, view);
            },
            eventReceive: (event: any) => {
                if (options && typeof options.eventReceive === "function")
                    options.eventReceive(event);
            }
        });
    }

    /**
     * Call calendar function.
     * @param calendar 
     * @param funcName 
     * @param parms 
     */
    public static fullCalendarFunc(calendar: ElementRef, funcName: string, parms: any): void {
        $(calendar.nativeElement).fullCalendar(funcName, parms);
    }
}