import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component.routing';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {MatBadgeModule} from '@angular/material/badge';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    CategoryComponent,
    ProductsComponent,

  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    MatBadgeModule,
    MatInputModule,
    MatFormFieldModule

  ]
})
export class componentModule { }
