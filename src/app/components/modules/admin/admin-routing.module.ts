import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminActionTrackerComponent } from './components/admin-action-tracker/admin-action-tracker.component';
import { AdminCustomerDetailsComponent } from './components/admin-customer-details/admin-customer-details.component';
import { AdminNonFunctionalUserDataComponent } from './components/admin-non-functional-user-data/admin-non-functional-user-data.component';
import { AdminRagDashboardComponent } from './components/admin-rag-dashboard/admin-rag-dashboard.component';
import { AdminDashboardComponent } from './components/dashboard/admin-dashboard/admin-dashboard.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyAccountComponent } from './components/dashboard/my-account/my-account.component';

const routes: Routes = [
  {
    path:'',
    component:AdminDashboardComponent,
    children:[
      {
        path:'',
        redirectTo:'/admin/app-my-account',
         pathMatch:'full',
      },
      {
        path:'app-my-account',
        component:MyAccountComponent,
      },
      {
        path:'app-dashboard',
        component:DashboardComponent,
      },
      {
        path:'app-admin-customer-details',
        component:AdminCustomerDetailsComponent,
      },
      {
        path:'app-admin-action-tracker',
        component:AdminActionTrackerComponent,
      },
      {
        path:'app-admin-rag-dashboard',
        component:AdminRagDashboardComponent,
      },
      {
        path:'app-admin-non-functional-user-data',
        component:AdminNonFunctionalUserDataComponent,
      }

    ],
  },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
