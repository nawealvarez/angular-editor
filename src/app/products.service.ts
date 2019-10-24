import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public products = [
  {
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens'
  },
  {
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras'
  },
  {
    name: 'Phone Standard',
    price: 299,
    description: ''
  }];
  getProducts(){
    return this.products;
  }
  addProduct(product){
    this.products.push(product)
    return true;
  }
  remove(index){
    this.products.splice(index, 1);
  }
  removeAll(){
    this.products.splice(0, this.products.length);  
  }
  put(index, product){
    this.products[index]=product
    return true;
  }
  constructor() { }

}
