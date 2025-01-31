import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import {  Router } from '@angular/router';
import { slideInAnimation } from './animations';

import { TabsComponent, TabItem } from '@smart-webcomponents-angular/tabs';
import { TabsModule } from '@smart-webcomponents-angular/tabs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('tabs', { read: TabsComponent, static: false }) tabs!: TabsComponent;

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

    that.tabs.addEventListener('change', function (event: CustomEvent) {
      const tabItemIndex: number = event.detail.index;

      if (event.target !== that.tabs.nativeElement) {
        return;
      }

      const tabItemLabel = (<TabItem>that.tabs.nativeElement.querySelectorAll('smart-tab-item')[tabItemIndex]).label;

      if (tabItemLabel === 'Heores') {
        that.router.navigate(['/superheroes']);
      }
      else {
        that.router.navigate([{ outlets: { crisis: ['crisis'] } }]);
      }
    } as EventListener)
  }
}
