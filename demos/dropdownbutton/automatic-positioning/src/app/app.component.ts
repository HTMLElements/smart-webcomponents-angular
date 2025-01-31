import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { DropDownButtonComponent } from '@smart-webcomponents-angular/dropdownbutton';

import { DropDownButtonModule } from '@smart-webcomponents-angular/dropdownbutton';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  DropDownButtonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('dropdownbutton', { read: DropDownButtonComponent, static: false }) dropdownbutton!: DropDownButtonComponent;


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