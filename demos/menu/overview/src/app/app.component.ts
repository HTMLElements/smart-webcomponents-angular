import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '@smart-webcomponents-angular/button';
import { MenuComponent } from '@smart-webcomponents-angular/menu';

import { ButtonModule } from '@smart-webcomponents-angular/button';import { MenuModule } from '@smart-webcomponents-angular/menu';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ButtonModule, MenuModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
    @ViewChild('button4', { read: ButtonComponent, static: false }) button4!: ButtonComponent;
    @ViewChild('button5', { read: ButtonComponent, static: false }) button5!: ButtonComponent;
    @ViewChild('button6', { read: ButtonComponent, static: false }) button6!: ButtonComponent;
    @ViewChild('button7', { read: ButtonComponent, static: false }) button7!: ButtonComponent;
    @ViewChild('menu', { read: MenuComponent, static: false }) menu!: MenuComponent;
    @ViewChild('menu2', { read: MenuComponent, static: false }) menu2!: MenuComponent;
    @ViewChild('menu3', { read: MenuComponent, static: false }) menu3!: MenuComponent;
    @ViewChild('menu4', { read: MenuComponent, static: false }) menu4!: MenuComponent;
    @ViewChild('menu5', { read: MenuComponent, static: false }) menu5!: MenuComponent;
    @ViewChild('menu6', { read: MenuComponent, static: false }) menu6!: MenuComponent;


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
        const menu1Container = document.getElementById('menu1Container')
        const menu3Container = document.getElementById('menu3Container')
        const menuTokens = document.getElementsByClassName('menu-token')
        const menu1 = document.getElementById('menu1')
        const menu3 = document.getElementById('menu3');

        if (!menu1 || !menu3) { return }

        menu1.classList.remove('animation');
        that.menu.open(202, 35);
        menu1.classList.add('animation');
        window.scrollTo(0, 0);
        document.body.addEventListener('contextmenu', function (event: any) {
            let target = event.target;
            if (menu1Container?.contains(target) || menu3Container?.contains(target)) {
                event.preventDefault();
            }
        });
        document.addEventListener('mousedown', function (event: any) {
            if (!menu1.contains((event.target))) {
                that.menu.close();
            }
            if (!menu3.contains(event.target)) {
                that.menu3.close();
            }
        });
        menuTokens[0].addEventListener('mouseup', function (event) {
            that.menu.open(202, 35);
        });
        menu3Container?.addEventListener('mouseup', function (event: any) {
            let token = event.target.closest('.menu-token');
            if (token) {
                that.menu3.open(194, token.offsetTop);
            }
        });


    }
}