
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FromGroupComponent} from './component/from-group/from-group.component';
import { ZmTableComponent } from './component/zm-table/zm-table.component';
import {TableService} from "./component/zm-table/table.service";
import {TableComponentService} from "./service/table-api-service/table.component.service";

const COMPONENT = [
  FromGroupComponent,
  ZmTableComponent
]
const SERVICE = [
  TableService,
    TableComponentService
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
      ...SERVICE
  ]
})
export class SharedModuleModule {
}
