import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Attandance, IAttandance } from '../../models/object-model';
import { AttendanceService } from '../../service/attendance.service';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.css'
})
export class AttendanceComponent implements OnInit{
  attendanceArr:IAttandance[]=[];
  attendance:Attandance=new Attandance();
  employee_data:any []=[];
  single_data:any []=[];
  constructor(private eService:EmployeeService,private aService:AttendanceService){}
  ngOnInit(): void {
      this.getAllEmp();
      this.loadAttendance();
  }


  getAllEmp(){
    this.eService.getAllEmployee().subscribe(data=>{
      this.employee_data=data;
    })
  }
  onEdit(id:any){
      this.aService.grtOneAtt(id).subscribe(data=>{
        this.attendance=data;
        this.loadAttendance();
        
      })
  }
  onDelete(id:any){
    this.aService.deleteAtt(id).subscribe(data=>{
      alert("Attendance delete is successful!");
      this.loadAttendance()
    })
  }
  onSave(){
    this.aService.addAttend(this.attendance).subscribe((data:any)=>{
      this.loadAttendance();
    })
  }
  update(id:any){
    this.aService.updateAtt(id,this.attendance).subscribe(data=>{
      alert("Attendance data Update!");
      this.loadAttendance();
    })
  }

  loadAttendance(){
    this.aService.getAllAttend().subscribe((data:any)=>{
        this.attendanceArr=data;      
    })
   }

  singleUser(id:any){
    this.eService.oneEmoloyee(id).subscribe(data=>{
      this.attendance.empContactNo=data.empContactNo;
    })

  }
}
