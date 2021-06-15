import { Component, Inject, Input, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from 'app/shared.service';
import {BehaviorSubject} from 'rxjs';
import{ToastrService} from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'app/confirm-dialog/confirm-dialog.component';

import { Router } from '@angular/router';
@Component({
  selector: 'app-qu-ans',
  templateUrl: './qu-ans.component.html',
  styleUrls: ['./qu-ans.component.css']
})
export class QuAnsComponent implements OnInit{
  
  empty:boolean=false;
 
  saveCon:boolean=false;
  answer='';  
  quesAns=[];  
  questionData='';
  cardData=[];
  quesdata=[];
  answerList=[];
  refreshData= new BehaviorSubject<boolean>(true);
  constructor(private service:SharedService,
    private router:Router,
   private toastr: ToastrService,
    private dialog: MatDialog,
    
   
    ) { }
  ModalTitle:string;
  ActivateAddEditAnsComp:boolean=false;
  data:any;
  @Input() dep:any;
  AnswerId:string;
  Question:string;
  Answer:string;
  
  ngOnInit(): void {
    this. questionData=localStorage.getItem('Question')
   
      
  
    this.refreshAnsList();  
   }
  
   showSuccess(message){
     this.toastr.success(message)
   }
   showWarning(data){
     this.toastr.warning(data)
   }
   showerror(data){
    this.toastr.error(data)
  }
  cardAdddata(){
    let data = this.quesAns.find(obj=>obj.Answer ===this.answer)
    if(!data){
      this.cardData.push(this.answer)
      this.saveCon=true
    }else{
      this.showWarning('Data already stored')
    }
    
  }

  delete(data){
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm ',
        message: 'Are you sure, You want to delete? ' 
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.cardData = this.cardData.filter(item => item !== data);
        
        this.showSuccess('Deleted Sucessfully');
        if(this.cardData.length===0){
          this.saveCon=false
        }
      }
    });

  }
  addClick(){
    this.data={
      AnswerId:0,
      Answer:"",
      Question:'',
      
    }
    this.ModalTitle="Add";
    this.ActivateAddEditAnsComp=true;
    this.refreshAnsList();

  }

  editClick(item){
    this.data=item;
    this.ModalTitle="Edit";
    this.ActivateAddEditAnsComp=true;
    this.refreshAnsList();
  }
  
    
  
  deleteClick(item){
    
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm ',
         message: 'Are you sure, You want to delete? ' 
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.service.deleteAnswer(item.AnswerId).subscribe(data=>{
          
          
          console.log(data)
          this.showSuccess(data);
          this.refreshAnsList();
        });
          this.refreshAnsList();
        
         
        
      }

    });
    this.refreshAnsList();    
    
    
  }

  closeClick(){
    this.ActivateAddEditAnsComp=false;
    
    this.refreshAnsList();
    
  }
  saveCondition(){
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm ',
        message: 'Are you sure, You want to save? ' 
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.saveCon=false
        this.answerList=[this.answer]
        this.addAnswerMethod()
      
      
        this.cardData=[]
        this.refreshAnsList();
        this.refreshPage()
      
      }
    });
    
    
  }
  addAnswerMethod(){
    
    for(let i= 0; i< this.cardData.length; i++){
      var val = { AnswerId: this.AnswerId,
                  Question:  this. questionData,
                  Answer:this.cardData[i]};
      this.service.addAnswer(val).subscribe(res=>{
        
        this.showSuccess(res);
        
      });
      this.refreshAnsList();
      
    }
        
    }
  Nav(){
   this.router.navigate(["/subCat"])
  }

  updateAnswerMethod(){
    var val = {AnswerId: this.AnswerId,
      Question:  this. questionData,
      Answer:this.answer};
    this.service.updateAnswer(val).subscribe(res=>{
    
    this.showSuccess(res);
    });
    
    this.refreshAnsList();
    
  } 
  refreshAnsList(){
    this.service.getAnswer().subscribe(values=>{
    
     this.quesAns=values.filter(item=> item.Question == this.questionData)
     
      
      if(this.quesAns.length===0){
        this.empty=true
      }
      console.log(this.quesAns)
      this.router.navigate(['/Answers']);
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


passAnswer(item){
  localStorage.setItem('Answer',item)
 }


}