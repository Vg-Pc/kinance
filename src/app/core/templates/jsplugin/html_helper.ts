declare var $: any;
export class HtmlHelper {
    public static setInnerHtml(selector: any, value: any) {
        $(selector).html(value);
    }

    public static addStyle(selector: any, style: {}) {
        $(selector).css(style);
    }

    /**
     * Visible or invisible the object.
     * @param selector 
     * @param toggle 
     */
    public static toggle(selector: any, toggle: boolean) {
        if (toggle)
            $(selector).show();
        else
            $(selector).hide();
    }

    /**
     * Move scrollbar to bottom.
     * @param margin 
     */
    public static scrollToBottom(margin: number = 0): void {
        setTimeout(() => {
            $("html, body").animate({ scrollTop: $(document).height() - margin }, 1000);
        }, 1000);
    }
}