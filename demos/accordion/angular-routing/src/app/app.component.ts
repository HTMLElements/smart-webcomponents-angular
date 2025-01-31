import { Component, AfterViewInit, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {  Router } from '@angular/router';
import { slideInAnimation } from './animations';

import { AccordionComponent, AccordionItem } from '@smart-webcomponents-angular/accordion';
import { AccordionModule } from '@smart-webcomponents-angular/accordion';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AccordionModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('accordion', { read: AccordionComponent, static: false }) accordion!: AccordionComponent;

  constructor(private router: Router) { }

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
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

    const that = this;

    that.accordion.addEventListener('expanding', function (event: CustomEvent) {
      const accordionItemIndex: number = event.detail.index,
        tabItemLabel = (<AccordionItem>that.accordion.nativeElement.querySelectorAll('smart-accordion-item')[accordionItemIndex]).label;

      if (tabItemLabel === 'Heroes') {
        that.router.navigate(['/superheroes']);
      }
      else {
        that.router.navigate([{ outlets: { crisis: ['crisis'] } }]);
      }
    } as EventListenerOrEventListenerObject)
  }
}
