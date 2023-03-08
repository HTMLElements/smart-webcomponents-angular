import { Component, Input, ViewChild } from '@angular/core';
import { ButtonComponent } from '@smart-webcomponents-angular/button';

@Component({
  selector: 'dynamic-smart-button',
  template: '<smart-button #button>{{data}}</smart-button>',
})
export class DynamicSmartButton {
  @ViewChild('button', { read: ButtonComponent, static: false })
  button!: ButtonComponent;
  @Input() data: string = '';
}
