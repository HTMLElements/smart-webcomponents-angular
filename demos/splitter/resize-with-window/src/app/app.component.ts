import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { WindowComponent } from '@smart-webcomponents-angular/window';

import { WindowModule } from '@smart-webcomponents-angular/window';

import { SplitterModule } from '@smart-webcomponents-angular/splitter';

import { DropDownListModule } from '@smart-webcomponents-angular/dropdownlist';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  WindowModule, DropDownListModule, SplitterModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('window', { read: WindowComponent, static: false }) dialogWindow!: WindowComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
		
		setTimeout(()=> {
			this.dialogWindow.opened = true;
		}, 3000);
		
    }
		
	init(): void {
		// init code.
	    

	}	
}