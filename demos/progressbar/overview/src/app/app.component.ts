import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ProgressBarComponent } from '@smart-webcomponents-angular/progressbar';
import { ToggleButtonComponent } from '@smart-webcomponents-angular/button';


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
	    
        const that = this;
        const progressBars = document.getElementsByClassName('determinate');
        let hoverArea = document.getElementById('hover-area'), linearProgressBar1 = progressBars[0], linearProgressBar2 = progressBars[1], linearProgressBar3 = progressBars[2], circularProgressBar1 = progressBars[3], circularProgressBar2 = progressBars[2], mouseHoverArea = document.getElementsByClassName('page-refresh-progress')[0], uploadButton = document.getElementById('toggleUploadButton'), value, isPaused;
        mouseHoverArea.addEventListener('mouseenter', function () {
            document.getElementById('refreshing').classList.remove('smart-visibility-hidden');
        });
        mouseHoverArea.addEventListener('mouseleave', function () {
            document.getElementById('refreshing').classList.add('smart-visibility-hidden');
        });
        uploadButton.addEventListener('change', function (event:CustomEvent) {
            if (that.togglebutton.disabled || (that.progressbar4.value > 0 && that.progressbar4.value < that.progressbar4.max)) {
                return;
            }
            if (event.detail.value) {
                that.progressbar4.nativeElement.readonly = true;
                that.progressbar4.nativeElement.classList.add('start');
                let uploading = setInterval(function () {
                    that.progressbar4.value += 25;
                    that.progressbar4.value += 25;
                    if (that.progressbar4.value > that.progressbar4.max) {
                        clearInterval(uploading);
                        that.progressbar4.nativeElement.classList.add('finish');
                        that.progressbar4.nativeElement.classList.remove('start');
                        setTimeout(function () {
                            that.togglebutton.nativeElement.style.backgroundColor = '#F47B12';
                            that.togglebutton.nativeElement.innerHTML = '<i class="material-icons">done</i>';
                            that.progressbar4.nativeElement.readonly = false;
                            that.progressbar4.nativeElement.classList.remove('finish')
                        }, 250);
                    }
                }, 750);
            }
            else {
                that.progressbar4.value = that.progressbar4.min;
                that.togglebutton.nativeElement.style.backgroundColor = '';
                that.togglebutton.nativeElement.innerHTML = '<i class="material-icons">cloud_upload</i>';
            }
        });
        setInterval(function () {
            if (isPaused) {
                return;
            }
            value = Math.random() * 15;
            that.progressbar.value += value;
            that.progressbar2.value += value;
            that.progressbar3.value += value;
            that.progressbar4.value += value;
            if (that.progressbar.value >= that.progressbar.max) {
                isPaused = true;
                that.progressbar.nativeElement.classList.add('finished');
                that.progressbar2.nativeElement.classList.add('finished');
                that.progressbar3.nativeElement.classList.add('finished');
                setTimeout(function () {
                    that.progressbar.value = that.progressbar.min;
                    that.progressbar2.value = that.progressbar2.min;
                    that.progressbar3.value = that.progressbar3.min;
                    that.progressbar.nativeElement.classList.remove('finished');
                    that.progressbar2.nativeElement.classList.remove('finished');
                    that.progressbar3.nativeElement.classList.remove('finished');
                    isPaused = false;
                }, 1500);
            }
        }, 500);
    

	}	
}