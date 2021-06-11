import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from 'app/shared.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-ques-edit',
  templateUrl: './ques-edit.component.html',
  styleUrls: ['./ques-edit.component.css']
})
export class QuesEditComponent implements OnInit {
  

constructor(private service:SharedService,
  private toastr: ToastrService,
    private dialog: MatDialog,
    ) { }
list:any=[];


ActivateAddEditEmpComp:boolean=false;
@Input() data:any;
QuestionId:string;

Question:string;

DepartmentsList:any=[];

ngOnInit(): void {
  this.QuestionId=this.data.QuestionId;
  
  this.Question=this.data.Question;
  
  }
  showSuccess(message){
    this.toastr.success(message)
  }

addEmployee(){
   var val = {
            Question:this.Question,
          
   };
    this.service.addQuestion(val).subscribe(data=>{
    
    this.showSuccess(data);
  });
  
  
  this.closeClick();
}

updateEmployee(){
  var val = {
    QuestionId:this.QuestionId,
              
            Question:this.Question,
          
   };
  this.service.updateQuestion(val).subscribe(res=>{
 // alert(res.toString()
    this.showSuccess(res)
 // );
  
  
});
  this.closeClick();
}
closeClick(){
  this.ActivateAddEditEmpComp=false;
  this.refreshQuesList();
}



refreshQuesList(){
  this.service.getQuesList().subscribe(values=>{
    this.list=values;
    
  });
}

}
