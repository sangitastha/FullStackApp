import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Customer } from '../model/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  @Input("papa")
  ccustomer:Customer[]=[];

  tname:string="";

  @Output()
  messageToParent:EventEmitter<String>=new  EventEmitter<String>();

  //Constructor injection
  constructor(private customerService:CustomerService){
  }

  ngOnInit(): void {
      ///this.dogs= this.dogService.findDogs();
  }

  pushMessage(){
    console.log("Helllo "+this.tname);
    this.messageToParent.emit(this.tname);
  }

  public deleteCustomer(customer:Customer){
     //Server side deletion
     this.customerService.deleteCustomerBycid(Number(customer.cid)).subscribe(result=> {
        if(Number(result.code)==200) {
           //client side deletion
           this.ccustomer=this.ccustomer.filter(d=>d.cid!=customer.cid);
        }
     });
  }
}
