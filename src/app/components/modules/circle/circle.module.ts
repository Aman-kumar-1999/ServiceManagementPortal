import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { CircleRoutingModule } from './circle-routing.module';
import { CircleComponent } from './circle/circle.component';
import { CircleHeaderComponent } from './circle-header/circle-header.component';
import { CircleFooterComponent } from './circle-footer/circle-footer.component';
import { CircleMyAccountComponent } from './circle-my-account/circle-my-account.component';
import { CircleNavebarComponent } from './circle-navebar/circle-navebar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';

import { CircleChangePasswordComponent } from './circle-change-password/circle-change-password.component';
import { CircleUpdateProfileComponent } from './circle-update-profile/circle-update-profile.component';
import { CircleMeetingDashboardComponent } from './circle-meeting-dashboard/circle-meeting-dashboard.component';
import { CircleOnBoardingDashboardComponent } from './circle-on-boarding-dashboard/circle-on-boarding-dashboard.component';
import { CircleCustomerDetailsComponent } from './circle-customer-details/circle-customer-details.component';
import { CircleDownloadCustomerDetailsComponent } from './circle-download-customer-details/circle-download-customer-details.component';
import { CircleCustomerAllocationComponent } from './circle-customer-allocation/circle-customer-allocation.component';
import { CircleActionTrackerComponent } from './circle-action-tracker/circle-action-tracker.component';
import { CircleRagDashboardComponent } from './circle-rag-dashboard/circle-rag-dashboard.component';
import { CircleMeetingDetailsNonFunctionalComponent } from './circle-meeting-details-non-functional/circle-meeting-details-non-functional.component';
import { CircleActionTrackerNonFunctionalComponent } from './circle-action-tracker-non-functional/circle-action-tracker-non-functional.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';

import { CircleUpCommingMeetingInWeekComponent } from './circle-up-comming-meeting-in-week/circle-up-comming-meeting-in-week.component';

@NgModule({
  declarations: [
    CircleComponent,
    CircleHeaderComponent,
    CircleFooterComponent,
    CircleMyAccountComponent,
    CircleNavebarComponent,
    CircleChangePasswordComponent,
    CircleUpdateProfileComponent,
    CircleMeetingDashboardComponent,
    CircleOnBoardingDashboardComponent,
    CircleCustomerDetailsComponent,
    CircleDownloadCustomerDetailsComponent,
    CircleCustomerAllocationComponent,
    CircleActionTrackerComponent,
    CircleRagDashboardComponent,
    CircleMeetingDetailsNonFunctionalComponent,
    CircleActionTrackerNonFunctionalComponent,
    CircleUpCommingMeetingInWeekComponent
  ],
  imports: [
    CommonModule,
    CircleRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatMenuModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatCardModule,
    FullCalendarModule,
    MatTableModule,
    MatPaginatorModule,
    Ng2SearchPipeModule,
    MatInputModule,
    MatListModule,
    
  ]
})
export class CircleModule { }
function registerPlugins(arg0: import("@fullcalendar/core/internal-common").b[]) {
  throw new Error('Function not implemented.');
}

