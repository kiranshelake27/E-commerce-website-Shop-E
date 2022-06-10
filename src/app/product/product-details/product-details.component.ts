import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { ProductInterface } from 'src/app/product';
import { ProductService } from 'src/app/product_service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
     private productService:ProductService    
    ) { }
  
   data$!:Observable<ProductInterface | undefined>
  ngOnInit(): void {
    const id =+this.route.snapshot.paramMap.get('id')!
    console.log(id);
    this.data$=this.productService.getIdBasedProduct(id)
    this.data$.subscribe(
      data=>console.log(data)
    )
  }

}
