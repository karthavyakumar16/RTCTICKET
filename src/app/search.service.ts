import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'node:inspector';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor( private httpClient:HttpClient) {


   }
   private apiUrl = 'http://localhost:8080/search';
   searchBus(search:any):Observable<any>{
    const httpOptions ={
      headers: new HttpHeaders({
         'Content-Type': 'application/json',
        'Accept': 'text/plain'
       }),
      }

return this.httpClient.post(this.apiUrl,search,httpOptions)

   }
}
