import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeListComponent,
    DepartmentListComponent,
    AddEmployeeComponent,
    AddDepartmentComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [
    UpdateEmployeeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
