import * as appGlobal from '../app.const';
import { AuthInfo } from '../models/auth-info';
export class UserAuthInfo {
    constructor(authInfo?: AuthInfo) {
        if (authInfo != null) {
            let now = new Date();
            let token_times = now.getTime() + authInfo.expires_in * 1000;
            // localStorage.setItem(appGlobal.appId + 'access_token', authInfo.access_token);
            // localStorage.setItem(appGlobal.appId + 'refresh_token', authInfo.refresh_token);
            // localStorage.setItem(appGlobal.appId + 'token_type', authInfo.token_type);
            // localStorage.setItem(appGlobal.appId + 'expires_in', authInfo.expires_in.toString());
            // localStorage.setItem(appGlobal.appId + 'userName', authInfo.userName);
            // localStorage.setItem(appGlobal.appId + 'fullName', authInfo.fullName);
            // localStorage.setItem(appGlobal.appId + 'userId', authInfo.userId);
            // localStorage.setItem(appGlobal.appId + 'permissions', authInfo.permissions);
            // localStorage.setItem(appGlobal.appId + 'client_id', authInfo.client_id);
            // localStorage.setItem(appGlobal.appId + 'logged_time', now.getTime().toString());
            // localStorage.setItem(appGlobal.appId + 'active_time', now.getTime().toString());
            // localStorage.setItem(appGlobal.appId + 'token_time', token_times.toString());
            // localStorage.setItem(appGlobal.appId + 'refresh_token_processing', String(authInfo.refresh_processing));
            localStorage.setItem('access_token', authInfo.access_token);
            localStorage.setItem('refresh_token', authInfo.refresh_token);
            localStorage.setItem('token_type', authInfo.token_type);
            localStorage.setItem('expires_in', authInfo.expires_in.toString());
            localStorage.setItem('userName', authInfo.userName);
            localStorage.setItem('fullName', authInfo.fullName);
            localStorage.setItem('userId', authInfo.userId);
            localStorage.setItem('permissions', authInfo.permissions);
            localStorage.setItem('client_id', authInfo.client_id);
            localStorage.setItem('logged_time', now.getTime().toString());
            localStorage.setItem('active_time', now.getTime().toString());
            localStorage.setItem('token_time', token_times.toString());
            localStorage.setItem('refresh_token_processing', String(authInfo.refresh_processing));
        }
    }

    public logout(): void {
        // localStorage.removeItem(appGlobal.appId + 'access_token');
        // localStorage.removeItem(appGlobal.appId + 'refresh_token');
        // localStorage.removeItem(appGlobal.appId + 'token_type');
        // localStorage.removeItem(appGlobal.appId + 'expires_in');
        // localStorage.removeItem(appGlobal.appId + 'userName');
        // localStorage.removeItem(appGlobal.appId + 'fullName');
        // localStorage.removeItem(appGlobal.appId + 'userId');
        // localStorage.removeItem(appGlobal.appId + 'permissions');
        // localStorage.removeItem(appGlobal.appId + 'client_id');
        // localStorage.removeItem(appGlobal.appId + 'logged_time');
        // localStorage.removeItem(appGlobal.appId + 'active_time');
        // localStorage.removeItem(appGlobal.appId + 'token_time');
        // localStorage.removeItem(appGlobal.appId + 'refresh_token_processing');
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('token_type');
        localStorage.removeItem('expires_in');
        localStorage.removeItem('userName');
        localStorage.removeItem('fullName');
        localStorage.removeItem('userId');
        localStorage.removeItem('permissions');
        localStorage.removeItem('client_id');
        localStorage.removeItem('logged_time');
        localStorage.removeItem('active_time');
        localStorage.removeItem('token_time');
        localStorage.removeItem('refresh_token_processing');
    }

    public isAuthentication(): boolean {
        // if (localStorage.getItem(appGlobal.appId + 'access_token') != null) {
        if (localStorage.getItem('access_token') != null) {
            return true;
        }
        return false;
    }

    public getAccessToken(): string {
        //return localStorage.getItem(appGlobal.appId + 'access_token');
        return localStorage.getItem('access_token');
    }

    public getRefreshToken(): string {
        // return localStorage.getItem(appGlobal.appId + 'refresh_token');
        return localStorage.getItem('refresh_token');
    }

    public getUserName(): string {
        // return localStorage.getItem(appGlobal.appId + 'userName');
        return localStorage.getItem('userName');
    }

    public getUserId(): string {
        // return localStorage.getItem(appGlobal.appId + 'userId');
        return localStorage.getItem('userId');
    }

    public getFullName(): string {
        // return localStorage.getItem(appGlobal.appId + 'fullName');
        return localStorage.getItem('fullName');
    }

    public getPermissions() {
        // return localStorage.getItem(appGlobal.appId + 'permissions');
        return localStorage.getItem('permissions');
    }

    public getClientId(): string {
        //return localStorage.getItem(appGlobal.appId + 'client_id');
        return localStorage.getItem('client_id');
    }

    public getExpiresIn(): number {
        // return Number(localStorage.getItem(appGlobal.appId + 'expires_in') || null);
        return Number(localStorage.getItem('expires_in') || null);
    }

    public getTokenTime(): number {
        // return Number(localStorage.getItem(appGlobal.appId + 'token_time') || null)
        return Number(localStorage.getItem('token_time') || null)
    }

    public getLoggedTime(): number {
        // return Number(localStorage.getItem(appGlobal.appId + 'logged_time') || null)
        return Number(localStorage.getItem('logged_time') || null)
    }

    public setRefreshTokenProcessing(value: any): void {
        //localStorage.setItem(appGlobal.appId + 'refresh_token_processing', String(value))
        localStorage.setItem('refresh_token_processing', String(value))
    }

    public isRefreshTokenProcessing(): boolean {
        // return localStorage.getItem(appGlobal.appId + 'refresh_token_processing') === 'true' ? true : false;
        return localStorage.getItem('refresh_token_processing') === 'true' ? true : false;
    }

    public Activate(): void {
        // localStorage.setItem(appGlobal.appId + 'active_time', (new Date()).getTime().toString());
        localStorage.setItem('active_time', (new Date()).getTime().toString());
    }

    public getActiveTime(): number {
        // return Number(localStorage.getItem(appGlobal.appId + 'active_time'));
        return Number(localStorage.getItem('active_time'));
    }
}
