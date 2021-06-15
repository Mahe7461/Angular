import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
    private router:Router
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
  
  this.refreshPage(); 
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
  this.refreshPage();
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
refreshPage(){
  // this.document.defaultView.location.reload();
  //location.reload();
  //this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
  // this.router.navigate(['/Answers']);
 //}); 
 let currentUrl = this.router.url;
     this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
         this.router.navigate([ currentUrl]);
     });
 }


}
