import { Routes } from '@angular/router';
import { BusinessComponent } from './business.component';

export const ROUTER_CONFIG: Routes = [
  {
    path: '',
    component: BusinessComponent,
    children: [
      { path: 'index', loadChildren: './index/index.module#IndexModule'},
      { path: 'open-model', loadChildren: './open-model/open-model.module#OpenModelModule'},
      { path: 'table', loadChildren: './table/table.module#TableModule'}
    ]
  },
];
