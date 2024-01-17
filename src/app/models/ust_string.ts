export class UstString {
    public value: string;

    constructor(obj?: IUstString) {
        this.value = obj && obj.value;
    }
}

export interface IUstString {
    value: string;
}