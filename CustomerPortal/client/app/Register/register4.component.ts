import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {FormService} from "./register.service";

@Component({
  moduleId: module.id,
  selector: 'my-register4',
  templateUrl: 'register4.component.html',
  
})

export class RegisterComponent4{
  private Formdata ={};
//    private FormData2 ={};
   data = {}
  constructor(private router :Router,private formservice :FormService
  ){}

  // getDetails(event){
  // event.preventDefault();
  // this.router.navigate(['Register4']);

//}
getForm4(event){
  event.preventDefault();
  var RegUser4 ={
    
    accountbal  : this.data.balance,
    username: this.data.username,
    password : this.data.password
  }
  this.formservice.setData('accountbalance',RegUser4.accountbal);
  this.formservice.setData('username',RegUser4.username);
  this.formservice.setData('password',RegUser4.password);
  this.Formdata =this.formservice.getData();


  this.formservice.postData(this.Formdata)
                  .subscribe(result =>{
                    console.log(result);
                   // alert(result);
                    //this.router.navigate(['confirm']);
                  },
                   error => {
                     alert('There is a problem with the enrollment');
                   } 
                  
                  )
  console.log('Hello',RegUser4.accountbal)
 console.log(this.Formdata)
}


  
}