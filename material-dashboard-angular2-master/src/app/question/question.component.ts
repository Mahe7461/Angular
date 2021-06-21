import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from 'app/confirm-dialog/confirm-dialog.component';
import { SharedService } from 'app/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question=[];
  constructor(private service:SharedService,
    private router:Router,
    private toastr: ToastrService,
    private dialog: MatDialog,
    ) { }
  ModalTitle:string;
  ActivateAddEditEmpComp:boolean=false;
  data:any;
  ActivateAddEditquesComp:boolean=false;
  
  ngOnInit(): void {
    this.refreshQuesList();
    }
  
  addClick(){
    this.data={
       Question:'',
      }
    this.ModalTitle="Add";
    this.ActivateAddEditquesComp=true;
    this.refreshQuesList();

  }

  editClick(item){
    this.data=item;
    this.ModalTitle="Edit";
    this.ActivateAddEditEmpComp=true;
    this.refreshQuesList();
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
        this.service.deleteQuestion(item.QuestionId).subscribe(data=>{
          
          this.refreshQuesList();
          this.showSuccess(data);
        });
        
        
      }
    });
    
  }
  showSuccess(message){
    this.toastr.success(message)
  }

  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.ActivateAddEditquesComp=false;
    this.refreshQuesList();
  }

  quesNav(){
  this.router.navigate(['/Answers']);
  }

  refreshQuesList(){
    this.service.getQuesList().subscribe(values=>{
      this.question=values;
      });
    }
  passQues(item){
   localStorage.setItem('Question',item)
  }

}
