import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ProgressBarComponent } from '@smart-webcomponents-angular/progressbar';
import { ToggleButtonComponent } from '@smart-webcomponents-angular/togglebutton';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('progressbar', { read: ProgressBarComponent, static: false }) progressbar: ProgressBarComponent;
	@ViewChild('progressbar2', { read: ProgressBarComponent, static: false }) progressbar2: ProgressBarComponent;
	@ViewChild('progressbar3', { read: ProgressBarComponent, static: false }) progressbar3: ProgressBarComponent;
	@ViewChild('progressbar4', { read: ProgressBarComponent, static: false }) progressbar4: ProgressBarComponent;
	@ViewChild('togglebutton', { read: ToggleButtonComponent, static: false }) togglebutton: ToggleButtonComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    
        const progressBars = document.getElementsByClassName('determinate');
        let hoverArea = document.getElementById('hover-area'), linearProgressBar1 = progressBars[0], linearProgressBar2 = progressBars[1], linearProgressBar3 = progressBars[2], circularProgressBar1 = progressBars[3], circularProgressBar2 = progressBars[2], mouseHoverArea = document.getElementsByClassName('page-refresh-progress')[0], uploadButton = document.getElementById('toggleUploadButton'), value, isPaused;
        mouseHoverArea.addEventListener('mouseenter', function () {
            document.getElementById('refreshing').classList.remove('smart-visibility-hidden');
        });
        mouseHoverArea.addEventListener('mouseleave', function () {
            document.getElementById('refreshing').classList.add('smart-visibility-hidden');
        });
        uploadButton.addEventListener('change', function (event) {
            let circularProgressBar1 = document.getElementsByClassName('uploading')[0];
            if (uploadButton.disabled || (circularProgressBar1.value > 0 && circularProgressBar1.value < circularProgressBar1.max)) {
                return;
            }
            if (event.detail.value) {
                circularProgressBar1.readonly = true;
                circularProgressBar1.$.addClass('start');
                let uploading = setInterval(function () {
                    circularProgressBar1.value += 25;
                    circularProgressBar2.value += 25;
                    if (circularProgressBar1.value > circularProgressBar1.max) {
                        clearInterval(uploading);
                        circularProgressBar1.$.addClass('finish');
                        circularProgressBar1.$.removeClass('start');
                        setTimeout(function () {
                            uploadButton.$.button.style.backgroundColor = '#F47B12';
                            uploadButton.$.button.innerHTML = '<i class="material-icons">done</i>';
                            circularProgressBar1.readonly = false;
                            circularProgressBar1.$.removeClass('finish');
                        }, 250);
                    }
                }, 750);
            }
            else {
                circularProgressBar1.value = circularProgressBar1.min;
                uploadButton.$.button.style.backgroundColor = '';
                uploadButton.$.button.innerHTML = '<i class="material-icons">cloud_upload</i>';
            }
        });
        setInterval(function () {
            if (isPaused) {
                return;
            }
            value = Math.random() * 15;
            linearProgressBar1.value += value;
            linearProgressBar2.value += value;
            circularProgressBar1.value += value;
            circularProgressBar2.value += value;
            if (linearProgressBar1.value >= linearProgressBar1.max) {
                isPaused = true;
                linearProgressBar1.classList.add('finished');
                linearProgressBar2.classList.add('finished');
                circularProgressBar1.classList.add('finished');
                setTimeout(function () {
                    linearProgressBar1.value = linearProgressBar1.min;
                    linearProgressBar2.value = linearProgressBar2.min;
                    circularProgressBar1.value = circularProgressBar1.min;
                    linearProgressBar1.classList.remove('finished');
                    linearProgressBar2.classList.remove('finished');
                    circularProgressBar1.classList.remove('finished');
                    isPaused = false;
                }, 1500);
            }
        }, 500);
    

	}	
}