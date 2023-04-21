import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ProgressBarComponent, CircularProgressBarComponent } from '@smart-webcomponents-angular/progressbar';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('progressbar', { read: ProgressBarComponent, static: false }) progressBar!: ProgressBarComponent;
    @ViewChild('progressBarCircularControl', { read: CircularProgressBarComponent, static: false }) progressBarCircularControl!: CircularProgressBarComponent;
    @ViewChild('progressBarCircular', { read: CircularProgressBarComponent, static: false }) progressBarCircular!: CircularProgressBarComponent;

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.

        document.getElementById('progressUp')?.addEventListener('click', () => {
            this.progressBar.value = Math.min(this.progressBar.max, this.progressBar.value + 1);
            this.progressBarCircular.value = Math.min(this.progressBarCircular.max, this.progressBarCircular.value + 1);
        });
        document.getElementById('progressDown')?.addEventListener('click', () => {
            this.progressBar.value = Math.max(this.progressBar.min, this.progressBar.value - 1);
            this.progressBarCircular.value = Math.max(this.progressBarCircular.min, this.progressBarCircular.value - 1);
        });
        document.getElementById('incrementButton')?.addEventListener('click', () => {
            this.progressBarCircularControl.value = Math.min(this.progressBarCircularControl.max, this.progressBarCircularControl.value + 1);
        });
        document.getElementById('decrementButton')?.addEventListener('click', () => {
            this.progressBarCircularControl.value = Math.max(this.progressBarCircularControl.min, this.progressBarCircularControl.value - 1);
        });


    }
}