import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ToggleButtonComponent } from '@smart-webcomponents-angular/button';
import { CircularProgressBarComponent } from '@smart-webcomponents-angular/progressbar';

import { ButtonModule } from '@smart-webcomponents-angular/button';

import { ProgressBarModule } from '@smart-webcomponents-angular/progressbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ButtonModule, ProgressBarModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('toggleButton', { read: ToggleButtonComponent, static: false }) toggleButton!: ToggleButtonComponent;
    @ViewChild('circularProgressBar', { read: CircularProgressBarComponent, static: false }) circularProgressBar!: CircularProgressBarComponent;

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
            button = that.toggleButton,
            progressBar = that.circularProgressBar;

        button.addEventListener("change", function (): void {
            if (button.checked) {
                progressBar.indeterminate = false;
            }
            else {
                progressBar.indeterminate = true;
            }
        });


    }
}