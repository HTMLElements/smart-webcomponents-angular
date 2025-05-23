import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { CheckBoxComponent, CheckBox } from '@smart-webcomponents-angular/checkbox';
import { ColorPickerComponent, ColorApplyValueMode } from '@smart-webcomponents-angular/colorpicker';
import { RadioButtonComponent, RadioButton } from '@smart-webcomponents-angular/radiobutton';

import { CheckBoxModule } from '@smart-webcomponents-angular/checkbox';

import { ColorPickerModule } from '@smart-webcomponents-angular/colorpicker';

import { RadioButtonModule } from '@smart-webcomponents-angular/radiobutton';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  CheckBoxModule, ColorPickerModule, RadioButtonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('colorpicker', { read: ColorPickerComponent, static: false }) colorpicker!: ColorPickerComponent;
    @ViewChild('options', { read: ElementRef, static: false }) options!: ElementRef;
	
 
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
            colorPicker = that.colorpicker;

        that.options.nativeElement.addEventListener('change', function (event: CustomEvent): void {
            const radioButton: RadioButton = event.target as RadioButton;
            const checkBox: CheckBox = event.target as CheckBox;

            //Set new Grid Item size
            if (radioButton.nodeName == 'SMART-RADIO-BUTTON') {
                colorPicker.applyValueMode = radioButton.innerHTML as ColorApplyValueMode;
                return;
            }

            if (checkBox && checkBox.id.indexOf('hide') === 0) {

                // @ts-ignore
                colorPicker[checkBox.id] = checkBox.checked;
                return;
            }

            if (checkBox && checkBox.id === 'inverted') {
                colorPicker.inverted = event.detail.value;
                return;
            }
        });
	}	
}