import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';  
import { Employee } from '../model/employee';
import { UserService } from '../service/employee-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
 employee:Employee;

  constructor( private route: ActivatedRoute, 
    private router: Router, 
      private userService: UserService) {
    this.employee=new Employee();
   }
   onSubmit(){  
    
    
    this.userService.save(this.employee).subscribe(result => this.goToEmployeeList());
  }  
  goToEmployeeList(){
        this.router.navigate(['/dashboard']);
  }
  
  
  ngOnInit(): void {
  }

}
