import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
    ques='';
    queslist=[];
  constructor(private service:SharedService) { }

  ngOnInit() {
    this.refreshEmpList();
  }
  addClick(){
  
    this.refreshEmpList();

  }

  editClick(item){
    this.ques=item;
    
    this.refreshEmpList();
  }

 
  closeClick(){
    
    this.refreshEmpList();
  }


  refreshEmpList(){
    this.service.getQuesList().subscribe(values=>{
      this.queslist=values;
      
    });
  }
  
}
