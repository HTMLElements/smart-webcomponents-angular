import {
	Component,
	OnInit,
	AfterViewInit,
	ViewEncapsulation
} from '@angular/core';
import { DynamicSmartButton } from './dynamic-smart-button/dynamic-smart-button.component';
import { smartDomService } from './smart-dom.service';

import { ButtonModule } from '@smart-webcomponents-angular/button';

import { DynamicSmartButton } from './dynamic-smart-button/dynamic-smart-button.component';

import { smartDomService } from './smart-dom.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ButtonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
	constructor(private smartDomService: smartDomService) { }

	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
	}

	flipCover(css: any, options: any): void {

		options = options || {};

		if (typeof css === 'object') {
			options = css;
		} else {
			options.css = css;
		}

		css = options.css;

		let url = options.url;
		let text = options.text || css;
		let width = options.width;
		let height = options.height;

		let section = document.querySelector('.flip-cover-' + css) as HTMLElement;
		if (!section) {
			return;
		}
		section.classList.add(css + '-section');

		let button = document.createElement('div') as HTMLElement;
		button.classList.add(css + '-button');
		button.style.width = '100%';
		button.style.height = '100%';

		let link = document.createElement('a');

		if (url) {
			link.setAttribute('href', url);
		}

		const obj = this.smartDomService.loadComponent(DynamicSmartButton, link);
		const smartButton = obj.componentRef.instance as DynamicSmartButton;
		setTimeout(() => {
			smartButton.button.innerHTML = text;
		});

		button.appendChild(link);

		let cover = document.createElement('div');
		cover.classList.add(css + '-cover');

		if (width) {
			section.style.width = width;
		}

		let outer = document.createElement('div');
		outer.classList.add(css + '-outer');

		let inner = document.createElement('div');
		inner.classList.add(css + '-inner');

		if (height) {

			section.style.height = height;

			let lineHeight = ':after{line - height: ' + height + ';}';

			let outerStyle = document.createElement('style');
			outerStyle.innerHTML = '.' + css + '-outer' + lineHeight;
			outer.appendChild(outerStyle);

			let innerStyle = document.createElement('style');
			innerStyle.innerHTML = '.' + css + '-inner' + lineHeight;
			inner.appendChild(innerStyle);
		}

		cover.appendChild(outer);
		cover.appendChild(inner);
		section.appendChild(button);
		section.appendChild(cover);
	}

	init(): void {
		// init code.
		this.flipCover('twiter', {
			url: 'https://google.com',
			text: 'Smart Web Components',
			width: '80px',
		});
		this.flipCover('linkedin', {
			url: 'https://google.com',
			text: 'Smart Web Components',
			width: '80px',
		});
		this.flipCover('email', {
			text: 'Smart Web Components @gmail',
			width: '80px',
			height: '50px',
		});
	}
}
