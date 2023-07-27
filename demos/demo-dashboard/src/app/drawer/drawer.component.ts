import { Component, Inject, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { Locale } from '../interfaces/Locale';

import { ListBoxComponent, ListBoxModule } from 'smart-webcomponents-angular/listbox';
import { LocaleEmitterValue, LocalizationService } from '../services/localization.service';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NavigationEnum } from '../enums/NavigationEnum';

@Component({
  selector: 'app-drawer',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer-navigation.component.css', './drawer-content.component.css'],
  imports: [RouterOutlet, RouterModule, ListBoxModule]
})
export class DrawerComponent {
  @ViewChild('drawerNavigation', { read: ListBoxComponent, static: false }) drawerNavigation!: ListBoxComponent;

  @Input() currentDrawerItem!: NavigationEnum;
  @Input() navigationToggled!: boolean;

  constructor(private localizationService: LocalizationService, @Inject(Router) private router: Router) {
    this.localizationService.localeEmitter.subscribe((value: LocaleEmitterValue) => {
      this.applyLocalization(value.newLocale, value.prevLocale);
    })
  }

  applyLocalization(newLocale: Locale, prevLocale?: Locale) {

    if (prevLocale) {
      const prevDrawerItems = this.localizationService.getDrawerItemsNames(prevLocale)
      const newDrawerItemsNames = this.localizationService.getDrawerItemsNames(newLocale)

      this.drawerNavigation.items.forEach(item => {

        if (Object.keys(newDrawerItemsNames).includes(item.value || '')) {
          const prevValue = prevDrawerItems[item.value as keyof typeof prevDrawerItems];
          const newValue = newDrawerItemsNames[item.value as keyof typeof newDrawerItemsNames]

          item.label = item.label?.replace(prevValue, newValue);
        }

      })
    }
  }

  handleNavigation(event: CustomEvent) { this.router.navigateByUrl(`/${event.detail.value}`) }
}
