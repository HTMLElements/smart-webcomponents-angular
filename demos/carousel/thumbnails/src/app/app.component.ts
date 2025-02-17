import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { CarouselComponent } from '@smart-webcomponents-angular/carousel';

import { CarouselModule } from '@smart-webcomponents-angular/carousel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  CarouselModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('carousel', { read: CarouselComponent, static: false }) carousel!: CarouselComponent;


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

        this.carousel.dataSource = generateDataSource(7);

        function generateDataSource(items: number) {
            let dataSource = Array(items).fill({});
            dataSource.forEach((element, index) => dataSource[index] = {
                image: `${basePath}carousel-large-${index + 1}.jpg`,
                thumb: `${basePath}carousel-xs-${index + 1}.jpg`
            });
            return dataSource;
        }
    }
}