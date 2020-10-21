import { Component, OnInit, OnDestroy } from '@angular/core';
import { EngineService } from '../../shared/services/engine.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import { ProductService } from '../../shared/services/product.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  url: string;
  loadingIndicator = false;
  enableAudio = true;
  today: any;


  constructor(
    private engineService: EngineService,
    public dialog: MatDialog,
    private router: Router,
    public prodSer: ProductService
  ) {}

  ngOnInit() {

    this.engineService.getLoadingIndicator().subscribe(res => {
      this.loadingIndicator = res;
    });

    this.engineService.getAudioState().subscribe(res => {
      this.enableAudio = res;
    });

    this.today = moment().format('Do MMMM YYYY');
  }

  onLogoClick() {
    this.router.navigate(['/dashboard']);
  }

  openCart() {
    const dialogRef = this.dialog.open(CartComponent, {
      height: 'auto',
      minWidth: '30%',
      data: 'Do you want to Logout ?',
      panelClass: 'logoutDialog',
      hasBackdrop: true,
      closeOnNavigation: true
    });

    dialogRef.afterClosed().subscribe(result => {
       if (result !== undefined) {
         if (result === 'update') {
           this.prodSer.cartProducts = [];
         }
       }
    });
  }

  logOut() {
    this.engineService.logOut().then(res => {
     if (res['status'] == 200) {
      this.router.navigate(['']);
      this.engineService.removeAll();
     } else { }
    }).catch(err => {});
  }




  onActivate(event: any) {
    if (event.type === 'click') {
      event.cellElement.blur();
    }
  }

  setAudioState(state: boolean) {
    this.engineService.setAudioState(state);
  }

  ngOnDestroy(): void {}
}
