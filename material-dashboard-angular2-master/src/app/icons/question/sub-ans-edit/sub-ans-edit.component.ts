import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'app/shared.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sub-ans-edit',
  templateUrl: './sub-ans-edit.component.html',
  styleUrls: ['./sub-ans-edit.component.css']
})
export class SubAnsEditComponent implements OnInit {

  constructor(private service:SharedService,
    private toastr: ToastrService,
    ) { }
  list:any=[];
  
  
  ActivateAddEditEmpComp:boolean=false;
  @Input() data:any;
  SubCatId:string;
  
  SubCategory:string;
  
  DepartmentsList:any=[];
  
  ngOnInit(): void {
    this.SubCatId=this.data.SubCatId;
    
    this.SubCategory=this.data.SubCategory;
    
    }
    showSuccess(message){
      this.toastr.success(message)
    }
  addEmployee(){
     var val = {
      SubCategory:this.SubCategory,
            
     };
      this.service.addsubcat(val).subscribe(data=>{
      
      this.showSuccess(data);
    });
    
    
    this.closeClick();
  }
  
  updateEmployee(){
    var val = {
      SubCatId:this.SubCatId,
                
      SubCategory:this.SubCategory,
            
     };
    this.service.updatesubcat(val).subscribe(res=>{
      this.showSuccess(res);
     
    
  });
    this.closeClick();
  }
  closeClick(){
    this.ActivateAddEditEmpComp=false;
    this.refreshQuesList();
  }
  
  
  
  refreshQuesList(){
    this.service.getsubCat().subscribe(values=>{
      this.list=values;
      
    });
  }
  
  }
  