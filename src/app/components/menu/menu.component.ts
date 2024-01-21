import { Component } from '@angular/core';
import Handsontable from 'handsontable';
import { HyperFormula } from 'hyperformula';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
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
  public activeEditor: any;
  public glb_indexRow: any;
  public glb_indexEndRow: any;
  public glb_indexCol: any;
  public glb_indexEndCol: any;
  public CellsClickUpValue: any;
  public CellsClickDownValue: any;
  public options = {
    licenseKey: 'gpl-v3', //... other options
  };
  public hfInstance = HyperFormula.buildFromArray(this.data, this.options);
  public isRightExpandContent: boolean = false;

  ngOnInit() {}
  detectChanges = () => {
    console.log('detectChanges');
  };

  ngAfterViewInit() {
    // this.renderHandsonTable();
  }

  public handleShowActiveEditor() {
    this.activeEditor = this.hot.getActiveEditor();
    console.log('this.activeEditor', this.activeEditor?.TEXTAREA?.value);
  }

  onRightExpandContent() {
    const riExpandEl: any = document.getElementById('right-expand');
    const leContentEl: any = document.getElementById('left-content');
    const containerTradeContent: any = document.getElementById(
      'container-trade-content'
    );
    const bodyContent: any = document.getElementById('body-content');
    this.isRightExpandContent = !this.isRightExpandContent;
    riExpandEl.style.display = this.isRightExpandContent ? 'unset' : 'none';
    leContentEl.style.width = this.isRightExpandContent
      ? 'calc(100% - 428px)'
      : 'calc(100% - 214px)';
  }
}
