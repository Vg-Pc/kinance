export class JsTree {
    public id: string;
    public text: string;
    public parent: string;
    public state: any;
    public icon: string;

    constructor(obj?: JsTree) {
        this.id = obj && obj.id;
        this.text = obj && obj.text;
        this.parent = obj && obj.parent;
        this.icon = obj && obj.icon;
        this.state = obj && obj.state
    }
}