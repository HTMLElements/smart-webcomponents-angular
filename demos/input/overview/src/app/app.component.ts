import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { InputComponent } from '@smart-webcomponents-angular/input';
import { RadioButtonComponent } from '@smart-webcomponents-angular/radiobutton';

import { InputModule } from '@smart-webcomponents-angular/input';

import { RadioButtonModule } from '@smart-webcomponents-angular/radiobutton';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  InputModule, RadioButtonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('input', { read: InputComponent, static: false }) input!: InputComponent;
    @ViewChild('radiobutton', { read: RadioButtonComponent, static: false }) radiobutton!: RadioButtonComponent;
    @ViewChild('radiobutton2', { read: RadioButtonComponent, static: false }) radiobutton2!: RadioButtonComponent;
    @ViewChild('radiobutton3', { read: RadioButtonComponent, static: false }) radiobutton3!: RadioButtonComponent;

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code
        const input = this.input;

        document.querySelector('.options')
            ?.addEventListener('change', function (event) {
                const target = event.target as HTMLElement,
                    inputClassList = input.nativeElement.classList;

                if (target.classList.contains('render-mode')) {
                    inputClassList.remove('underlined', 'outlined');

                    const textContent = target.textContent?.toLowerCase() || '';

                    if (textContent.indexOf('underlined') > -1) {
                        inputClassList.add('underlined');
                    }
                    else if (textContent.indexOf('outlined') > -1) {
                        inputClassList.add('outlined');
                    }
                }
            });
    }
}