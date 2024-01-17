declare var $: any;
export class Uniform {
    // public static initializeCheckbox(selector?: string) {
    //     selector = selector == null ? ".styled" : selector;
    //     $(selector).uniform({
    //         radioClass: 'choice'
    //     });
    // }

    public static initializeFileInput(fileInput?: string) {
        fileInput = fileInput == null ? ".file-styled" : fileInput;
        // File input
        $(fileInput).uniform({
            fileButtonClass: 'action btn bg-pink-400'
        });
    }

}