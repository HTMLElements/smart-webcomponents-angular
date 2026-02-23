import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { GridComponent, GridRow } from '@smart-webcomponents-angular/grid';
import { GridModule } from '@smart-webcomponents-angular/grid';
import { TreeModule } from '@smart-webcomponents-angular/tree';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [GridModule, TreeModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class AppComponent implements AfterViewInit {
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

  @ViewChild('tree', { static: false }) tree!: GridComponent;

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
    }
	]

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
    rowHeight: 45
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
  
  onRowMouseEnter = (row: GridRow) => {
        const tree = this.tree;
        if (tree!.nativeElement['isDragging']) {
            const element = row.element;
            element.classList.add('hover');
        }
  };
	
  onRowMouseLeave = (row: GridRow) => {
        const element = row.element;
        element.classList.remove('hover');
  };
	
   onDragStart(event: any) {
         this.tree.nativeElement['isDragging'] = true;
  }

  onDragEnd(event: any) {
	 this.tree.nativeElement['isDragging'] = false;

	if (event.detail.container.closest('smart-grid')) {
		const grid = event.detail.target.closest('smart-grid');
		if (grid) {
			const htmlRow = event.detail.target.closest('smart-grid-row');
			let id = -1;
			const value = event.detail.items[0].value;
			const colors = ['gold', 'silver', 'peru', 'darkgoldenrod', 'lightblue', 'darkcyan', 'firebrick', 'royalblue', 'slategray'];
			const cities = ['Toronto', 'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego'];
			const companies = ['Sweden Alpine Ski', 'Norway Biathlon', 'China Figure Skating', 'Russia Ice Hockey', 'Germany Luge', 'Japan Snowboarding', 'Canada Alpine Ski', 'Denmark Skeleton', 'Italy Short Track Speed Skating'];
			const notes = ['Alpine ski coach. Guiding skiers on slalom and giant slalom techniques', 'Top biathlete. Focused on sprint events and shooting under pressure', 'Skeleton racer. Focusing on start technique and aerodynamics', 'Ski jumper. Practicing timing, balance, and wind compensation techniques', 'Snowboard cross competitor. Focusing on speed and obstacle navigation', 'Short track speed skater. Known for aggressive passing and tight turns.', 'Freestyle skier specializing in aerials and moguls.', 'Bobsled driver. Competing in 2-man'];
			const membershipLevel = ['Gold', 'Silver', 'Bronze'];

			const data = {
				name: value,
				email: `${value.toLowerCase().replace(/\s/g, '')}@example.com`,
				city: cities[Math.floor(Math.random() * cities.length)],
				company: companies[Math.floor(Math.random() * companies.length)],
				notes: notes[Math.floor(Math.random() * notes.length)],
				color: colors[Math.floor(Math.random() * colors.length)],
				membershipLevel: membershipLevel[Math.floor(Math.random() * membershipLevel.length)]
			}

			if (htmlRow) {
				const row = grid.getRowByElement(htmlRow);
				const newRow = grid.insertRowAfter(data, row);
				grid.flashRow(newRow.id);
			}
			else {
				const newRow = grid.addRow(data);
				grid.flashRow(newRow.id);
			}
		}
	}
  }

	

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