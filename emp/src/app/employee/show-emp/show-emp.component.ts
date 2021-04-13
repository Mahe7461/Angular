import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {
  constructor(private service:SharedService) { }

  Employeelist:any=[];

  ModalTitle:string;
  ActivateAddEditEmpComp:boolean=false;
  emp:any;
  EmployeeIdFilter:string="";
  FirstNameFilter:string="";
  EmployeeListWithoutFilter:any=[];


  
  ngOnInit(): void {
    this.refreshEmpList();
  }

  addClick(){
    this.emp={
      EmployeeId:0,
      FirstName:"",
      LastName:'',
      Email:'',
      DOB:'',
      Salary:'',
      Contact:'',
      Department:'',
    }
    this.ModalTitle="Add Employee";
    this.ActivateAddEditEmpComp=true;
    this.refreshEmpList();

  }

  editClick(item){
    this.emp=item;
    this.ModalTitle="Edit Employee";
    this.ActivateAddEditEmpComp=true;
    this.refreshEmpList();
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteEmployee(item.EmployeeId).subscribe(data=>{
        alert(data.toString());
        this.refreshEmpList();
      })
    }
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
  FilterFn(){
    var EmployeeIdFilter = this.EmployeeIdFilter;
    var FirstNameFilter = this.FirstNameFilter;

    this.Employeelist = this.EmployeeListWithoutFilter.filter(function (l){
        return l.EmployeeId.toString().toLowerCase().includes(
          EmployeeIdFilter.toString().trim().toLowerCase()
        )&&
        l.FirstName.toString().toLowerCase().includes(
          FirstNameFilter.toString().trim().toLowerCase()
        )
    });
    

}
sortResult(prop,asc){
  this.Employeelist = this.EmployeeListWithoutFilter.sort(function(a,b){
    if(asc){
        return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
    }else{
      return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
    }
  })
}


}