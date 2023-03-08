import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { DynamicSmartButton } from './dynamic-smart-button/dynamic-smart-button.component';
import { smartDomService } from './smart-dom.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {

    constructor(private smartDomService: smartDomService) {

    }

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.

        const obj = this.smartDomService.loadComponent(DynamicSmartButton, document.body);
        const smartButton = obj.componentRef.instance as DynamicSmartButton;

        setTimeout(() => {
            smartButton.button.nativeElement.id = "button";
            smartButton.button.innerHTML = "Click Me";
            smartButton.button.addEventListener("click", function () {
                smartButton.button.innerHTML = "Clicked";
            });
        });
    }
}