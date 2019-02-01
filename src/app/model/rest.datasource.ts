import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { Employee } from './employee';
import { Salary } from './salary';

@Injectable()
export class RestDataSource {
    baseUrl: string;
    res: any
    constructor(private http:HttpClient){
        // this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
        this.baseUrl = "/api/"
    }
    getEmployees(): Observable<Employee[]>{
        return this.http.get<Employee[]>(this.baseUrl + "employees");
    }
    getSalaries(): Observable<Salary[]>{
        return this.http.get<Salary[]>(this.baseUrl + "salaries");
    }
    getEmpAndSalary():Observable<any>{
        let empApi = this.http.get<Employee[]>(this.baseUrl + "employees");
        let salApi = this.http.get<Salary[]>(this.baseUrl + "salaries");
        return forkJoin([empApi, salApi])
    }
}