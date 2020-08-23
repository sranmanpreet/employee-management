import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { Employee } from './employee.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  employeeObserver = new Subject();
  departmentObserver = new Subject();

  constructor(private http: HttpClient) { }

  getEmployees(size: number, pageNo: number) {
    this.http.get(environment.apiBaseUrl + '/employees?size=' + size + '&pageNo=' + pageNo).subscribe(
      (data) => {
        this.employeeObserver.next(data);
      }, (err) => {
        console.log(err);
      }
    );
  }

  addEmployee(emp) {
    return this.http.post(environment.apiBaseUrl + '/add-employee', emp);
  }

  updateEmployee(emp) {
    return this.http.patch(environment.apiBaseUrl + '/employee/' + emp._id, emp);
  }

  deleteEmployee(emp) {
    return this.http.delete(environment.apiBaseUrl + '/employee/' + emp._id);
  }

  getDepartments(size: number, pageNo: number) {
    return this.http.get(environment.apiBaseUrl + '/departments?size=' + size + '&pageNo=' + pageNo).subscribe(
      (data) => {
        this.departmentObserver.next(data);
      }, (err) => {
        console.log(err);
      }
    );
  }

  addDepartment(dep) {
    return this.http.post(environment.apiBaseUrl + '/add-department', dep);
  }

  deleteDepartment(dep) {
    return this.http.delete(environment.apiBaseUrl + '/department/' + dep._id);
  }

  searchData(f) {
    return this.http.post(environment.apiBaseUrl + '/search', f).subscribe(
      (data) => {
        this.employeeObserver.next(data);
      }, (err) => {
        console.log(err);
      }
    );
  }

}
