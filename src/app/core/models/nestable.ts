export class Nestable {
    public id: string;
    public content: string;
    public routerLink: string;
    public children?: Nestable[];

    constructor(obj?: Nestable) {
        this.id = obj && obj.id;
        this.content = obj && obj.content;
        this.routerLink = obj && obj.routerLink;
        this.children = obj && obj.children;
    }
}