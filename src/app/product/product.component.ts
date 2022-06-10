import { devOnlyGuardedExpression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { filter, map, Subscription } from 'rxjs';
import { Category, ProductInterface } from '../product';
import { ProductService } from '../product_service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    private productService : ProductService
  ) { }

  
  cardwidth=15
  shadow="10px 10px 5px gray"
  cardtextstyle={
    "font-size":"10px",
    "font-family":"Arial, Helvetica, sans-serif",
  }

private subscription ! : Subscription
     loading=false
  ngOnInit(): void {
    this.loading=true
    this.productService.getobs().subscribe(
      val=>console.log(val),
      err=>console.log(err),
      ()=>console.log("observation complete")

    )
    this.productService.getobs2().subscribe(
      val=>console.log(val),
      // err=>console.log(err),
      

    )
   this.subscription=this.productService.getobs3().subscribe(
      val=>console.log(val),
      err=>console.log(err),
      ()=>console.log(" obs 3 complete")

    )
    this.subscription=this.productService.getobs4().pipe(filter(val=>val%2==0),
    map(val=>val+2)).subscribe(
      val=>console.log(val),
      err=>console.log(err),
      ()=>console.log(" obs 3 complete")

    )
    this.productService.getproducts().subscribe(
      data=>{
        this.loading=false
        this.products=data
        this.filterproductarray=this.products
      }
    )

  }
   private _searchBy:string=""
  // products:ProductInterface[]=[
  //   {  id:1,
  //     name:"I PHONE 13 PRO MAX" ,
  //     description:"5G RAM 18GB Processor 896 snapdragoan",
  //     img:"assets/img/iphone13.jpg",
  //     price:300000,
  //     card:"Add cart",
  //     bgcolor:true,
  //     category:Category.MOBILE,
  //     release_date:new Date,
  //     code:"mobile-001",
  //     rating:4.5,
  //   },
  //   {  id:2,
  //     name:"SAMSUNG S22" ,
  //     description:" 6GB RAM 20GB processor 678 snapdragoan",
  //     img:"assets/img/samsungS22.webp",
  //     price:600000,
  //     card:"Add cart",
  //     bgcolor:false,
  //     category:Category.MOBILE,
  //     release_date:new Date,
  //     code:"mobile-002",
  //     rating:4.0,
  //   },
    
  //   {  id:3,
  //     name:"TV LG " ,
  //     description:"8K  HD android  best quality and good sound",
  //     img:"assets/img/lgTV.jpg", 
  //     price:300876786,
  //     card:"Add cart",
  //     bgcolor:true,
  //     category:Category.Tv,
  //     release_date:new Date,
  //     code:"tv-001",
  //     rating:1.0,
  //   },
  //   {  id:4,
  //     name:" ONE PLUS TV" ,
  //     description:"12K HD fully android best quality iojghgghgf",
  //     img:"assets/img/oneplusTV.jpg",
  //     price:70000,
  //     card:"Add cart",
  //     bgcolor:false,
  //     category:Category.Tv,
  //     release_date:new Date,
  //     code:"tv-002",
  //     rating:5.0,
  //   },
  //   {  id:5,
  //     name:" FRIDGE",
  //     description:" High fresh best quality good to used uyuutytrt",
  //     img:"assets/img/fridge1.jpg",
  //     price:500000,
  //     card:"Add cart",
  //     bgcolor:true,
  //     category:Category.FRIDGE,
  //     release_date:new Date,
  //     code:"fridge-001",
  //     rating:3.0,
  //   },
  //   {  id:6,
  //     name:" BOAT HEADPHONE" ,
  //     description:"boat best headphone best quality",
  //     img:"assets/img/headphoneboat.jpg",
  //     price:30000,
  //     card:"Add cart",
  //     bgcolor:false,
  //     category:Category.HEADPHONE,
  //     release_date:new Date,
  //     code:"headphone-001",
  //     rating:2.0,
  //   },
  // ]

  products:ProductInterface[]=[]



  filterproductarray=this.products
  filterproduct(category:string) :void{
    if(category=="all")
    {
      this.filterproductarray=this.products
    }
    else{
      this.filterproductarray=this.products.filter(product=>product.category==category)
    }
  }
  /*
  serachByFilter(event:any):void{
    console.log(event.target.value);
    this.searchBy=event.target.value;
  }*/
  get searchBy():string // read the data
  {
    return this._searchBy
  }
  set searchBy(sb:string) // write the data
{
  this._searchBy=sb
  this.filterproductarray=this.products.filter(product=>product.name.toLowerCase().includes(sb.toLowerCase()))
} 
// pagination logic start

startindex=0
endindex=4
item_per_page=4

changepage(pagenumber:number)
{
  this.startindex=(pagenumber-1)*this.item_per_page
  this.endindex=pagenumber*this.item_per_page

}
//pagination logic end
//recieving event emitter
displayrating(rt:number)
{
  console.log(rt);
}

// emit close(
unsubobservable()
{
    if( this.subscription)
    {
      console.log("unsubscribing obs 3");
      this.subscription.unsubscribe()
    }
}

addtocart(){
  this.productService.incrementcartvalue()
}


}
