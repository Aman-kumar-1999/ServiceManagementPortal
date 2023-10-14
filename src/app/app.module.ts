import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {IntersepterService} from '../app/service/intersepter.service';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { SnackBarErrorComponent } from './snack-bar-error/snack-bar-error.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SnackBarComponent,
    SnackBarErrorComponent,  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    FormsModule,
    MatMenuModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    FullCalendarModule,
    MatFormFieldModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: IntersepterService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
