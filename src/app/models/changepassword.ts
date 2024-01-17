export class ChangePasswordInfo {
    userId?: string;
    userName?: string;
    oldPassword?: string;
    newPassword?: string;
    confirmPassword?: string;
    fullName?: string;

    constructor(obj?: ChangePasswordInfo) {
        this.userId = obj && obj.userId;
        this.userName = obj && obj.userName;
        this.oldPassword = obj && obj.oldPassword;
        this.newPassword = obj && obj.newPassword;
        this.fullName = obj && obj.fullName;
    }

}
