import { Component, Input, OnInit } from '@angular/core';
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
  }

  update(){
    var val = {AnswerId:this.AnswerId,
    Answer:this.Answer,
    
    };
    this.service.updateAnswer(val).subscribe(res=>{
    this.showSuccess(res)
    console.log(res.toString()) 
  });
    this.closeClick();
  }
  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshEmpList();
  }
  


  refreshEmpList(){
    this.service.getAnswer().subscribe(values=>{
      this.list=values;
      
    });
  }


}
