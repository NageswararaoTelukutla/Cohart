import { CohartAddComponent } from './../cohart-add/cohart-add.component';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { CohartService } from '../cohart.service';

 
@Component({
  selector: 'app-cohart-list',
  templateUrl: './cohart-list.component.html',
  styleUrls: ['./cohart-list.component.scss']
})


export class CohartListComponent implements OnInit {
  @Input() 
  data:any;
  registerForm: any;
  private _router: any;
  

  constructor(private CohartService: CohartService, private router : Router) { }


  ngOnInit(): void {
this.getCohartList()
  
  }


 
getCohartList(){
  this.CohartService.getData().subscribe(data=>{
    console.log("Hello Prran"+data)
    this.data=data.data;
  })
}

cohartChangeStatus(event,row){
  let obj={
    status : event.target.checked ? 'ACTIVE' : 'INACTIVE',
  }
this.CohartService.updateData(obj,row._id).subscribe(res=>{this.getCohartList();})

}

}




