import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {


  constructor(private http: HttpClient) {}

  sendEmail(mail:any): Observable<any> {
   
    return this.http.post('http://localhost:8080/email', mail);
  }

}
