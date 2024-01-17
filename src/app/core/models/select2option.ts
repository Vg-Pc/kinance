
export class Select2Option {
    remote: boolean;
    url?: string;
    dataValueField?: string;
    dataTextField?: string;
    callback?: Function;

    constructor();
    constructor(obj?: Select2Option) {
        this.remote = obj && obj.remote;
        this.url = obj && obj.url;
        this.dataValueField = obj && obj.dataValueField;
        this.dataTextField = obj && obj.dataTextField;
        this.callback = obj && obj.callback
    }
}