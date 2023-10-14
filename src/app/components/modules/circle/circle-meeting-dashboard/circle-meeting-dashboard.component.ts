import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-circle-meeting-dashboard',
  templateUrl: './circle-meeting-dashboard.component.html',
  styleUrls: ['./circle-meeting-dashboard.component.css']
})
export class CircleMeetingDashboardComponent implements OnInit {

  
  
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin]
  };
  
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
