import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/dashboard/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/dashboard/header/header.component';
import { FooterComponent } from './components/dashboard/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MyAccountComponent } from './components/dashboard/my-account/my-account.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminCustomerDetailsComponent } from './components/admin-customer-details/admin-customer-details.component';
import { AdminActionTrackerComponent } from './components/admin-action-tracker/admin-action-tracker.component';
import { AdminRagDashboardComponent } from './components/admin-rag-dashboard/admin-rag-dashboard.component';
import { AdminNonFunctionalUserDataComponent } from './components/admin-non-functional-user-data/admin-non-functional-user-data.component';
import { AdminNavebarComponent } from './components/dashboard/admin-navebar/admin-navebar.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    FooterComponent,
    MyAccountComponent,
    DashboardComponent,
    AdminCustomerDetailsComponent,
    AdminActionTrackerComponent,
    AdminRagDashboardComponent,
    AdminNonFunctionalUserDataComponent,
    AdminNavebarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
  ]
})
export class AdminModule { }
