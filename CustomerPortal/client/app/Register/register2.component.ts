import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {FormService} from "./register.service";
@Component({
  moduleId: module.id,
  selector: 'my-register2',
  templateUrl: 'register2.component.html',
  
})

export class RegisterComponent2{
  data = {}
 constructor(private router :Router,private formservice : FormService
  ){}

  getDetails(event){
  event.preventDefault();
  this.router.navigate(['Register3']);

}
getForm2(event){
  event.preventDefault();
  var RegUser2 ={
    membership : this.data.membership,
    metallic   : this.data.metallic
  }
  this.formservice.setData('membershipType',RegUser2.membership);
  this.formservice.setData('metallic_type',RegUser2.metallic)
  console.log('Hello',RegUser2.metallic)
}

}