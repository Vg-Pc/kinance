import { Component } from '@angular/core';
import Handsontable from 'handsontable';
import { HyperFormula } from 'hyperformula';
import { handleEventHandson } from '../handleHandson';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  title = 'improve-handsonTable-TE';
  public hot: any;
  public activeEditor: any;
  public arrLocation: any;
  public locationCell: any;
  public isDBClick: boolean = false;
  public blackenText: any;
  public positionCursor: any;
  public cellsClickDownValue: any;
  public cellsClickUpValue: any;
  public lastSelectedCell: any;
  public typingFormula: any;
  public positionInsert: any;
  public array: any = [
    { index: 0, value: '210' },
    { index: 1, value: '45' },
    { index: 2, value: '21460' },
    { index: 3, value: '46' },
    { index: 4, value: '53' },
    { index: 5, value: '2310' },
    { index: 6, value: '2345' },
    { index: 7, value: '53' },
  ];
  public data = [
    ['210', '36', '91', null],
    ['432', '57', '83', null],
    ['654', '79', '65', null],
    ['876', '911', '24', null],
    ['109', '1113', '171', null],
    ['365', '7744', '43', null],
    ['579', '76', '901', null],
    ['946', '56', '4867', null],
  ];

  //
  //
  //
  //
  //
  //
  public valueSetAmountArr: any[] = [];
  public row2MoneyInput: any[] = [];
  public row3MoneyInput: any[] = [];
  public progressBarValue: any;
  //
  //
  //
  ngOnInit() {
    this.valueSetAmountArr = [{}];
    this.row2MoneyInput = [5, 10, 20];
    this.row3MoneyInput = [50, 100, 'All'];

    this.progressBarValue = 40;
    let element = document.getElementById('progress-bar');
    if (element) {
      element.setAttribute(
        'style',
        `background-color: #b3041b;width: ${this.progressBarValue}%;height: 100%;border-radius: 0.25rem 0 0 0.25rem;float: left;left: 0;`
      );
    }
  }
  ngAfterViewInit() {
    this.renderHandsonTable();
  }
  public onPaste(e: any) {
    let value: any = e.clipboardData.getData('text');
    let value1: any = value.replaceAll('\n', ',');
    console.log('paste1', value);
    console.log('paste1', value1.slice(value1.length - 1, value1.length));
    console.log('paste2', value.split('\r\n'));
  }
  public handleShowActiveEditor() {
    this.activeEditor = this.hot.getActiveEditor();
  }
  public handleDblClick(): void {
    let _self = this;
    document.body.addEventListener('dblclick', function (e) {
      _self.isDBClick = e.type == 'dblclick' ? true : false;
      // if (_self.isDBClick && String(_self.activeEditor?.originalValue)?.charAt(0) == '=') {
      //   _self.locationCell = handleEventHandson.handleHightlightCells(String(_self.activeEditor?.originalValue), _self.arrLocation, Handsontable);
      //   _self.activeEditor.TEXTAREA.value = _self.activeEditor?.originalValue
      // }
      // _self.hot.render()
    });
  }
  public handleGetPositionCursor(type: any) {
    let _self = this;
    const elementTextarea: any = document.getElementById('current_textarea');
    const startCursor = elementTextarea?.selectionStart;
    const endCursor = elementTextarea?.selectionEnd;
    // if (type == 'Backspace' || type == 'ArrowLeft') {
    //   _self.positionCursor = startCursor
    // } else if (_self.blackenText) {
    //   _self.positionCursor = startCursor - 1
    // } else {
    //   _self.positionCursor = startCursor
    // }
    _self.positionCursor = startCursor == -1 ? 0 : startCursor;
  }
  public handleMoveCursor(): void {
    var element: any = document.getElementById('current_textarea');
    var position = this.lastSelectedCell?.length
      ? this?.positionCursor +
        this.cellsClickDownValue?.length +
        this.lastSelectedCell?.length +
        1
      : this?.positionCursor + this.cellsClickDownValue?.length;
    console.log(
      'position',
      position,
      this?.positionCursor,
      this.cellsClickDownValue?.length,
      this.lastSelectedCell?.length
    );
    if (element) {
      element.setSelectionRange(position, position);
      element.focus();
    }
  }
  public handleEventKeyUp() {
    let _self = this;
    document.body.addEventListener('keyup', function (event) {
      _self.handleGetPositionCursor(event.key); //get position cursor
      if (event.key === 'Enter' || event.key === 'Esc') {
        //remove highlight
        _self.locationCell = [];
        _self.hot.render();
        //remove highlight
      } else {
        if (event.key === 'Delete' || event.key === 'Backspace') {
          _self.blackenText = undefined;
        }
        _self.locationCell = handleEventHandson.handleHightlightCells(
          _self.activeEditor?.TEXTAREA?.value.toUpperCase(),
          _self.arrLocation,
          Handsontable
        );
        _self.hot.render();
      }
      if (
        event.key.length === 1 ||
        event.key == 'Delete' ||
        event.key == 'Backspace'
      ) {
        _self.typingFormula = _self.activeEditor?.TEXTAREA?.value.toUpperCase();
      }
    });
    document.body.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === 'Esc') {
        //remove highlight
        _self.locationCell = [];
        _self.hot.render();
        //remove highlight
      }
    });
  }
  public handleEventClick(): void {
    let _self = this;
    document.body.addEventListener('click', (event) => {
      document
        .getElementsByClassName('handsontableInput')[0]
        ?.setAttribute('id', 'current_textarea'); //add elementID
      _self.handleGetPositionCursor('click'); //get position cursor
      _self.blackenText = document.getSelection()?.toString()
        ? document.getSelection()?.toString()
        : undefined; //get string is blacked out
    });
  }
  public handlePutSingerCell(
    cellsClickDownValue: any,
    textValue: any,
    blackenText: any,
    positionCursor: any
  ): void {
    let _self = this;
    var cursorCurrentLetter = textValue[positionCursor - 1];
    var lastLetter = this.typingFormula.charAt(this.typingFormula - 1);
    var specialChart = ['=', '+', '-', '*', '/', '(', ':', ','];
    var operationArr = ['+', '-', ',', '*', '/', ':', '.'];
    var lastIndexComma = textValue.lastIndexOf(',');
    if (
      cursorCurrentLetter == ')' ||
      (!operationArr.includes(cursorCurrentLetter) &&
        cursorCurrentLetter != '(')
    ) {
      return;
    }
    if (blackenText) {
      //boi den sua cong thuc
      // if (textValue.includes(cellsClickDownValue)) {
      //   textValue = textValue.replace(cellsClickDownValue, '')
      // } else {
      textValue = textValue.replace(blackenText, cellsClickDownValue);
      // }
    } else if (
      positionCursor < textValue?.length &&
      operationArr.includes(cursorCurrentLetter)
    ) {
      console.log('textValue', textValue);
      const arr0 = textValue.slice(0, positionCursor);
      const arr1 = textValue.slice(positionCursor, textValue.length);
      textValue = arr0 + cellsClickDownValue + ',' + arr1;
    } else if (specialChart.includes(lastLetter)) {
      const arr0 = this.typingFormula.slice(0, positionCursor);
      const arr1 = this.typingFormula.slice(positionCursor, textValue.length);
      textValue = arr0 + cellsClickDownValue + arr1;
      // }
      // else {
      //   textValue = headerFormula + cellsClickDownValue
    }
    // else {
    //   let item = ',' + cellsClickDownValue
    //   if (textValue.includes(cellsClickDownValue)) {
    //     textValue = textValue.replace(item, '')
    //   } else {
    //     const arr0 = textValue.slice(0, positionCursor);
    //     const arr1 = textValue.slice(positionCursor, textValue.length);
    //     textValue = arr0 + item + arr1;
    //   }
    // }
    _self.locationCell = handleEventHandson.handleHightlightCells(
      textValue,
      _self.arrLocation,
      Handsontable
    );
    _self.hot.render();
    return textValue;
  }
  public handlePutMutilCells(
    cellsClickDownValue: any,
    cellsClickUpValue: any,
    textValue: any,
    positionCursor: any
  ): void {
    var specialChart = ['+', '-', '*', '/', '('];
    var cursorCurrentLetter = textValue[positionCursor - 1];
    var operationArr = ['+', '-', ',', '*', '/', ':', '.'];
    if (textValue[positionCursor - 1] == ')') {
      return;
    }
    if (cellsClickUpValue && cellsClickDownValue !== cellsClickUpValue) {
      const arrTyping0 = this.typingFormula.slice(0, positionCursor);
      const arrTyping1 = this.typingFormula.slice(
        positionCursor,
        textValue.length
      );
      const arr0 = textValue.slice(0, positionCursor);
      const arr1 = textValue.slice(positionCursor, textValue.length);
      if (specialChart.includes(textValue[positionCursor - 1])) {
        textValue = arrTyping0 + cellsClickDownValue + ':' + cellsClickUpValue;
      }
      // else if ((arrItem?.[arrItem?.length - 2] && !arrItem?.[arrItem?.length - 2]?.includes(':')) &&
      //   !arrItem?.[0]?.includes(':') &&
      //   !arrItem?.[length - 1]?.includes(':')) {
      //   textValue = textInserRange + ',' + cellsClickDownValue + ':' + cellsClickUpValue;
      //   this.typingFormula = textInserRange + ','
      // }
      // else if (positionCursor < textValue?.length && operationArr.includes(cursorCurrentLetter)) {
      //   textValue = arr0 + cellsClickDownValue + ':' + cellsClickUpValue + arr1;
      // }
      else if (textValue[positionCursor - 1] == ',') {
        textValue =
          arrTyping0 +
          cellsClickDownValue +
          ':' +
          cellsClickUpValue +
          arrTyping1;
      } else {
        textValue =
          this.typingFormula + cellsClickDownValue + ':' + cellsClickUpValue;
      }
    }
    this.locationCell = handleEventHandson.handleHightlightCells(
      textValue,
      this.arrLocation,
      Handsontable
    );
    this.hot.render();
    return textValue;
  }
  renderHandsonTable() {
    const container = document.querySelector('#example3') as Element;
    let _self = this;
    this.hot = new Handsontable(container, {
      data: this.data,
      formulas: {
        engine: HyperFormula,
      },
      stretchH: 'all',
      colHeaders: ['A', 'B', 'C', 'D', 'E'],
      licenseKey: 'non-commercial-and-evaluation',
      selectionMode: 'multiple',
      fillHandle: {
        autoInsertRow: false,
      },
      allowInvalid: false,
      strict: true,
      type: 'numeric',
      afterBeginEditing(row, column) {
        if (String(_self.activeEditor?.originalValue)?.charAt(0) == '=') {
          _self.locationCell = handleEventHandson.handleHightlightCells(
            String(_self.activeEditor?.originalValue),
            _self.arrLocation,
            Handsontable
          );
          _self.activeEditor.TEXTAREA.value = _self.activeEditor?.originalValue;
          _self.hot.render();
        }
      },
      beforeOnCellMouseDown(event, coords, TD, controller) {
        _self.handleShowActiveEditor();
        if (_self.positionCursor < _self.activeEditor?.TEXTAREA?.value) {
          _self.positionInsert =
            _self.activeEditor?.TEXTAREA?.value.length - _self.positionCursor;
        } else {
          _self.positionInsert = _self.activeEditor?.TEXTAREA?.value.length;
        }
        if (
          _self.activeEditor?.originalValue &&
          _self.isDBClick &&
          String(_self.activeEditor?.originalValue)?.charAt(0) == '='
        ) {
          controller.cell = _self.isDBClick;
        }
        if (
          coords.row == -1 ||
          String(_self.activeEditor?.originalValue)?.charAt(
            _self.positionCursor - 1
          ) === ')' ||
          String(_self.activeEditor?.TEXTAREA?.value)?.charAt(
            _self.positionCursor - 1
          ) === ')'
        ) {
          controller.cell = false;
        }
      },
      afterOnCellMouseDown(event, coords, TD) {
        if (coords.row == -1) {
          return;
        }
        _self.handleShowActiveEditor();
        _self.handleDblClick();
        _self.cellsClickDownValue = `${Handsontable.helper.spreadsheetColumnLabel(
          coords.col
        )}${coords.row + 1}`;
        var textValue: any;
        if (_self.activeEditor?.TEXTAREA?.value?.charAt(0) == '=') {
          textValue = _self.handlePutSingerCell(
            _self.cellsClickDownValue,
            _self.activeEditor?.TEXTAREA?.value,
            _self.blackenText,
            _self.positionCursor
          );
        }
        if (textValue) {
          _self.activeEditor.TEXTAREA.value = textValue;
        } else {
          _self.isDBClick = false;
        }
      },
      beforeOnCellMouseUp(event, coords, TD) {},
      afterSelection(
        row,
        column,
        row2,
        column2,
        preventScrolling,
        selectionLayerLevel
      ) {
        if (row == -1 || row2 == -1) {
          return;
        }
        if (row != row2 || column != column2) {
          _self.lastSelectedCell = `${Handsontable.helper.spreadsheetColumnLabel(
            column2
          )}${row2 + 1}`;
        }
        if (
          _self.activeEditor?.TEXTAREA?.value?.charAt(0) == '=' &&
          _self.activeEditor?.TEXTAREA?.value?.charAt(
            _self.positionCursor - 1
          ) !== ')'
        ) {
          _self.activeEditor.TEXTAREA.value = _self.handlePutMutilCells(
            _self.cellsClickDownValue,
            _self.lastSelectedCell,
            _self.activeEditor?.TEXTAREA?.value,
            _self.positionCursor
          );
        }
      },
      afterOnCellMouseUp(event, coords, TD) {
        if (
          String(_self.activeEditor?.originalValue)?.charAt(
            _self.positionCursor - 1
          ) !== ')' ||
          String(_self.activeEditor?.TEXTAREA?.value)?.charAt(
            _self.positionCursor - 1
          ) !== ')'
        ) {
          _self.handleMoveCursor();
        }
        const item =
          _self.isDBClick && !_self.activeEditor?.TEXTAREA?.value
            ? _self.activeEditor?.originalValue
            : _self.activeEditor?.TEXTAREA?.value;
        _self.locationCell = handleEventHandson.handleHightlightCells(
          item,
          _self.arrLocation,
          Handsontable
        );
        // _self.typingFormula = _self.activeEditor?.TEXTAREA?.value
        _self.lastSelectedCell = undefined;
        _self.hot.render();
      },
      beforeChange: (changes, src) => {
        console.log('beforeChange src', src);
        if (src == 'edit') {
          _self.isDBClick = false;
          //remove highlight
          _self.locationCell = [];
          _self.hot.render();
          //remove highlight
        }
      },
      afterChange(changes, src) {
        console.log('afterChange src', src);
        if (src == 'edit') {
          _self.isDBClick = false;
          _self.cellsClickDownValue = undefined;
          _self.cellsClickUpValue = undefined;
          //remove highlight
          _self.locationCell = [];
          _self.hot.render();
          //remove highlight
        }
      },
      afterRenderer: function (TD, row, col, prop, value, cellProp) {
        _self.locationCell &&
          _self.locationCell.forEach((element: any) => {
            if (row == element.row && col == element.col) {
              Handsontable.dom.addClass(TD, `selected`);
            }
          });
      },
    });
    this.handleEventClick();
    this.handleEventKeyUp();
  }
}
