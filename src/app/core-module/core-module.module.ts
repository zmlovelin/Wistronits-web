
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModuleModule} from '../shared-module/shared-module.module';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {NoopInterceptor} from "./interceptor/noop-interceptor";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModuleModule,
    RouterModule
  ],
  bootstrap: [],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true},
  ],
  exports: [
  ]
})
export class CoreModuleModule {
}
