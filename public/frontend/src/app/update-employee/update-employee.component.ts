import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from '../shared/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  managers;
  departments;
  response: string;

  constructor(
    private dialogRef: MatDialogRef<UpdateEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) private emp, private dataService: DataService) { }

  ngOnInit() {
    this.setDepartmentDropdown();
    this.setManagerDropdown();
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

  onSubmit(f: NgForm) {
    if (f.valid) {
      this.dataService.updateEmployee(f.value).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          this.response = error.error.text;
          this.dataService.getEmployees(0, 0);
        }
      );
      setTimeout(() => this.response = null, 5000);
    }
  }

  onCancel() {
    this.dialogRef.close();
  }

}
