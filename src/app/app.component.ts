import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './model/customer.model';
import { CustomerService } from './services/customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  tpmessage="Main Page!";
  pmessage="***";
  title: any;
 
  //Constructor injection
  constructor(){
  }

  //this method will be invoked only once in it;s life cycle
  ngOnInit(): void {
    
  }

}
