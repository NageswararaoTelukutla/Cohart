import { CohartListComponent } from './cohart-list/cohart-list.component';
import { CohartAddComponent } from './cohart-add/cohart-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [{
    path:'add',
    component: CohartAddComponent
    }, {
    path:'list',
    component: CohartListComponent
    }]
  }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CohartRoutingModule { }
