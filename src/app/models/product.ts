
export interface Product{
    id:number;
     name:string
     description: string;
     price:number;
     quantity:number; 
     category:string; 
     model:string; 
     brandId:number; 
     brand:Brand
     gender:Gender;
     typeOfProductId:number;
     typeOfProduct:TypeOfProduct; 
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