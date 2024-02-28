import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';
@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  employeeArr:any[]=[];
  employee:any={};
constructor(private router:Router,private employeeService:EmployeeService,private formB:FormBuilder){
}
ngOnInit(): void {
    this.loadAllEmployee();
    
}
loadAllEmployee(){
  this.employeeService.getAllEmployee().subscribe((data:any)=>{
    this.employeeArr=data;  
  })
}
onSave(){
  this.employeeService.createEmployee(this.employee).subscribe((data:any)=>{
    alert("New employee caeate Successfully!");
    this.loadAllEmployee();
  })
}
editData(id:any){
  this.employeeService.oneEmoloyee(id).subscribe(data=>{
    this.employee=data;    
  })
}
update(id:any){
  this.employeeService.editEmployee(id,this.employee).subscribe((data:any)=>{
    alert("Update employee is Successfully!");
    this.loadAllEmployee();
})
}
delete(id:any){
  this.employeeService.deleteEmployee(id).subscribe((data:any)=>{
    confirm("Are you sure delete employee!");
    this.loadAllEmployee();
})

}

}
