declare var $: any;
export class VelocityAnimation {

    public static initializeDropdown(velocitySelector?: string): void {
        velocitySelector = velocitySelector == null ? ".dropdown-velocity, .btn-group-velocity" : velocitySelector;
        // Open
        $(velocitySelector).on('show.bs.dropdown', function (e: any) {
            $(this).find('.dropdown-menu').velocity('transition.slideUpIn', {
                duration: 200
            })
        });

        // Close
        $(velocitySelector).on('hide.bs.dropdown', function (e: any) {
            $(this).find('.dropdown-menu').velocity('transition.slideLeftOut', {
                duration: 200,
                complete: function () {
                    $(this).removeAttr('style');
                }
            })
        });
    }
}