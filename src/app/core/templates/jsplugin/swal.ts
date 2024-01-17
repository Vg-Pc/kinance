declare var swal: any;

export class Swal {

    /**
     * Show confirm dialog
     * @callbackfn {Function} function call after confirm dialog is close
     */
    public static showConfirm(title: string, text: string, type: string, confirmButtomText: string, cancelButtonText: string, callbackfn: Function): void {
        swal({
            title: title,
            text: text,
            type: type,
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: confirmButtomText,
            cancelButtonText: cancelButtonText,
            closeOnConfirm: false,
            closeOnCancel: true,
            showLoaderOnConfirm: true
        },
            function (isConfirm: any) {
                if (isConfirm) {
                    callbackfn();
                }
            });
    }

    /**
     * Hide confirm dialog
     */
    public static hideConfirm(): void {
        swal.close();
    }

    /**
     * Show delete confirm dialog 
     * @callbackfn Callback
     */
    public static deleteConfirm(callbackfn: Function): void {
        let title: string = "Are you sure?",
            text: string = "Your will not be able to recover this data!",
            type: "warning",
            confirmButtonText: string = "Yes, delete it!",
            cancelButtonText: string = "No, cancel plx!";

        this.showConfirm(title, text, type, confirmButtonText, cancelButtonText, callbackfn);
    }

    /**
     * Show warning confirm dialog 
     * @callbackfn Callback
     */
    public static warningConfirm(callbackfn: Function): void {
        let title: string = "Are you sure?",
            text: string = "Your will be able to recover this later!",
            type: "warning",
            confirmButtonText: string = "Yes, do it!",
            cancelButtonText: string = "No, cancel plx!";

        this.showConfirm(title, text, type, confirmButtonText, cancelButtonText, callbackfn);
    }
}