import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  name: string;
  nameRegex = /^[ a-zA-Z_]{1,30}$/;
  response;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    if (f.valid) {
      this.dataService.addDepartment(f.value).subscribe(
        (response) => {
          this.response = response;
          f.resetForm();
          this.dataService.getDepartments(0, 0);

        },
        (error) => {
          this.response = error.error;
        }
      );
      setTimeout(() => this.response = null, 5000);
    }
  }

}
