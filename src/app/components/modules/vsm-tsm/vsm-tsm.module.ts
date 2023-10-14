import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VsmTsmRoutingModule } from './vsm-tsm-routing.module';
import { VsmTsmComponent } from './vsm-tsm/vsm-tsm.component';
import { VsmTsmDashboardComponent } from './vsm-tsm-dashboard/vsm-tsm-dashboard.component';
import { VsmTsmFooterComponent } from './vsm-tsm-footer/vsm-tsm-footer.component';
import { VsmTsmHeaderComponent } from './vsm-tsm-header/vsm-tsm-header.component';
import { VsmTsmMyAccountComponent } from './vsm-tsm-my-account/vsm-tsm-my-account.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { VsmTsmCustomerDetailsComponent } from './vsm-tsm-customer-details/vsm-tsm-customer-details.component';
import { VsmTsmNavebaseComponent } from './vsm-tsm-navebase/vsm-tsm-navebase.component';
import { VsmTsmViewOpenMeetingComponent } from './vsm-tsm-view-open-meeting/vsm-tsm-view-open-meeting.component';
import { VsmTsmOnboardingComponent } from './vsm-tsm-onboarding/vsm-tsm-onboarding.component';
import { VsmTsmViewMomComponent } from './vsm-tsm-view-mom/vsm-tsm-view-mom.component';
import { VsmTsmActionTrackerComponent } from './vsm-tsm-action-tracker/vsm-tsm-action-tracker.component';
import { VsmTsmRagDashboardComponent } from './vsm-tsm-rag-dashboard/vsm-tsm-rag-dashboard.component';
import { VsmTsmChangePasswordComponent } from './vsm-tsm-change-password/vsm-tsm-change-password.component';
import { VsmTsmEscalationMatrixComponent } from './vsm-tsm-escalation-matrix/vsm-tsm-escalation-matrix.component';
import { VsmTsmCsatDsatComponent } from './vsm-tsm-csat-dsat/vsm-tsm-csat-dsat.component';
import { VsmTsmDownloadCustomerDetailsComponent } from './vsm-tsm-download-customer-details/vsm-tsm-download-customer-details.component';


@NgModule({
  declarations: [
    VsmTsmComponent,
    VsmTsmDashboardComponent,
    VsmTsmFooterComponent,
    VsmTsmHeaderComponent,
    VsmTsmMyAccountComponent,
    VsmTsmCustomerDetailsComponent,
    VsmTsmNavebaseComponent,
    VsmTsmViewOpenMeetingComponent,
    VsmTsmOnboardingComponent,
    VsmTsmViewMomComponent,
    VsmTsmActionTrackerComponent,
    VsmTsmRagDashboardComponent,
    VsmTsmChangePasswordComponent,
    VsmTsmEscalationMatrixComponent,
    VsmTsmCsatDsatComponent,
    VsmTsmDownloadCustomerDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    VsmTsmRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatMenuModule,
    MatSelectModule,
  ]
})
export class VsmTsmModule { }
