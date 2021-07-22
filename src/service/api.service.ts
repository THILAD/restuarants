import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class APIService {

  constructor(public http: HttpClient) { 
   
  }

  public ip:string;

   
  protected getBaseUrl(): string {
    if(!this.ip){
      this.ip = localStorage.getItem('myip')
      console.log(localStorage.getItem('myip'),'myip ');
      // alert('my id',this.ip)

    }
      console.log(this.ip,'have ');
      
  // return 'http://'+this.ip+'/restaurant/api/'
 
  //  return 'http://localhost/restaurant/api/';
  
     return 'http://216.127.173.163/Restaurant_API/api/';
  
  }

  protected headerBase(m:string=""): any {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'})
    .set('token', token+'')
    .set('m', m)
    .set('database_name','tax_pks')
    ;
    return headers;
  }
}
