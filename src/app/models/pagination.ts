export class Pagination {
    totalPage: number = 1;
    pageIndex: number = 1;
    pageSize: number = 0;
    
    constructor(totalPage?: number, pageIndex?: number, pageSize?: number) {
        if (totalPage != null)
            this.totalPage = totalPage;
        if (pageIndex != null)
            this.pageIndex = pageIndex;
        if (pageSize != null)
            this.pageSize = pageSize;
    }
}