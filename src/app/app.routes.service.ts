import { ProductComponent } from './views/product/product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { SignInComponent } from './views/signin/signin.component';
import { SignUpComponent } from './views/signup/signup.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

import { MasterAuthGuard } from './shared/services/master-auth-guard.service';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [
      { path: '', component: SignInComponent },
      { path: 'signup', component: SignUpComponent }]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [MasterAuthGuard],
    children: [
      { path: '', component: ProductComponent },
    ]
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent,
    data: { message: 'Page not found!' }
  },
  { path: '**', redirectTo: '/not-found' }
];


// new thing while import appRoute as independent
export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
