import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Smart, GridComponent } from '@smart-webcomponents-angular/grid';
import { GridModule } from '@smart-webcomponents-angular/grid';
import { MenuModule } from '@smart-webcomponents-angular/menu';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [GridModule, MenuModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None 
})

export class AppComponent implements AfterViewInit {
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;


  data = [
    {
      id: 1,
      name: 'Anna Svensson',
      membershipLevel: 'Gold',
      color: 'gold',
      email: 'anna@sweden.olympics',
      city: 'Stockholm',
      company: 'Sweden Cross-Country Ski',
      employees: 8,
      role: 'Athlete',
      notes: 'Leading cross-country skier. Focused on endurance and pacing for 10km events.'
    },
    {
      id: 2,
      name: 'Lars Petersen',
      membershipLevel: 'Silver',
      color: 'silver',
      email: 'lars@norway.olympics',
      city: 'Oslo',
      company: 'Norway Biathlon',
      employees: 6,
      role: 'Athlete',
      notes: 'Competing in biathlon. Balancing ski speed with shooting accuracy.'
    },
    {
      id: 3,
      name: 'Emily Chen',
      membershipLevel: 'Bronze',
      color: 'peru',
      email: 'emily@china.olympics',
      city: 'Beijing',
      company: 'China Figure Skating',
      employees: 5,
      role: 'Athlete',
      notes: 'Pairs figure skater. Perfecting lifts and synchronized spins.'
    },
    {
      id: 4,
      name: 'Maxim Kovalev',
      membershipLevel: 'Gold',
      color: 'darkgoldenrod',
      email: 'maxim@russia.olympics',
      city: 'Moscow',
      company: 'Russia Ice Hockey',
      employees: 12,
      role: 'Athlete',
      notes: 'Captain of men’s ice hockey team. Leading team in offensive strategies.'
    },
    {
      id: 5,
      name: 'Sofia Müller',
      membershipLevel: 'Silver',
      color: 'lightblue',
      email: 'sofia@germany.olympics',
      city: 'Munich',
      company: 'Germany Luge',
      employees: 4,
      role: 'Athlete',
      notes: 'Luge competitor. Focused on start speed and sled control.'
    },
    {
      id: 6,
      name: 'Kaito Tanaka',
      membershipLevel: 'Bronze',
      color: 'darkcyan',
      email: 'kaito@japan.olympics',
      city: 'Sapporo',
      company: 'Japan Snowboarding',
      employees: 7,
      role: 'Athlete',
      notes: 'Specialist in halfpipe. Practicing aerial tricks and rotations.'
    },
    {
      id: 7,
      name: 'Olivia Brown',
      membershipLevel: 'Gold',
      color: 'firebrick',
      email: 'olivia@canada.olympics',
      city: 'Calgary',
      company: 'Canada Alpine Ski',
      employees: 6,
      role: 'Athlete',
      notes: 'Alpine skiing champion. Excels in downhill and super-G events.'
    },
    {
      id: 8,
      name: 'Jakob Larsen',
      membershipLevel: 'Silver',
      color: 'royalblue',
      email: 'jakob@denmark.olympics',
      city: 'Copenhagen',
      company: 'Denmark Skeleton',
      employees: 3,
      role: 'Athlete',
      notes: 'Skeleton racer. Focusing on start technique and aerodynamics.'
    },
    {
      id: 9,
      name: 'Elena Rossi',
      membershipLevel: 'Bronze',
      color: 'slategray',
      email: 'elena@italy.olympics',
      city: 'Turin',
      company: 'Italy Short Track Speed Skating',
      employees: 5,
      role: 'Athlete',
      notes: 'Competing in 500m and 1000m speed skating events.'
    },
    {
      id: 10,
      name: 'Lucas Dubois',
      membershipLevel: 'Gold',
      color: 'darkorange',
      email: 'lucas@france.olympics',
      city: 'Chamonix',
      company: 'France Bobsled',
      employees: 7,
      role: 'Athlete',
      notes: 'Bobsled driver. Competing in 2-man and 4-man events.'
    },
    {
      id: 11,
      name: 'Mia Johnson',
      membershipLevel: 'Silver',
      color: 'teal',
      email: 'mia@usa.olympics',
      city: 'Lake Placid',
      company: 'USA Freestyle Skiing',
      employees: 6,
      role: 'Athlete',
      notes: 'Freestyle skier specializing in aerials and moguls.'
    },
    {
      id: 12,
      name: 'Nikolai Petrov',
      membershipLevel: 'Bronze',
      color: 'darkslateblue',
      email: 'nikolai@russia.olympics',
      city: 'Saint Petersburg',
      company: 'Russia Speed Skating',
      employees: 4,
      role: 'Athlete',
      notes: 'Speed skater competing in 1500m and 5000m events.'
    },
    {
      id: 13,
      name: 'Hanna Weber',
      membershipLevel: 'Gold',
      color: 'purple',
      email: 'hanna@switzerland.olympics',
      city: 'Zurich',
      company: 'Switzerland Curling',
      employees: 5,
      role: 'Athlete',
      notes: 'Skip for curling team. Focused on strategy and precise throws.'
    },
    {
      id: 14,
      name: 'Oscar Nilsson',
      membershipLevel: 'Silver',
      color: 'cadetblue',
      email: 'oscar@sweden.olympics',
      city: 'Gothenburg',
      company: 'Sweden Nordic Combined',
      employees: 4,
      role: 'Athlete',
      notes: 'Nordic combined athlete. Training for ski jumping and cross-country skiing.'
    },
    {
      id: 15,
      name: 'Isabella Moretti',
      membershipLevel: 'Bronze',
      color: 'indianred',
      email: 'isabella@italy.olympics',
      city: 'Milan',
      company: 'Italy Snowboard',
      employees: 5,
      role: 'Athlete',
      notes: 'Snowboard cross competitor. Focusing on speed and obstacle navigation.'
    },
    {
      id: 16,
      name: 'Daniel Kim',
      membershipLevel: 'Gold',
      color: 'darkgreen',
      email: 'daniel@southkorea.olympics',
      city: 'Seoul',
      company: 'South Korea Short Track',
      employees: 6,
      role: 'Athlete',
      notes: 'Short track speed skater. Known for aggressive passing and tight turns.'
    },
    {
      id: 17,
      name: 'Sophia Andersson',
      membershipLevel: 'Silver',
      color: 'mediumvioletred',
      email: 'sophia@norway.olympics',
      city: 'Bergen',
      company: 'Norway Ski Jumping',
      employees: 4,
      role: 'Athlete',
      notes: 'Ski jumper. Practicing timing, balance, and wind compensation techniques.'
    },
    {
      id: 18,
      name: 'Henrik Jørgensen',
      membershipLevel: 'Bronze',
      color: 'olive',
      email: 'henrik@denmark.olympics',
      city: 'Aarhus',
      company: 'Denmark Ice Hockey',
      employees: 5,
      role: 'Athlete',
      notes: 'Forward for men’s ice hockey. Working on agility and puck handling.'
    },
    {
      id: 19,
      name: 'Laura Fischer',
      membershipLevel: 'Gold',
      color: 'deeppink',
      email: 'laura@germany.olympics',
      city: 'Frankfurt',
      company: 'Germany Biathlon',
      employees: 7,
      role: 'Athlete',
      notes: 'Top biathlete. Focused on sprint events and shooting under pressure.'
    },
    {
      id: 20,
      name: 'Mats Ekström',
      membershipLevel: 'Silver',
      color: 'seagreen',
      email: 'mats@sweden.olympics',
      city: 'Uppsala',
      company: 'Sweden Alpine Ski',
      employees: 6,
      role: 'Coach',
      notes: 'Alpine ski coach. Guiding skiers on slalom and giant slalom techniques.'
    }
  ];

