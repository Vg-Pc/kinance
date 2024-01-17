export class Application {
    code: string;
    name: string
    constructor(obj?: IApplication) {
        this.code = obj && obj.code;
        this.name = obj && obj.name;
    }
}

export interface IApplication {
    code?: string;
    name?: string
}