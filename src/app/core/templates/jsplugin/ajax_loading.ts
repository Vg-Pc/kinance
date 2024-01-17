declare var $: any;

export class AjaxLoading {
    /**
     * init ajax loading
     */
    public static initAjaxLoading(): void {
        let ajaxHtml = "<div style=\"display:none\" class=\"loading-backdrop\"></div><div style=\"display:none\" class=\"loading\"><div class=\"sk-spinner sk-spinner-cube-grid\"><div class=\"sk-cube\"></div><div class=\"sk-cube\"></div><div class=\"sk-cube\"></div><div class=\"sk-cube\"></div><div class=\"sk-cube\"></div><div class=\"sk-cube\"></div><div class=\"sk-cube\"></div><div class=\"sk-cube\"></div><div class=\"sk-cube\"></div></div></div>";
        $(".ajax-loading").prepend(ajaxHtml);
    }
}