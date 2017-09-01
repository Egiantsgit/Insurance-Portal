import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientComponent } from './components/patient/patient.component';
import { ProviderComponent } from './components/provider/provider.component';
import { ZipcodeComponent } from './components/zipcode/zipcode.component';
import { ReportComponent } from './components/report/report.component';
import { ClaimsComponent } from './components/claims/claims.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from "./Register/register.component";
import {RegisterComponent2} from "./Register/register2.component";
import {RegisterComponent3} from "./Register/register3.component";
import {RegisterComponent4} from "./Register/register4.component";



const routes: Routes = [
    { path: 'home' , component: PatientComponent},
    { path: 'login' , component: LoginComponent},
    {path :'register', component:RegisterComponent},
    {path: 'Register2',component:RegisterComponent2},
    {path: 'Register3',component:RegisterComponent3},
    {path: 'Register4',component:RegisterComponent4},
    { path: 'claims' , component: ClaimsComponent},
     { path: 'report' , component: ReportComponent},
     { path: 'provider' , component: ProviderComponent},
     { path: 'zipcode' , component: ZipcodeComponent}

    // { path: 'logout' , component: PatientComponent},
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule]
})

export class AppRoutingModule {}