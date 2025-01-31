import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { PasswordTextBoxComponent } from '@smart-webcomponents-angular/passwordtextbox';

import { PasswordTextBoxModule } from '@smart-webcomponents-angular/passwordtextbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  PasswordTextBoxModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('passwordtextbox', { read: PasswordTextBoxComponent, static: false }) passwordtextbox!: PasswordTextBoxComponent;

    messages = {
        'en': {
            'passwordStrength': 'Password strength',
            'short': 'Short',
            'weak': 'Weak',
            'far': 'Far',
            'good': 'Good',
            'strong': 'Strong',
            'showPassword': 'Show password'
        },
        'de': {
            'passwordStrength': 'Passwortstärke',
            'short': 'kurz',
            'weak': 'schwach',
            'far': 'weit',
            'good': 'gut',
            'strong': 'stark',
            'showPassword': 'Passwort anzeigen'
        }
    };

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