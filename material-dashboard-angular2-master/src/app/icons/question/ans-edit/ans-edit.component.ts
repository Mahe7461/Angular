import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'app/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ans-edit',
  templateUrl: './ans-edit.component.html',
  styleUrls: ['./ans-edit.component.css']
})
export class AnsEditComponent implements OnInit {

  constructor(private service:SharedService,
    private toastr: ToastrService,
    private router:Router,
    ) { }
  list:any=[];

  
  ActivateAddEditEmpComp:boolean=false;
  @Input() data:any;
  AnswerId:string;
  Question:string;
  Answer:string;
  DepartmentsList:any=[];

  ngOnInit(): void {
    this.AnswerId=this.data.AnswerId;
    this.Question=this.data.Question;
    this.Answer=this.data.Answer;
    }
    showSuccess(message){
      this.toastr.success(message)
    }
  add(){
     var val = {AnswerId:this.AnswerId,
                Answer:this.Answer,
             
           };
      this.service.addAnswer(val).subscribe(data=>{
      //alert(data.toString());
      
    });
    
    console.log(val)
    this.closeClick();
    this.refreshPage();
  }

  update(){
    var val = {AnswerId:this.AnswerId,
    Answer:this.Answer,
    
    };
    this.service.updateAnswer(val).subscribe(res=>{
    this.showSuccess(res)
    console.log(res.toString()) 
  });
    this.refreshPage();
    this.closeClick();
  }
  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
    this.refreshPage();
  }
  


  refreshEmpList(){
    this.service.getAnswer().subscribe(values=>{
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
