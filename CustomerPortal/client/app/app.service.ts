import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class AppService{
    constructor(private http: Http){
        console.log('app service initialized');
    }

    getApp(username,password){
        return this.http.get('http://localhost:7070/patient/login?username='+username+'&password='+password)
        .map(res => res.json());
            }

    getMembershipType(membershipType,metallic_type){
        return this.http.get('http://localhost:7070/insurance/ins?membershipType='+membershipType+'&metallic_type='+metallic_type)
        .map(res => res.json());
    }
    getClaims(id){
        return this.http.get('http://localhost:7070/patient/claims?id='+id)
        .map(res => res.json());
            }
    getAllDoctors(){
        return this.http.get('http://localhost:7070/provider/all')
        .map(res=>res.json());
           }
     getProvider(zipcode){
        return this.http.get('http://localhost:7070/provider/search?zipcode='+zipcode)
        .map(res=>res.json());
           } 


}