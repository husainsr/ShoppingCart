import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems: any[] = [];
  totalPrice = 0;

  constructor(public dialogRef: MatDialogRef<CartComponent>, private snackBar: MatSnackBar, public prSer: ProductService) { }

  ngOnInit(): void {
    this.cartItems = this.prSer.cartProducts;
    this.updateCart();
  }

  increDecreExtra(type, value): void {
   if (type === '-') {
     if (value.cartQty !== 0) {
      value.cartQty -= 1;
      this.updateCart();
     }
   } else if (type === '+') {
     if (value.cartQty == value.qty) {
      this.showAlert('Max qty Reached !');
    } else {
      value.cartQty += 1;
      this.updateCart();
    }
   } else { }

  }

  deleteItem(index) {
    this.cartItems.splice(index, 1);
    this.updateCart();
  }

  updateCart(): void {
    this.totalPrice = 0;
    this.cartItems.forEach(item => {
      this.totalPrice += item.cartQty * item.price;
    });
  }

  checkOut(): void {
    if (this.totalPrice > 0) {
      this.showAlert('Whooo Your Oder is Placed !');
      this.cartItems.forEach(x => {
         this.prSer.products.find(y => y.Name == x.Name).qty -= x.cartQty;
      });
      this.dialogRef.close('update');
    } else {
      this.showAlert('No Item for checkout !');
    }

  }

  showAlert(title): void {
    this.snackBar.open(title, 'End now', {
      duration: 1000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }



}
