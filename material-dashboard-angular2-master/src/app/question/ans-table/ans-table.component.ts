import { Component, OnInit } from '@angular/core';
import { SharedService } from 'app/shared.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'app/confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'app-ans-table',
  templateUrl: './ans-table.component.html',
  styleUrls: ['./ans-table.component.css']
})
export class AnsTableComponent implements OnInit {

  list:any=[];
 
  
  constructor(private service:SharedService,
    private router:Router,
    
   private toastr: ToastrService,
    private dialog: MatDialog,
    
    ) { }
  
  
  quesdata=[];
  
  empty:boolean=false; 

  ModalTitle:string;
  ActivateAddEditLinkComp:boolean=false;
  data:any;
  Subcat='';
questiondata="";
answerdata="";
  
  ngOnInit(): void {
    this.refreshLinkList();
    this.Subcat=localStorage.getItem('Subcat')
    this.questiondata=localStorage.getItem('Question')
    this.answerdata=localStorage.getItem('Answer')
  }

  showSuccess(message){
    this.toastr.success(message)
  }
  addClick(){
    this.data={
      LinkId:0,
      Link:"",
      Question:this.questiondata,
      Answer:this.answerdata,
      SubCategory:this.Subcat
      
    }
    this.ModalTitle="Add";
    this.ActivateAddEditLinkComp=true;
    

  }

  editClick(item){
    this.data=item;
    this.ModalTitle="Edit";
    this.ActivateAddEditLinkComp=true;
    
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
        this.service.deleteLink(item.LinkId).subscribe(datar=>{
          
          this.refreshLinkList();
          this.refreshPage();
          this.showSuccess(datar);
        });
        
        
          
        
      }
    });
    this.refreshLinkList();
    
    
  }

  closeClick(){
    this.ActivateAddEditLinkComp=false;
    this.refreshLinkList();
    this.refreshPage();
  }

  
  refreshLinkList(){
    
    this.service.getLink().subscribe(values=>{
    
     this.list= values.filter(item=> item.Question===this.questiondata && item.Answer===this.answerdata && item.SubCategory===this.Subcat)  
    
    console.log(this.list)
    if(this.list.length===0){
      this.empty=true
    } 
    });
   
    
  }

  refreshPage(){
     
   //this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
    //this.router.navigate(['AnsLink']);
    //}); 
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });

   }
 
}