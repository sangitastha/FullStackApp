import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../model/customer.model';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customer:Customer=new Customer();
  message:any="";
  //constructor injection
  constructor(private customerService:CustomerService,private router:Router,
    private activatedRout:ActivatedRoute) { }

  ngOnInit(): void {
    //Observable<paramMap>
    this.activatedRout.paramMap.subscribe(params => { 
      let cid = params.get('id');
      //if will not execute did = null or undefined
      if(cid) {
        this.customerService.findCustomerBycid(Number(cid)).subscribe(result=>{
          this.customer = result; //result - one dog object
       });
      }
     
  });    
  }

  public addCustomer(){
    this.customerService.saveCustomer(this.customer).subscribe(t=>this.message=t.message);
   
    //Hey go to doglist screen
    //Go to other screen programatically 
    this.router.navigate(["listcustomer"]);
  }

}
