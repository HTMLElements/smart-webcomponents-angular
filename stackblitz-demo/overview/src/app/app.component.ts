import { Component, ViewChild } from '@angular/core';
import { AccordionComponent, AccordionItemComponent, AccordionExpandMode } from 'smart-webcomponents-angular/accordion';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('accordion', { read: AccordionComponent, static: false }) accordion: AccordionComponent;

    ngOnInit(): void {

    }
    ngAfterViewInit(): void {
        this.accordion.expandMode = "multiple";
        this.accordion.expand(1);
    }
}
