import { Component } from '@angular/core';
 import {AppService} from './app.service';
// import {PatientComponent} from './components/patient/patient.component';
import {RegisterComponent} from "./Register/register.component";
import {RegisterComponent2} from "./Register/register2.component";
import {RegisterComponent3} from "./Register/register3.component";
import {RegisterComponent4} from "./Register/register4.component";

import {FormService} from "./Register/register.service";
import {ReportService} from "./components/report/report.service";



 

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers:[AppService,FormService,ReportService]
})

export class AppComponent { 

    patientInfo:any
    insuranceDetails: any

    constructor(private appService: AppService){

    }

    getPersonDetails(){
      console.log('He')
    this.patientInfo = JSON.parse(localStorage.getItem('patientDetails'))
  }

  getInsuranceDetails(){
        this.appService.getMembershipType(this.patientInfo.membershipType,this.patientInfo.metallic_type)
                    .subscribe(insuranceDetails => {
                            console.log('Insurance:',insuranceDetails)
                            this.insuranceDetails = insuranceDetails;
                    })
  }

  logout(){
    localStorage.clear();
  }

}
