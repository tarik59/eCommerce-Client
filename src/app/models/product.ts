
export interface Product{
    id:number;
     name:string
     description: string;
     price:number;
     quantity:number;
     category:string;
     model:string;
     brandId:number;
     brand:Brand;
     gender:Gender;
     typeOfProductId:number;
     typeOfProduct:TypeOfProduct;
     url: string;
}
export interface ProductInShoppingCart
  {
  id:number;
   name:string
   description: string;
   price:number;
   quantity:number;
   category:string;
   model:string;
   brandId:number;
   brand:Brand;
   gender:Gender;
   typeOfProductId:number;
   typeOfProduct:TypeOfProduct;
   url: string;
   quantityInShoppingCart:number;
   productTotalPrice:number;
}

export interface ShoppingCart
{
  products: ProductInShoppingCart[],
  totalPrice: number
}
export interface Brand{
    id:number;
    name:string;

}
export interface Gender{
    id:number;
    name:string;
}
export interface TypeOfProduct{
    id:number;
    name:string;
}
