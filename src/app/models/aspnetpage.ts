
export class AspNetPage {
	pageId: string;
	name?: any;
	ordinal?: any;
	parentId?: string;
	parentName?: string;
	rank?: any;
	routerLink?: string;
	isPublic?= false;
	icon?: string;
	appId?: string;

	constructor(obj?: AspNetPage) {
		this.name = obj && obj.name;
		this.pageId = obj && obj.pageId;
		this.parentId = obj && obj.parentId;
		this.ordinal = obj && obj.ordinal;
		this.rank = obj && obj.rank;
		this.routerLink = obj && obj.routerLink;
		this.isPublic = obj && obj.isPublic;
		this.icon = obj && obj.icon;
		this.appId = obj && obj.appId;
	}
}
