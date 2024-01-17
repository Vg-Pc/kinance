declare var $: any;
export class DualListbox {

    /**
     * Initialize duallistbox plugin
     * @param selector DOM element
     * @param options IDualListboxOption 
     */
    public static initialize(selector?: any, options?: IDualListboxOption) {
        selector = selector || ".duallistbox";
        let dual = $(selector).bootstrapDualListbox(options);
        return dual;
    }

    public static callFunc(selector: any, methodName: string, param: any) {
        $(selector).bootstrapDualListbox(methodName, param);
    }
}

interface IDualListboxOption {
    bootstrap2Compatible?: boolean,
    filterTextClear?: string,
    filterPlaceHolder?: string,
    moveSelectedLabel?: string,
    moveAllLabel?: string,
    removeSelectedLabel?: string,
    removeAllLabel?: string,
    moveOnSelect?: boolean,                                                                 // true/false (forced true on androids, see the comment later)
    preserveSelectionOnMove?: boolean,                                                     // 'all' / 'moved' / false
    selectedListLabel?: boolean,                                                           // 'string', false
    nonSelectedListLabel?: boolean,                                                        // 'string', false
    helperSelectNamePostfix?: string,                                                 // 'string_of_postfix' / false
    selectorMinimalHeight?: number,
    showFilterInputs?: boolean,                                                             // whether to show filter inputs
    nonSelectedFilter?: string,                                                              // string, filter the non selected options
    selectedFilter?: string,                                                                 // string, filter the selected options
    infoText?: string,                                                        // text when all options are visible / false for no info text
    infoTextFiltered?: string, // when not all of the options are visible due to the filter
    infoTextEmpty?: string,                                                        // when there are no options present in the list
    filterOnValues?: boolean,                                                              // filter by selector's values, boolean
    sortByInputOrder?: boolean,
    eventMoveOverride?: boolean,                                                           // boolean, allows user to unbind default event behaviour and run their own instead
    eventMoveAllOverride?: boolean,                                                        // boolean, allows user to unbind default event behaviour and run their own instead
    eventRemoveOverride?: boolean,                                                         // boolean, allows user to unbind default event behaviour and run their own instead
    eventRemoveAllOverride?: boolean
}