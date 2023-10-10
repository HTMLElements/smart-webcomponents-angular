import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	
	buttonType = "button";
	verySmallSize = "verySmall";
	normalSize = "normal";
	smallSize = "small";
	largeSize = "large";
	verticalDirection = "vertical";
	horizontalDirection = "horizontal";
	iconOnlySize = "iconOnly";
	flatClass = "flat";

	fileMenu = {
		type: 'dropDown',
		items: [{
			label: 'New',
			shortcut: 'Ctrl+N'
		},
		{
			label: 'Open',
			shortcut: 'Ctrl+0'
		},
		{
			label: 'Open Containing Folder',
			items: [{
				label: 'Explorer'
			},
			{
				label: 'cmd'
			}
			]
		},
		{
			label: 'Save',
			shortcut: 'Ctrl+S',
			disabled: true,
			separator: true
		},
		{
			label: 'Exit',
			shortcut: 'Alt+F4'
		}
		]
	}
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    

	}	
}