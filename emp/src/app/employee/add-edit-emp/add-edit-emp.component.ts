import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {

  constructor(private service:SharedService) { }
  Employeelist:any=[];

  
  ActivateAddEditEmpComp:boolean=false;
  @Input() emp:any;
  EmployeeId:string;
  FirstName:string;
  LastName:string;
  Email:string;
  DOB:string;
  ContactNumber:string;
  Salary:string;
  department:string;
  DepartmentsList:any=[];

  ngOnInit(): void {
    this.EmployeeId=this.emp.EmployeeId;
    this.FirstName=this.emp.FirstName;
    this.LastName=this.emp.LastName;
    this.Email=this.emp.Email;
    this.DOB=this.emp.DOB;
    this.Salary=this.emp.Salary;
    this.department=this.emp.Department;
    this.ContactNumber=this.emp.ContactNumber;
  }

  addEmployee(){
     var val = {EmployeeId:this.EmployeeId,
                FirstName:this.FirstName,
              LastName:this.LastName,
            Email:this.Email,
          DOB:this.DOB,
        ContactNumber:this.ContactNumber,
      Department:this.department,
    Salary:this.Salary};
    this.service.addEmployee(val).subscribe(data=>{
      alert(data.toString());
      
    });
    console.log(val)
    this.closeClick();
  }

  updateEmployee(){
    var val = {EmployeeId:this.EmployeeId,
    FirstName:this.FirstName,
    LastName:this.LastName,
    Email:this.Email,
    DOB:this.DOB,
    Salary:this.Salary,
    Department:this.department,
    ContactNumber:this.ContactNumber,};
    this.service.updateEmployee(val).subscribe(res=>{
    alert(res.toString());
    });
    this.closeClick();
  }
  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }


  refreshEmpList(){
    this.service.getEmpList().subscribe(values=>{
      this.Employeelist=values;
      
    });
  }

}
