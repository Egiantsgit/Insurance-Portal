import {Injectable} from '@angular/core';
import {Http,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ReportService {

    url = "http://localhost:7070/claims/report";  

    constructor(private http:Http){
        console.log('Form Service Initialized');
    }

    private Formdata = {};

    private data ={};

    setData(option, value) {
        this.Formdata[option] = value;
    }

    getData() {
        return this.Formdata;
    }

    postData(Formdata){

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        
        console.log(Formdata);
       // console.log(JSON.stringify(FormData));

        
        
        return this.http.post(this.url,Formdata,{headers : headers})
                   .map(res => res|| {result :'report sent successfully'})
       

    }

    //  addBookWithPromise(FormData): Promise<FormData> {
	// let headers = new Headers({ 'Content-Type': 'application/json' });
    //     let options = new RequestOptions({ headers: headers });
    //     return this.http.post(this.url, FormData, options).toPromise()
	//            .then(this.extractData)
    //                .catch(this.handleErrorPromise);

    //  }

    //  private extractData(res: Response) {
	// let body = res.json();
    //     return body.data || {};
    // }
    //  private handleErrorPromise (error: Response | any) {
	// console.error(error.message || error);
	// return Promise.reject(error.message || error);
    // }





    // private extractData(res: Response) {
	// let body = res.json();
    //     return body.data || {};
    // }


}