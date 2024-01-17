import { Injectable, OnInit, ElementRef } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { ServiceContentType } from './service-content-type';
import { Session } from './index';
import * as appGlobal from '../app.const';
import 'rxjs/add/operator/toPromise';
import { DataResult } from '../models/data_result';

declare var $: any;
declare var Ladda: any;

@Injectable()
export class CommonService {
    private headers = new Headers();
    ContentType: ServiceContentType
    constructor(private http: Http) {
        this.ContentType = new ServiceContentType();
        if (Session.user.isAuthentication()) {
            this.headers.set('Authorization', `Bearer ${Session.user.getAccessToken()}`);
        }
    }

    /**
     * Get data
     * @url http post url
     * @parms params of the post
     * @contentType Content-Type header
     * @buttonSubmitRef button ref id
     */
    public get(url: string, params?: any, submitButtonRef?: ElementRef, contentType?: string): Promise<any> {
        let ld: any;
        let type = contentType == null ? this.ContentType.json : contentType;
        let token: string = Session.user.getAccessToken();        
        this.headers.set('Content-Type', type);
        if (token != null) {
            this.headers.set('Authorization', `Bearer ${token}`)
        }

        if (submitButtonRef != null) {
            ld = Ladda.create(submitButtonRef.nativeElement);
            ld.start();
        }
        if (params) {
            url += '?' + this.toUrlParams(params);
        }
        return this.http.get(appGlobal.baseApiUrl + url, { headers: this.headers })
            .toPromise()
            .then(res => {
                if (submitButtonRef != null) {
                    ld.stop();
                }
                Session.user.Activate();
                let result = res.json();
                return result || {};
            })
            .catch(error => {
                if (submitButtonRef != null) {
                    ld.stop();
                }
                console.log(error);
                return this.toDataResultExp(error);
            });
    }

    /**
     * Get data into control
     * @param url
     * @param loadingElement
     * @param params
     * @param contentType
     */
    public getForControl(url: string, loadingElement: string, params?: any, contentType?: string): Promise<any> {
        let type = contentType == null ? this.ContentType.json : contentType;
        loadingElement = loadingElement == null ? '.ajax-loading' : loadingElement;
        let token: string = Session.user.getAccessToken();
        this.headers.set('Content-Type', type);
        if (token != null) {
            this.headers.set('Authorization', `Bearer ${token}`)
        }

        this.updateAjaxLoading(loadingElement, true);
        if (params) {
            url += '?' + this.toUrlParams(params);
        }
        return this.http.get(appGlobal.baseApiUrl + url, { headers: this.headers })
            .toPromise()
            .then(res => {
                this.updateAjaxLoading(loadingElement, false);
                Session.user.Activate();
                let result = res.json();
                return result || {};
            })
            .catch(error => {
                this.updateAjaxLoading(loadingElement, false);
                console.log(error);
                return this.toDataResultExp(error);
            });
    }

    /**
     * Post data
     * @url http post url
     * @data params of the post
     * @contentType Content-Type header
     * @buttonLaddaElement button directive id
     */
    public post(url: string, data: any, submitButtonRef?: ElementRef, contentType?: string): Promise<any> {
        let ld: any;
        let type = contentType == null ? this.ContentType.json : contentType;
        let token: string = Session.user.getAccessToken();
        this.headers.set('Content-Type', type);
        if (token != null) {
            this.headers.set('Authorization', `Bearer ${token}`);
        }

        if (submitButtonRef != null) {
            ld = Ladda.create(submitButtonRef.nativeElement);
            ld.start();
        }

        return this.http.post(appGlobal.baseApiUrl + url, this.parseDataContent(type, data), { headers: this.headers })
            .toPromise()
            .then(res => {
                if (submitButtonRef != null) {
                    ld.stop();
                }
                Session.user.Activate();
                return res.json() || {};
            })
            .catch(error => {
                if (submitButtonRef != null) {
                    ld.stop();
                }
                console.log(error);
                return this.toDataResultExp(error);
            });
    }

    /**
     * Put data to server
     * @param url
     * @param data
     * @param submitButtonRef
     * @param contentType
     */
    public put(url: string, data: any, submitButtonRef?: ElementRef, contentType?: string): Promise<any> {
        let ld: any;
        let type = contentType == null ? this.ContentType.json : contentType;
        let token: string = Session.user.getAccessToken();
        this.headers.set('Content-Type', type);
        if (token != null) {
            this.headers.set('Authorization', `Bearer ${token}`);
        }

        if (submitButtonRef != null) {
            ld = Ladda.create(submitButtonRef.nativeElement);
            ld.start();
        }

        return this.http.put(appGlobal.baseApiUrl + url, this.parseDataContent(type, data), { headers: this.headers })
            .toPromise()
            .then(res => {
                if (submitButtonRef != null) {
                    ld.stop();
                }
                Session.user.Activate();
                let result = res.json();
                return result || {};
            })
            .catch(error => {
                if (submitButtonRef != null) {
                    ld.stop();
                }
                console.log(error);
                return this.toDataResultExp(error);
            });
    }

