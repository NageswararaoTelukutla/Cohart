import { ActivatedRoute, Router } from '@angular/router';
import { CohartService } from './../cohart.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators, MaxValidator} from '@angular/forms';

@Component({
  selector: 'app-cohart-add',
  templateUrl: './cohart-add.component.html',
  styleUrls: ['./cohart-add.component.scss']
})
export class CohartAddComponent implements OnInit {
  registerForm: FormGroup;
    submitted = false;
    id : any;
    cohartId : any;
    myModel=false;
  cohartData: any;

   
    

  constructor(private formbuilder : FormBuilder,private CohartService : CohartService,
      private activatedRoute: ActivatedRoute,private router : Router) { }

ngOnInit(): void {

  $.getScript('./assets/plugins/select2/select2.min.js');
  $.getScript('./assets/js/custom-select2.js');

  this.activatedRoute.queryParams.subscribe(data=>{
    console.log(data.id)
    if(data.id){
      this.cohartId=data.id;
      this.getById(data.id)
    }
  })

this.registerForm = this.formbuilder.group({
  // name : new FormControl('',[Validators.required,Validators.minLength(5)]),
  displayName : new FormControl('',[Validators.required,Validators.minLength(5)]),
  // code : new FormControl('',[Validators.required]),
  status : new FormControl('ACTIVE')
})

}



get name() { return this.registerForm.get('name'); }



onSubmit() {
  this.submitted = true;
  this.registerForm.reset();
  

  // stop here if form is invalid
  if (this.registerForm.invalid) {
    return;
  }

  console.log(this.registerForm.value);

  // display form values on success
  alert(
    'SUCCESS!! ' + JSON.stringify(this.registerForm.value)
  );
}

get f() {
   return this.registerForm.controls;
   }

// write postdata function to service file //
postingData(data: any) {
  
    let user = {
      // name: this.registerForm.value.name,
      displayName: this.registerForm.value.displayName,
      // code : this.registerForm.value.code,
      status : this.registerForm.value.status
      
    }

    console.log(data)

    this.CohartService.postData(data)
      .subscribe(response => {
        console.log("Hello Api"+response)
       
      })
  }
  
  updatingData() {
    let body = {
      // name: this.registerForm.value.name,
      displayName: this.registerForm.value.displayName,
      // code: this.registerForm.value.code,
      status: this.registerForm.value.status? 'ACTIVE':'INACTIVE'

    }

    this.CohartService.updateData(body,this.cohartId)
      .subscribe(response => {
        console.log("Hello Update"+response)
        if(response.status){
          console.log("Response")
        this.router.navigate(['./cohart/list'])
        } else {

        }
      })
  }
 
  getById(id){
    
    this.CohartService.getDataById(id).subscribe((res:any)=>{
      console.log("Praan"+res);
      let cohartData = res.data
      let input = document.querySelector(".form-check-input")

      // this.registerForm.get('name').setValue(cohartData.name)
      this.registerForm.get('displayName').setValue(cohartData.displayName)
      // this.registerForm.get('code').setValue(cohartData.code)

      if(cohartData.status.toUpperCase() === 'ACTIVE'){
        this.registerForm.get('status').setValue(true)
        
        
      }else{
        this.registerForm.get('status').setValue(false)  

      }
      
      
    })
  }

  

}

