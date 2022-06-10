import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, delay, map, Observable, ObservableInputTuple, of, Subject } from "rxjs";
import { Category, ProductInterface } from "./product";

@Injectable({
  providedIn:'root'
})

export class ProductService{
  constructor(private http:HttpClient)
  {}
    private obs$ =of("kiran",250)
    getobs():Observable<string | number>{
        return this.obs$
    }
    private obs2$=new Observable(
        observe=>{
            observe.next("swapnil"),
            observe.next(34),
            // throw Error("occured");
         
            observe.next("ambernath"),
            observe.complete()
        }
    )
    getobs2():Observable<any>
    {
        return this.obs2$
    }



    private obs3$=new Observable(
        observe=>{
            observe.next("DATA 1"),
            observe.next("DATA 2"),
             setTimeout(() => {
                observe.next("DATA 3")
                
             }, 4000);
           
            // observe.complete()

           
        }
    )
    getobs3():Observable<any>
    {
        return this.obs3$
    }


    private obs4$=of(1,2,3,4,5)
getobs4():Observable<any>
{
    return this.obs4$
}

cartvalue=0
// cartvalue$ =new Subject<number>()
cartvalue$ =new BehaviorSubject<number>(0)

incrementcartvalue()  
{
    this.cartvalue ++
    this.cartvalue$.next(this.cartvalue)
}
getcartvalue():Observable<number>
{
    return this.cartvalue$
}

products:ProductInterface[]=[
    {  id:1,
      name:"I PHONE 13 PRO MAX" ,
      description:"5G RAM 18GB Processor 896 snapdragoan",
      img:"assets/img/iphone13.jpg",
      price:300000,
      card:"Add cart",
      bgcolor:true,
      category:Category.MOBILE,
      release_date:new Date,
      code:"mobile-001",
      rating:4.5,
    },
    {  id:2,
      name:"SAMSUNG S22" ,
      description:" 6GB RAM 20GB processor 678 snapdragoan",
      img:"assets/img/samsungS22.webp",
      price:600000,
      card:"Add cart",
      bgcolor:false,
      category:Category.MOBILE,
      release_date:new Date,
      code:"mobile-002",
      rating:4.0,
    },
    
    {  id:3,
      name:"TV LG " ,
      description:"8K  HD android  best quality and good sound",
      img:"assets/img/lgTV.jpg", 
      price:300876786,
      card:"Add cart",
      bgcolor:true,
      category:Category.TV,
      release_date:new Date,
      code:"tv-001",
      rating:1.0,
    },
    {  id:4,
      name:" ONE PLUS TV" ,
      description:"12K HD fully android best quality iojghgghgf",
      img:"assets/img/oneplusTV.jpg",
      price:70000,
      card:"Add cart",
      bgcolor:false,
      category:Category.TV,
      release_date:new Date,
      code:"tv-002",
      rating:5.0,
    },
    {  id:5,
      name:" FRIDGE",
      description:" High fresh best quality good to used uyuutytrt",
      img:"assets/img/fridge1.jpg",
      price:500000,
      card:"Add cart",
      bgcolor:true,
      category:Category.FRIDGE,
      release_date:new Date,
      code:"fridge-001",
      rating:3.0,
    },
    {  id:6,
      name:" BOAT HEADPHONE" ,
      description:"boat best headphone best quality",
      img:"assets/img/headphoneboat.jpg",
      price:30000,
      card:"Add cart",
      bgcolor:false,
      category:Category.HEADPHONE,
      release_date:new Date,
      code:"headphone-001",
      rating:2.0,
    },
  ]
  getproducts()
  {
      // return of (this.products).pipe(delay(3000))
      return this.http.get<ProductInterface[]>("http://localhost:4200/assets/product.json").pipe(delay(3000))
  }
  getIdBasedProduct(id:number):Observable<ProductInterface|undefined>
  {
    return this.http.get<ProductInterface[]>("http://localhost:4200/assets/product.json").pipe(
      map(products=>{return products.find(product=>product.id===id)}))

  }
    
}