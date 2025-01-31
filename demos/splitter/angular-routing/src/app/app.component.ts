import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import {  Router } from '@angular/router';
import { slideInAnimation } from './animations';

import { SplitterComponent } from '@smart-webcomponents-angular/splitter';
import { SplitterModule } from '@smart-webcomponents-angular/splitter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SplitterModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('splitter', { read: SplitterComponent, static: false }) splitter!: SplitterComponent;

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

  }
}
