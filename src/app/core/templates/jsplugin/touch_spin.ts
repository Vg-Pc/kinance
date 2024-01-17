declare var $: any;
export class TouchSpin {
    public min?: number;
    public max?: number;
    public step?: number;
    public prefix?: string;
    public postfix?: string;
    public prefix_extraclass?: string;
    public postfix_extraclass?: string;
    public buttondown_class?: string;
    public buttonup_class?: string;
    public verticalbuttons?: boolean;
    public verticalupclass?: string;
    public verticaldownclass?: string;
    public mousewheel = false;
    public initval?: number;

    /**
     * 
     * @param selector selector
     * @param option option
     */
    public static initialize(selector?: string, option?: ITouchSpin) {
        selector = selector || '.touchspin';
        $(selector).TouchSpin(option);
    }

    constructor(obj?: ITouchSpin) {
        this.min = obj && obj.min;
        this.max = obj && obj.max;
        this.step = obj && obj.step;
        this.prefix = obj && obj.prefix;
        this.postfix = obj && obj.postfix;
        this.prefix_extraclass = obj && obj.postfix_extraclass;
        this.buttondown_class = obj && obj.buttondown_class;
        this.buttonup_class = obj && obj.buttonup_class;
        this.verticalbuttons = obj.verticalbuttons || false;
        this.verticalupclass = obj && obj.verticalupclass;
        this.verticaldownclass = obj && obj.verticaldownclass;
        this.mousewheel = obj.mousewheel || false;
        this.initval = obj && obj.initval;
    }


}
export interface ITouchSpin {
    min?: number;
    max?: number;
    step?: number;
    prefix?: string;
    postfix?: string;
    prefix_extraclass?: string;
    postfix_extraclass?: string;
    buttondown_class?: string;
    buttonup_class?: string;
    verticalbuttons?: true;
    verticalupclass?: string;
    verticaldownclass?: string;
    mousewheel?: boolean;
    initval?: number;
}
