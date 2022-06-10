import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaceCoverterPipe } from './dash_space_pipe';
import { StarComponent } from './star/star.component';

import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StarComponent,
    SpaceCoverterPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StarComponent,
    SpaceCoverterPipe,
    ReactiveFormsModule
    
  ]
})
export class SharedModule { }
