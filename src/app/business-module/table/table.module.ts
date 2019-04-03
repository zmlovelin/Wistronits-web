
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModuleModule} from '../../shared-module/shared-module.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableComponent} from './table.component';
import {ROUTER_CONFIG} from './table-model-routing.module';



@NgModule({
  declarations: [
    TableComponent
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
export class TableModule { }
