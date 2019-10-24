import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from "@angular/router";


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  public form: FormGroup;
  constructor(private producsService: ProductsService, private router: Router) { 
  this.form = new FormGroup(
    {name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl('')}
  )}
  ngOnInit() {
  }
  onFormSubmitted(){
    const result = this.producsService.addProduct(this.form.value);
    if (result){
      this.router.navigate(['/list']);
    }
  }
  put(index, product) {
  this.form.setValue({
    name: product.name,
    price: product.price,
    description: product.description
  })
  const result = this.producsService.put(index, this.form.value);
  if (result){
      this.router.navigate(['/list']);
    }
}
}