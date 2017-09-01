import { Component } from '@angular/core';
// import {TaskService} from './services/task.service';
import { AppService } from './../../app.service'

@Component({
  moduleId: module.id,
  selector: 'patient',
  templateUrl: 'patient.component.html'
  // providers:[TaskService]
})

export class PatientComponent {
  patientInfo: any
  insuranceDetails: any

  constructor(private appService: AppService){
    this.patientInfo = JSON.parse(localStorage.getItem('patientDetails'))
    this.appService.getMembershipType(this.patientInfo.membershipType,this.patientInfo.metallic_type)
                    .subscribe(insuranceDetails => {
                            console.log('Insurance:',insuranceDetails)
                            this.insuranceDetails = insuranceDetails;
                    })
  }



 }
