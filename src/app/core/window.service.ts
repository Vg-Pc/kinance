import { Injectable } from '@angular/core';

@Injectable()
export class WindowService {

    constructor() { }

    getNativeWindow() {
        return window;
    }
}