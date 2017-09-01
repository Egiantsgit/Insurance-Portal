import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

import {FormService} from "./register.service";

@Component({
  moduleId: module.id,
  selector: 'my-register',
  templateUrl: 'register.component.html',
  
})

export class RegisterComponent{

 

  data ={};
 
 

  constructor(private router :Router,private formservice :FormService
  ){}


getDetails(event){
  event.preventDefault();
  this.router.navigate(['Register2']);

}

getForm1(event){
  event.preventDefault();
  var RegUser ={
    firstname : this.data.fname,
    lastname  : this.data.lname,
    age       : this.data.age,
    dob       : this.data.dob,
    Gender    : this.data.gender,
    email     : this.data.email,
    mobileno  : this.data.mobileno,
    address   : this.data.address,
    country   : this.data.country

  }

  this.formservice.setData('firstname',RegUser.firstname);
  this.formservice.setData('lastname',RegUser.lastname);
  this.formservice.setData('age',RegUser.age);
  this.formservice.setData('dob',RegUser.dob);
  this.formservice.setData('gender',RegUser.Gender);
  this.formservice.setData('email',RegUser.email);
  this.formservice.setData('mobile',RegUser.mobileno);
  this.formservice.setData('address',RegUser.address);
  this.formservice.setData('countryOfOrigin',RegUser.country);




  
  console.log('Hello',RegUser.firstname);
  console.log('hi',RegUser.country);
}

 

}