import { Component, Renderer } from '@angular/core';
// import {TaskService} from './services/task.service';
import { AppService } from './../../app.service'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  moduleId: module.id,
  selector: 'provider',
  templateUrl: 'provider.component.html'
  // providers:[TaskService]
})


export class ProviderComponent {
  providers: any = {};
  insuranceDetails: any;
  doctorDetails: any = [];
  newdoctorDetails: any = [];
  oneProvider: any = {};
  isopen: boolean;
  zipcodeavialable: boolean;
  private Formdata = {};

  constructor(private appService: AppService, private router: Router) {

    this.appService.getAllDoctors()
      .subscribe(provider => {
        //console.log('DoctorsDetails:',provider)
        this.doctorDetails = provider;
      })


  }

  showOverlay(event) {
    //console.log('event: ', event.provider);
  }

  getData(provider) {
    //console.log('Provider:', provider);
    this.isopen = true;
    this.oneProvider = provider;
  }

  removeData() {
    //console.log('removed');
    this.isopen = false;
    this.oneProvider = null;
  }

  onSubmit(f: NgForm) {

    // this.appService.setZipcode(f.value.search);
    // this.router.navigate(['zipcode']);
    this.newdoctorDetails = [];

    this.appService.getAllDoctors()
      .subscribe(provider => {
        this.doctorDetails = provider;
      })
    for (var i = 0; i <= this.doctorDetails.length; i++) {
      if (this.doctorDetails[i].zipcode == f.value.search) {
        this.newdoctorDetails.push(this.doctorDetails[i]);
       console.log('Zipcode:',this.newdoctorDetails);
      }
      this.zipcodeavialable = true;
    // }
 

  }


}

