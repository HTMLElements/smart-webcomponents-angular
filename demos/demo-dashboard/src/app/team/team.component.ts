import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LocaleEmitterValue, LocalizationService } from '../services/localization.service';
import { Locale } from '../interfaces/Locale';

import { EmployeeService } from '../services/employee.service';
import { Employee } from '../interfaces/Employee';

import { ButtonGroupModule } from 'smart-webcomponents-angular/buttongroup';
import { GridColumn, GridComponent, GridModule } from 'smart-webcomponents-angular/grid';
import { InputModule } from 'smart-webcomponents-angular/input';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { Button, GridCell, GridRow } from 'smart-webcomponents-angular';

import { TeamEnum } from '../enums/TeamEnum';

@Component({
  selector: 'app-team',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  imports: [RouterModule, ButtonGroupModule, GridModule, InputModule, ButtonModule]
})
export class TeamComponent {

  @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;
  @ViewChild('gridHeader') gridHeader!: ElementRef;

  teamMembersString: string = 'Team Members';

  employeesData: Employee[] = [];

  gridModes = [{ label: 'My Team', value: 'myTeam' }, { label: 'All Teams', value: 'allTeams' }];

  gridSearchQuery = '';
  gridSelectedMode = 'myTeam';

  gridSettings = {
    dataSource: this.employeesData,
    dataSourceSettings: {
      id: 'id',
      dataFields: [
        { name: 'id', dataType: 'number' },
        { name: 'firstName', dataType: 'string' },
        { name: 'lastName', dataType: 'string' },
        { name: 'country', dataType: 'string' },
        { name: 'city', dataType: 'string' },
        { name: 'address', dataType: 'string' },
        { name: 'jobTitle', dataType: 'string' },
        { name: 'departmentName', dataType: 'string' },
        { name: 'hireDate', dataType: 'date' },
        { name: 'birthDate', dataType: 'date' },
        { name: 'phone', dataType: 'string' },
      ]
    },
    columns: [
      {
        label: 'Full Name',
        columnGroup: 'employee',
        dataField: 'firstName',
        formatFunction: (formatObject: { row?: GridRow, column?: GridColumn, cell?: GridCell, oldValue?: any, value?: any, template?: any }) => {
          if (!formatObject.template) {
            const image = this.employeeService.getImageByName(formatObject.row?.data.firstName);
            if (!image) { return }

            formatObject.template = `
              <div>
                <img class="smart-team-grid-image" src='assets/images/phonebook/${image}.png' />
                <span>${formatObject.row?.data.firstName} ${formatObject.row?.data.lastName}</span>
              </div>`
          }
        },
        width: 220
      }, {
        label: 'Country',
        dataField: 'country',
        formatFunction: (formatObject: { row?: GridRow, column?: GridColumn, cell?: GridCell, oldValue?: any, value?: any, template?: any }) => {
          if (!formatObject.template) {
            const countryCode = this.employeeService.getCountryCode(formatObject.row?.data.country);
            if (!countryCode) { return }

            formatObject.template =
              `<img 
                class="smart-team-grid-flag"
                src="assets/images/flags/${countryCode}.svg" 
              />`
          }
        },
        columnGroup: 'employee',
        width: 100
      }, {
        label: 'Job Title',
        dataField: 'jobTitle',
        columnGroup: 'jobInformation',
        width: 220
      }, {
        label: 'Department',
        dataField: 'departmentName',
        columnGroup: 'jobInformation',
        width: 220
      }, {
        label: 'Hire Date',
        dataField: 'hireDate',
        columnGroup: 'jobInformation',
        width: 120,
        cellsFormat: 'd'
      }, {
        label: 'Phone',
        dataField: 'phone',
        columnGroup: 'contacts',
        width: 120
      }, {
        label: 'Address',
        dataField: 'address',
        columnGroup: 'contacts',
        width: 220
      }, {
        label: 'City',
        dataField: 'city',
        columnGroup: 'contacts',
        width: 220
      }, {
        dataField: 'lastName',
        visible: false
      }
    ],
    columnGroups: [
      { label: 'Employee', align: 'center', name: 'employee' },
      { label: 'Job information', align: 'center', name: 'jobInformation' },
      { label: 'Contacts', align: 'center', name: 'contacts' },
    ],
    behavior: { allowColumnReorder: true, rowResizeMode: 'growAndShrink', columnResizeMode: 'growAndShrink' },
    appearance: {
      alternationCount: 2,
      allowHover: true
    },
    layout: {
      columnHeight: 36,
      rowMinHeight: 46,
      allowCellsWrap: true
    },
    paging: {
      enabled: true
    },
    pager: {
      visible: true
    },
    sorting: {
      enabled: true
    },
    selection: {
      enabled: true,
      checkBoxes: {
        enabled: true
      },
    },
    grouping: {
      enabled: true,
      groupBar: {
        visible: true
      }
    },
    filtering: {
      enabled: true,
      operator: 'or'
    },
    header: {
      visible: true,
      buttons: [],
      template: (element: HTMLElement) => {
        element.replaceChildren(...this.gridHeader.nativeElement.children)
      }
    },
    locale: 'en',
    messages: this.localizationService.getGridMessages()
  }

