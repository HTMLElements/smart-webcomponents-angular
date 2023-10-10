import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Locale } from '../interfaces/Locale';
import { LocaleEmitterValue, LocalizationService } from '../services/localization.service';

import { EmployeeService } from '../services/employee.service';

import { SchedulerComponent, SchedulerEvent, SchedulerModule, SchedulerResource } from 'smart-webcomponents-angular/scheduler';
import { ButtonModule } from 'smart-webcomponents-angular/button';

@Component({
  selector: 'app-planning',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css'],
  imports: [CommonModule, SchedulerModule, ButtonModule]
})
export class PlanningComponent implements AfterViewInit {
  @ViewChild('scheduler', { read: SchedulerComponent, static: false }) scheduler!: SchedulerComponent;
  @ViewChild('nonworkingHoursButton', { read: ButtonModule, static: false }) nonworkingHoursButton!: ButtonModule;
  @ViewChild('schedulerFooterTemplate') schedulerFooterTemplate!: ElementRef;

  teamCalendarString: string = 'Team calendar'
  showWorkingHoursString: string = 'Show working hours'

  events: SchedulerEvent[];

  schedulerSettings = {
    nonworkingHours: [[17, 18]],
    nonworkingDays: [0, 6],
    hourStart: 8,
    hourEnd: 18,
    footerTemplate: (footerContainer: Element) => {
      footerContainer.appendChild(this.schedulerFooterTemplate.nativeElement)
      this.schedulerFooterTemplate.nativeElement.style.display = 'flex'
    },
    views: [
      { label: 'Day', value: 'day', type: 'day' },
      { label: 'Week', value: 'week', type: 'week' },
      {
        label: 'Work week',
        value: 'workWeek',
        type: 'week',
        hideWeekend: true
      },
      {
        label: 'Month', value: 'month', type: 'month'
      }
    ],
    dateCurrent: new Date(2023, 6, 25),
    view: 'workWeek',
    filterable: true,
    resources: [
      {
        label: 'Employees',
        value: 'employeeId',
        dataSource: [{
          label: 'Daniel Smith',
          title: 'Administrator',
          image: '',
          id: 1,
          backgroundColor: '#86DE4E'
        },
        {
          label: 'Emily Walker',
          title: 'Technician',
          image: '',
          id: 2,
          backgroundColor: '#984447'
        },
        {
          label: 'Andrew Allen',
          title: 'Engineer',
          image: '',
          id: 3,
          backgroundColor: '#F4AC45'
        },
        {
          label: 'Grace Davis',
          title: 'Designer',
          image: '',
          id: 4,
          backgroundColor: '#27A195'
        }
        ]
      }
    ],
    locale: 'en',
    messages: {}
  }

  hiddenEmployees: number[] = [];

  constructor(private localizationService: LocalizationService, private employeeService: EmployeeService) {
    localizationService.localeEmitter
      .subscribe((value: LocaleEmitterValue) => {
        this.applyLocalization(value.newLocale, value.prevLocale);
      })

    this.teamCalendarString = this.localizationService.getTeamCalendarString();
    this.events = this.employeeService.getEmployeeEvents();

    this.schedulerSettings.resources.forEach(r => {
      r.dataSource.forEach(e => {
        e.image = this.employeeService.getImageByName(e.label.split(' ')[0])
      })
    })

    this.schedulerSettings.messages = this.localizationService.getSchedulerMessages();

    this.applyLocalization(this.localizationService.getLocale())

  }

  ngAfterViewInit(): void {
    const allCards = Array.from(document.querySelectorAll('.smart-planning-resource-card'));
    allCards.forEach((c, i) => {
      c.setAttribute('employeeId', this.schedulerSettings.resources[0].dataSource[i].id.toString())

      const avatar = c.querySelector('.smart-planning-resource-card-avatar') as HTMLElement;
      const name = c.querySelector('.smart-planning-resource-card-name') as HTMLElement;

      name.style.color = this.schedulerSettings.resources[0].dataSource[i].backgroundColor;
      avatar.style.boxShadow = '0 0 0 1px ' + this.schedulerSettings.resources[0].dataSource[i].backgroundColor;
    })
  }

  handleShowHideNonworkingHours() {
    const isOnlyWorkingHours = this.schedulerSettings.hourEnd === 16;

    this.schedulerSettings.hourEnd = isOnlyWorkingHours ? 18 : 16

    this.showWorkingHoursString = isOnlyWorkingHours
      ? this.localizationService.getShowWorkingHoursString()
      : this.localizationService.getShowFullDayString()
  }

  handleCardClick(resouce: {
    label: string,
    title: string,
    image?: string,
    id: number,
    backgroundColor: string
  }) {
    const currentIdIndex = this.hiddenEmployees.indexOf(resouce.id);
    const card = document.querySelector(`.smart-planning-resource-card[employeeId="${resouce.id}"]`)

    card?.classList.toggle('toggled-off-card');

    if (currentIdIndex > -1) {
      this.hiddenEmployees.splice(currentIdIndex, 1);
    } else {
      this.hiddenEmployees.push(resouce.id)
    }

    this.scheduler.filter = [
      {
        name: 'employeeId',
        value: (id: number | string) => this.hiddenEmployees.indexOf(Number(id) || -1) <= -1
      }
    ]
  }

  handleViewChange(e: CustomEvent) {

    if (e.detail.value === 'month') {
      this.schedulerFooterTemplate.nativeElement.style.display = 'none'
      this.scheduler.footerTemplate = null
    } else {
      this.scheduler.footerTemplate = (footerContainer: Element) => {
        footerContainer.appendChild(this.schedulerFooterTemplate.nativeElement)
        this.schedulerFooterTemplate.nativeElement.style.display = 'flex'
      }
    }
  }

  applyLocalization(newLocale: Locale, prevLocale?: Locale) {
    this.teamCalendarString = this.localizationService.getTeamCalendarString();

    const isOnlyWorkingHours = this.schedulerSettings.hourEnd === 16;
    this.showWorkingHoursString = isOnlyWorkingHours
      ? this.localizationService.getShowFullDayString()
      : this.localizationService.getShowWorkingHoursString()

    this.schedulerSettings.locale = newLocale

    if (Array.isArray(this.schedulerSettings.views)) {
      this.schedulerSettings.views.forEach((v: any) => {
        v.label = this.schedulerSettings.messages[newLocale as keyof typeof this.schedulerSettings.messages][v.value as keyof typeof this.schedulerSettings.messages];
      })
    }
  }
}