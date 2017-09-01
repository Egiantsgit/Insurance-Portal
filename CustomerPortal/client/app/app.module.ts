import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing';
import {PatientComponent} from './components/patient/patient.component';
import {ProviderComponent} from './components/provider/provider.component';
import {ZipcodeComponent} from './components/zipcode/zipcode.component';
import {ClaimsComponent} from './components/claims/claims.component';
import {ReportComponent} from './components/report/report.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from "./Register/register.component";
import {RegisterComponent2} from "./Register/register2.component";
import {RegisterComponent3} from "./Register/register3.component";
import {RegisterComponent4} from "./Register/register4.component";

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule,AppRoutingModule],
  declarations: [AppComponent, PatientComponent,LoginComponent,RegisterComponent,RegisterComponent2,RegisterComponent3,RegisterComponent4,ClaimsComponent,ReportComponent,ProviderComponent,ZipcodeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
