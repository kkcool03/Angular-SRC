import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/pojo/employee';
import { EmployeeCRUDService } from 'src/app/services/employee-crud.service';

@Component({
  selector: 'app-get-all-employees',
  templateUrl: './get-all-employees.component.html',
  styleUrls: ['./get-all-employees.component.css']
})
export class GetAllEmployeesComponent implements OnInit {

  allEmployees : Employee [] = [];
  constructor(private employeeCRUDService :EmployeeCRUDService, private router : Router) { }

  ngOnInit(): void {
    this.reloadData();


    
  }

  getdetails(employeeId: number){
    console.log(employeeId);
    this.router.navigate(['/employeedetails',employeeId]);
  }

  reloadData(){
    this.employeeCRUDService.getAllEmployees().subscribe(
      data => {
        this.allEmployees = data;
        console.log(this.allEmployees);
      }
    );
  }
  updatedetails(employeeId : number){
    console.log(employeeId);
    this.router.navigate(['/updatedemployee', employeeId]);
  }

  deleteEmployee(employeeId : number){
    this.employeeCRUDService.deleteEmployee(employeeId).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      }
    );
    
  }
}
