import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentRoutingModule } from './components/component.routing';


const routes: Routes = [];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
    ComponentRoutingModule

  ]
})
export class AppRoutingModule { }
