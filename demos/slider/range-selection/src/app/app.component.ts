import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from '@smart-webcomponents-angular/button';
import { SliderComponent } from '@smart-webcomponents-angular/slider';

import { ButtonModule } from '@smart-webcomponents-angular/button';import { SliderModule } from '@smart-webcomponents-angular/slider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ButtonModule, SliderModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('slider', { read: SliderComponent, static: false }) slider!: SliderComponent;
    @ViewChild('slider2', { read: SliderComponent, static: false }) slider2!: SliderComponent;


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

        that.button.addEventListener('click', function () {
            that.slider.val([55, 100]);
            that.slider2.val([55, 100]);
        });
    }
}