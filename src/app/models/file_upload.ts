export class UploadInfo {
    totalSize: number;
    length: number;
    files: Array<FileUpload> = [];

    constructor(obj?: IUploadInfo) {
        this.totalSize = (obj && obj.totalSize) || 0;
        this.length = obj && obj.length;
        this.files = (obj && obj.files) || [];
    }
}

export class FileUpload {
    localName: string;
    name?: string;
    chunks: Array<any> = [];
    size: number = 0;

    constructor(obj?: IFileUpload) {
        this.localName = obj && obj.localName;
        this.name = obj && obj.name;
        this.chunks = (obj && obj.chunks) || [];
        this.size = obj && obj.size;
    }
}

export interface IUploadInfo {
    totalSize?: number;
    length?: number;
    files?: Array<FileUpload>;
}

export interface IFileUpload {
    localName: string;
    name?: string;
    chunks?: Array<string>;
    size?: number;
}