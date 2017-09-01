import {Component} from '@angular/core'
import {Router} from '@angular/router';
import {FormService} from "./register.service";
@Component({
  moduleId: module.id,
  selector: 'my-register3',
  templateUrl: 'register3.component.html',
  
})

export class RegisterComponent3{
  data = {}
  constructor(private router :Router,private formservice :FormService
  ){}

  getDetails(event){
  event.preventDefault();
  this.router.navigate(['Register4']);

}
getForm3(event){
  event.preventDefault();
  var RegUser3 ={
    smoking : this.data.smoking,
    alcohol : this.data.alcohol,
    Height  : this.data.height,
    weight  : this.data.weight,
    addiction: this.data.addiction,
    illness : this.data.illness
  }
  this.formservice.setData('smoking',RegUser3.smoking);
  this.formservice.setData('alcohol',RegUser3.alcohol);
  this.formservice.setData('height',RegUser3.Height);
  this.formservice.setData('weight',RegUser3.weight);
  this.formservice.setData('drugaddict',RegUser3.addiction);
  this.formservice.setData('mentalillness',RegUser3.illness)

  console.log('Hello',RegUser3.smoking)
}
}