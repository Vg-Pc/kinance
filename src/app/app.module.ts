import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotTableModule } from '@handsontable/angular';
import { registerAllModules } from 'handsontable/registry';
import { Table1Component } from './table1/table1.component';
import { TableComponent } from './table/table.component';

// register Handsontable's modules
registerAllModules();
@NgModule({
  declarations: [
    AppComponent,
    Table1Component,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
