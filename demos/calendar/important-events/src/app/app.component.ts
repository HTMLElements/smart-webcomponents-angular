import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '@smart-webcomponents-angular/button';
import { CalendarComponent } from '@smart-webcomponents-angular/calendar';
import { DateRangeInputComponent } from '@smart-webcomponents-angular/daterangeinput';
import { MultilineTextBoxComponent } from '@smart-webcomponents-angular/multilinetextbox';
import { WindowComponent } from '@smart-webcomponents-angular/window';
import { Tooltip } from '@smart-webcomponents-angular/tooltip';

import { ButtonModule } from '@smart-webcomponents-angular/button';

import { CalendarModule } from '@smart-webcomponents-angular/calendar';

import { DateRangeInputModule } from '@smart-webcomponents-angular/daterangeinput';

import { MultilineTextBoxModule } from '@smart-webcomponents-angular/multilinetextbox';

import { WindowModule } from '@smart-webcomponents-angular/window';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ButtonModule, CalendarModule, DateRangeInputModule, MultilineTextBoxModule, WindowModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('calendar', { read: CalendarComponent, static: false }) calendar!: CalendarComponent;
    @ViewChild('daterangeinput', { read: DateRangeInputComponent, static: false }) daterangeinput!: DateRangeInputComponent;
    @ViewChild('multilinetextbox', { read: MultilineTextBoxComponent, static: false }) multilinetextbox!: MultilineTextBoxComponent;
    @ViewChild('window', { read: WindowComponent, static: false }) window!: WindowComponent;

    //Events data
    events: Object[] = [
        {
            dateFrom: '2020-01-03',
            dateTo: '2020-01-12',
            description: 'ATP Cup'
        },
        {
            dateFrom: '2020-01-20',
            dateTo: '2020-02-03',
            description: 'Australian Open'
        },
        {
            dateFrom: '2020-02-03',
            dateTo: '2020-02-09',
            description: 'Cordoba Open'
        },
        {
            dateFrom: '2020-02-10',
            dateTo: '2020-02-16',
            description: 'New York Open'
        },
        {
            dateFrom: '2020-03-17',
            dateTo: '2020-03-17',
            description: 'Saint Patrick\'s Day'
        },
        {
            dateFrom: '2020-03-25',
            dateTo: '2020-04-05',
            description: 'Miami Open presneted by Itau'
        },
        {
            dateFrom: '2020-05-11',
            dateTo: '2020-05-17',
            description: 'ATP Master Tennis'
        },
        {
            dateFrom: '2020-05-21',
            dateTo: '2020-05-21',
            description: 'Arena Zagreb'
        },
        {
            dateFrom: '2020-05-23',
            dateTo: '2020-05-23',
            description: 'Gwardia Stadium'
        },
        {
            dateFrom: '2020-05-24',
            dateTo: '2020-06-07',
            description: 'French Open'
        },
        {
            dateFrom: '2021-06-08',
            dateTo: '2021-06-14',
            description: 'Mercedess Cup'
        },
        {
            dateFrom: '2020-06-21',
            dateTo: '2020-07-04',
            description: 'Wimbledon'
        },
        {
            dateFrom: '2020-07-08',
            dateTo: '2020-07-08',
            description: 'Estadio Jose Zorila'
        },
        {
            dateFrom: '2020-07-11',
            dateTo: '2020-07-11',
            description: 'Bessa Stadium'
        },
        {
            dateFrom: '2020-07-12',
            dateTo: '2020-07-12',
            description: 'Estadio Olimpico - Seville'
        },
        {
            dateFrom: '2020-07-18',
            dateTo: '2020-07-26',
            description: 'Indianopolis Tennis Championships'
        },
        {
            dateFrom: '2020-07-27',
            dateTo: '2020-08-01',
            description: 'Countrywide Classic Tennis'
        },
        {
            dateFrom: '2020-08-03',
            dateTo: '2020-08-03',
            description: 'Madison Square Garden'
        },
        {
            dateFrom: '2020-08-05',
            dateTo: '2020-08-05',
            description: 'Happy Birthday John!'
        },
        {
            dateFrom: '2021-08-10',
            dateTo: '2021-08-16',
            description: 'Rodgers Cup'
        },
        {
            dateFrom: '2020-08-07',
            dateTo: '2020-08-11',
            description: 'Western & Southern Financial Group Women\'s Open'
        },
        {
            dateFrom: '2020-08-15',
            dateTo: '2020-08-23',
            description: 'Rogers Cup Women\'s Tennis'
        },
        {
            dateFrom: '2020-08-29',
            dateTo: '2020-09-10',
            description: 'US Open Tennis Championship'
        },
        {
            dateFrom: '2020-10-31',
            dateTo: '2020-10-31',
            description: 'Konig Pilsener Arena'
        },
        {
            dateFrom: '2020-11-01',
            dateTo: '2020-11-01',
            description: 'AWD Dome'
        },
        {
            dateFrom: '2020-11-07',
            dateTo: '2020-11-07',
            description: 'SAP Arena'
        },
        {
            dateFrom: '2020-11-12',
            dateTo: '2020-11-12',
            description: 'Recinto Ferial - Valencia'
        },
        {
            dateFrom: '2020-11-22',
            dateTo: '2020-11-27',
            description: 'Barclays ATP World Tour Finals'
        },
        {
            dateFrom: '2020-12-01',
            dateTo: '2020-12-01',
            description: 'Arena Nurnberg'
        },
        {
            dateFrom: '2020-12-12',
            dateTo: '2020-12-12',
            description: 'Scottish Exhibition & Conference Center'
        },
        {
            dateFrom: '2020-12-19',
            dateTo: '2020-12-21',
            description: 'International Horse Show'
        },
        {
            dateFrom: '2020-12-24',
            dateTo: '2020-12-26',
            description: 'Merry Christmas !'
        },
        {
            dateFrom: '2020-12-27',
            dateTo: '2020-12-30',
            description: 'Peter Pan'
        },
    ];

    eventDetails: {
        from: Date,
        to?: Date,
        description: string
    } | null = null;

    //Handles Events Data
    getImportantDates(dataSource?: any) {
        let dates = [];

        if (!dataSource) {
            dataSource = this.events;
        }

        for (let i = 0; i < dataSource.length; i++) {
            const event = dataSource[i];
            let dateFrom = new Date(event.dateFrom), dateTo = new Date(event.dateTo);

            dateFrom.setHours(0, 0, 0, 0);
            dateTo.setHours(0, 0, 0, 0);

            while (dateFrom.getTime() < dateTo.getTime()) {
                dates.push({ date: new Date(dateFrom), description: event.description });
                dateFrom.setDate(dateFrom.getDate() + 1);
                dateFrom.setHours(0, 0, 0, 0);
            }

            dates.push({ date: new Date(dateTo), description: event.description });
        }

        return dates;
    }

    //Returns an event based on it's Date
    getImportantDate(date: Date) {
        date = new Date(date);
        date.setHours(0, 0, 0, 0);

        const event = this.importantDatesData.find(dateObj => dateObj.date.getTime() === date.getTime());

        if (!event) {
            return null;
        }

        const eventDates = this.importantDatesData.filter(dateObj => dateObj.description === event.description);

        if (eventDates.length) {
            return { from: eventDates[0].date, to: eventDates[eventDates.length - 1].date, description: event.description };
        }

        return null
    }

    importantDatesData = this.getImportantDates();

    months: number = 12;

    firstDayOfWeek: number = 1;

    importantDates: Date[] = this.importantDatesData.map((dateObj) => dateObj.date);

    scrollButtonsPosition: string = 'far';

    selectedDates: string[] = ['2020-01-01'];

    headerTemplate: string = 'headerTemplate';

    tooltipTemplate: string = 'tooltipTemplate';

    tooltip: boolean = true;

    handleReady(event: CustomEvent) {
        const that = this,
            calendar = that.calendar,
            descriptionInput = that.multilinetextbox,
            dateRangeInput = that.daterangeinput,
            eventWindow = that.window;

        calendar.selectionMode = 'none';

        //Delete Event
        document.getElementById('buttonDelete')?.addEventListener('click', () => {
            if (!this.eventDetails) {
                eventWindow.close();
                return;
            }

            this.importantDatesData = this.importantDatesData
                .filter(dateObj => dateObj.description !== this.eventDetails!.description);

            calendar.importantDates = this.importantDatesData
                .map(dateObj => dateObj.date);

            eventWindow.close();
        });

        //Cancel Event Editing
        document.getElementById('buttonCancel')?.addEventListener('click', () => {
            eventWindow.close();
            this.eventDetails = null;
        });

        //Save Event
        document.getElementById('buttonSave')?.addEventListener('click', () => {
            if (!that.eventDetails) {
                eventWindow.close();
                return;
            }

            that.importantDatesData = that.importantDatesData
                .filter(dateObj => dateObj.description !== that.eventDetails!.description);

            const newDateRangeString: string = dateRangeInput.value;

            let newDateRange: { from: Date; to: Date } = {
                from: new Date(newDateRangeString.split(' - ')[0]),
                to: new Date(newDateRangeString.split(' - ')[1])
            }

            if (!newDateRange) {
                return;
            }

            const newImportantDates = that.getImportantDates(
                [{
                    dateFrom: newDateRange.from,
                    dateTo: newDateRange.to,
                    description: descriptionInput.value || ''
                }]
            );

            that.importantDatesData = that.importantDatesData.concat(newImportantDates);
            calendar.importantDates = that.importantDatesData.map(dateObj => dateObj.date);
            eventWindow.close();
        });
    }

    //Handle Tooltip and prepare editor window
    handleCalendarOpen(event: CustomEvent) {
        const tooltip = event.detail.target as Tooltip;
        
        if (!(tooltip instanceof window.Smart.Tooltip)) {
            return;
        }

        this.eventDetails = this.getImportantDate(event.detail.value);

        if (this.eventDetails) {
            tooltip.value = this.window.label = this.multilinetextbox.value = this.eventDetails.description;
            this.daterangeinput.value = this.eventDetails;
        }
    }

    //Handle Calendar Header buttons
    handleCalendarClick(event: Event) {
        let target = event.target as HTMLElement;
        
        if (target.closest('.event-window-button')) {
            this.window.open();
        }

        if (!target.closest('smart-button')) { return }

        target = target.closest('smart-button')!;

        if (!target) {
            return;
        }

        switch (target.id) {
            case 'next':
                this.calendar.navigate(12);
                break;
            case 'previous':
                this.calendar.navigate(-12);
                break;
            case 'today':
                const today = new Date();
                today.setDate(1);
                today.setMonth(0);
                this.calendar.navigate(today);
                break;
            case 'month':
                this.calendar.displayMode = 'month';
                break;
            case 'year':
                this.calendar.displayMode = 'year';
                break;
            case 'decade':
                this.calendar.displayMode = 'decade';
                break;
        }
    }

    //Set the primary button for the current display mode
    handleCalendarDisplayModeChange() {
        const displayMode = this.calendar.displayMode;
        const viewSelection = document.querySelector('.view-selection');
        
        if (!viewSelection) { return }

        const viewSelectionButtons = viewSelection.querySelectorAll('smart-button');

        for (let i = 0; i < viewSelectionButtons.length; i++) {
            const button = viewSelectionButtons[i];
            if (button.id !== displayMode) {
                button.classList.remove('primary');
            }
            else {
                button.classList.add('primary');
            }
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

        const that = this,
            calendar = that.calendar,
            descriptionInput = that.multilinetextbox,
            dateRangeInput = that.daterangeinput,
            eventWindow = that.window;

        //Create new Event on DoubleClick
        calendar.addEventListener('dblclick', function (event) {
            console.log('double click');

            const target = event.target as HTMLElement,
                calendarCell = target.closest('.smart-calendar-cell') as any;

            if (calendarCell) {
                const cellDate = new Date(calendarCell.value);
                that.eventDetails = that.getImportantDate(cellDate) || { from: cellDate, description: 'New Event' };
                eventWindow.label = descriptionInput.value = that.eventDetails.description;
                dateRangeInput.value = that.eventDetails;
                eventWindow.open();
            }
        });
    }
}