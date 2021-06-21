import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SharedService} from 'app/shared.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-ans-table',
  templateUrl: './add-edit-ans-table.component.html',
  styleUrls: ['./add-edit-ans-table.component.css']
})
export class AddEditAnsTableComponent implements OnInit {

  
  
  constructor(private service:SharedService,
    private toastr: ToastrService,
    private router:Router,
    ) { }
  list:any=[];

  
  ActivateAddEditEmpComp:boolean=false;
  @Input() data:any;
  LinkId:string;
  questiondata:string;
  answerdata:string;
  Subcat:string;
  Link:string;
  
  DepartmentsList:any=[];

  ngOnInit(): void {
    this.LinkId=this.data.LinkId;
    
    this.Link=this.data.Link;
    this.questiondata= this.data.Question;
    this.answerdata=this.data.Answer
    this.Subcat=this.data.SubCategory
    }
    showSuccess(message){
      this.toastr.success(message)
    }
  add(){
     var val = {LinkId:this.LinkId,
                
              Link:this.Link,
              Question:this.questiondata,
              Answer:this.answerdata,
              SubCategory:this.Subcat
           };
      this.service.addLink(val).subscribe(data=>{
     
      this.showSuccess(data);
      
    });
    
    console.log(val)
    this.refreshPage();
    this.closeClick();
    
  }

  update(){
    var val = {LinkId:this.LinkId,
    
    Link:this.Link,

    };
    this.service.updateLink(val).subscribe(res=>{
    
    console.log(res.toString()) 
    this.showSuccess(res);
  });
    this.refreshPage();
    this.closeClick();
  }
  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }
  


  refreshEmpList(){
    this.service.getLink().subscribe(values=>{
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



