import { Injectable, ElementRef } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import { SecurityService } from '../core/services/sercurity.service';

import { AspNetGroup } from '../models/aspnetgroup';
import { AspNetGroupPermission } from '../models/aspnetgroup_permission';
import { DataResult } from '../models/data_result';

@Injectable()
export class AspNetGroupService {

    constructor(
        private securityService: SecurityService
    ) { }

    /**
     * Get data by primary keys
     */
    getById(groupId: string): Promise<DataResult> {
        let parms = {
            groupId: groupId
        }
        return this.securityService.get('aspnetgroup/getbyid', parms);
    }

    /**
     * Get list by user id
     */
    getListByUserId(userId: string): Promise<DataResult> {
        let parms = {
            userId: userId
        };
        return this.securityService.get('aspnetgroup/GetListByUserId', parms);
    }

    /**
     * Get paging
     */
    getPaged(pageIndex: number, pageSize: number): Promise<DataResult> {
        let parms = {
            pageIndex: pageIndex,
            pageSize: pageSize
        }
        return this.securityService.get('aspnetgroup/getlist', parms);
    }

    /**
     * Insert
     */
    insert(data: AspNetGroup, buttonSubmitRef?: ElementRef): Promise<DataResult> {
        return this.securityService.post('aspnetgroup/post', data, buttonSubmitRef);
    }

    /**
     * Update
     */
    update(data: AspNetGroup, buttonSubmitRef?: ElementRef): Promise<DataResult> {
        return this.securityService.put('aspnetgroup/update', data, buttonSubmitRef);
    }

    /**
     * Delete
     */
    delete(groupId: string): Promise<DataResult> {
        let parms = {
            groupId: groupId
        }
        return this.securityService.delete('aspnetgroup/delete', parms);
    }

    /**
     * Set pemission for user
     */
    setPermission(data: AspNetGroupPermission, buttonSubmitRef?: ElementRef): Promise<DataResult> {
        return this.securityService.post('aspnetgroup/setpermission', data, buttonSubmitRef);
    }
}