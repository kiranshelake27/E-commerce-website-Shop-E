import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { ProductService } from './product_service';

import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';



import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { ProductRoutingModule } from './product/product-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ServiceComponent } from './service/service.component';






@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
     ProfileComponent,
     ServiceComponent,
   
  
  ],
  imports: [
    BrowserModule,
   
    HttpClientModule,
    ProductRoutingModule,

    RouterModule,
    AppRoutingModule,
   
    
    SharedModule,
   
    
  ],




  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
