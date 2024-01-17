export class File {
	fileId?: string;
	fileName?: string;
	folderId?: string;
	fileExtention?: string;
	filePath?: string;
	isComplete?: boolean;
	createdBy?: string;
	createdDate?: any;
	modifiedBy?: string;
	modifiedDate?: any;
    
    constructor(obj?:File){
        this.fileId = obj && obj.fileId;
        this.fileName = obj && obj.fileName;
        this.folderId = obj && obj.folderId;
        this.fileExtention = obj && obj.fileExtention;
        this.filePath = obj && obj.filePath;
        this.isComplete = obj && obj.isComplete || false;
        this.createdBy = obj && obj.createdBy;
        this.createdDate = obj && obj.createdDate;
        this.modifiedBy = obj && obj.modifiedBy;
        this.modifiedDate = obj && obj.modifiedDate;
    }
}

export interface IFile{
	fileId?: string;
	fileName?: string;
	folderId?: string;
	fileExtention?: string;
	filePath?: string;
	isComplete?: boolean;
	createdBy?: string;
	createdDate?: any;
	modifiedBy?: string;
	modifiedDate?: any;
}
