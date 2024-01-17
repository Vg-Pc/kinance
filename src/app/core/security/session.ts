// Defined the session state
// Please don't modify
import * as appGlobal from '../../app.const';
import { AuthInfo } from '../../models/auth-info'
import { UserAuthInfo } from '../../models/user-auth-info'
import { Moment } from 'moment';
export class Session {
    public static user: UserAuthInfo = new UserAuthInfo();

    public static get(key: string): string {
        // return localStorage.getItem(appGlobal.appId + key);
        return localStorage.getItem(key);
    }

    public static set(key: string, value: string) {
        // return localStorage.setItem(appGlobal.appId + key, value);
        return localStorage.setItem(key, value);
    }

    public static clear(): void {
        localStorage.clear();
    }

    public static setAuth(authInfo: AuthInfo): void {
        this.user = new UserAuthInfo(authInfo);
    }

    public static serverTimer(): string {
        return localStorage.getItem('server_time');
    }
}
