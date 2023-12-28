
export class handleEventHandson {
    constructor() { }
    public static handleHightlightCells(textActiveEditor: any, arrLocation: any, Handsontable: any) {
        var locationString
        var visualLocaion: any
        var rowStart: any
        var colStart: any
        var rowEnd: any
        var colEnd: any
        var lengthArrCell
        var cells: any = []
        var locationCell: any = []
        if (textActiveEditor && String(textActiveEditor.charAt(0)) == '=') {
            var currentFormula = textActiveEditor.slice(1)
            locationString = currentFormula.split(/["(", ")"]+/)
            locationString.forEach((element: any) => {
                var clone = element.includes("-") ? element.replaceAll("-", "_") : element
                arrLocation = clone.split(/[",", "+", "-", "_", "*", "/", "="]+/)
                //handle phan tu co ":" <
                if (clone.includes(":")) {
                    arrLocation = element.split(":")
                    //tach str & numb <
                    arrLocation.forEach((e: any) => {
                        visualLocaion =
                        {
                            col: Handsontable.helper.spreadsheetColumnIndex(e.match(/[a-zA-Z]+/g)?.[0]),
                            row: Number(e.match(/\d+/g)?.[0]) - 1
                        }
                        if (visualLocaion.col > -1 && visualLocaion.row > -1) {
                            cells.push(visualLocaion)
                        }
                    });

                    //tach str & numb >
                    lengthArrCell = cells.length - 1
                    rowStart = cells?.[lengthArrCell - 1]?.row < cells?.[lengthArrCell]?.row ? cells?.[lengthArrCell - 1]?.row : cells?.[lengthArrCell]?.row
                    rowEnd = cells?.[lengthArrCell - 1]?.row < cells?.[lengthArrCell]?.row ? cells?.[lengthArrCell]?.row : cells?.[lengthArrCell - 1]?.row
                    colStart = cells?.[lengthArrCell - 1]?.col < cells?.[lengthArrCell]?.col ? cells?.[lengthArrCell - 1]?.col : cells?.[lengthArrCell]?.col
                    colEnd = cells?.[lengthArrCell - 1]?.col < cells?.[lengthArrCell]?.col ? cells?.[lengthArrCell]?.col : cells?.[lengthArrCell - 1]?.col
                    for (let i = colStart; i <= colEnd; i++) {
                        for (let j = rowStart; j <= rowEnd; j++) {
                            const item = {
                                row: j,
                                col: i
                            }
                            locationCell.push(item)
                        }
                    }
                    //handle phan tu co ":" >
                } else {
                    //handle phan tu con lai <
                    arrLocation.forEach((el: any) => {
                        visualLocaion =
                        {
                            col: Handsontable.helper.spreadsheetColumnIndex(el.match(/[a-zA-Z]+/g)?.[0]),
                            row: Number(el.match(/\d+/g)?.[0]) - 1
                        }
                        if (visualLocaion.col > -1 && visualLocaion.row > -1) {
                            locationCell.push(visualLocaion)
                        }
                    });
                    //handle phan tu con lai >
                }
            });
        }
        return locationCell
    }
}