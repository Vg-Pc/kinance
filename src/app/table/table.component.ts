import { Component } from '@angular/core';
import Handsontable from 'handsontable';
import { HyperFormula } from 'hyperformula';
import { handleEventHandson } from '../handleHandson';
import * as Highcharts from 'highcharts/highstock';
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
  public isActiveTab: boolean = false;
  public tabIdOld: any;
  public historyData: any[] = [];
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

      this.onChangeTab('tab-1');
    }

    this.historyData = [
      [
        '1',
        '0',
        '0',
        '1',
        '0',
        '1',
        '0',
        '0',
        '1',
        '0',
        '1',
        '0',
        '0',
        '1',
        '0',
        '1',
        '0',
        '0',
        '1',
        '0',
      ],
      [
        '1',
        '0',
        '0',
        '1',
        '0',
        '1',
        '0',
        '0',
        '1',
        '0',
        '1',
        '0',
        '0',
        '1',
        '0',
        '1',
        '0',
        '0',
        '1',
        '0',
      ],
      [
        '1',
        '0',
        '0',
        '1',
        '0',
        '1',
        '0',
        '0',
        '1',
        '0',
        '1',
        '0',
        '0',
        '1',
        '0',
        '1',
        '0',
        '0',
        '1',
        '0',
      ],
      [
        '1',
        '0',
        '0',
        '1',
        '0',
        '1',
        '0',
        '0',
        '1',
        '0',
        '1',
        '0',
        '0',
        '1',
        '0',
        '1',
        '0',
        '0',
        '1',
        '0',
      ],
      [
        '1',
        '0',
        '0',
        '1',
        '0',
        '1',
        '0',
        '0',
        '1',
        '0',
        '1',
        '0',
        '0',
        '1',
        '0',
        '1',
        '0',
        '0',
        '1',
        '0',
      ],
    ];
    this.handleData();
    // this.renderChart();
  }
  ngAfterViewInit() {
    // this.renderHandsonTable();
  }
  public onChangeTab(id: any): void {
    this.tabIdOld &&
      document
        .getElementById(this.tabIdOld)
        ?.setAttribute('class', 'tab-header-item');
    document
      .getElementById(id)
      ?.setAttribute('class', 'tab-header-item-active');
    this.tabIdOld = id;
  }
  async handleData() {
    const data = [
      [1641479400000, 172.7, 175.3, 171.64, 172, 96904000],
      [1641565800000, 172.89, 174.14, 171.03, 172.17, 86709100],
      [1641825000000, 169.08, 172.5, 168.17, 172.19, 106765600],
      [1641911400000, 172.32, 175.18, 170.82, 175.08, 76138300],
      [1641997800000, 176.12, 177.18, 174.82, 175.53, 74805200],
      [1642084200000, 175.78, 176.62, 171.79, 172.19, 84505800],
      [1642170600000, 171.34, 173.78, 171.09, 173.07, 80440800],
      [1642516200000, 171.51, 172.54, 169.41, 169.8, 90956700],
      [1642602600000, 170, 171.08, 165.94, 166.23, 94815000],
      [1642689000000, 166.98, 169.68, 164.18, 164.51, 91420500],
      [1642775400000, 164.42, 166.33, 162.3, 162.41, 122848900],
      [1643034600000, 160.02, 162.3, 154.7, 161.62, 162294600],
      [1643121000000, 158.98, 162.76, 157.02, 159.78, 115798400],
      [1643207400000, 163.5, 164.39, 157.82, 159.69, 108275300],
      [1643293800000, 162.45, 163.84, 158.28, 159.22, 121954600],
      [1643380200000, 165.71, 170.35, 162.8, 170.33, 179935700],
      [1643639400000, 170.16, 175, 169.51, 174.78, 115541600],
      [1643725800000, 174.01, 174.84, 172.31, 174.61, 86213900],
      [1643812200000, 174.75, 175.88, 173.33, 175.84, 84914300],
      [1643898600000, 174.48, 176.24, 172.12, 172.9, 89418100],
      [1643985000000, 171.68, 174.1, 170.68, 172.39, 82465400],
      [1644244200000, 172.86, 173.95, 170.95, 171.66, 77251200],
      [1644330600000, 171.73, 175.35, 171.43, 174.83, 74829200],
      [1644417000000, 176.05, 176.65, 174.9, 176.28, 71285000],
      [1644503400000, 174.14, 175.48, 171.55, 172.12, 90865900],
      [1644589800000, 172.33, 173.08, 168.04, 168.64, 98670700],
      [1644849000000, 167.37, 169.58, 166.56, 168.88, 86185500],
      [1644935400000, 170.97, 172.95, 170.25, 172.79, 62527400],
      [1645021800000, 171.85, 173.34, 170.05, 172.55, 61177400],
      [1645108200000, 171.03, 171.91, 168.47, 168.88, 69589300],
      [1645194600000, 169.82, 170.54, 166.19, 167.3, 82772700],
      [1645540200000, 164.98, 166.69, 162.15, 164.32, 91162800],
      [1645626600000, 165.54, 166.15, 159.75, 160.07, 90009200],
      [1645713000000, 152.58, 162.85, 152, 162.74, 141147500],
      [1645799400000, 163.84, 165.12, 160.87, 164.85, 91974200],
      [1646058600000, 163.06, 165.42, 162.43, 165.12, 95056600],
      [1646145000000, 164.7, 166.6, 161.97, 163.2, 83474400],
      [1646231400000, 164.39, 167.36, 162.95, 166.56, 79724800],
      [1646317800000, 168.47, 168.91, 165.55, 166.23, 76678400],
      [1646404200000, 164.49, 165.55, 162.1, 163.17, 83737200],
      [1646663400000, 163.36, 165.02, 159.04, 159.3, 96418800],
      [1646749800000, 158.82, 162.88, 155.8, 157.44, 131148300],
      [1646836200000, 161.48, 163.41, 159.41, 162.95, 91454900],
      [1646922600000, 160.2, 160.39, 155.98, 158.52, 105342000],
      [1647009000000, 158.93, 159.28, 154.5, 154.73, 96970100],
      [1647264600000, 151.45, 154.12, 150.1, 150.62, 108732100],
      [1647351000000, 150.9, 155.57, 150.38, 155.09, 92964300],
      [1647437400000, 157.05, 160, 154.46, 159.59, 102300200],
      [1647523800000, 158.61, 161, 157.63, 160.62, 75615400],
    ];
    // split the data set into ohlc and volume
    const ohlc = [],
      volume = [],
      dataLength = data.length;

    for (let i = 0; i < dataLength; i += 1) {
      ohlc.push([
        data[i][0], // the date
        data[i][1], // open
        data[i][2], // high
        data[i][3], // low
        data[i][4], // close
      ]);

      volume.push([
        data[i][0], // the date
        data[i][5], // the volume
      ]);
    }

    // create the chart
    var chart = Highcharts.stockChart('chart', {
      chart: {
        height: 'height: calc(75vh + 16.25px);',
        backgroundColor: 'transparent',
      },
      rangeSelector: {
        enabled: false,
      },
      navigator: {
        enabled: false,
      },
      scrollbar: {
        enabled: false,
      },
      title: {
        // text: '',
      },
      subtitle: {
        // text: '',
      },
      accessibility: {
        series: {
          descriptionFormat: '{seriesDescription}.',
        },
        description:
          'Use the dropdown menus above to display different indicator series on the chart.',
        screenReaderSection: {
          beforeChartFormat:
            '<{headingTagName}>{chartTitle}</{headingTagName}><div>{typeDescription}</div><div>{chartSubtitle}</div><div>{chartLongdesc}</div>',
        },
      },
      legend: {
        enabled: false,
      },
      yAxis: [
        {
          height: '80%',
          gridLineColor: 'rgba(255, 255, 255, 0.3)',
          gridLineDashStyle: 'Dash',
          gridLineWidth: 1,
          // labels: {
          //   x: 20,
          // },
        },
        {
          top: '80%',
          height: '20%',
          gridLineColor: 'rgba(255, 255, 255, 0.3)',
          gridLineDashStyle: 'Dash',
          gridLineWidth: 1,
        },
      ],
      plotOptions: {
        series: {
          showInLegend: true,
          accessibility: {
            exposeAsGroupOnly: true,
          },
        },
        column: {
          pointDescriptionFormatter: function () {
            console.log('thissss', this);
            // var color = this.y > 10 ? 'red' : 'green';
            // return '<span style="color: ' + color + '">' + this.y + '</span>';
          },
        },
      },
      series: [
        {
          type: 'candlestick',
          id: 'aapl',
          name: 'AAPL',
          data: data,
          color: '#c1063f',
          upColor: '#199079',
          lineColor: '#f92667',
          upLineColor: '#56e2c6',
        },
        {
          type: 'column',
          id: 'volume',
          name: 'Volume',
          data: volume,
          yAxis: 1,
          borderRadius: 0,
          point: {
            events: {},
          },
        },
        {
          type: 'line',
          id: 'overlay',
          // linkedTo: 'aapl',
          yAxis: 0,
          data: data,
          color: '#199079',
        },
        {
          type: 'line',
          id: 'overlay',
          // linkedTo: 'aapl',
          yAxis: 0,
          data: data,
          color: '#f81057',
        },
      ],
    });

    chart.series[1].points.forEach(function (point, index) {
      if (index % 2 == 0) {
        point.update({
          color: '#56e2c7',
        });
      }
      if (index % 2 != 0) {
        point.update({
          color: '#f92667',
        });
      }
    });
  }

  ///////////////
  /////////////
  ///////////
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
