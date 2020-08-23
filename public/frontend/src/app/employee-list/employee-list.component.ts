import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../shared/employee.model';

import { PageEvent } from '@angular/material/paginator';
import { DataService } from '../shared/data.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  id: number;
  idRegex = /^[ a-zA-Z_]{0,30}$/;
  filters = ['Employee', 'Manager', 'Department'];
  selectedFilter;

  displayedColumns: string[] = ['empId', 'firstName', 'lastName', 'manager', 'department', 'phone', 'actions'];
  // MatPaginator Inputs
  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 50];

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private route: ActivatedRoute, private dataService: DataService, private dialog: MatDialog) { }

  ngOnInit() {
    this.dataService.getEmployees(this.pageSize, 0);
    this.dataService.employeeObserver.subscribe(
      (data) => {
        this.employees = data['employees'];
        this.length = data['total'];
      }
    );
  }

  getEmployeeRecords(e: PageEvent) {
    this.dataService.getEmployees(e.pageSize, e.pageIndex);
    this.dataService.employeeObserver.subscribe(
      (data) => {
        this.employees = data['employees'];
        this.length = data['total'];
      }
    );
  }

  deleteEmployee(emp) {
    this.dataService.deleteEmployee(emp).subscribe(
      (response) => {

      },
      (error) => {
        this.dataService.getEmployees(this.pageSize, 0);
        this.dataService.employeeObserver.subscribe(
          (data) => {
            this.employees = data['employees']; this.length = data['total'];
          }
        );
      }
    );
  }

  openEmployeeDialog(emp) {
    const dialogRef = this.dialog.open(UpdateEmployeeComponent, {
      width: '450px',
      data: emp
    });

    dialogRef.afterClosed().subscribe(() => {
      this.dataService.getEmployees(0, 0);
    });
  }

  search(f: NgForm) {
    if (f.valid) {
      this.employees = null;
      this.dataService.searchData(f.value);
      this.dataService.employeeObserver.subscribe(
        (data: Employee[]) => {
          this.employees = data;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  clearFilter(f: NgForm) {
    f.resetForm();
    this.dataService.getEmployees(this.pageSize, 0);
    this.dataService.employeeObserver.subscribe(
      (data) => {
        this.employees = data['employees'];
        this.length = data['total'];
      }
    );
  }

}
