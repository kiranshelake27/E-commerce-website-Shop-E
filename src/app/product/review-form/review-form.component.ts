import { Component, OnInit } from '@angular/core';

import { ReviewForm } from '../review-forms';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {

  rf=new ReviewForm()


 
  constructor() {
    // this.rf.name="raj"
   }
  ratings=[1,1.5,2,2.5,3,3.5,4,4.5,5]
  ngOnInit(): void {
  }
  submitData()
  {
    // alert(this.rf.name + this.rf.email)
  }

}
