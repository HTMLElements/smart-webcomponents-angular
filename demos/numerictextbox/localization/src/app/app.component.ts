import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { NumericTextBoxComponent } from '@smart-webcomponents-angular/numerictextbox';

import { NumericTextBoxModule } from '@smart-webcomponents-angular/numerictextbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  NumericTextBoxModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('numerictextbox', { read: NumericTextBoxComponent, static: false }) numerictextbox!: NumericTextBoxComponent;


    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
        const messagesEnglish = this.numerictextbox.messages.en;

        messagesEnglish.binary = 'binary';
        messagesEnglish.octal = 'octal';
        messagesEnglish.decimal = 'decimal';
        messagesEnglish.hexadecimal = 'hexadecimal';
    }
}