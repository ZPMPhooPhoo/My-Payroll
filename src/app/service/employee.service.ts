import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({  providedIn: 'any'})

export class EmployeeService {
  public common_url="http://localhost:8000/employee";
  public headers = new HttpHeaders({
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin":"*"
  });
  constructor(private http:HttpClient) { }
  getAllEmployee(): Observable<any> {
    return this.http.get(this.common_url, { headers: this.headers });
  }

  createEmployee(employee:any){
    return this.http.post(this.common_url,employee, { headers: this.headers });
  }
  oneEmoloyee(id:any):Observable<any>{
    return this.http.get(this.common_url+"/"+id,{ headers: this.headers })
  }


  deleteEmployee(id:any){
    return this.http.delete(this.common_url+"/"+id,{ headers: this.headers })
  }

  editEmployee(id:any,employee:any){
    return this.http.put(this.common_url+"/"+id,employee,{ headers: this.headers })
  }


}
