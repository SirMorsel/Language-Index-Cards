import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IndexCard } from '../_interface/index-card'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private serverUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  //GET
  public getIndexCards(): Observable<IndexCard[]>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.get<IndexCard[]>(`${this.serverUrl}/cards`, httpOptions);
  }
}
