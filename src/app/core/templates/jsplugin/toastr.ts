import * as appGlobal from '../../../app.const';
declare var toastr: any;

export class ToastrNotify {
    static warningType: string = 'warning';
    static errorType: string = 'error';
    static successType: string = 'success';
    static _options: any = {
        'closeButton': true,
        'debug': false,
        'progressBar': true,
        'preventDuplicates': false,
        'positionClass': 'toast-bottom-right',
        'onclick': 'null',
        'showDuration': '400',
        'hideDuration': '1000',
        'timeOut': '5000',
        'extendedTimeOut': '1000',
        'showEasing': 'swing',
        'hideEasing': 'linear',
        'showMethod': 'fadeIn',
        'hideMethod': 'fadeOut'
    };

    /**
     * Display notification 
     * @type: success, info, warning, error
     * @message: notification message
     */
    public static show(type: string, message: string, title?: string, options?: any): void {
        title = title == null ? appGlobal.notifyTitle : title;
        toastr.options = options || this._options;
        toastr[type](message, title);
    }

    /**
     * clear notification
     */
    public static hide(): void {
        toastr.clear();
    }
}
