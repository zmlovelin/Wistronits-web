
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FromGroupComponent} from './component/from-group/from-group.component';
import { ZmTableComponent } from './component/zm-table/zm-table.component';

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
  ]
})
export class SharedModuleModule {
}