  dataSourceSettings = {
    dataFields: [
      'id: number',
      'name: string',
      'membershipLevel: string',
      'color: string',
      'email: string',
      'city: string',
      'company: string',
      'employees: number',
      'role: string',
      'notes: string'
    ]
  };

  layout = {
    allowCellsWrap: true,
    rowMinHeight: 45,
    rowHeight: 'auto'
  };

  appearance = {
    alternationCount: 2,
    showRowLines: true,
    showColumnLines: true
  };

  sorting = {
    enabled: true
  };

  selection = {
    enabled: true,
    allowCellSelection: true
  };

  editing = {
    enabled: true,
    mode: 'cell'
  };

  columns: any[] = [
    {
      label: 'Name',
      dataField: 'name',
      width: 200,
      allowResize: true,
      cellsClassName: 'customer-cell',
      template: (formatObject: any) => {
        const record = formatObject.row.data;
        formatObject.template = [
          {
            className: 'tag',
            style: {
              background: record.color,
              marginRight: '10px'
            },
            label: record.name?.split(' ')?.map((name: string) => name[0]).join('')
          },
          {
            children: [
              {
                className: 'name',
                label: record.name
              },
              {
                className: 'membership',
                label: `${record.membershipLevel || ''} member`
              }
            ]
          }
        ];
      }
    },
    {
      label: 'Team',
      dataField: 'company',
      width: 200
    },
    {
      label: 'E-mail',
      dataField: 'email',
      width: 180,
      template: 'email'
    },
    {
      label: 'City',
      dataField: 'city',
      width: 150,
      template: (formatObject: any) => {
        const value = formatObject.value;
        formatObject.template = [
          {
            label: `<a href="https://www.google.com/maps/place/${value}" target="_blank" class="city-link">
              <i class="fa fa-location-dot"></i>
              <span>${value}</span>
            </a>`,
            style: {
              color: 'var(--smart-primary)',
              marginLeft: '10px'
            }
          }
        ];
      }
    },
    {
      label: 'Notes',
      dataField: 'notes',
      minWidth: 150,
      editor: 'textarea'
    }
  ];

  ngAfterViewInit(): void {
    // No additional initialization required as all config is bound via properties
  }
}