import { Component, Input } from '@angular/core';
import { Product } from '../models/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product = {
    id: 0,
    title: '',
    price: 0,
    images: []
  };
  contador: number = 0;

  price(){
    return this.product.price;
  }

  addToCart(){
    this.contador += 1;
    console.log(this.contador);
  }

}