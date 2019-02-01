import { Component } from '@angular/core';
import { Employee } from '../model/employee';
import { RestDataSource } from '../model/rest.datasource';
import { OnInit } from '@angular/core';

@Component({
  selector: 'employees',
  templateUrl: './employees.component.html'
})
export class EmployeeComponent implements OnInit{
  public employees: Employee[] = [];

  clumber: boolean  ;

  constructor(private repo: RestDataSource) {}
  
  ngOnInit(){
    this.repo.getEmployees().subscribe(data => {
        this.employees = data;
    });
  }
}
