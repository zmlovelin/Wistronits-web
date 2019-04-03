import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BusinessComponent} from './business.component';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './business-routing.module';
import {CommonModule} from '@angular/common';
import {SharedModuleModule} from '../shared-module/shared-module.module';



@NgModule({
  declarations: [
    BusinessComponent,
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ],
  providers: [],
  bootstrap: []
})
export class BusinessModule { }
