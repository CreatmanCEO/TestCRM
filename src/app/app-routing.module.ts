import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'returns', pathMatch: 'full' },
  {
    path: 'returns',
    loadChildren: () => import('./returns/returns.module').then(m => m.ReturnsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 