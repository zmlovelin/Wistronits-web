import {Routes} from '@angular/router';
import {OpenModelComponent} from './open-model.component';


export const ROUTER_CONFIG: Routes = [
  {
    path: '',
    component: OpenModelComponent,
    children: [
    ]
  }
];
