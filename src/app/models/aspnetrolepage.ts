export class AspNetRolePage {
    roleId: string;
    pageId: string;

    constructor(obj?: IAspNetRolePage) {
        this.roleId = obj && obj.roleId;
        this.pageId = obj && obj.pageId;
    }
}

export interface IAspNetRolePage {
    roleId: string;
    pageId: string;
}


export class AspNetRolePageInsert {
    AspNetRolePages: AspNetRolePage[] = [];
    pageId: string;

    constructor(obj?: IAspNetRolePageInsert) {
        this.AspNetRolePages = obj && obj.AspNetRolePages;
        this.pageId = obj && obj.pageId;
    }
}

export interface IAspNetRolePageInsert {
    AspNetRolePages: AspNetRolePage[];
    pageId: string;
}
