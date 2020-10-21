import { MAT_DATE_LOCALE } from '@angular/material/core';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutes } from '../app.routes.service';

import { EngineService } from '../shared/services/engine.service';
import { ProductService } from '../shared/services/product.service';
import { MasterAuthGuard } from '../shared/services/master-auth-guard.service';

import { AvoidNegative } from '../shared/directive/nominus.directive';

import { WelcomeComponent } from './welcome/welcome.component';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutes,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  declarations: [
    AvoidNegative,
    WelcomeComponent,
    SignInComponent,
    SignUpComponent,
    PageNotFoundComponent,
    DashboardComponent,
    ProductComponent,
    CartComponent
  ],
  exports: [
    AvoidNegative,
    WelcomeComponent,
    SignInComponent,
    SignUpComponent,
    PageNotFoundComponent,
    DashboardComponent,
    ProductComponent,
    CartComponent
  ],
  entryComponents: [
    CartComponent
  ],
  providers: [
    EngineService,
    ProductService,
    MasterAuthGuard,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  bootstrap: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewsModule { }
