import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Salary } from '../../models/object-model';
import { EmployeeService } from '../../service/employee.service';
import { SalaryService } from '../../service/salary.service';

@Component({
  selector: 'app-salary',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './salary.component.html',
  styleUrl: './salary.component.css'
})
export class SalaryComponent implements OnInit {
  salaryobj: Salary = new Salary();
  salaryArray: any[] = [];
  employeeArr: any[] = [];
  total_advance: number = 0;
  total_leave: number = 0;

  constructor(private eService: EmployeeService, private sService: SalaryService) { }
  ngOnInit(): void {
    this.loadEmployee();
    this.loadSalary();
  }
  loadEmployee() {
    this.eService.getAllEmployee().subscribe((data: any) => {
      this.employeeArr = data;
    })
  }
  loadSalary() {
    this.sService.getAllSalary().subscribe((data: any) => {
      this.salaryArray = data;
    })
  }
  onEdit(id: any) {
    this.sService.oneSalary(id).subscribe((data: any) => {
      this.salaryobj = data;
      console.log(this.salaryobj);

    })
  };
  onDelete(id: any) {
    this.sService.deleteSalary(id).subscribe(data => {
      alert("Delete Item is Successfully!");
      this.loadSalary();
    })
  };
  update(id: any) {
    this.sService.updateSalary(id, this.salaryobj).subscribe(data => {
      alert("Update Salary Info is Successfully!");
      this.loadSalary();
    })
  };
  onSave() {
    this.sService.createSalary(this.salaryobj).subscribe((data: any) => {
      alert("Add New Salary is Successfull!");
      this.loadSalary();
    })

  }

  getEmpData() {
    this.getAllLeaves();
    this.getAllAdvance();
  }
  getAllLeaves() {
    this.sService.getAllLeaves().subscribe(
      (data: any) => {
        // Filter data based on employeeId and get the length of the filtered array
        this.total_leave = data.filter((m: any) => m.employeeId == this.salaryobj.employeeId).length;
        this.salaryobj.presentDays = 22 - this.total_leave;
      },
      (error: any) => {
        console.error('Error occurred while fetching leave data:', error);
      }

    );
  }

  getAllAdvance() {
    this.sService.getAllAdvance().subscribe(
      (data: any) => {
        // Filter data based on employeeId
        const filteredData = data.filter((m: any) => m.employeeId == this.salaryobj.employeeId);

        // Calculate total advance using reduce
        this.total_advance = filteredData.reduce((total: number, element: any) => {
          return total + element.advanceAmount;
        }, 0);
        this.salaryobj.totalAdvance = this.total_advance;
      },
      (error: any) => {
        console.error('Error occurred while fetching advance data:', error);
      }
    );
  }

  calculateSalary() {
    const empData = this.employeeArr.find(m => m._id == this.salaryobj.employeeId);
    const perDaySalary = empData.salary / 22;
    const presentDays: number = this.salaryobj.presentDays as number;
    const totalAdvance: number = this.salaryobj.totalAdvance as number;
    this.salaryobj.salaryAmount = ( presentDays * perDaySalary) - totalAdvance;
  }


}
