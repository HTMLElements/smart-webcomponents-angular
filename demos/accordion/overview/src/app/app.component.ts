import { Component, ViewChild } from '@angular/core';
import { AccordionComponent, AccordionItemComponent, AccordionExpandMode } from '@smart-webcomponents-angular/accordion';

import { AccordionModule } from '@smart-webcomponents-angular/accordion';

import { TextBoxModule } from '@smart-webcomponents-angular/textbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  AccordionModule, TextBoxModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
    @ViewChild('accordion', { read: AccordionComponent, static: false }) accordion!: AccordionComponent;

    ngOnInit(): void {

    }
    ngAfterViewInit(): void {
		const that = this;
		that.accordion.expandMode = "multiple";
		that.accordion.expand(1);  	
    }
}
