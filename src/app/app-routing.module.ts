import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';




const routes : Routes=[
  
  {path:'home',component:HomeComponent},
 
  {path:'products',loadChildren:()=>import(`./product/product.module`).then(m=>m.ProductModule)},
  
  {path:'',redirectTo:'/home',pathMatch:"full"},
   {path:'**',redirectTo:'/products',pathMatch:"full"},

 
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  
    RouterModule.forRoot(routes),
  ],

})
export class AppRoutingModule { }
