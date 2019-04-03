import {Routes} from '@angular/router';
import {TableComponent} from './table.component';


export const ROUTER_CONFIG: Routes = [
  {
    path: '',
    component: TableComponent,
    children: [
    ]
  }
];
