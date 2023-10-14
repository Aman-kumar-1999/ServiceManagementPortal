import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { AdminGuard } from './guard/admin.guard';
import { CircleGuard } from './guard/circle.guard';
import { VsmTsmGuard } from './guard/vsm-tsm.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    canActivate:[AdminGuard],
    loadChildren: () => import('./components/modules/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'vsm-tsm',
    canActivate:[VsmTsmGuard],
    loadChildren: () => import('./components/modules/vsm-tsm/vsm-tsm.module').then((m) => m.VsmTsmModule),
  },
  {
    path: 'circle',
    canActivate:[CircleGuard],
    loadChildren: () => import('./components/modules/circle/circle.module').then((m) => m.CircleModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
