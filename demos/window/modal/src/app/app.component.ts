import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '@smart-webcomponents-angular/button';
import { WindowComponent, Window } from '@smart-webcomponents-angular/window';

import { ButtonModule } from '@smart-webcomponents-angular/button';

import { WindowModule } from '@smart-webcomponents-angular/window';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ButtonModule, WindowModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
    @ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
    @ViewChild('modalWindow', { read: WindowComponent, static: false }) modalWindow!: WindowComponent;
    @ViewChild('formWindow', { read: WindowComponent, static: false }) formWindow!: WindowComponent;

    onButtonClick(event: any): void {
        this.formWindow.opened ? this.formWindow.close() : this.formWindow.open();
    }

    onWindowReady(event: any): void {
        this.init();
    }

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.

    }

    init(): void {
        // init code.

        const that = this,
            modal = that.modalWindow;

        function cancelHandler(event: CustomEvent): void {
            const target: HTMLElement = event.target as HTMLElement,
                formWindow = that.formWindow,
                modal = that.modalWindow.nativeElement;

            target.closest('smart-window') === modal ? modal.close() : formWindow.close();
        }

        function agreeHandler(event: CustomEvent): void {
            const target: HTMLElement = event.target as HTMLElement,
                formWindow = that.formWindow,
                modal = that.modalWindow.nativeElement;

            if (target.closest('smart-window') as Window === modal) {
                formWindow.close();
                modal.close();
            }
            else {
                modal.open();
            }
        }

        const cancel1 = document.getElementsByClassName('cancel') ? document.getElementsByClassName('cancel')[0] : null;
        cancel1?.addEventListener('click', cancelHandler as EventListener);

        const cancel2 = document.getElementsByClassName('cancel') ? document.getElementsByClassName('cancel')[1] : null;
        cancel2?.addEventListener('click', cancelHandler as EventListener);

        const agree1 = document.getElementsByClassName('agree') ? document.getElementsByClassName('agree')[0] : null;
        agree1?.addEventListener('click', agreeHandler as EventListener);

        const agree2 = document.getElementsByClassName('agree') ? document.getElementsByClassName('agree')[1] : null;
        agree2?.addEventListener('click', agreeHandler as EventListener);

        if(modal.nativeElement.querySelector('.cancel')) {
            modal.nativeElement.querySelector('.cancel')!.innerHTML = 'No';
        }
        if(modal.nativeElement.querySelector('.agree')) {
            modal.nativeElement.querySelector('.agree')!.innerHTML = 'Yes';
        }
    }
}