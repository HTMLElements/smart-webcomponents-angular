import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';

import { TimelineModule } from '@smart-webcomponents-angular/timeline';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [   TimelineModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	
	travelPlans = [
        { date: "May 15, 2024", description: "Flight: Reserving airline tickets", subtitle: "May 15, 2024", title: "Flight Reservation", icon: "material-icons flight", dotCSS: "" },
        { date: "June 22, 2024", description: "Hotel: Booking for the trip", subtitle: "June 22, 2024", title: "Booking", icon: "material-icons hotel", dotCSS: "" },
        { date: "July 12, 2024", description: "Flight: Take off", subtitle: "July 12, 2024", title: "Flight", icon: "material-icons flight-takeoff", dotCSS: "" },
        { date: "July 13, 2024", description: "Excursion Plans: Hiking", subtitle: "July 13, 2024", title: "Plans", icon: "material-icons hiking", dotCSS: "" },
        { date: "Aug 14, 2024", description: "Return Journey: Flight Confirmation", subtitle: "Aug 14, 2024", title: "Flight Confirmation", icon: "material-icons flight-land", dotCSS: "" }
    ];
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
	 }
}