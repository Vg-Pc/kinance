export class AspNetRoleGroup {
	groupId: string;
	roleId: string;
	pageId: string;

	constructor(obj?: IAspNetRoleGroup) {
		this.groupId = obj && obj.groupId;
		this.roleId = obj && obj.roleId;
		this.pageId = obj && obj.pageId;
	}

}

export interface IAspNetRoleGroup {
	groupId: string;
	roleId: string;
	pageId: string;
}
