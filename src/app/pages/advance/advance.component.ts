import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Advance } from '../../models/object-model';
import { EmployeeService } from '../../service/employee.service';
import { SalaryService } from '../../service/salary.service';

@Component({
  selector: 'app-advance',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './advance.component.html',
  styleUrl: './advance.component.css'
})
export class AdvanceComponent implements OnInit {

  emp_data:any []=[];
  advance_data:any []=[];
  advanceobj:Advance=new Advance();
  constructor(private sService:SalaryService,private eService:EmployeeService){}
  ngOnInit(): void {
      this.loadEmp();
      this.loadAdv();
  }
  loadEmp(){
    this.eService.getAllEmployee().subscribe((data:any)=>{
      this.emp_data=data;
    })
  }

  loadAdv(){
    this.sService.getAllAdvance().subscribe((data:any)=>{
      this.advance_data=data;
    })
  }
  onEdit(id:any){
    this.sService.oneAdv(id).subscribe((data:any)=>{
      this.advanceobj=data;
    })
  }
  onDelete(id:any){
    this.sService.deleteAdv(id).subscribe((data:any)=>{
      alert("Delete Successfully!")
      this.loadAdv();
    })
  }

  onSave(){
    this.sService.createAdv(this.advanceobj).subscribe((data:any)=>{
            alert("Advance add is successfully!");
            this.loadAdv();
    })

  }
  update(id:any){
    this.sService.updateAdv(id,this.advanceobj).subscribe((data:any)=>{
      alert("Advance Data Update Successfully!");
      this.loadAdv();
    })
  }


                                           


}
