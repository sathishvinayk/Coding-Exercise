import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalaryComponent } from './model/salaries.component';
import { EmployeeComponent } from './model/employees.component';
import { EmpandSalComponent } from './model/Empandsal.component';

const routes: Routes = [
  {
    path: "sal", component: SalaryComponent,
  },
  {
    path: "employees", component: EmployeeComponent
  },
  {
    path: "empsal", component: EmpandSalComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
