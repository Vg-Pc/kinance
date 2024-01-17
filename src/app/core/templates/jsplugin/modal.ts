import { ElementRef } from "@angular/core";
declare var $: any;
export class Modal {
    /**
    * Display modal dialog 
    * @modal modal element
    */
    public static showModal(modal: any, callback?: Function) {
        $(modal).modal({
            backdrop: 'static'
        }).on('hidden.bs.modal', function (e: any) {
            // console.log(e);
            $('div[class="modal right fade in"]').closest('body').addClass('modal-open');
            if (callback)
                callback(e);
        });
        $(modal).modal('show');
    }

    // /**
    //  * Display modal dialog 
    //  * @modal modal element ref
    //  */
    // public static showModalElementRef(modal: ElementRef, callback?: Function) {
    //     $(modal.nativeElement).modal({
    //         backdrop: 'static'
    //     }).on('hidden.bs.modal', (e: any) => {
    //         if (callback)
    //             callback(e);
    //     });
    //     $(modal.nativeElement).modal('show');
    // }

    /**
     * Hide modal dialog 
     * @modal modal element
     */
    public static hideModal(modal: any): void {
        $(modal).modal('hide');
    }

    public static hideModals(): void {
        $('.modal').modal('hide');
    }

    // public static hideModalElementRef(modal: ElementRef): void {
    //     $(modal.nativeElement).modal('hide');
    // }

    /**
     * Add event into modal
     * @param modal 
     * @param event 
     * @param callback 
     */
    public static addEvent(modal: any, event: string, callback?: Function): void {
        switch (event) {
            case 'show': {
                $(modal).modal().off('show.bs.modal').on('show.bs.modal', (e: any) => {
                    if (callback)
                        callback(e);
                });
                break;
            }
            case 'shown': {
                $(modal).modal().off('shown.bs.modal').on('shown.bs.modal', (e: any) => {
                    if (callback)
                        callback(e);
                });
                break;
            }
            case 'hide': {
                $(modal).modal().off('hide.bs.modal').on('hide.bs.modal', (e: any) => {
                    if (callback)
                        callback(e);
                });
                break;
            }
            case 'hidden': {
                $(modal).modal().off('hidden.bs.modal').on('hidden.bs.modal', (e: any) => {
                    if (callback)
                        callback(e);
                });
                break;
            }
        }

    }
}