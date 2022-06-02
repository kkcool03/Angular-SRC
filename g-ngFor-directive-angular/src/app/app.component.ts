import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 userNames: string [] = ['Kiran','Pravin','Vaibhav','Harshal','Dinesh'];
 allEmployees: Employee [] = [
   {employeeId:101, name:'kiran',salary:250000},
   {employeeId:102, name:'Pravin',salary:250000},
   {employeeId:103, name:'Vaibhav',salary:250000},
   {employeeId:104, name:'Harshal',salary:250000},
   {employeeId:105, name:'Dinesh',salary:250000}
  ];
}
