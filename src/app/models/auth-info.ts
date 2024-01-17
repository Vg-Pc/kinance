export class AuthInfo {
    access_token?: string;
    token_type?: string;
    expires_in?: number = 0;
    refresh_token?: string;
    userName?: string;
    fullName?: string;
    userId?: string;
    permissions?: string;
    client_id?: string;
    refresh_processing?: boolean;

    constructor(obj?: AuthInfo) {
        this.access_token = obj && obj.access_token;
        this.refresh_token = obj && obj.refresh_token;
        this.token_type = obj && obj.token_type;
        this.expires_in = obj && obj.expires_in;
        this.userName = obj && obj.userName;
        this.fullName = obj && obj.fullName;
        this.userId = obj && obj.userId;
        this.permissions = obj && obj.permissions;
        this.client_id = obj && obj.client_id;
        this.refresh_processing = false;
    }
}