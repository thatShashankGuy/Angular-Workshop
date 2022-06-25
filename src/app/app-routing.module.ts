import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { DynamicComponent } from './dynamic/dynamic.component';

const routes: Routes = [
  {path : 'base', component : BaseComponent },
  {path : 'dynamic', component : DynamicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
