import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Tank, TankComponent } from '@smart-webcomponents-angular/tank';

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
    @ViewChild('smartTank1Value', { read: ElementRef, static: false }) smartTank1Value!: ElementRef;
    @ViewChild('smartTank2Value', { read: ElementRef, static: false }) smartTank2Value!: ElementRef;
    @ViewChild('smartTank3Value', { read: ElementRef, static: false }) smartTank3Value!: ElementRef;

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
        const that = this,
            tanks = [that.tank, that.tank2, that.tank3];

        for (let i = 0; i < tanks.length; i++) {
            const tank = tanks[i];

            tank.addEventListener('change', function (this: Tank, event: CustomEvent) {
                const value = event.detail.value,
                    id = this.id;

                //@ts-ignore
                that[id + 'Value'].nativeElement.innerHTML = parseFloat(value).toFixed(2);
            } as EventListener);
        }
    }
}