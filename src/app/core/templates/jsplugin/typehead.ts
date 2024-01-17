import { Session } from '../../security/index';
declare var $: any;
declare var Bloodhound: any;
declare var Handlebars: any;
export class TypeaHead {
    /**
     * Initialize typeahead
     * @param selector 
     * @param options 
     * @param dataSets 
     * @param accessToken 
     */
    public static initialize(selector: any, options: ITypeHeadOption, dataSets: ITypeaHeadDataSet) {

        if (dataSets.remote) {
            //let accessToken = Session.user.getAccessToken();
            // Constructs the suggestion engine
            var ajaxLoader = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace(dataSets.displayKey),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                remote: {
                    url: dataSets.remote.url,
                    prepare: (query: any, settings: any) => {
                        settings.url = settings.url.replace('%query', query);
                        settings.headers = { 'Authorization': 'Bearer ' + Session.user.getAccessToken() }
                        return settings;
                    },
                    transform: (response: any) => {
                        return response.data;
                    }
                }
            });

            // Initialize engine
            ajaxLoader.initialize();
            dataSets.source = ajaxLoader.ttAdapter();
            // Initialize
            $(selector).typeahead(options, dataSets);

        }
        else {
            $(selector).typeahead(options, dataSets);
        }
    }

    public static addEvents(selector: any, events: ITypeaHeadEvent): void {
        if (events.active) {
            $(selector).bind("typeahead:active", () => {
                events.active();
            })
        }
        if (events.idle) {
            $(selector).bind("typeahead:idle", () => {
                events.idle();
            })
        }
        if (events.open) {
            $(selector).bind("typeahead:open", () => {
                events.open();
            })
        }
        if (events.close) {
            $(selector).bind("typeahead:close", () => {
                events.close();
            })
        }
        if (events.change) {
            $(selector).bind("typeahead:change", (e: any, suggestion: any) => {
                events.change(e, suggestion);
            })
        }
        if (events.render) {
            $(selector).bind("typeahead:render", (e: any, suggestion: any, async: boolean, dataSetName: string) => {
                events.render(e, suggestion, async, dataSetName);
            })
        }
        if (events.select) {
            $(selector).bind("typeahead:select", (e: any, suggestion: any) => {
                events.select(e, suggestion);
            })
        }
        if (events.autocomplete) {
            $(selector).bind("typeahead:autocomplete", (e: any, suggestion: any) => {
                events.autocomplete(e, suggestion);
            })
        }
        if (events.cursorchange) {
            $(selector).bind("typeahead:cursorchange", (e: any, suggestion: any) => {
                events.cursorchange(e, suggestion);
            })
        }
        if (events.asyncrequest) {
            $(selector).bind("typeahead:asyncrequest", (e: any, query: string, dataSetName: string) => {
                events.asyncrequest(e, query, dataSetName);
            })
        }
        if (events.asynccancel) {
            $(selector).bind("typeahead:asynccancel", (e: any, query: string, dataSetName: string) => {
                events.asynccancel(e, query, dataSetName);
            })
        }
        if (events.asyncreceive) {
            $(selector).bind("typeahead:asyncreceive", (e: any, query: string, dataSetName: string) => {
                events.asyncreceive(e, query, dataSetName);
            })
        }

    }

    public static destroy(selector: any): void {
        $(selector).typeahead("destroy");
    }
}

export interface ITypeHeadOption {
    highlight?: boolean;
    hint?: boolean;
    minLength?: number;
    className?: string
}

export interface ITypeaHeadDataSet {
    source?: any;
    remote?: {
        url: string;
    };
    async?: boolean;
    name?: string;
    //max number of suggestion to be displayed.
    limit?: number;
    display?: any;
    displayKey?: string;
    templates?: {
        empty?: any;
        notFound?: any;
        pendding?: any;
        header?: any;
        footer?: any;
        suggestion?: any
    }
}

export interface ITypeaHeadEvent {
    active?: Function;
    idle?: Function;
    open?: Function;
    close?: Function;
    change?: Function;
    render?: Function;
    select?: Function;
    autocomplete?: Function;
    cursorchange?: Function;
    asyncrequest?: Function;
    asynccancel?: Function;
    asyncreceive?: Function;
}



