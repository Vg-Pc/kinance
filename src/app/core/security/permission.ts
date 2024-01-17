import { Session } from './session';

export class Permission {

    constructor() { }

    /**
     * Get permissions for user
     */
    public permissions(permission: string): string {
        let pers: string[] = JSON.parse(Session.user.getPermissions());
        if (pers == null) {
            return '';
        }
        let isSystem = pers.find(x => x === 'd93af6cda215484b8b0b89b5030347e9');
        if (isSystem) {
            return isSystem;
        }

        return pers.find(x => x === permission);
    }
}
