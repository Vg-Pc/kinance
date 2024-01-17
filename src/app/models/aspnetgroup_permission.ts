import { AspNetRoleGroup } from './aspnetrolegroup';
export class AspNetGroupPermission {
    groupId: string;
    pageIds: string[];
    aspNetRoleGroups: AspNetRoleGroup[];
    // RoleIds: string[];

    constructor(obj?: IAspNetGroupPermission) {
        this.groupId = obj && obj.groupId;
        this.pageIds = obj && obj.pageIds;
        // this.RoleIds = obj && obj.RoleIds;
        this.aspNetRoleGroups = obj && obj.aspNetRoleGroups;
    }

}

export interface IAspNetGroupPermission {
    groupId: string;
    pageIds: string[];
    aspNetRoleGroups: AspNetRoleGroup[];
    // RoleIds: string[];
}
