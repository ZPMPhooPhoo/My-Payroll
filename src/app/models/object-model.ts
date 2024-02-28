export class User{
    email!:String;
    password!:string;
}


export class Employee {
    id:string | null = null;
    name: string | null = null;
    empContactNo: number = 0;
    email: string | null = null;
    address1: string | null = null;
    address2: string | null = null;
    zipCode: number = 0;
    city: string | null = null;
    state: string | null = null;
    bankName: string | null = null;
    ifsc: string | null = null;
    accountNo: number = 0;
    bankBranch: string | null = null;
    salary: number = 0;
}
export class IAttandance {
        _id:string | null = null;
        name: string | null = null;
        empContactNo: string | null = null;
        employeeId: string | null = null;
        attendanceDate: string | null = null;
        inTime:string | null = null;
        outTime: string | null = null;
        isFullDay: boolean | false=false;
      
}
export class Attandance {
    _id:string | null = null;
    name: string | null = null;
    empContactNo: string | null = null;
    employeeId: string | null = null;
    attendanceDate: string | null = null;
    inTime:string | null = null;
    outTime: string | null = null;
    isFullDay: boolean | false=false;
  
}

export class Salary {
    _id:string | null = null;
    name: string | null = null;
    empContactNo: string | null = null;
    employeeId: string | null = null;
    saleryDate: string | null = null;
    totalAdvance: Number | 0 = 0;
    presentDays: Number | 0 = 0;
    salaryAmount:Number | 0 = 0;
  
}
export class Advance {
    _id:string | null = null;
    name: string | null =null;
    empContactNo: number | 0=0;
    employeeId: string | null =null;
    advanceDate: string | null =null;
    advanceAmount: Number | 0 =0;
    reason: string | null =null;
}

export class Leave {
    _id:string | null = null;
    name: string | null= null;
    empContactNo: number =0;
    employeeId: string | null= null;
    leaveDate: string | null= null;
    leaveReason: string | null= null;
    noOfFullDayLeaves: number= 0;
    noofHalfDayLeaves: number= 0;
}