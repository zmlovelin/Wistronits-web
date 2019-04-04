
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FromGroupComponent} from './component/from-group/from-group.component';
import { ZmTableComponent } from './component/zm-table/zm-table.component';
import {TableService} from "./component/zm-table/table.service";

const COMPONENT = [
  FromGroupComponent,
  ZmTableComponent
]

@NgModule({
  declarations: [
    ...COMPONENT,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    RouterModule,
  ],
  bootstrap: [],
  exports: [
    NgZorroAntdModule,
    ...COMPONENT
  ],
  providers: [
    TableService
  ]
})
export class SharedModuleModule {
}
