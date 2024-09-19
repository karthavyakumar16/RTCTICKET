import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListofbusesService {

  constructor( private httpClient:HttpClient) {


  }
  private apiUrl = 'http://localhost:8080/listofbuses';
  search(listofbuses:any):Observable<any>{
   const httpOptions ={
     headers: new HttpHeaders({
        'Content-Type': 'application/json',
       'Accept': 'text/plain'
      }),
     }

return this.httpClient.post(this.apiUrl,listofbuses,httpOptions)

  }
}
