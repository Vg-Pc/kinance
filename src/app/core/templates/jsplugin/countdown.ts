declare var $: any;
export class CountDown {
    
    /**
     * display countdown 
     */
    public static setSessionTimeoutCountDown(element: any, time: string): void {
        $(element).countdown(time, (event: any) => {
            $(element).html(event.strftime("%M:%S"));
        })
    }
}