import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ComboBoxComponent } from '@smart-webcomponents-angular/combobox';

import { ComboBoxModule } from '@smart-webcomponents-angular/combobox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ComboBoxModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('combobox', { read: ComboBoxComponent, static: false }) combobox!: ComboBoxComponent;

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

        that.combobox.addEventListener('change', function (): void {
            const tokens: HTMLCollection = that.combobox.nativeElement.getElementsByClassName('smart-token');
            
            for (let i = 0; i < tokens.length; i++) {
                var token: HTMLElement = tokens[i] as HTMLElement;
                var img: HTMLImageElement | null = token.querySelector('.avatar');

                if (!img || !token) { return }

                if (token.textContent?.indexOf('Anne Kean') || -1 > -1) {
                    img.src = 'https://htmlelements.com/demos/images/phonebook/anne.png';
                }
                else if (token.textContent?.indexOf('Andrew Watson') || -1 > -1) {
                    img.src = 'https://htmlelements.com/demos/images/phonebook/andrew.png';
                }
                else if (token.textContent?.indexOf('Avril Janin') || -1 > -1) {
                    img.src = 'https://htmlelements.com/demos/images/phonebook/avril.jpeg';
                }
                else if (token.textContent?.indexOf('Janet Pattenson') || -1 > -1) {
                    img.src = 'https://htmlelements.com/demos/images/phonebook/janet.png';
                }
                else if (token.textContent?.indexOf('Johanna Svensson') || -1 > -1) {
                    img.src = 'https://htmlelements.com/demos/images/phonebook/johanna.jpeg';
                }
                else if (token.textContent?.indexOf('Johnny Abana') || -1 > -1) {
                    img.src = 'https://htmlelements.com/demos/images/phonebook/johnny.jpeg';
                }
                else if (token.textContent?.indexOf('Laura Thene') || -1 > -1) {
                    img.src = 'https://htmlelements.com/demos/images/phonebook/laura.png';
                }
                else if (token.textContent?.indexOf('Margaret Vetton') || -1 > -1) {
                    img.src = 'https://htmlelements.com/demos/images/phonebook/margaret.png';
                }
                else if (token.textContent?.indexOf('Maria Sevrano') || -1 > -1) {
                    img.src = 'https://htmlelements.com/demos/images/phonebook/Maria.jpeg';
                }
                else if (token.textContent?.indexOf('Mark Yemen') || -1 > -1) {
                    img.src = 'https://htmlelements.com/demos/images/phonebook/mark.jpeg';
                }
                else if (token.textContent?.indexOf('Maya Verdara') || -1 > -1) {
                    img.src = 'https://htmlelements.com/demos/images/phonebook/maya.jpeg';
                }
                else if (token.textContent?.indexOf('Michael Barton') || -1 > -1) {
                    img.src = 'https://htmlelements.com/demos/images/phonebook/michael.png';
                }
                else if (token.textContent?.indexOf('Monica Oghini') || -1 > -1) {
                    img.src = 'https://htmlelements.com/demos/images/phonebook/monica.jpeg';
                }
                else if (token.textContent?.indexOf('Nancy Queens') || -1 > -1) {
                    img.src = 'https://htmlelements.com/demos/images/phonebook/nancy.png';
                }
                else if (token.textContent?.indexOf('Robert Drawny') || -1 > -1) {
                    img.src = 'https://htmlelements.com/demos/images/phonebook/robert.png';
                }
                else if (token.textContent?.indexOf('Steven Fedrichy') || -1 > -1) {
                    img.src = 'https://htmlelements.com/demos/images/phonebook/steven.jpeg';
                }
                else if (token.textContent?.indexOf('Toni Versachi') || -1 > -1) {
                    img.src = 'https://htmlelements.com/demos/images/phonebook/toni.jpeg';
                }
            }
        });
    }
}