import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class SalaryService {
  public common_url="http://localhost:8000/salary";
  public leave_url="http://localhost:8000/leave";
  public advance_url="http://localhost:8000/advance";
  public headers = new HttpHeaders({
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin":"*"
  });
  constructor(private http:HttpClient) { }
  getAllSalary():Observable<any>{
    return this.http.get(this.common_url, { headers: this.headers });
  }

  createSalary(salary:any){
    return this.http.post(this.common_url,salary, { headers: this.headers });
  }

  oneSalary(id:any):Observable<any>{
    return this.http.get(this.common_url+"/"+id,{ headers: this.headers });
  }

  updateSalary(id:any,salary:any){
    return this.http.put(this.common_url+"/"+id,salary,{ headers: this.headers });
  }
deleteSalary(id:any){
  return this.http.delete(this.common_url+"/"+id,{ headers: this.headers })
}



getAllAdvance():Observable<any>{
  return this.http.get(this.advance_url, { headers: this.headers });
}

createAdv(adv_data:any){
  return this.http.post(this.advance_url,adv_data,{ headers: this.headers });
}

deleteAdv(id:any){
  return this.http.delete(this.advance_url+"/"+id,{ headers: this.headers });
}
updateAdv(id:any,adv_data:any){
  return this.http.put(this.advance_url+"/"+id,adv_data,{ headers: this.headers });
}
oneAdv(id:any):Observable<any>{
  return this.http.get(this.advance_url+"/"+id,{ headers: this.headers });
}
//Leave
getAllLeaves():Observable<any>{
  return this.http.get(this.leave_url, { headers: this.headers });
}
deleteLeave(id:any){
  return this.http.delete(this.leave_url+"/"+id,{ headers: this.headers });
}
oneLeave(id:any):Observable<any>{
  return this.http.get(this.leave_url+"/"+id,{ headers: this.headers });
}

updateLeav(id:any,leave_data:any){
  return this.http.put(this.leave_url+"/"+id,leave_data,{ headers: this.headers });
}
createLeave(leave_data:any){
  return this.http.post(this.leave_url+"/",leave_data,{ headers: this.headers });
}
}
