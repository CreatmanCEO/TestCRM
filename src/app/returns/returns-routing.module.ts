import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReturnsPageComponent } from './components/returns-page/returns-page.component';

const routes: Routes = [
  {
    path: '',
    component: ReturnsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReturnsRoutingModule { } 