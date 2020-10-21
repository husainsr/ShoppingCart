import { Injectable } from '@angular/core';
import { EngineService } from './engine.service';

@Injectable()
export class ProductService {

  products: any[] = [];
  cartProducts: any[] = [];

  constructor(public engiSer: EngineService) {
    this.products =  [
      { Name: 'Cheese', price : 2.50, Location: 'Refrigerated foods', qty: 2},
      { Name: 'Crisps', price : 3, Location: 'the Snack isle', qty: 5},
      { Name: 'pizza', price : 4, Location: 'Refrigerated foods', qty: 7 },
      { Name: 'Chocolate', price : 1.50, Location: 'the Snack isle', qty: 8 },
      { Name: 'Self-raising flour', price : 1.50, Location: 'Home baking', qty: 0 },
      { Name: 'Ground almonds', price : 3, Location: 'Home baking', qty: 1 }];
  }

  public addItem(product): void {
    const item = this.cartProducts.find((p) => p.Name === product.Name);
    if (item === undefined) {
      this.engiSer.setSuccessAlert('Product successfully added to cart.');
      product.cartQty = 1;
      this.cartProducts.push(product);
    } else {
      this.engiSer.setWarnAlert('Product already in cart !');
    }
  }


}

