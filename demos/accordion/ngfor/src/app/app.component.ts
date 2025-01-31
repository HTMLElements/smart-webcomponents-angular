import { Component } from '@angular/core';

import { AccordionModule } from '@smart-webcomponents-angular/accordion';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AccordionModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];  
}
