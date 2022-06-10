import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProfileComponent } from '../profile/profile.component';
import { ServiceComponent } from '../service/service.component';

const routes : Routes=[
  
  {path:'products',component:ProductComponent},

  {path:'product/:id',component:ProductDetailsComponent},
  {path:'profiles', component:ProfileComponent},
  {path:'service',component:ServiceComponent},
 
  {path:'**',redirectTo:'/home',pathMatch:"full"},
 
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductRoutingModule { }
