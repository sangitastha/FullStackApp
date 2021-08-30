import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftnavComponent,
    CustomerListComponent,
    AddCustomerComponent,
    CustomerTableComponent,
    SearchCustomerComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
