
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModuleModule} from '../shared-module/shared-module.module';

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
  exports: [
  ]
})
export class CoreModuleModule {
}
