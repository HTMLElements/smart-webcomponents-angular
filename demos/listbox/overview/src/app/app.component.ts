import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '@smart-webcomponents-angular/button';
import { ListBoxComponent, ListBox } from '@smart-webcomponents-angular/listbox';

import { ButtonModule } from '@smart-webcomponents-angular/button';import { ListBoxModule } from '@smart-webcomponents-angular/listbox';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ButtonModule, ListBoxModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('listbox', { read: ListBoxComponent, static: false }) listbox!: ListBoxComponent;
    @ViewChild('listbox2', { read: ListBoxComponent, static: false }) listbox2!: ListBoxComponent;
    @ViewChild('listbox3', { read: ListBoxComponent, static: false }) listbox3!: ListBoxComponent;
    @ViewChild('listbox4', { read: ListBoxComponent, static: false }) listbox4!: ListBoxComponent;
    @ViewChild('listbox5', { read: ListBoxComponent, static: false }) listbox5!: ListBoxComponent;
    @ViewChild('listbox6', { read: ListBoxComponent, static: false }) listbox6!: ListBoxComponent;
    @ViewChild('listbox7', { read: ListBoxComponent, static: false }) listbox7!: ListBoxComponent;
    @ViewChild('listbox8', { read: ListBoxComponent, static: false }) listbox8!: ListBoxComponent;
    @ViewChild('listbox9', { read: ListBoxComponent, static: false }) listbox9!: ListBoxComponent;


    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.


        function configureListBoxes() {
            function configureGestureListBox() {
                let gestureListbox = document.getElementById('gestureListBox');

                if (!gestureListbox) { return }

                (gestureListbox as ListBox).itemTemplate = 'multiLineTemplate';

                let actionButtons = gestureListbox.getElementsByClassName('secondLine'), button;

                for (let i = 0; i < actionButtons.length; i++) {
                    button = document.createElement('smart-button');
                    button.id = 'actionButton';
                    button.classList.add('material', 'flat');
                    button.innerHTML = '<i class="material-icons">&#xE8B8;</i>';
                    actionButtons[i].appendChild(button);
                }

                function handleSwipe(event: any) {
                    let target = event.originalEvent.target.closest('smart-list-item'), actionButton = document.getElementById('actionButton'), isSameItem, reset, oldSwipeType, type = event.type === 'swipeleft' ? 'left' : 'right';
                    if (!target) {
                        return;
                    }
                    target.classList.remove('swipe-right-left');
                    let swipedLeftItems = target.getElementsByClassName('swipe-left'), swipedRightItems = target.getElementsByClassName('swipe-right');
                    if (swipedLeftItems.length === 1) {
                        oldSwipeType = 'left';
                        isSameItem = swipedLeftItems[0] === target ? true : false;
                        reset = isSameItem && type === 'left' ? true : false;
                        swipedLeftItems[0].classList.remove('swipe-left');
                    }
                    else if (swipedRightItems.length === 1) {
                        oldSwipeType = 'right';
                        isSameItem = swipedRightItems[0] === target ? true : false;
                        reset = isSameItem && type === 'right' ? true : false;
                        swipedRightItems[0].classList.remove('swipe-right');
                    }
                    if (isSameItem && oldSwipeType !== 'left') {
                        target.classList.add('swipe-right-left');
                    }
                    if (reset) {
                        return;
                    }
                    const button = target.querySelector('smart-button');
                    if (type === 'right') {
                        button.innerHTML = '<i class="material-icons">&#xE307;</i>';
                    }
                    else {
                        button.innerHTML = '<i class="material-icons">&#xE2C4;</i>';
                    }
                    target.classList.add('swipe-' + type);
                }
                gestureListbox.addEventListener('swipeleft', handleSwipe);
                gestureListbox.addEventListener('swiperight', handleSwipe);
            }
            function configureDemoListBoxes() {
                let switchWifi = document.createElement('smart-switch-button')
                let switchBluetooth = document.createElement('smart-switch-button')
                let settingsMenu = document.getElementById('settingsMenu')
                let phoneBook = document.getElementById('phoneBook')
                let twoLineList = document.getElementById('twoLineList')
                let twoLineCheckList = document.getElementById('twoLineCheckList')
                let deleteButton = document.getElementById('deleteButton')
                let people = (phoneBook as ListBox).items || []
                let button;
                let iconLabels = [
                    'network_wifi',
                    'bluetooth',
                    'data_usage',
                    'usb',
                    '',
                    'settings',
                    'settings_phone',
                    'notifications',
                    'stay_primary_portrait',
                    'storage',
                    'battery_std',
                    'apps',
                    'people',
                    'gps_fixed',
                    'security',
                    'account_box',
                    'home',
                    'keyboard',
                    'settings_backup_restore',
                    'access_time',
                    'accessibility',
                    'print',
                    'phone_android',
                    'help'
                ];

                if (!twoLineCheckList) { return }

                switchWifi.classList.add('material');
                switchBluetooth.classList.add('material');
                switchWifi.checked = true;
                (settingsMenu as ListBox).itemTemplate = 'itemTemplate';
                const icons = document.getElementsByClassName('primaryAction');

                for (let i = 0; i < icons.length; i++) {
                    icons[i].children[0].textContent = iconLabels[i];
                }
                (phoneBook as ListBox).itemTemplate = 'itemTemplate';
                for (let i = 0; i < people.length; i++) {
                    button = document.createElement('smart-button');
                    button.classList.add('material', 'flat');
                    button.innerHTML = '<i class="material-icons">&#xE0C9;</i>';
                }
                (twoLineList as ListBox).itemTemplate = 'multiLineTemplate';
                let twoLineListItems = (twoLineList as ListBox).items || []
                let secondLineContent = [
                    'General Manager',
                    'Developer',
                    'Musician',
                    'Architect',
                    'Janitor',
                    'Waitress',
                    'Developer',
                    'CEO',
                    'Team leader',
                    'Technical advisor',
                    'Human resources(HR)',
                    'Financial advisor',
                    'Consultant',
                    'Human resources(HR)',
                    'Tester',
                    'Quality Assurance(QA)',
                    'Software Developer',
                ];
                for (let i = 0; i < twoLineListItems.length; i++) {
                    const item = (twoLineListItems[i] as HTMLElement).getElementsByClassName('secondLine')[0];

                    if (!item) {
                        continue;
                    }

                    item.textContent = secondLineContent[i];
                }
                (twoLineCheckList as ListBox).itemTemplate = 'multiLineTemplate';
                let twoLineCheckListItems = (twoLineCheckList as ListBox).items || [];
                secondLineContent = [
                    '650KB',
                    '105MB',
                    '497MB',
                    '1.2MB',
                    '345KB',
                    '1.2GB',
                    '12MB',
                    '2.4MB',
                    '7.5GB',
                    '1.72GB',
                    '450MB',
                    '480KB',
                    '120KB',
                    '12.7MB',
                    '784MB',
                    '920KB',
                    '1.7MB'
                ];
                for (let i = 0; i < twoLineCheckListItems.length; i++) {
                    const item = (twoLineCheckListItems[i] as HTMLElement).getElementsByClassName('secondLine')[0];

                    if (item) {
                        item.textContent = secondLineContent[i];
                    }
                }
                twoLineCheckList?.addEventListener('change', function () {
                    if ((twoLineCheckList as ListBox).selectedIndexes!.length > 0) {
                        deleteButton?.classList.remove('smart-visibility-hidden');
                    }
                    else {
                        deleteButton?.classList.add('smart-visibility-hidden');
                    }
                });
                deleteButton?.addEventListener('click', function () {
                    for (let index = (twoLineCheckList as ListBox).selectedIndexes!.length - 1; index > -1; index--) {
                        (twoLineCheckList as ListBox).removeAt((twoLineCheckList as ListBox).selectedIndexes![index]);
                    }
                });
            }
            function configureThemedListBoxes() {
                let switchVibration = document.createElement('smart-switch-button'), switchRingtone = document.createElement('smart-switch-button'), switchNotificationLight = document.createElement('smart-switch-button'), switchNotificationLightDark = document.createElement('smart-switch-button'), switchNotificationsLockScreen = document.createElement('smart-switch-button'), ringSlider = document.createElement('smart-slider'), mediaSlider = document.createElement('smart-slider'), alarmSlider = document.createElement('smart-slider'), listBoxLight = document.getElementById('listBoxLight');
                let listBoxLightSecondaryAction = listBoxLight?.getElementsByClassName('secondLine');

                if(!listBoxLightSecondaryAction) { return}
                [switchVibration, switchRingtone,
                    switchNotificationLight, switchNotificationLightDark,
                    switchNotificationsLockScreen,
                    ringSlider, mediaSlider, alarmSlider
                ].map(function (element) {
                    element.classList.add('material');
                });
                [ringSlider, mediaSlider, alarmSlider].map(function (element) {
                    element.scalePosition = 'none';
                });
                mediaSlider.value = (mediaSlider.max as number) / 2;
                ringSlider.value = (ringSlider.max as number) / 1.5;
                alarmSlider.value = alarmSlider.max;
                switchVibration.checked = switchNotificationLight.checked = switchNotificationLightDark.checked = true;
                (listBoxLight as ListBox).itemTemplate = 'multiLineTemplate';
                // Light themed list box
                if (listBoxLightSecondaryAction[2]) {
                    listBoxLightSecondaryAction[2].innerHTML = '<i class="material-icons">&#xE050;</i>';
                    listBoxLightSecondaryAction[2].appendChild(mediaSlider);
                    listBoxLightSecondaryAction[3].innerHTML = '<i class="material-icons">&#xE855;</i>';
                    listBoxLightSecondaryAction[3].appendChild(alarmSlider);
                    listBoxLightSecondaryAction[4].innerHTML = '<i class="material-icons">&#xE7F4;</i>';
                    listBoxLightSecondaryAction[4].appendChild(ringSlider);
                    listBoxLightSecondaryAction[5].parentElement?.classList.add('single-line');
                    listBoxLightSecondaryAction[5].appendChild(switchVibration);
                    listBoxLightSecondaryAction[8].parentElement?.classList.add('single-line');
                    listBoxLightSecondaryAction[8].appendChild(switchRingtone);
                    listBoxLightSecondaryAction[11].parentElement?.classList.add('single-line');
                    listBoxLightSecondaryAction[11].appendChild(switchNotificationLight);
                    listBoxLightSecondaryAction[14].parentElement?.classList.add('single-line');
                    listBoxLightSecondaryAction[14].appendChild(switchNotificationsLockScreen);
                    //Additional text
                    listBoxLightSecondaryAction[7].textContent = 'Breeze';
                    listBoxLightSecondaryAction[9].textContent = 'Notification';
                    listBoxLightSecondaryAction[15].textContent = 'No apps can read notifications';
                }
                const sliderControl = function (event: Event) {
                    const slider = event.target as any;
                    switch (slider) {
                        case mediaSlider:
                            slider.previousElementSibling!.textContent = slider.value === slider.min ? 'volume_off' : 'volume_up';
                            break;
                        case alarmSlider:
                            slider.previousElementSibling!.textContent = slider.value === slider.min ? 'alarm_off' : 'alarm';
                            break;
                        case ringSlider:
                            slider.previousElementSibling!.textContent = slider.value === slider.min ? 'notifications_off' : 'notifications';
                            break;
                    }
                };
                mediaSlider.addEventListener('change', sliderControl);
                alarmSlider.addEventListener('change', sliderControl);
                ringSlider.addEventListener('change', sliderControl);
            }
            configureDemoListBoxes();
            configureThemedListBoxes();
            configureGestureListBox();
        }
        configureListBoxes();


    }
}