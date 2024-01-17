import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
    
    selector: 'uniform-checkbox',
    template: `
        <div class="checker" >
            <span [ngClass]="{'checked': checked}">
                <input (click)="onStateChanged($event)" 
                    class="styled"                     
                    [attr.readonly]="readonly==true?true:null" 
                    [attr.disabled]="disabled==true?'disabled':null" 
                    [checked]="checked"
                    [attr.value]="value" type="checkbox"/>
            </span>
        </div>
    `
})
export class UniformCheckboxComponent implements OnInit {
    private onTouched: Function;
    private onFuncChange: Function;
    public checked: boolean = null;
    @Input()
    public value: string;
    @Input()
    public readonly: boolean;
    @Input()
    public disabled: boolean;
    @Output() public onChange: EventEmitter<any> = new EventEmitter();
    constructor(private changedNgModel: NgModel) {
        this.changedNgModel.valueAccessor = this;
    }

    ngOnInit() { }


    /**
       * Fire after model changed
       */
    writeValue(value: any) {
        this.checked = value;
    }

    registerOnChange(fn: (_: any) => {}): void {
        this.onFuncChange = fn;
    }

    registerOnTouched(fn: (_: any) => {}): void {
        this.onTouched = fn;
    }

    onStateChanged(event: any): void {
        this.checked = event.srcElement.checked;
        this.changedNgModel.control.setValue(this.checked);
        this.onChange.emit({
            target: event.target
        });
    }
}