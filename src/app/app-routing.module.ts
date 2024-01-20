import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { TradeReportComponent } from './components/tradeReport/tradeReport.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'home', component: MenuComponent },
  { path: 'trade', component: TradeReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
