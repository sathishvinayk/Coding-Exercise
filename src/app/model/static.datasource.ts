import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Salary } from './salary';
import { Observable, from } from 'rxjs';

@Injectable()
export class StaticDataSource {
    private employees: Employee[]=[
        new Employee(1, 14, "Firstname1", "lastname1"),
        new Employee(1, 19, "Firstname1", "lastname1"),
        new Employee(1, 18, "Firstname1", "lastname1"),
        new Employee(1, 16, "Firstname1", "lastname1"),
        new Employee(1, 11, "Firstname1", "lastname1"),
    ]
    private salaries: Salary[]= [
        new Salary(1, 12, 174),
        new Salary(1, 16, 164),
        new Salary(1, 11, 114),
        new Salary(1, 18, 164),
        new Salary(1, 17, 154),
    ]
    getEmployees(): Observable<Employee[]>{
        return from([this.employees]);
    }
    getSalaries(): Observable<Salary[]>{
        return from([this.salaries]);
    }
}