export interface ProductInterface

{  id:number,
    name:string,
    description:string,
    img:string,
    price:number,
    card:string,
    bgcolor:boolean,
    category:Category,
    release_date:Date,
    code:string,
    rating:number
  }
  export enum Category {

    ALL="all",
    MOBILE="mobile",
    TV="tv",
    FRIDGE="fridge",
    HEADPHONE="headphone"
  }