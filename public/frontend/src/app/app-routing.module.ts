import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddDepartmentComponent } from './add-department/add-department.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'employees', pathMatch: 'full'
  },
  {
    path: 'employees', component: EmployeeListComponent
  },

  {
    path: 'employees/add', component: AddEmployeeComponent
  },
  {
    path: 'departments', component: DepartmentListComponent
  },
  {
    path: 'departments/add', component: AddDepartmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
