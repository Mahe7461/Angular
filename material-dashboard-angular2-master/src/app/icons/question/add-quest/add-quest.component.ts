import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'app/shared.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-quest',
  templateUrl: './add-quest.component.html',
  styleUrls: ['./add-quest.component.css']
})
export class AddQuestComponent implements OnInit {

  constructor(private service:SharedService,
    private toastr: ToastrService,
    private router:Router,
    ) { }
list:any=[];


ActivateAddEditquesComp:boolean=false;
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
  
  console.log(val)
  this.refreshPage();
  this.closeClick();
 
}

updateEmployee(){
  var val = {
    QuestionId:this.QuestionId,
              
            Question:this.Question,
          
   };
  this.service.updateQuestion(val).subscribe(res=>{
  alert(res.toString());
  console.log(res.toString()) 
  
});
  this.refreshPage();
  this.closeClick();
}
closeClick(){
  this.ActivateAddEditquesComp=false;
  this.refreshEmpList();
}



refreshEmpList(){
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
