import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer.model';
import { MessageResponse } from '../model/message.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

   //creating List of Dog type
   public  customer:Customer[]=[];

  //constructor injection 
  constructor(private http:HttpClient) { 
  }

  public findCustomer() :Observable<Customer[]> {
    //This data should come from rest api
    // let dog1:Dog=new Dog(1,"Jp","white",23,"Abc","https://dogtime.com/assets/uploads/2011/03/puppy-development.jpg",new Date());
    // let dog2:Dog=new Dog(2,"ak","brown",12,"tech","https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",new Date());
    // let dog3:Dog=new Dog(3,"jackky","red",133,"bite","https://www.bajajallianz.com/content/dam/bagic/pet-insurance/pet-dog-insurance-plan.png",new Date());
    // this.dogs.push(dog1);
    // this.dogs.push(dog2);
    // this.dogs.push(dog3);
    // return this.dogs;
    //This is the place where we are making rest call
    //@GetMapping("/dogs")
    //public List<Dog> findDogs() {
    //Here we are connecting angular  
    return this.http.get<Customer[]>("http://localhost:8080/v5/customer");
  }


  public searchCustomer(psearch:string) :Observable<Customer[]> {
    //passing search as a query string
    return this.http.get<Customer[]>("http://localhost:8080/v5/customer?search="+psearch);
  }

  public deleteCustomerBycid(cid:number) :Observable<MessageResponse> {
    //passing search as a query string
    //did ,I am sending as a part of URI
    return this.http.delete<MessageResponse>("http://localhost:8080/v5/customer/"+cid);
  }

  public findCustomerBycid(cid:number) :Observable<Customer> {
    //passing search as a query string
    //did ,I am sending as a part of URI
    return this.http.get<Customer>("http://localhost:8080/v5/customer/"+cid);
  }

  public saveCustomer(customer:Customer) : Observable<MessageResponse> {
    //dog will go inside the request body as a json
    //since it is post request
    return this.http.post<MessageResponse>("http://localhost:8080/v5/customer",customer);
  }
}
