
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {IndexComponent} from './index.component';
import {ROUTER_CONFIG} from './index-routing.module';
import {SharedModuleModule} from '../../shared-module/shared-module.module';
import { MapComponent } from './map/map.component';
import { JqComponent } from './jq/jq.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeaderModule} from "zmlovelin";



@NgModule({
  declarations: [
    IndexComponent,
    MapComponent,
    JqComponent,
    NameEditorComponent,
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
export class IndexModule { }
