import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestDataSource } from './model/rest.datasource';
import { HttpClientModule } from '@angular/common/http';
import { SalaryComponent } from './model/salaries.component';
import { EmployeeComponent } from './model/employees.component';
import { EmpandSalComponent } from './model/Empandsal.component';

@NgModule({
  declarations: [
    AppComponent,
    SalaryComponent,
    EmployeeComponent,
    EmpandSalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RestDataSource],
  bootstrap: [AppComponent]
})
export class AppModule { }
