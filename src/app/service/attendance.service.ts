import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class AttendanceService {
public attendance_url="http://localhost:8000/attendance";
public headers = new HttpHeaders({
  'Content-Type': 'application/json',
  "Access-Control-Allow-Origin":"*"
});
  constructor(private http:HttpClient) { }

  getAllAttend():Observable<any>{
    return this.http.get(this.attendance_url, { headers: this.headers });
  }
  
  addAttend(attendance:any){
    return this.http.post(this.attendance_url,attendance,{ headers: this.headers });
  }

  deleteAtt(id:any){
    return this.http.delete(this.attendance_url+"/"+id,{ headers: this.headers });
  }
  grtOneAtt(id:any):Observable<any>{
    return this.http.get(this.attendance_url+"/"+id,{ headers: this.headers });
  }
  updateAtt(id:any,attendance:any){
    return this.http.put(this.attendance_url+"/"+id,attendance, { headers: this.headers });
  }
}
