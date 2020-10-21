
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
// tslint:disable-next-line: max-line-length
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AlertModule } from 'ngx-alerts';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
// Library - MDBootstrap
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatDatetimepickerModule } from '@mat-datetimepicker/core';
import { MatMomentDatetimeModule } from '@mat-datetimepicker/moment';

import { RouterModule } from '@angular/router';
import { ViewsModule } from './views/views.module';
import { EngineService } from './shared/services/engine.service';
import { TreeModule } from 'angular-tree-component';

// export const appearance: MatFormFieldDefaultOptions = {
//   appearance: 'outline'
// };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Core
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    ViewsModule,
    // Other
    CookieModule.forRoot(),
    AlertModule.forRoot({ maxMessages: 5, timeout: 3000 }),
    NgxSpinnerModule,
    NgxMatSelectSearchModule,
    MatMomentDatetimeModule,
    MatDatetimepickerModule
  ],
  entryComponents: [],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    EngineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
