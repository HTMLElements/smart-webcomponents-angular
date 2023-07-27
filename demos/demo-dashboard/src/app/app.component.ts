import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { DrawerComponent } from './drawer/drawer.component';

import { WindowComponent, WindowModule } from 'smart-webcomponents-angular/window';
import { ButtonModule } from 'smart-webcomponents-angular/button';

import { NavigationEnum } from './enums/NavigationEnum';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, DrawerComponent, WindowModule, ButtonModule]
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('startDemoWindow', { read: WindowComponent, static: false }) startDemoWindow!: WindowComponent;

  demoLoading = true;
  demoStarted = false;

  currentDrawerItem: NavigationEnum = NavigationEnum.team;
  navigationToggled = false;

  constructor(private router: Router) {
    const currentPath = window.location.pathname.slice(1);

    if (currentPath in NavigationEnum) {
      this.currentDrawerItem = currentPath as NavigationEnum
    }

    router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        this.navigationToggled = true;
      }
    });
  }

  ngOnInit(): void {
    document.body.setAttribute('theme', 'red');
    document.body.classList.add('overflow-hidden');

    this.router.navigateByUrl('/');
    this.currentDrawerItem = NavigationEnum.team
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      document.body.classList.remove('demo-loading');
      this.demoLoading = false;
    }, 300);
  }

  handleNavigationToggleStateChange(state: boolean) { this.navigationToggled = state }

  handleCloseDemo() {
    document.body.classList.remove('overflow-hidden', 'smart-modal');
    this.startDemoWindow.close()
  }
}
