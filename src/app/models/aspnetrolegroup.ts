export class AspNetRoleGroup {
  groupId: string | undefined;
  roleId: string | undefined;
  pageId: string | undefined;

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
