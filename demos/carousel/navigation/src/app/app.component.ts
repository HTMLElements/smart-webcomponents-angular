import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from '@smart-webcomponents-angular/button';
import { CarouselComponent } from '@smart-webcomponents-angular/carousel';
import { CheckBoxComponent } from '@smart-webcomponents-angular/checkbox';
import { TextBoxComponent } from '@smart-webcomponents-angular/textbox';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('carousel', { read: CarouselComponent, static: false }) carousel!: CarouselComponent;
    @ViewChild('textbox', { read: TextBoxComponent, static: false }) textbox!: TextBoxComponent;

    handleCheckBoxChange(event: CustomEvent, property: string) {
        switch (property) {
            case 'hideArrows':
                this.carousel.hideArrows = !event.detail.value
                break;
            case 'hideIndicators':
                this.carousel.hideIndicators = !event.detail.value
                break;
            case 'wheel':
                this.carousel.wheel = event.detail.value
                break;
            case 'swipe':
                this.carousel.swipe = event.detail.value
                break;
            case 'slideShow':
                this.carousel.slideShow = event.detail.value
                break;
            case 'loop':
                this.carousel.loop = event.detail.value
                break;
            default:
                break;
        }
    }

    handleButtonClick(event: Event) {
        const buttonId = ((event.currentTarget) as HTMLButtonElement).id;

        switch (buttonId) {
            case 'playButton':
                this.carousel.play()
                break;
            case 'pauseButton':
                this.carousel.pause()
                break;
            case 'prevButton':
                this.carousel.prev()
                break;
            case 'nextButton':
                this.carousel.next()
                break;
            case 'slideToButton':
                this.carousel.slideTo(parseInt('' + this.textbox.value) || 0)
                break
            default:
                break;
        }
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
        const basePath = 'https://htmlelements.com/demos/images/';

        this.carousel.dataSource = generateDataSource(6);

        function generateDataSource(items: number) {
            const dataSource = Array(items).fill({});
            dataSource.forEach((element, index) => dataSource[index] = {
                image: `${basePath}carousel-medium-${index + 1}.jpg`,
                label: 'Slide ' + index,
                content: 'Content ' + index
            });
            return dataSource;
        }
    }
}