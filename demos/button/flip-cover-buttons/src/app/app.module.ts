import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from '@smart-webcomponents-angular/button';
import { DynamicSmartButton } from '../dynamic-smart-button/dynamic-smart-button.component';

import { AppComponent } from './app.component';
import { smartDomService } from './smart-dom.service';

@NgModule({
  declarations: [AppComponent, DynamicSmartButton],
  imports: [BrowserModule, ButtonModule],
  bootstrap: [AppComponent],
  providers: [smartDomService],
  entryComponents: [AppComponent],
})
export class AppModule {}
