import { Component } from '@angular/core';
import * as Highcharts from 'highcharts/highstock';
@Component({
  selector: 'app-tradeReport',
  templateUrl: './tradeReport.component.html',
  styleUrls: ['./tradeReport.component.css'],
})
export class TradeReportComponent {
  title = 'kinance';

  public valueSetAmountArr: any[] = [];
  public row2MoneyInput: any[] = [];
  public row3MoneyInput: any[] = [];
  public progressBarValue: any;
  public isActiveTab: boolean = false;
  public tabIdOld: any;
  public historyData: any[] = [];
  public transactionTotalData: any[] = [];
  public transactionDataRender: any[] = [];

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
    this.getTransactionData();
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
      credits: {
        enabled: false,
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

  getTransactionData() {
    this.transactionTotalData = [
      {
        type: 'close',
        actionLabel: 'BUY',
        date: '01/21/2024',
        actionPrice: 10,
        valueBelow: 19.5,
        labelBelow: '10:02:46',
      },
      {
        type: 'close',
        actionLabel: 'SELL',
        date: '01/21/2024',
        actionPrice: 0,
        valueBelow: 19.5,
        labelBelow: '10:03:46',
      },
      {
        type: 'open',
        actionLabel: 'BUY',
        date: '01/21/2024',
        actionPrice: 10,
        labelBelow: 'Trade time',
        valueBelow: '10:02:46',
      },
      {
        type: 'open',
        actionLabel: 'SELL',
        date: '01/21/2024',
        actionPrice: 0,
        labelBelow: 'Trade time',
        valueBelow: '10:03:46',
      },
    ];

    this.transactionDataRender = this.transactionTotalData.filter(
      (item) => item.type == 'open'
    );
  }

  onChangeTransactionTab(e: any) {
    const closeEl: any = document.getElementById('close-transaction-tab');
    const openEl: any = document.getElementById('open-transaction-tab');
    if (e == 'close') {
      closeEl.setAttribute('class', 'transaction-item-tab-active');
      openEl.setAttribute('class', 'transaction-item-tab-inactive');
    }
    if (e == 'open') {
      openEl.setAttribute('class', 'transaction-item-tab-active');
      closeEl.setAttribute('class', 'transaction-item-tab-inactive');
    }
    this.transactionDataRender = this.transactionTotalData.filter(
      (item) => item.type == e
    );
  }
}
