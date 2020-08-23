import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  firstName: string;
  lastName: string;
  managerId: number;
  departmentId: number;
  phone: string;
  managers;
  departments;
  nameRegex = /^[ a-zA-Z_]{0,30}$/;
  phoneRegex = /^[0-9]{10}$/;

  response;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.setManagerDropdown();
    this.setDepartmentDropdown();
  }

  onSubmit(f: NgForm) {
    if (f.valid) {
      this.dataService.addEmployee(f.value).subscribe(
        (response) => {
          this.response = response;
          f.resetForm();
          this.dataService.getEmployees(0, 0);
        },
        (error) => {
          this.response = error.error;
        }
      );
      setTimeout(() => this.response = null, 5000);
    }
  }

  setManagerDropdown() {
    this.dataService.getEmployees(0, 0);
    this.dataService.employeeObserver.subscribe(
      (data) => {
        this.managers = data['employees'];
      },
      (err) => {
        console.log(err);
      }
    );
  }

  setDepartmentDropdown() {
    this.dataService.getDepartments(0, 0);
    this.dataService.departmentObserver.subscribe(
      (data) => {
        this.departments = data['departments'];
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