  searchInColumnsString!: string;
  exportToExcelString!: string;
  exportToPDFString!: string;

  constructor(private localizationService: LocalizationService, private employeeService: EmployeeService) {
    localizationService.localeEmitter
      .subscribe((value: LocaleEmitterValue) => {
        this.applyLocalization(value.newLocale, value.prevLocale);
      })

    this.employeesData = this.employeeService.getStaticEmployees()

    this.applyLocalization(this.localizationService.getLocale());
    this.gridSettings.dataSource = this.employeesData.filter(e => e.team === TeamEnum.fireTeam)
  }

  applyLocalization(newLocale: Locale, prevLocale?: Locale) {

    this.teamMembersString = this.localizationService.getTeamMembersString();
    this.gridModes = [
      { label: this.localizationService.getMyTeamString(), value: 'myTeam' },
      { label: this.localizationService.getAllTeamsString(), value: 'allTeams' }
    ]

    this.gridSettings.locale = newLocale;

    this.searchInColumnsString = this.localizationService.getGridSearchInColumnsString()

    this.exportToExcelString = this.localizationService.getGridExportToString('xlsx')
    this.exportToPDFString = this.localizationService.getGridExportToString('pdf')

    const columnLabels = this.localizationService.getGridColumnLabels();

    for (let i = 0; i < this.gridSettings.columns.length; i++) {
      this.gridSettings.columns[i].label = columnLabels[i];
    }

    this.gridSettings.columns = [...this.gridSettings.columns]

    const columnGroupLabels = this.localizationService.getGridColumnGroupLabels();

    for (let i = 0; i < this.gridSettings.columnGroups.length; i++) {
      this.gridSettings.columnGroups[i].label = columnGroupLabels[i];
    }

  }

  async handleGridModeChange(event: CustomEvent) {
    const state = await this.grid.getState()
    this.grid.clearSelection();

    switch (event.detail.values[0]) {
      case 'allTeams':
        this.grid.dataSource = this.employeesData
          .filter(this.employeeDataFilterCallback.bind(this));

        this.gridSelectedMode = 'allTeams';
        break;
      case 'myTeam':
        this.grid.dataSource = this.employeesData
          .filter(e => e.team === TeamEnum.fireTeam)
          .filter(this.employeeDataFilterCallback.bind(this));

        this.gridSelectedMode = 'myTeam';
        break;
    }

    state.groups.forEach((g: string) => this.grid.addGroup(g))
    this.grid.selectRows(state.selectedRows.map((e: [number, Employee]) => e[0]));
  }

  async handleSearchInColumns(event: CustomEvent) {
    const query = event.detail.value;
    this.gridSearchQuery = query;

    let filteredData: Employee[] = [];

    switch (this.gridSelectedMode) {
      case 'allTeams':
        if (query.length === 0) {
          filteredData = this.employeesData
        } else {
          filteredData = this.employeesData.filter(this.employeeDataFilterCallback.bind(this))
        }
        break;
      case 'myTeam':
        filteredData = this.employeesData
          .filter(e => e.team === TeamEnum.fireTeam)
          .filter(this.employeeDataFilterCallback.bind(this))
        break;
    }

    this.grid.dataSource = filteredData;
  }

  employeeDataFilterCallback(e: Employee) {
    const fullName = `${e.firstName} ${e.lastName}`;

    if (
      fullName.includes(this.gridSearchQuery)
      || e.jobTitle.includes(this.gridSearchQuery)
      || e.departmentName.includes(this.gridSearchQuery)
      || e.phone.includes(this.gridSearchQuery)
      || e.address.includes(this.gridSearchQuery)
      || e.city.includes(this.gridSearchQuery)
      || e.country.includes(this.gridSearchQuery)
    ) {
      return true
    }

    return false
  }

  handleGridExport(event: Event) {
    const button = (event.target as Element).closest('smart-button') as Button

    if (!button) { return }

    const exportTo = button.value

    if (exportTo) { this.grid.exportData(exportTo) }
  }
}
