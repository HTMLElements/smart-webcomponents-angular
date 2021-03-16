import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from '@smart-webcomponents-angular/button';
import { CardComponent } from '@smart-webcomponents-angular/card';
import { CheckBoxComponent } from '@smart-webcomponents-angular/checkbox';
import { ListBoxComponent } from '@smart-webcomponents-angular/listbox';
import { SplitterComponent } from '@smart-webcomponents-angular/splitter';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('button', { read: ButtonComponent, static: false }) button: ButtonComponent;
	@ViewChild('button2', { read: ButtonComponent, static: false }) button2: ButtonComponent;
	@ViewChild('button3', { read: ButtonComponent, static: false }) button3: ButtonComponent;
	@ViewChild('button4', { read: ButtonComponent, static: false }) button4: ButtonComponent;
	@ViewChild('button5', { read: ButtonComponent, static: false }) button5: ButtonComponent;
	@ViewChild('button6', { read: ButtonComponent, static: false }) button6: ButtonComponent;
	@ViewChild('button7', { read: ButtonComponent, static: false }) button7: ButtonComponent;
	@ViewChild('button8', { read: ButtonComponent, static: false }) button8: ButtonComponent;
	@ViewChild('button9', { read: ButtonComponent, static: false }) button9: ButtonComponent;
	@ViewChild('button10', { read: ButtonComponent, static: false }) button10: ButtonComponent;
	@ViewChild('button11', { read: ButtonComponent, static: false }) button11: ButtonComponent;
	@ViewChild('button12', { read: ButtonComponent, static: false }) button12: ButtonComponent;
	@ViewChild('button13', { read: ButtonComponent, static: false }) button13: ButtonComponent;
	@ViewChild('button14', { read: ButtonComponent, static: false }) button14: ButtonComponent;
	@ViewChild('button15', { read: ButtonComponent, static: false }) button15: ButtonComponent;
	@ViewChild('button16', { read: ButtonComponent, static: false }) button16: ButtonComponent;
	@ViewChild('button17', { read: ButtonComponent, static: false }) button17: ButtonComponent;
	@ViewChild('button18', { read: ButtonComponent, static: false }) button18: ButtonComponent;
	@ViewChild('button19', { read: ButtonComponent, static: false }) button19: ButtonComponent;
	@ViewChild('button20', { read: ButtonComponent, static: false }) button20: ButtonComponent;
	@ViewChild('button21', { read: ButtonComponent, static: false }) button21: ButtonComponent;
	@ViewChild('card', { read: CardComponent, static: false }) card: CardComponent;
	@ViewChild('card2', { read: CardComponent, static: false }) card2: CardComponent;
	@ViewChild('card3', { read: CardComponent, static: false }) card3: CardComponent;
	@ViewChild('card4', { read: CardComponent, static: false }) card4: CardComponent;
	@ViewChild('card5', { read: CardComponent, static: false }) card5: CardComponent;
	@ViewChild('card6', { read: CardComponent, static: false }) card6: CardComponent;
	@ViewChild('card7', { read: CardComponent, static: false }) card7: CardComponent;
	@ViewChild('card8', { read: CardComponent, static: false }) card8: CardComponent;
	@ViewChild('card9', { read: CardComponent, static: false }) card9: CardComponent;
	@ViewChild('card10', { read: CardComponent, static: false }) card10: CardComponent;
	@ViewChild('card11', { read: CardComponent, static: false }) card11: CardComponent;
	@ViewChild('card12', { read: CardComponent, static: false }) card12: CardComponent;
	@ViewChild('card13', { read: CardComponent, static: false }) card13: CardComponent;
	@ViewChild('card14', { read: CardComponent, static: false }) card14: CardComponent;
	@ViewChild('card15', { read: CardComponent, static: false }) card15: CardComponent;
	@ViewChild('card16', { read: CardComponent, static: false }) card16: CardComponent;
	@ViewChild('card17', { read: CardComponent, static: false }) card17: CardComponent;
	@ViewChild('card18', { read: CardComponent, static: false }) card18: CardComponent;
	@ViewChild('card19', { read: CardComponent, static: false }) card19: CardComponent;
	@ViewChild('card20', { read: CardComponent, static: false }) card20: CardComponent;
	@ViewChild('card21', { read: CardComponent, static: false }) card21: CardComponent;
	@ViewChild('card22', { read: CardComponent, static: false }) card22: CardComponent;
	@ViewChild('card23', { read: CardComponent, static: false }) card23: CardComponent;
	@ViewChild('card24', { read: CardComponent, static: false }) card24: CardComponent;
	@ViewChild('card25', { read: CardComponent, static: false }) card25: CardComponent;
	@ViewChild('card26', { read: CardComponent, static: false }) card26: CardComponent;
	@ViewChild('card27', { read: CardComponent, static: false }) card27: CardComponent;
	@ViewChild('card28', { read: CardComponent, static: false }) card28: CardComponent;
	@ViewChild('checkbox', { read: CheckBoxComponent, static: false }) checkbox: CheckBoxComponent;
	@ViewChild('checkbox2', { read: CheckBoxComponent, static: false }) checkbox2: CheckBoxComponent;
	@ViewChild('checkbox3', { read: CheckBoxComponent, static: false }) checkbox3: CheckBoxComponent;
	@ViewChild('checkbox4', { read: CheckBoxComponent, static: false }) checkbox4: CheckBoxComponent;
	@ViewChild('checkbox5', { read: CheckBoxComponent, static: false }) checkbox5: CheckBoxComponent;
	@ViewChild('checkbox6', { read: CheckBoxComponent, static: false }) checkbox6: CheckBoxComponent;
	@ViewChild('checkbox7', { read: CheckBoxComponent, static: false }) checkbox7: CheckBoxComponent;
	@ViewChild('checkbox8', { read: CheckBoxComponent, static: false }) checkbox8: CheckBoxComponent;
	@ViewChild('checkbox9', { read: CheckBoxComponent, static: false }) checkbox9: CheckBoxComponent;
	@ViewChild('checkbox10', { read: CheckBoxComponent, static: false }) checkbox10: CheckBoxComponent;
	@ViewChild('checkbox11', { read: CheckBoxComponent, static: false }) checkbox11: CheckBoxComponent;
	@ViewChild('checkbox12', { read: CheckBoxComponent, static: false }) checkbox12: CheckBoxComponent;
	@ViewChild('listbox', { read: ListBoxComponent, static: false }) listbox: ListBoxComponent;
	@ViewChild('splitter', { read: SplitterComponent, static: false }) splitter: SplitterComponent;
	@ViewChild('splitter2', { read: SplitterComponent, static: false }) splitter2: SplitterComponent;
	@ViewChild('splitter3', { read: SplitterComponent, static: false }) splitter3: SplitterComponent;
	@ViewChild('splitter4', { read: SplitterComponent, static: false }) splitter4: SplitterComponent;
	@ViewChild('splitter5', { read: SplitterComponent, static: false }) splitter5: SplitterComponent;
	@ViewChild('splitter6', { read: SplitterComponent, static: false }) splitter6: SplitterComponent;
	@ViewChild('splitter7', { read: SplitterComponent, static: false }) splitter7: SplitterComponent;
	@ViewChild('splitter8', { read: SplitterComponent, static: false }) splitter8: SplitterComponent;
	@ViewChild('splitter9', { read: SplitterComponent, static: false }) splitter9: SplitterComponent;
	@ViewChild('splitter10', { read: SplitterComponent, static: false }) splitter10: SplitterComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    
        const batteryUsage = document.getElementById('batteryUsage'), tasks = batteryUsage.items, progressBar = document.querySelector('smart-circular-progress-bar'), icons = [
            'brightness_7',
            'public',
            'people',
            'bluetooth',
            'music_note',
            'android',
            'shop',
            'cast',
            'sync',
            'drafts',
            'access_time',
            'system_update',
            'lock',
            'call',
            'cloud',
            'gps_fixed',
            'sd_card',
            'security'
        ];
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].getElementsByClassName('material-icons')[0].innerHTML = icons[i];
        }
        batteryUsage.addEventListener('change', function (event) {
            const detail = event.detail;
            if (detail.label.toLowerCase() === 'screen') {
                progressBar.value = 44;
            }
            else if (detail.label.toLowerCase() === 'chrome') {
                progressBar.value = 20;
            }
            else if (detail.label.toLowerCase() === 'facebook') {
                progressBar.value = 8;
            }
            else if (detail.label.toLowerCase() === 'bluetooth') {
                progressBar.value = 5;
            }
            else if (detail.label.toLowerCase() === 'youtube') {
                progressBar.value = 5;
            }
            else if (detail.label.toLowerCase() === 'google play store') {
                progressBar.value = 3;
            }
            else if (detail.label.toLowerCase() === 'call services') {
                progressBar.value = 2;
            }
            else if (detail.label.toLowerCase() === 'location services') {
                progressBar.value = 2;
            }
            else if (detail.label.toLowerCase() === 'android os') {
                progressBar.value = 2;
            }
            else if (detail.label.toLowerCase() === 'android system') {
                progressBar.value = 2;
            }
            else if (detail.label.toLowerCase() === 'sync') {
                progressBar.value = 1;
            }
            else if (detail.label.toLowerCase() === 'mail service') {
                progressBar.value = 1;
            }
            else if (detail.label.toLowerCase() === 'clock') {
                progressBar.value = 1;
            }
            else if (detail.label.toLowerCase() === 'idle state') {
                progressBar.value = 1;
            }
            else if (detail.label.toLowerCase() === 'cloud services') {
                progressBar.value = 1;
            }
            else if (detail.label.toLowerCase() === 'external storage') {
                progressBar.value = 1;
            }
            else if (detail.label.toLowerCase() === 'security services') {
                progressBar.value = 1;
            }
        });
    

	}	
}