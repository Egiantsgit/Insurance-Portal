import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AppService} from './../../app.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'claims',
  templateUrl: 'claims.component.html'
  
})


export class ClaimsComponent{
      patientInfo: any
  claims: any

  constructor(private appService: AppService){
    this.patientInfo = JSON.parse(localStorage.getItem('patientDetails'))
    this.appService.getClaims(this.patientInfo.id)
                    .subscribe(claims => {
                            console.log('Claims:',claims)
                            this.claims = claims;
                    })






}
}