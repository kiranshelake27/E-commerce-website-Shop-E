import { Component, EventEmitter, Input, OnInit, Output,  } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})


export class StarComponent implements OnInit {

  constructor() { }
   
 
  // intracommunication 
  @Input()
  rating:number=0
  star_width!:number

  @Output()
  sendRating=new EventEmitter<number>()

  

  ngOnChanges(): void {
    this.star_width=this.rating*10
    
  }
  showrating():void{
   // alert(this.rating);
  }
  ngOnInit(): void {
  }

  showRating():void{
    this.sendRating.emit(this.rating)
  }


  

}


