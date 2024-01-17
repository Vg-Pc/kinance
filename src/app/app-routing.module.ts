import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { Table1Component } from './components/table1/table1.component';

const routes: Routes = [
  { path: '', component: Table1Component },
  { path: 'table0', component: TableComponent },
  { path: 'table', component: Table1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
