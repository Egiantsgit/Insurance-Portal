import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AppService} from './../../app.service';
import { Router } from '@angular/router';
import {ReportService} from './report.service';



@Component({
  moduleId: module.id,
  selector: 'report',
  templateUrl: 'report.component.html'
  
})
export class ReportComponent{
   private Formdata ={};
//    private FormData2 ={};
   data:any = {}
  constructor(private router :Router,private reportservice :ReportService
  ){}

  // getDetails(event){
  // event.preventDefault();
  // this.router.navigate(['Register4']);

//}
getReport(event){
  event.preventDefault();
  var Report ={
    
    firstName  : this.data.firstName,
    lastName: this.data.lastName,
    gender : this.data.gender,
    memberId : this.data.memberId,
    typeOfAccident : this.data.typeOfAccident,
    dAccident : this.data.dAccident,
    physicianName : this.data.physicianName,
    dateTreated : this.data.dateTreated,
    dVisit : this.data.dVisit,
    claimedAmount : this.data.claimedAmount,
    patientResponsibility : this.data.patientResponsibility,
    dClaim : this.data.dClaim

    
    
    
    
  }
  this.reportservice.setData('firstName',Report.firstName);
  this.reportservice.setData('lastName',Report.lastName);
  this.reportservice.setData('gender',Report.gender);
  this.reportservice.setData('memberId',Report.memberId);
  this.reportservice.setData('typeOfAccident',Report.typeOfAccident);
  this.reportservice.setData('dAccident',Report.dAccident);
  this.reportservice.setData('physicianName',Report.physicianName);
  this.reportservice.setData('dateTreated',Report.dateTreated);
  this.reportservice.setData('dVisit',Report.dVisit);
  this.reportservice.setData('claimedAmount',Report.claimedAmount);
  this.reportservice.setData('patientResponsibility',Report.patientResponsibility);
  this.reportservice.setData('dClaim',Report.dClaim);
 

  
  
  
  this.Formdata =this.reportservice.getData();


  this.reportservice.postData(this.Formdata)
                  .subscribe(result =>{
                    console.log(result);
                   // alert(result);
                    //this.router.navigate(['confirm']);
                  },
                   error => {
                     alert('There is a problem with the enrollment');
                   } 
                  
                  )
  console.log('Hello',Report.firstName)
 console.log(this.Formdata)
}

}