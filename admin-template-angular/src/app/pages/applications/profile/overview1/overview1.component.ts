import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Menu } from 'smart-webcomponents-angular';

@Component({
  selector: 'sm-overview1',
  templateUrl: './overview1.component.html',
  styleUrls: ['./overview1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Overview1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  stopPropagation(e: Event) {
    e.stopPropagation();
  }

  toggleMenu(button: HTMLElement) {

    const todayMenu = document.querySelector('#todayMenu') as Menu;
    const rect = button.getBoundingClientRect();

    Array.from(document.getElementsByTagName('smart-menu'))
      .filter(currentMenu => currentMenu !== todayMenu)
      .forEach(currentMenu => currentMenu.close());

    document.querySelectorAll('.dropdown-menu-show').forEach(e => {
      e.classList.remove('dropdown-menu-show');
    })

    document.querySelectorAll('.dropdown-button')
      .forEach(menu => menu.classList.remove('dropdown-button-active'));

    if (!todayMenu.opened) {

      todayMenu.open(rect.right - todayMenu.offsetWidth, rect.bottom + window.scrollY);

    } else {

      todayMenu.close();

    }

  }

}
