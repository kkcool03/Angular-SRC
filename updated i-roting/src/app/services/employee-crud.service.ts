import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Employee } from '../pojo/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeCRUDService {

  baseURL : string = "http://localhost:8080/employeecrud/employee";

  constructor(private http: HttpClient) { }
  getSingleEmployee(employeeId :number) :Observable<Employee>{
    console.log('single employee method me');
    return this.http.get<Employee>(this.baseURL + '/' +employeeId)
  }

  updateEmployee(employee: Employee): Observable<boolean>{
    return this.http.put<boolean>(this.baseURL, employee);
  }

  deleteEmployee(employeeId: number) : Observable<boolean>{
    console.log('in deleteEmployee' + employeeId);
    return this.http.delete<boolean>(this.baseURL + '/' + employeeId);
  }


  getAllEmployees() : Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseURL);
  }

  addEmployee(employee:Employee) : Observable<boolean> {
    console.log("in Employeecrudservice");
    console.log(employee);
    console.log("EmployeeCRUDService end");
    return this.http.post<boolean>(this.baseURL , employee);


  }
}
