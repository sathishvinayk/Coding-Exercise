import { Component } from '@angular/core';
import { Salary } from '../model/salary';
import { RestDataSource } from '../model/rest.datasource';
import { OnInit } from '@angular/core';

@Component({
  selector: 'employees',
  templateUrl: './salaries.component.html',
})
export class SalaryComponent implements OnInit{
  public salaries: Salary[] = []

  constructor(private repo: RestDataSource) {}
  
  ngOnInit(){
    this.repo.getSalaries().subscribe(data => {
        this.salaries = data;
    });
  }
}
