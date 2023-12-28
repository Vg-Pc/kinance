import { Component } from '@angular/core';
import Handsontable from 'handsontable';
import { HyperFormula } from 'hyperformula';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component {
  public hot: any;
  // public _self = this
  public data = [
    ['150', '643', '0.32', '11', ''],
    ['172', '474', '0.51', '11', ''],
    ['188', '371', '0.59', '11', ''],
    ['162', '731', '0.21', '10', ''],
    ['133', '682', '0.81', '9', ''],
    ['150', '553', '0.66', '10', ''],
    ['26', '592', '0.62', '11', ''],
    ['150', '461', '0.73', '9', ''],
    ['50', '346', '0.52', '15', ''],
    ['150', '423', '0.82', '11', ''],
    ['30', '216', '0.26', '9', ''],
  ];
  public activeEditor: any
  public glb_indexRow: any
  public glb_indexEndRow: any
  public glb_indexCol: any
  public glb_indexEndCol: any
  public CellsClickUpValue: any
  public CellsClickDownValue: any
  public options = {
    licenseKey: 'gpl-v3', //... other options  
  }
  public hfInstance = HyperFormula.buildFromArray(this.data, this.options)
  ngOnInit() { }
  detectChanges = () => {
    console.log('detectChanges');
  };
  ngAfterViewInit() {
    this.renderHandsonTable();
  }
  public handleShowActiveEditor() {
    this.activeEditor = this.hot.getActiveEditor();
    console.log('this.activeEditor', this.activeEditor?.TEXTAREA?.value);
  }

  renderHandsonTable() {
    const container = document.querySelector('#example2') as Element;
    const _self = this;
    this.hot = new Handsontable(container, {
      data: this.data,
      formulas: {
        engine: HyperFormula,
      },
      // height: 200,
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
      afterOnCellMouseDown(event, coords, TD) {
        console.log('_self.CellsClickUpValue', _self.CellsClickUpValue);
        if (_self.activeEditor?.TEXTAREA?.value == "=") {
          
        }
        if (_self.activeEditor?.TEXTAREA?.value?.charAt(0) === "=") {
          _self.CellsClickUpValue = _self.hfInstance.simpleCellAddressToString({ sheet: 0, col: coords.col, row: coords.row }, 0);
          if (!_self.activeEditor || !_self.activeEditor.isOpened() || event.target === _self.activeEditor.TEXTAREA) {
            return
          }
          var EditorValue = _self.activeEditor.TEXTAREA.value[_self.activeEditor.TEXTAREA.value.length - 1];
          if (_self.CellsClickDownValue === _self.CellsClickUpValue) {
            if (_self.activeEditor?.TEXTAREA?.value === "=" || EditorValue == "+" || EditorValue == "-" || EditorValue == "*" || EditorValue == "/" || EditorValue == "(") {
              _self.activeEditor.TEXTAREA.value += _self.CellsClickDownValue;
            }
            else {
              _self.activeEditor.TEXTAREA.value += "," + _self.CellsClickDownValue;
            }
          } else {
            _self.activeEditor.TEXTAREA.value += _self.CellsClickDownValue += ":" + _self.CellsClickUpValue;
          }

        } else {
          console.log("Clickdown neu k co dau bang");
        }
        _self.handleShowActiveEditor()
      },
      beforeOnCellMouseUp(event, coords, TD) {
        if (_self.activeEditor?.TEXTAREA?.value?.charAt(0) === "=") {
          _self.CellsClickDownValue = _self.hfInstance.simpleCellAddressToString({ sheet: 0, col: coords.col, row: coords.row }, 0);
          console.log('_self.CellsClickDownValue', _self.CellsClickDownValue);
            if (_self.CellsClickDownValue === _self.CellsClickDownValue) {
                console.log("Trùng nhau nhé");
            } else {
                _self.activeEditor.TEXTAREA.value += ":" + _self.CellsClickDownValue ;
            }
        }
        //copy formulass of 1 cell
        // if (_self.activeEditor?.TEXTAREA?.value?.charAt(0) === "=") {
        //   if (!_self.activeEditor || !_self.activeEditor.isOpened() || event.target === _self.activeEditor.TEXTAREA) {
        //     return
        //   }
        //   _self.CellsClickDownValue = _self.hfInstance.simpleCellAddressToString({ sheet: 0, col: coords.col, row: coords.row }, 0);
        //   console.log('_self.CellsClickDownValue', _self.CellsClickDownValue);

        //   if (_self.activeEditor?.TEXTAREA?.value === "=") {
        //     console.log("Không cần dầu phẩy");
        //     _self.activeEditor.TEXTAREA.value += _self.CellsClickDownValue;
        //   } else {
        //     var EditorValue = _self.activeEditor.TEXTAREA.value[_self.activeEditor.TEXTAREA.value.length - 1];
        //     if (EditorValue == "+" || EditorValue == "-" || EditorValue == "*" || EditorValue == "/" || EditorValue == "(") {
        //       _self.activeEditor.TEXTAREA.value += _self.CellsClickDownValue;
        //     }
        //     else {
        //       _self.activeEditor.TEXTAREA.value += "," + _self.CellsClickDownValue;
        //       console.log("activeEditor.TEXTAREA.value : ");
        //     }
        //   }
        // } else {
        //   console.log("Clickdown neu k co dau bang");
        // }
        // _self.handleShowActiveEditor()
        // const active = _self.activeEditor.TEXTAREA.value
        // // debugger
        // if (active?.charAt(0) === "=") {
        //   _self.CellsClickUpValue = _self.hfInstance.simpleCellAddressToString({ sheet: 0, col: coords.col, row: coords.row }, 0);
        //   console.log('_self.CellsClickUpValue', _self.CellsClickUpValue);
        //   if (_self.CellsClickDownValue === _self.CellsClickUpValue) {
        //     console.log("Trùng nhau nhé");
        //   } else {
        //     _self.activeEditor.TEXTAREA.value = _self.CellsClickDownValue + ":" + _self.CellsClickUpValue;
        //   }
        // } else {
        //   console.log("ClickUp neu k co dau bang");
        // }
      },
      
    });

  }
}