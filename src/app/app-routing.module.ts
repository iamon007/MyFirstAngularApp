import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayemployeeComponent } from './displayemployee/displayemployee.component';

const routes: Routes = [
    { path: 'dashboard/registerEmployee', component: ContactFormComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'dashboard/getEmployees', component: DisplayemployeeComponent },
  ]; 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 
})
export class AppRoutingModule {
   
 } 