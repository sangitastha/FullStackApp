import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent implements OnInit {

  title = 'customer-app';
  customer:Customer[]=[];
  tpmessage:string="";
  pmessage="This message for the header!";

  public fooMessage(message:any){
     this.tpmessage=message;   
  }

  //Constructor injection
  constructor(private customerService:CustomerService){
  }

  //this method will be invoked only once in it;s life cycle
  ngOnInit(): void {
      //this.dogs= this.dogService.findDogs();
      // let tdata:Observable<Dog[]> =this.dogService.findDogs();
       //tdata.subscribe(papapa=>{
         // this.dogs=papapa;
      // });
      //  tdata.subscribe((data) =>this.dogs=data);
      //asynchrnous call
      //lazy fetching the data
      this.customerService.findCustomer().subscribe((data) =>this.customer=data);
      console.log("((#*#*#*#*@#*@**@@");
  }

}