    /**
     * Delete data
     * @param url
     * @param params
     * @param submitButtonRef
     * @param contentType
     */
    public delete(url: string, params?: any, submitButtonRef?: ElementRef, contentType?: string): Promise<any> {
        let ld: any;
        let type = contentType == null ? this.ContentType.json : contentType;
        let token: string = Session.user.getAccessToken();
        this.headers.set('Content-Type', type);
        if (token != null) {
            this.headers.set('Authorization', `Bearer ${token}`)
        }

        if (submitButtonRef != null) {
            ld = Ladda.create(submitButtonRef.nativeElement);
            ld.start();
        }
        if (params) {
            url += '?' + this.toUrlParams(params);
        }
        return this.http.delete(appGlobal.baseApiUrl + url, { headers: this.headers })
            .toPromise()
            .then(res => {
                if (submitButtonRef != null) {
                    ld.stop();
                }
                Session.user.Activate();
                let result = res.json();
                return result || {};
            })
            .catch(error => {
                if (submitButtonRef != null) {
                    ld.stop();
                }
                console.log(error);
                return this.toDataResultExp(error);
            });
    }

    /**
     * Login
     * @param url
     * @param data
     * @param submitButtonRef
     * @param contentType
     */
    public login(url: string, data: any, submitButtonRef?: ElementRef, contentType?: string): Promise<any> {
        let ld: any;
        let result = new DataResult();
        let type = contentType == null ? this.ContentType.json : contentType;
        let token: string = Session.user.getAccessToken();
        this.headers.set('Content-Type', type);
        if (token != null) {
            this.headers.set('Authorization', `Bearer ${token}`);
        }

        if (submitButtonRef != null) {
            ld = Ladda.create(submitButtonRef.nativeElement);
            ld.start();
        }

        return this.http.post(appGlobal.loginApiUrl + url, this.parseDataContent(type, data), { headers: this.headers })
            .toPromise()
            .then(res => {
                if (submitButtonRef != null) {
                    ld.stop();
                }
                result.status = 200;
                result.data = res.json();
                return result || {};
            })
            .catch(error => {
                if (submitButtonRef != null) {
                    ld.stop();
                }
                result = this.toDataResultExp(error);
                console.log(error);
                return result;
            });
    }

    /**
     * Refresh token
     * @param url
     * @param data
     * @param submitButtonRef
     * @param contentType
     */
    public refreshToken(url: string, data: any, submitButtonRef?: ElementRef, contentType?: string): Promise<any> {
        let ld: any;
        let result = new DataResult();
        let type = contentType == null ? this.ContentType.json : contentType;
        let token: string = Session.user.getAccessToken();
        this.headers.set('Content-Type', type);
        if (token != null) {
            this.headers.set('Authorization', `Bearer ${token}`);
        }

        if (submitButtonRef != null) {
            ld = Ladda.create(submitButtonRef.nativeElement);
            ld.start();
        }

        return this.http.post(appGlobal.loginApiUrl + url, this.parseDataContent(type, data), { headers: this.headers })
            .retryWhen(error => error.delay(1000))
            .timeout(60000)
            .toPromise()
            .then(res => {
                if (submitButtonRef != null) {
                    ld.stop();
                }
                result.status = 200;
                result.data = res.json();
                return result || {};
            })
            .catch(error => {
                if (submitButtonRef != null) {
                    ld.stop();
                }
                result = this.toDataResultExp(error);
                console.log(error);
                return result;
            });
    }

    /**
     * Transform response data to DataResult object
     * @param res
     */
    private toDataResultExp(res: any): DataResult {
        let result = new DataResult();
        result.status = res.status;
        switch (res.status) {
            case 400:
                result.message = appGlobal.serviceBadRequest;
                break;
            case 401:
                result.message = appGlobal.serviceNotAuthorize;
                break;
            case 405:
                result.message = appGlobal.serviceNotAllow;
                break;
            case 404:
                result.message = appGlobal.serviceNotFound;
                break;
            case 500:
                result.message = appGlobal.ServerError;
                break;
            case 0:
                result.message = appGlobal.serviceNotFound;
                break;
            case undefined:
                result.message = appGlobal.serviceTimeout;
                break;
            default:
                result.message = appGlobal.faltaError;
                break;
        }
        return result;
    }

    /**
     *
     * @param contentType
     * @param data
     */
    private parseDataContent(contentType: string, data: any): any {
        switch (contentType) {
            case this.ContentType.formUrlEncode:
                return data;
            default:
                return JSON.stringify(data);
        }
    }

    /**
     * Convert json object to url query param.
     * @param data
     */
    private toUrlParams(data: any): string {
        return $.param(data);
    }

    /**
     *
     * @param loadingFor
     * @param status
     */
    private updateAjaxLoading(loadingFor: string, status: boolean) {
        if (status) {
            $(loadingFor).find('.loading-backdrop').show();
            $(loadingFor).find('.loading').show();
        } else {
            $(loadingFor).find('.loading-backdrop').hide();
            $(loadingFor).find('.loading').hide();
        }

    }

}
