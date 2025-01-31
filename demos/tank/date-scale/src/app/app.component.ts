import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { TankComponent } from '@smart-webcomponents-angular/tank';

import { TankModule } from '@smart-webcomponents-angular/tank';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  TankModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('tank', { read: TankComponent, static: false }) tank!: TankComponent;
    @ViewChild('tank2', { read: TankComponent, static: false }) tank2!: TankComponent;
    @ViewChild('tank3', { read: TankComponent, static: false }) tank3!: TankComponent;


    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
        this.tank2.customTicks = ["new Date(2017, 0, 1)", "new Date(2018, 0, 1)", "new Date(2018, 4, 17)", "new Date(2019, 0, 1)"] as any
    }

    tank2LabelFormatFunction(value: any): string {
        if (value.year() === 2018 && value.month() === 5 && value.day() === 17) {
            return '<div id="birthday">' + value.toString('MMM d, yyyy') + '<br/>★Peter\'s birthday★</div>';
        }
        return value.toString('MMM d, yyyy');
    }
}
