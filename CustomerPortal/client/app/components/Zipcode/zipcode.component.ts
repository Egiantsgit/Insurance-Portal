import { Component, Renderer } from '@angular/core';
// import {TaskService} from './services/task.service';
import { AppService } from './../../app.service'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'zipcode',
  templateUrl: 'zipcode.component.html'
  // providers:[TaskService]
})


export class ZipcodeComponent {

  doctorDetails: any = [];
  zipcode = 0;
    oneProvider: any = {};
  isopen: boolean;


  constructor(private appService: AppService, private router: Router) {

    this.zipcode = this.appService.getZipcode();
    console.log('reloading...........')
     this.appService.getProvider(this.zipcode)
      .subscribe(provider => {
        this.doctorDetails = provider;
      })

  }

    getData(provider) {
    console.log('Provider:', provider);
    this.isopen = true;
    this.oneProvider = provider;
  }

  removeData() {
    console.log('removed');
    this.isopen = false;
    this.oneProvider = null;
  }

    onSubmit(f: NgForm) {

    this.appService.setZipcode(f.value.search);
    this.router.navigate(['zipcode']);
  }



}

