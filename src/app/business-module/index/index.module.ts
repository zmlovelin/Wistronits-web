
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
import { ViewChildComponent } from './view-child/view-child.component';
import { ElementRefComponent } from './element-ref/element-ref.component';
import { RoutingPathComponent } from './routing-path/routing-path.component';
import { MyAnimationsComponent } from './my-animations/my-animations.component';



@NgModule({
  declarations: [
    IndexComponent,
    MapComponent,
    JqComponent,
    NameEditorComponent,
    ViewChildComponent,
    ElementRefComponent,
    RoutingPathComponent,
    MyAnimationsComponent,
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
