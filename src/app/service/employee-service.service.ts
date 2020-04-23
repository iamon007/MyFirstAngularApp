import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../model/employee';
 
@Injectable()
export class UserService {
 
  private usersUrl: string;
 
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/Springmvcangular/dashboard/registerEmployee';
  }
 
 
  public save(employee:Employee) {
    return this.http.post<Employee>(this.usersUrl, employee);
  }
}