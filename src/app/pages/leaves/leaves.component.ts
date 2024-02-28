import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Leave } from '../../models/object-model';
import { EmployeeService } from '../../service/employee.service';
import { SalaryService } from '../../service/salary.service';

@Component({
  selector: 'app-leaves',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './leaves.component.html',
  styleUrl: './leaves.component.css'
})
export class LeavesComponent  implements OnInit{
  leave_data:any []=[];
  emp_data:any []=[];
  leaveobj:Leave=new Leave();
  constructor(private eService:EmployeeService,private sService:SalaryService){}

ngOnInit(): void {
    this.loadEmp();
    this.loadLeav();
}
loadLeav(){
  this.sService.getAllLeaves().subscribe((data:any)=>{
    this.leave_data=data;
  })
}

loadEmp(){
  this.eService.getAllEmployee().subscribe((data:any)=>{
    this.emp_data=data;
  })
}
onEdit(id:any){
  this.sService.oneLeave(id).subscribe((data:any)=>{
    this.leaveobj=data;
  })
}
onDelete(id:any){
  this.sService.deleteLeave(id).subscribe((data:any)=>{
    alert("Lrave Delete is Successfully!");
    this.loadLeav();
  })
}
onSave(){
  this.sService.createLeave(this.leaveobj).subscribe((data:any)=>{
    alert("Add New Leave is Successfully!");
    this.loadLeav();
  })
}
update(id:any){
  this.sService.updateLeav(id,this.leaveobj).subscribe((data:any)=>{
    alert("Leaves Data is update Successfully");
    this.loadLeav();
  })
}


}
