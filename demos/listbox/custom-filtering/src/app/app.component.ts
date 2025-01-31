import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ListBoxComponent, ListItemComponent } from '@smart-webcomponents-angular/listbox';

import { ListBoxModule } from '@smart-webcomponents-angular/listbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ListBoxModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('listbox', { read: ListBoxComponent, static: false }) listbox!: ListBoxComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    
        this.listbox.filterCallback = function (item: ListItemComponent, searchQuery: string) {
            return item.value.toLowerCase() === searchQuery.toLowerCase();
        };
    

	}	
}