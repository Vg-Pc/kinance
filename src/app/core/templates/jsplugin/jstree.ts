import { ElementRef } from "@angular/core"
declare var $: any;
export class JsTree {
    /**
     * 
     * @param element DOM element
     * @param data jsTree[]
     * @param onChange 
     */
    public static initializeCheckbox(element: ElementRef, data: JsTree[], onChange?: Function): void {
        $(element.nativeElement).on("changed.jstree", function (e: any, data: any) {
            onChange(e, data);
        }).jstree({
            "core": {
                "data": data
            },
            "checkbox": {
                "keep_selected_style": false
            },
            "plugins": ["checkbox"]
        });
    }

    /**
     * Destroy js tree
     * @param element DOM element
     */
    public static destroy(element: ElementRef) {
        $(element.nativeElement).jstree("destroy");
    }
}