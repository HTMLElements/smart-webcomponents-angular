import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    
        let stars = document.querySelectorAll('#listMenu4 .material-icons');
        for (let i = 0; i < stars.length; i++) {
            stars[i].addEventListener('click', function (event) {
                event.stopPropagation();
                if (this.classList.contains('empty')) {
                    this.innerHTML = '&#xE838;';
                    this.classList.remove('empty');
                }
                else {
                    this.innerHTML = '&#xE83A;';
                    this.classList.add('empty');
                }
            });
        }
    

	}	
}