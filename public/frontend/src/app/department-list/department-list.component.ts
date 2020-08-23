import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Department } from '../shared/department.model';
import { DataService } from '../shared/data.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  departments: Department[];
  displayedColumns: string[] = ['depId', 'name', 'actions'];
  // MatPaginator Inputs
  length = 100;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 50];

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getDepartments(this.pageSize, 0);
    this.dataService.departmentObserver.subscribe(
      (data) => {
        this.departments = data['departments'];
        this.length = data['total'];
      }
    );
  }

  getDepartmentRecords(e: PageEvent) {
    this.dataService.getDepartments(e.pageSize, e.pageIndex);
    this.dataService.departmentObserver.subscribe(
      (data) => {
        this.departments = data['departments'];
        this.length = data['total'];
      }
    );
  }

  deleteDepartment(dep) {
    this.dataService.deleteDepartment(dep).subscribe(
      (response) => {
      },
      (error) => {
        console.log(error);
        this.dataService.getDepartments(this.pageSize, 0);
        this.dataService.departmentObserver.subscribe(
          (data) => {
            this.departments = data['departments'];
            this.length = data['total'];
          }
        );
      }
    );
  }

}
