import {Routes} from '@angular/router';
import {IndexComponent} from './index.component';
import {MapComponent} from './map/map.component';
import {JqComponent} from './jq/jq.component';
import {NameEditorComponent} from './name-editor/name-editor.component';
import {ViewChildComponent} from "./view-child/view-child.component";
import {ElementRefComponent} from "./element-ref/element-ref.component";
import {RoutingPathComponent} from "./routing-path/routing-path.component";

export const ROUTER_CONFIG: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'map',
        component: MapComponent
      },
      {
        path: 'jq',
        component: JqComponent
      },
      {
        path: 'name-editor',
        component: NameEditorComponent
      },
      {
        path: 'view-child',
        component: ViewChildComponent
      },
      {
        path: 'element-ref',
        component: ElementRefComponent
      },
      {
        path: 'routing-path',
        component: RoutingPathComponent
      },
    ]
  }
];
