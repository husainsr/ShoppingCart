import {  Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
@Component({
  selector: 'app-product',
  styleUrls: ['./product.component.scss'],
  templateUrl: './product.component.html'
})

export class ProductComponent implements OnInit {

  products: any[] = [];

  public constructor(public productService: ProductService) {
    this.products = this.productService.products;
  }

  public addProductToCart(product): void {
    this.productService.addItem(product);
  }

  public ngOnInit(): void {
  }

}
