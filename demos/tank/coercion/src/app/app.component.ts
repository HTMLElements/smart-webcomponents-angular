import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { NumericTextBoxComponent } from '@smart-webcomponents-angular/numerictextbox';
import { TankComponent } from '@smart-webcomponents-angular/tank';

import { NumericTextBoxModule } from '@smart-webcomponents-angular/numerictextbox';

import { TankModule } from '@smart-webcomponents-angular/tank';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  NumericTextBoxModule, TankModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('numerictextbox', { read: NumericTextBoxComponent, static: false }) numerictextbox!: NumericTextBoxComponent;
    @ViewChild('tank', { read: TankComponent, static: false }) tank!: TankComponent;


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

        that.numerictextbox.addEventListener('change', function (event: CustomEvent) {
            that.tank.interval = event.detail.value;
        } as EventListener);
    }
}