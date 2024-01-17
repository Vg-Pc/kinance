import { Location } from '@angular/common';
import { Permission } from '../security/index';
import { VelocityAnimation, DatePicker, Select2, Uniform, TouchSpin } from '../templates/index';

declare var $: any;
declare var System: any;
export abstract class BaseComponent extends Permission {

    datepickerOptions: any = {
        autoclose: true,
        format: 'dd-mm-yyyy'
    };

    protected selectedItems: string[] = [];
    constructor(
        protected location: Location
    ) {
        super();
    }

    /**
     * Back to preview router
     */
    public back() {
        this.location.back();
    }

    /**
     * Back to preview router and close modal
     */
    public backAndCloseModal(): void {
        this.location.back();
        $('.modal').modal('hide');
    }

    /**
     * Initialize javascript plugin
     */
    protected initializeJsPlugin() {
        DatePicker.initialize('.date', this.datepickerOptions);
        Select2.basic();
        Uniform.initializeFileInput();
        VelocityAnimation.initializeDropdown();
        //TouchSpin.initialize();
        this.collapse();
    }

    private collapse(): void {
        // Collapse elements
        // -------------------------

        //
        // Sidebar categories
        //

        // Hide if collapsed by default
        $('.category-collapsed').children('.category-content').hide();


        // Rotate icon if collapsed by default
        $('.category-collapsed').find('[data-action=collapse]').addClass('rotate-180');


        // Collapse on click
        $('.category-title [data-action=collapse]').click((e) => {
            e.preventDefault();
            var $categoryCollapse = $(e.target).parent().parent().parent().nextAll();
            $(e.target).parents('.category-title').toggleClass('category-collapsed');
            $(e.target).toggleClass('rotate-180');

            $categoryCollapse.slideToggle(150);
        });

        //
        // Panels
        //

        // Hide if collapsed by default
        $('.panel-collapsed').children('.panel-heading').nextAll().hide();


        // Rotate icon if collapsed by default
        $('.panel-collapsed').find('[data-action=collapse]').addClass('rotate-180');

        // Collapse on click
        $('.panel [data-action=collapse]').click((e) => {
            e.preventDefault();
            var $panelCollapse = $(e.target).parent().parent().parent().parent().nextAll();
            $(e.target).parents('.panel').toggleClass('panel-collapsed');
            $(e.target).toggleClass('rotate-180');
            $panelCollapse.slideToggle(150);
        });

        // Remove elements
        // -------------------------

        // Panels
        $('.panel [data-action=close]').click((e) => {
            e.preventDefault();
            var $panelClose = $(e.target).parent().parent().parent().parent().parent();

            $panelClose.slideUp(150, () => {
                $(e.target).remove();
            });
        });

        // Sidebar categories
        $('.category-title [data-action=close]').click((e) => {
            e.preventDefault();
            var $categoryClose = $(e.target).parent().parent().parent().parent();

            $categoryClose.slideUp(150, () => {
                $(e.target).remove();
            });
        });
    }

    public isCheckBoxAllClick(event: any) {
        let state = event.target.checked;
        let table = this.getDomClosest(event.target, 'table');
        let items = $(table).find('input[type="checkbox"]').not(event.target);
        $(items).each((index: number, input: HTMLElement) => {
            let inputState = $(input).prop('checked');
            if (state !== inputState) {
                $(input).click();
            }
        });
    }

    protected isCheckBoxClick(event: any) {
        let value = event.target.value;
        let item = this.getDomClosest(event.target, 'tr');
        if (event.target.checked) {
            this.selectedItems.push(value);
            $(item).addClass('warning');
        } else {
            $(item).removeClass('warning');
            let index = this.selectedItems.indexOf(value);
            if (index > -1) {
                this.selectedItems.splice(index, 1);
            }
        }
        let table = this.getDomClosest(event.target, 'table');
        let checkBoxAll = $(table).find('th').find('input[type="checkbox"]').first();
        let checkBoxItems = $(table).find('input[type="checkbox"]').not(checkBoxAll);
        $(checkBoxAll).prop('checked', checkBoxItems.length === this.selectedItems.length);
        if (checkBoxItems.length === this.selectedItems.length) {
            $(checkBoxAll).closest('span').addClass('checked');
        } else {
            $(checkBoxAll).closest('span').removeClass('checked');
        }

    }

    /**
     * Get element closest
     * @param element 
     * @param closest 
     */
    private getDomClosest(element: string, closest: string): any {
        return $(element).closest(closest);
    }

}
