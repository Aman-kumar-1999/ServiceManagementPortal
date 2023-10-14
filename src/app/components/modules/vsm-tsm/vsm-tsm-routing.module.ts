import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VsmTsmActionTrackerComponent } from './vsm-tsm-action-tracker/vsm-tsm-action-tracker.component';
import { VsmTsmChangePasswordComponent } from './vsm-tsm-change-password/vsm-tsm-change-password.component';
import { VsmTsmCsatDsatComponent } from './vsm-tsm-csat-dsat/vsm-tsm-csat-dsat.component';
import { VsmTsmCustomerDetailsComponent } from './vsm-tsm-customer-details/vsm-tsm-customer-details.component';
import { VsmTsmDashboardComponent } from './vsm-tsm-dashboard/vsm-tsm-dashboard.component';
import { VsmTsmDownloadCustomerDetailsComponent } from './vsm-tsm-download-customer-details/vsm-tsm-download-customer-details.component';
import { VsmTsmEscalationMatrixComponent } from './vsm-tsm-escalation-matrix/vsm-tsm-escalation-matrix.component';
import { VsmTsmMyAccountComponent } from './vsm-tsm-my-account/vsm-tsm-my-account.component';
import { VsmTsmOnboardingComponent } from './vsm-tsm-onboarding/vsm-tsm-onboarding.component';
import { VsmTsmRagDashboardComponent } from './vsm-tsm-rag-dashboard/vsm-tsm-rag-dashboard.component';
import { VsmTsmViewMomComponent } from './vsm-tsm-view-mom/vsm-tsm-view-mom.component';
import { VsmTsmViewOpenMeetingComponent } from './vsm-tsm-view-open-meeting/vsm-tsm-view-open-meeting.component';
import { VsmTsmComponent } from './vsm-tsm/vsm-tsm.component';

const routes: Routes = [
  {
    path:'',
    component:VsmTsmComponent,
    children:[
      {
        path:'',
        redirectTo:'vsm-tsm-my-account',
        pathMatch:'full'
      },
      {
        path:'vsm-tsm-my-account',
        component:VsmTsmMyAccountComponent,
      },
      {
        path:'app-vsm-tsm-dashboard',
        component:VsmTsmDashboardComponent,
      },
      {
        path:'app-vsm-tsm-customer-details',
        component:VsmTsmCustomerDetailsComponent,
      },
      {
        path:'app-vsm-tsm-view-open-meeting',
        component:VsmTsmViewOpenMeetingComponent,
      },
      {
        path:'app-vsm-tsm-onboarding',
        component:VsmTsmOnboardingComponent,
      },
      {
        path:'app-vsm-tsm-view-mom',
        component:VsmTsmViewMomComponent,
      },
      {
        path:'app-vsm-tsm-action-tracker',
        component:VsmTsmActionTrackerComponent,
      },
      {
        path:'app-vsm-tsm-rag-dashboard',
        component:VsmTsmRagDashboardComponent,
      },
      {
        path:'app-vsm-tsm-change-password',
        component:VsmTsmChangePasswordComponent,
      },
      {
        path:'app-vsm-tsm-escalation-matrix',
        component:VsmTsmEscalationMatrixComponent,
      },
      {
        path:'app-vsm-tsm-csat-dsat',
        component:VsmTsmCsatDsatComponent,
      },
      {
        path:'app-vsm-tsm-download-customer-details',
        component:VsmTsmDownloadCustomerDetailsComponent,
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VsmTsmRoutingModule { }
