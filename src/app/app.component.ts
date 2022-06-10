import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ProductService } from './product_service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  constructor(
    private productService:ProductService

  )
  {}
  cart_value= new BehaviorSubject<number>(0)

  // creating object of subject and behavior subject 
  subObs$ = new  Subject<number>();
  bsubObs$ = new BehaviorSubject<number>(1)
  ngOnInit(): void {

    // adding data  to subject and beahvior subject
    // before subscribing
    this.subObs$.next(1)
    this.bsubObs$.next(1)
    // this.productService.getcartvalue().subscribe(value=>this.cart_value=value)

    this.cart_value= this.productService.cartvalue$;  
    //subscribing subject and behavior subject
    this.subObs$.subscribe(val=>console.log(val));
    this.bsubObs$.subscribe(val=>console.log(val));

    //after subscription
    this.subObs$.next(2)
    this.bsubObs$.next(2)
  }
  title = 'shopE';
  


}
