import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  public form: FormGroup;
  constructor(private producsService: ProductsService, private router: Router,
  private route: ActivatedRoute) { 
  this.form = new FormGroup(
    {name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl('')}
  )}
  ngOnInit() {
    this.route.paramMap.subscribe(parameterMap =>{
      const index = +parameterMap.get('index');
      this.producsService.getProduct(index);
    });
  }
  onFormSubmitted(){
    const result = this.producsService.addProduct(this.form.value);
    if (result){
      this.router.navigate(['/list']);
    }
  }
}