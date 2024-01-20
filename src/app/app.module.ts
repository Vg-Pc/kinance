import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerAllModules } from 'handsontable/registry';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { TradeReportComponent } from './components/tradeReport/tradeReport.component';

// register Handsontable's modules
registerAllModules();
@NgModule({
  declarations: [AppComponent, MenuComponent, TradeReportComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
