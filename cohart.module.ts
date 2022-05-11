import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CohartRoutingModule } from './cohart-routing.module';
import { CohartListComponent } from './cohart-list/cohart-list.component';
import { CohartAddComponent } from './cohart-add/cohart-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CohartAddComponent,
    CohartListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CohartRoutingModule,
    
   
  ],
exports:[
    CohartListComponent,
    CohartAddComponent
]
  
})
export class CohartModule { }
