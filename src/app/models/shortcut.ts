export class Shortcut {
	shortcutId?: string;
	groupId?: number;
	name?: string;
	seq?: number;
	path?: string;
	icon?: string;
	status?: string;
    
    constructor(obj?:Shortcut){
        this.shortcutId = obj && obj.shortcutId;
        this.groupId = obj && obj.groupId;
        this.name = obj && obj.name;
        this.seq = obj && obj.seq;
        this.path = obj && obj.path;
        this.icon = obj && obj.icon;
        this.status = obj && obj.status;
    }
}

export interface IShortcut{
	shortcutId?: string;
	groupId?: number;
	name?: string;
	seq?: number;
	path?: string;
	icon?: string;
	status?: string;
}
