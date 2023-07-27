import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

import { DropDownListComponent, DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';
import { SwitchButtonModule } from 'smart-webcomponents-angular/switchbutton';

import { LocalizationService } from '../services/localization.service';
import { NavigationEnum } from '../enums/NavigationEnum';

@Component({
  selector: 'app-header',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [DropDownListModule, SwitchButtonModule]
})
export class HeaderComponent {
  @ViewChild('themeDropDownList', { read: DropDownListComponent, static: false }) themeDropDownList!: DropDownListComponent;

  @Input() currentDrawerItem: NavigationEnum = NavigationEnum.team;

  @Input() navigationToggled!: boolean;
  @Output() navigationToggleStateChange = new EventEmitter<boolean>();

  projectNameText = '';
  currentDrawerText = '';
  languageText = '';

  constructor(private localizationService: LocalizationService) {
    this.applyLocalization()

    this.localizationService.localeEmitter.subscribe(locale => {
      this.applyLocalization()
    })
  }

  handleTogglerClick() { this.navigationToggleStateChange.emit(!this.navigationToggled) }

  handleThemeChange(event: CustomEvent) {
    const selectedTheme = this.themeDropDownList
      .items
      .find((item: any) => item.dataIndex === event.detail.index)
      ?.getAttribute('ng-reflect-label')

    switch (selectedTheme) {
      case 'Bootstrap':
        const linkElement = document.createElement('link');
        linkElement.id = 'bootstrap-styles'
        linkElement.rel = 'stylesheet';
        linkElement.href = 'assets/css/bootstrap/light/smart.bootstrap.red.css'
        document.head.appendChild(linkElement);
        document.body.classList.add('bs-styles-applied')
        break;
      case 'Material':
        document.querySelector('#bootstrap-styles')?.remove()
        document.body.classList.remove('bs-styles-applied')
        break;
      default:
        break;
    }
  }

  handleLanguageChange(event: CustomEvent) { this.localizationService.updateLocale(event.detail.value) }

  applyLocalization() {
    this.projectNameText = this.localizationService.getProjectName()
    this.currentDrawerText = this.localizationService.getDrawerItemName(this.currentDrawerItem)
    this.languageText = this.localizationService.getLanguage()
  }
}
