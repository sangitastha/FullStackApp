import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})
export class SearchCustomerComponent implements OnInit {

  showHide:boolean=false;

  search:string="";

  ccustomer:Customer[]=[];

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
  }

  public searchCustomer():void {
      this.customerService.searchCustomer(this.search).subscribe(result=>this.ccustomer=result);
      this.showHide=true;
  }

}
