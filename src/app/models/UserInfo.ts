export class UserInfo {
    access_token?: string;
    token_type?: string;
    expires_in?: number = 0;
    refresh_token?: string;
    userName?: string;
    error_description?: string;
}