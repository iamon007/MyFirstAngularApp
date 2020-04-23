import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-displayemployee',
  templateUrl: './displayemployee.component.html',
  styleUrls: ['./displayemployee.component.css']
})
export class DisplayemployeeComponent implements OnInit {
  title = 'Spring Mvc Angular Tutorial';

  // Object to save the response returned from the service.
  myresponse: any;

  // Url to fetch the employee records from the spring application.
  readonly APP_URL = 'http://localhost:8080/Springmvcangular';

  constructor(private _http: HttpClient) { }

  // Method to fetch all employees from the database table.
  getAllEmployees() {
    this._http.get(this.APP_URL + '/dashboard/getEmployees').subscribe(
      data => {
        this.myresponse = data;
      },
      error => {
        console.log('Error occured', error);
      }
    );
  }

  ngOnInit(): void {
  }

}
