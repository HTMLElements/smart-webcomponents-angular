import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
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
    @ViewChild('tank4', { read: TankComponent, static: false }) tank4!: TankComponent;
    @ViewChild('tank5', { read: TankComponent, static: false }) tank5!: TankComponent;
    @ViewChild('tank6', { read: TankComponent, static: false }) tank6!: TankComponent;
    @ViewChild('tank7', { read: TankComponent, static: false }) tank7!: TankComponent;
    @ViewChild('tank8', { read: TankComponent, static: false }) tank8!: TankComponent;
    @ViewChild('tank9', { read: TankComponent, static: false }) tank9!: TankComponent;
    @ViewChild('tank10', { read: TankComponent, static: false }) tank10!: TankComponent;
    @ViewChild('tank11', { read: TankComponent, static: false }) tank11!: TankComponent;
    @ViewChild('tank12', { read: TankComponent, static: false }) cpuTank!: TankComponent;
    @ViewChild('tank13', { read: TankComponent, static: false }) batteryTank!: TankComponent;


    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.


        function setTemperature(event: Event) {
            const tank = event.target as Tank;
            let color = '#0C9F59';
            if (tank.value === '0') {
                color = '';
            }
            else if (tank.value < (tank.max as number) * 0.25) {
                color = '#DB4534';
            }
            else if (tank.value > (tank.max as number) * 0.2 && tank.value < (tank.max as number) * 0.70) {
                color = '#FFEB3B';
            }
            tank.style.setProperty('--smart-primary', color);

            if (document.getElementById('powerSaver')) {
                document.getElementById('powerSaver')!.innerHTML = tank.value;
            }
        }
        this.cpuTank.labelFormatFunction = ((label: string) => { return label + '%'; });
        this.batteryTank.addEventListener('change', setTemperature);
        let cpu = document.getElementById('cpu');
        setInterval(() => {
            this.cpuTank.value = Math.random() * 100;
            if(cpu) {
                cpu.textContent = this.cpuTank.value;
            }
        }, 1500);


    }
}