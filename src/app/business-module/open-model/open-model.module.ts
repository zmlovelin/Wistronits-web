
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModuleModule} from '../../shared-module/shared-module.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ROUTER_CONFIG} from './open-model-routing.module';
import {OpenModelComponent} from './open-model.component';



@NgModule({
  declarations: [
    OpenModelComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModuleModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ],
  providers: [],
  bootstrap: []
})
export class OpenModelModule { }
