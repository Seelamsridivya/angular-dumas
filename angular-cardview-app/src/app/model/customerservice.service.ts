import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Icustomer } from './icustomer';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {
  url: string='http://localhost:3000/customers'

  constructor(private http:HttpClient) { }
  getCustomers():Observable<Icustomer[]>{
    return this.http.get<Icustomer[]>(this.url);
    
  }
}



