import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { MultiComboInputComponent } from '@smart-webcomponents-angular/multicomboinput';
import { InputComponent } from '@smart-webcomponents-angular/input';
import { RadioButtonComponent } from '@smart-webcomponents-angular/radiobutton';

import { MultiComboInputModule } from '@smart-webcomponents-angular/multicomboinput';

import { InputModule } from '@smart-webcomponents-angular/input';

import { RadioButtonModule } from '@smart-webcomponents-angular/radiobutton';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  MultiComboInputModule, InputModule, RadioButtonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('input', { read: InputComponent, static: false }) input!: InputComponent;


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