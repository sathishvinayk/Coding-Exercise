import { Component } from '@angular/core';
import { RestDataSource } from '../model/rest.datasource';
import { OnInit } from '@angular/core';

@Component({
  selector: 'empandsal',
  templateUrl: './empandsal.component.html'
})
export class EmpandSalComponent implements OnInit{
  public employeesAndSalary: [] = [];

  clumber: boolean;

  constructor(private repo: RestDataSource) {}
  
  ngOnInit(){
    this.repo.getEmpAndSalary().subscribe(data => {
      let a = data[0].map((c) => {
        let b = data[1].find((d) => c.employeeID === d.employeeID);
        if(b){
          Object.assign(c, b);
        }
        return c
      })
      this.employeesAndSalary = a
      console.log(this.employeesAndSalary)
    })
  }
}
