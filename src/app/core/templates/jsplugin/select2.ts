declare var $: any;
export class Select2 {
    public static basic(selector?: any) {
        selector = selector == null ? ".select" : selector;
        $(selector).select2({
            allowClear: true
        });
    }

    public static initializeMultiple(selector?: any) {
        selector = selector == null ? ".select-mutiple" : selector;
        $(selector).select2();
    }

    public static addOptions(selector: any, options?: any) {
        selector = selector == null ? ".select" : selector;
        let opt = $.extend({
            allowClear: true
        }, options);
        $(selector).select2(opt);
    }

    /**
     * Add select2 event
     * @param selector 
     * @param events 
     */
    public static addEvents(selector: any, events?: ISelect2Event) {
        if (!events)
            return;
        if (events && events.change)
            $(selector).on("change", (event: any) => {
                events.change(event);
            })

        if (events && events.close)
            $(selector).on("select2:close", (event: any) => {
                events.close(event);
            })
        if (events && events.closing)
            $(selector).on("select2:closing", (event: any) => {
                events.closing(event);
            })
        if (events && events.open)
            $(selector).on("select2:open", (event: any) => {
                events.open(event);
            })
        if (events && events.opening)
            $(selector).on("select2:opening", (event: any) => {
                events.opening(event);
            })
        if (events && events.select)
            $(selector).on("select2:select", (event: any) => {
                events.select(event);
            })
        if (events && events.selecting)
            $(selector).on("select2:selecting", (event: any) => {
                events.selecting(event);
            })
        if (events && events.unselect)
            $(selector).on("select2:unselect", (event: any) => {
                events.unselect(event);
            })
        if (events && events.unselecting)
            $(selector).on("select2:unselecting", (event: any) => {
                events.unselecting(event);
            })
    }

    /**
     * Set value of Select2
     * @param selector 
     * @param value 
     */
    public static setVal(selector: any, value: any): void {
        $(selector).val(value).trigger("change.select2");
    }

    /**
     * Get the value of select2
     * @param selector 
     */
    public static getVal(selector: any): any {
        return $(selector).select2('data');
    }
}

export interface ISelect2Event {
    change?: Function;
    close?: Function;
    closing?: Function;
    open?: Function;
    opening?: Function;
    select?: Function;
    selecting?: Function;
    unselect?: Function;
    unselecting?: Function;
}