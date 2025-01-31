import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { CircularProgressBarComponent } from '@smart-webcomponents-angular/progressbar';

import { ProgressBarModule } from '@smart-webcomponents-angular/progressbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ProgressBarModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
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

		setTimeout(() => {
			document.getElementsByClassName('smart-value-path')[0].setAttribute('filter', 'url(#blueGlow)');
			document.getElementsByClassName('smart-value')[0].setAttribute('filter', 'url(#mainGlow)');
			/* Needed for IE11 ! CSS Stroke has no support for IE11 */
			document.getElementsByClassName('smart-value-path')[0].setAttribute('stroke', 'url(#blueGrad)');
			document.getElementsByClassName('smart-value')[0].setAttribute('stroke', 'url(#outlineGrad)');
		}, 50)
	}
}