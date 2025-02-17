import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
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


        const basePath = '../../../src/images/';
        
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