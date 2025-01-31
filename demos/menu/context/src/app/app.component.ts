import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MenuComponent } from '@smart-webcomponents-angular/menu';

import { MenuModule } from '@smart-webcomponents-angular/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  MenuModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('menu', { read: MenuComponent, static: false }) menu!: MenuComponent;


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

        document.addEventListener('contextmenu', function (event: any) {
            event.preventDefault();
        });

        document.addEventListener('mousedown', function (event: any) {
            if (!that.menu.nativeElement.contains(event.target)) {
                that.menu.close();
            }
        });

        document.addEventListener('mouseup', function (event: any) {
            if (event.which === 3 && !that.menu.nativeElement.contains(event.target)) {
                that.menu.open(event.pageX, event.pageY);
            }
        });
    }
}