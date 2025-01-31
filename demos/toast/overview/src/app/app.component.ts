import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '@smart-webcomponents-angular/button';
import { Toast, ToastComponent } from '@smart-webcomponents-angular/toast';

import { ButtonModule } from '@smart-webcomponents-angular/button';import { ToastModule } from '@smart-webcomponents-angular/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ButtonModule, ToastModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('toast', { read: ToastComponent, static: false }) toast!: ToastComponent;
    @ViewChild('toast2', { read: ToastComponent, static: false }) toast2!: ToastComponent;
    @ViewChild('toast3', { read: ToastComponent, static: false }) toast3!: ToastComponent;
    @ViewChild('toast4', { read: ToastComponent, static: false }) toast4!: ToastComponent;
    @ViewChild('toast5', { read: ToastComponent, static: false }) toast5!: ToastComponent;
    @ViewChild('toast6', { read: ToastComponent, static: false }) toast6!: ToastComponent;


    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.


        let mobileToast1 = document.getElementById('mobileToast1') as Toast
        const mobileToast2 = document.getElementById('mobileToast2') as Toast
        const desktopToast = document.getElementById('desktopToast') as Toast
        const notificationMessagingContainer = document.getElementById('notificationMessagingContainer')
        let mobileToastsAreOpened = false
        let notificationsCount = 0
        let toastContentOptions = ['Add a new label', 'This item alredy has the label "travel".']
        let notificationsText = ['Hi!', 'How are you?', 'Do you want to see a movie tohinght?'];

        const notificationMessaging = document.querySelector("#notificationMessaging") as Toast;

        setInterval(function () { toggleMobileToasts(); }, 2000);
        function toggleMobileToasts() {
            if (mobileToastsAreOpened) {
                mobileToast1?.closeAll();
                mobileToast2?.closeAll();
                desktopToast?.closeAll();
                if (notificationsCount > 2) {
                    notificationMessaging?.closeAll();
                    notificationsCount = 0;
                }
            }
            else {
                mobileToast1?.open();
                mobileToast2.value = toastContentOptions[Math.floor((Math.random() * 2))];
                mobileToast2.open();
                desktopToast.open();
                notificationMessaging.open();
                notificationMessaging.value = notificationsText[notificationsCount];
                notificationsCount++;
            }
            mobileToastsAreOpened = !mobileToastsAreOpened;
            window.Smart.Render()
        }
        notificationMessagingContainer?.addEventListener('click', function (event) {
            const target = event.target as Element;
            let clickedArrow = target.closest('.material-icons.arrow')
            const clickedItem = target.closest('.smart-toast-item');

            if (clickedArrow) {
                let footer = clickedItem?.querySelector('.message-footer');
                footer?.classList.toggle('smart-hidden');
                clickedArrow.innerHTML = footer?.classList.contains('smart-hidden') ? '&#xE313;' : '&#xE316;';
            }
        });


    }
}