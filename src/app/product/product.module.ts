import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { ReviewFormComponent } from './review-form/review-form.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailsComponent,
    ReviewFormComponent,
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule

  ],
 
})
export class ProductModule { }
