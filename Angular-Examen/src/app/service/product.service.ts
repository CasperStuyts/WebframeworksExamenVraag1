import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService {

   constructor() {}

   public getAllProducts(){
      var product1 = new Product("Banaan","Chikita","Geel fruit",1);
      var product2 = new Product("Appel","Pink Lady","Roze, zoete appel",2)
      return[product1,product2];
   }
}
