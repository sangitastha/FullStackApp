import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AppComponent } from './app.component';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';

const routes: Routes =
  [{ path: "listcustomer", component: CustomerTableComponent },
  { path: "addcustomer", component: AddCustomerComponent },
  { path: "search", component: SearchCustomerComponent },
  { path: 'ecustomer/:id', component: AddCustomerComponent },
  { path: "**", component: AddCustomerComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
