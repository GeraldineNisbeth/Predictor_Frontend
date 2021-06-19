import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Variables } from '../models/variables';

@Injectable({
  providedIn: 'root'
})
export class KmeansService {
  private readonly url: string = 'http://localhost:8081/';  

  constructor(private http: HttpClient) { }

  postVariables(variables: Variables): Observable<any> {
    return this.http.post<any>(this.url+'enviarInputs', variables);
  }
}
