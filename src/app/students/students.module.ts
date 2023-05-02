import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './dashboard/form/form.component';
import { TableComponent } from './dashboard/table/table.component';



@NgModule({
  declarations: [
    DashboardComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [DashboardComponent]
  
})
export class StudentsModule { }
