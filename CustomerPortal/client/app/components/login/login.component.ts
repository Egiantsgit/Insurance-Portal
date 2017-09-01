import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
// import {TaskService} from './services/task.service';
 import {AppService} from './../../app.service';
 import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html'
  // providers:[TaskService]
})

export class LoginComponent {
  data:{
    username:String,
    password:String
  };
  username:String
  password:String
  patientDetails:any
  constructor(private appService: AppService, private router: Router){
   
  }

  onSubmit(f: NgForm){
    console.log('Uname:', f.value.username);

    this.appService.getApp(f.value.username,f.value.password)
                    .subscribe(patients => {
                         console.log('P::',patients.membershipType);
                         localStorage.setItem('patientDetails',JSON.stringify(patients));
                        this.router.navigate(['home'])
                    })
                   
    

  }

 }
