import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainTabsComponent } from './main-tabs/main-tabs.component';
import { CurrentMonthComponent } from './main-tabs/current-month/current-month.component';
import { AccountsPayableComponent } from './main-tabs/accounts-payable/accounts-payable.component';
import { AccountsReceivableComponent } from './main-tabs/accounts-receivable/accounts-receivable.component';
import { RegistryItemComponent } from './main-tabs/registry-item/registry-item.component';
import { MonthRegistryItemComponent } from './main-tabs/current-month/month-registry-item/month-registry-item.component';
import { ApRegistryItemComponent } from './main-tabs/accounts-payable/ap-registry-item/ap-registry-item.component';
import { ArRegistryItemComponent } from './main-tabs/accounts-receivable/ar-registry-item/ar-registry-item.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainTabsComponent,
    CurrentMonthComponent,
    AccountsPayableComponent,
    AccountsReceivableComponent,
    RegistryItemComponent,
    MonthRegistryItemComponent,
    ApRegistryItemComponent,
    ArRegistryItemComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
