import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircleActionTrackerNonFunctionalComponent } from './circle-action-tracker-non-functional/circle-action-tracker-non-functional.component';
import { CircleActionTrackerComponent } from './circle-action-tracker/circle-action-tracker.component';
import { CircleChangePasswordComponent } from './circle-change-password/circle-change-password.component';
import { CircleCustomerAllocationComponent } from './circle-customer-allocation/circle-customer-allocation.component';
import { CircleCustomerDetailsComponent } from './circle-customer-details/circle-customer-details.component';
import { CircleDownloadCustomerDetailsComponent } from './circle-download-customer-details/circle-download-customer-details.component';
import { CircleMeetingDashboardComponent } from './circle-meeting-dashboard/circle-meeting-dashboard.component';
import { CircleMeetingDetailsNonFunctionalComponent } from './circle-meeting-details-non-functional/circle-meeting-details-non-functional.component';
import { CircleMyAccountComponent } from './circle-my-account/circle-my-account.component';
import { CircleOnBoardingDashboardComponent } from './circle-on-boarding-dashboard/circle-on-boarding-dashboard.component';
import { CircleRagDashboardComponent } from './circle-rag-dashboard/circle-rag-dashboard.component';
import { CircleUpdateProfileComponent } from './circle-update-profile/circle-update-profile.component';
import { CircleComponent } from './circle/circle.component';

const routes: Routes = [
  {
    path:'',
    component:CircleComponent,
    children:[
      {
        path:'',
        redirectTo:'app-circle-my-account',
        pathMatch:'full'
      },
      {
        path:'app-circle-my-account',
        component:CircleMyAccountComponent,
      },
      {
        path:'app-circle-change-password',
        component:CircleChangePasswordComponent,
      },
      {
        path:'app-circle-update-profile',
        component:CircleUpdateProfileComponent,
      },
      {
        path:'app-circle-meeting-dashboard',
        component:CircleMeetingDashboardComponent,
      },
      {
        path:'app-circle-on-boarding-dashboard',
        component:CircleOnBoardingDashboardComponent,
      },
      {
        path:'app-circle-customer-details',
        component:CircleCustomerDetailsComponent,
      },
      {
        path:'app-circle-download-customer-details',
        component:CircleDownloadCustomerDetailsComponent,
      },
      {
        path:'app-circle-customer-allocation',
        component:CircleCustomerAllocationComponent,
      },
      {
        path:'app-circle-action-tracker',
        component:CircleActionTrackerComponent,
      },
      {
        path:'app-circle-rag-dashboard',
        component:CircleRagDashboardComponent,
      },
      {
        path:'app-circle-action-tracker-non-functional',
        component:CircleActionTrackerNonFunctionalComponent,
      },
      {
        path:'app-circle-meeting-details-non-functional',
        component:CircleMeetingDetailsNonFunctionalComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CircleRoutingModule { }
