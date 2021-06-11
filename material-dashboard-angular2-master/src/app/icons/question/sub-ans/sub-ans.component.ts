
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from 'app/confirm-dialog/confirm-dialog.component';
//import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'app/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sub-ans',
  templateUrl: './sub-ans.component.html',
  styleUrls: ['./sub-ans.component.css']
})
export class SubAnsComponent implements OnInit {
  quesdata=[];
  empty:boolean=false;
  convalue:boolean=false;
  convalue2:boolean=false;
  Inputanswer='';
  Question='';
  SubCat='';
  quesAns=[];
  questionData='';
  answerdata='';
  cardData=[];
  constructor(
    private router:Router,
    private toastr: ToastrService,
    private dialog: MatDialog,
    private service:SharedService,
    
    ) { }
  ModalTitle:string;
  ActivateAddEditSubCatComp:boolean=false;
  data:any;
  @Input() Opt:any;
  SubCatId:string;
  
  ngOnInit(): void {
    
    this.answerdata=localStorage.getItem('Answer')
    this.questionData=localStorage.getItem('Question')
  
    this.refreshSubCatList();
    
   }
   showSuccess(message){
    this.toastr.success(message)
  }
  showWarning(data){
    this.toastr.warning(data)
  }
  cardAdddata(){
    let data = this.quesAns.find(obj=>obj.SubCategory ===this.Inputanswer)
    if(!data){
      this.cardData.push(this.Inputanswer)
      this.convalue2=true
    }else{
      this.showWarning('Data already stored')
    }
  }
  delete(data){
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Remove Employee',
        message: 'Are you sure, You want to delete? ' 
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.cardData.forEach((element,index)=>{
          if(element===data){
            this.cardData.splice(index,1);
            this.showSuccess('Deleted Successfully');
          }

          
        })
        if(this.cardData.length===0){
          this.convalue2=false
        }
      }
    });
    
   
    if(this.cardData.length===0){
      this.convalue2=false
    }
  }
 
 
  addClick(){
    this.data={
      SubcatId:0,
      Question:this.questionData,
      Answer:this.answerdata,
      SubCat:'',
    }
    this.ModalTitle="Add";
    this.ActivateAddEditSubCatComp=true;
    this.refreshSubCatList();
  }

  editClick(item){
    this.data=item;
    this.ModalTitle="Edit";
    this.ActivateAddEditSubCatComp=true;
    this.refreshSubCatList();
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
        this.service.deletesubcat(item.SubCatId).subscribe(data=>{
          
          this.refreshSubCatList();
          
          this. showSuccess(data);
        });
        
      }
    });
    
  }

  closeClick(){
    this.ActivateAddEditSubCatComp=false;
    this.refreshSubCatList();
    
  }



   Nav(){
    this.router.navigate(["/AnsLink"])
  }
  con(){
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm ',
        message: 'Are you sure, You want to delete? ' 
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.convalue=true
        this.convalue2=false
        this.addSubCat()
        this.cardData=[]
        this.refreshSubCatList();
        this.refreshPage();
      }
        });
        
      
      }
    
    
    
    


    
  
  
  
  addSubCat(){
    for(let i= 0; i< this.cardData.length; i++){
      var val = {SubCatId: this.SubCatId,
      
                SubCategory:this.Inputanswer,
                Question:this.questionData,
                 Answer:this.answerdata,
                };
          
    this.service.addsubcat(val).subscribe(res=>{
      
      this.showSuccess(res);
      this.refreshSubCatList();
      
    });
  }
   
   
    this.convalue2=true
    
  }

  updateSubCat(){
    var val = {SubCatId: this.SubCatId,
      
      SubCategory :this.Inputanswer};
    this.service.updatesubcat(val).subscribe(res=>{
    
    this.showSuccess(res);
   
    });
    this.refreshSubCatList();
    
    
  } 

  refreshSubCatList(){
    this.service.getsubCat().subscribe(values=>{
      
    this.quesAns=values.filter(item=> item.Question == this.questionData && item.Answer===this.answerdata );
      if(this.quesAns.length===0){
        this.empty=true
      }
      
    });
    
    
  }
  refreshPage(){
    
    // this.document.defaultView.location.reload();
    //window.location.reload();
      //this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      //this.router.navigate(['subCat']);
//  }); 
      let currentUrl = this.router.url;
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
       this.router.navigate([currentUrl]);
      });

   }
   passSubcat(item){
    localStorage.setItem('Subcat',item)
   }   

}
