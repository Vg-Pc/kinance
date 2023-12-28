import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import Handsontable from 'handsontable';
import { HyperFormula } from 'hyperformula';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { Table1Component } from './table1/table1.component';

const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'table', component: TableComponent },
  { path: 'table1', component: Table1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
