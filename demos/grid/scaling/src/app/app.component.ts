import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GridComponent } from '@smart-webcomponents-angular/grid';
import { GridModule } from '@smart-webcomponents-angular/grid';
import { SliderModule } from '@smart-webcomponents-angular/slider';

@Component({
  selector: 'app-root',
  imports: [GridModule, SliderModule],
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
      name: 'Tesla',
      membershipLevel: 'Gold',
      color: 'crimson',
      email: 'info@tesla.com',
      city: 'Palo Alto',
      company: 'Tesla, Inc.',
      employees: 127000,
      role: 'Manufacturer',
      founded: 2003,
      country: 'USA',
      evOnly: true,
      notes: 'Electric vehicle pioneer focused on autonomy, battery tech, and sustainability.'
    },
    {
      id: 2,
      name: 'BMW',
      membershipLevel: 'Gold',
      color: 'royalblue',
      email: 'contact@bmw.com',
      city: 'Munich',
      company: 'BMW Group',
      employees: 149000,
      role: 'Manufacturer',
      founded: 1916,
      country: 'Germany',
      evOnly: false,
      notes: 'Premium German automaker known for performance, luxury, and driving dynamics.'
    },
    {
      id: 3,
      name: 'Toyota',
      membershipLevel: 'Gold',
      color: 'darkred',
      email: 'support@toyota.com',
      city: 'Toyota City',
      company: 'Toyota Motor Corporation',
      employees: 375000,
      role: 'Manufacturer',
      founded: 1937,
      country: 'Japan',
      evOnly: false,
      notes: 'World’s largest automaker. Leader in reliability and hybrid technology.'
    },
    {
      id: 4,
      name: 'Mercedes-Benz',
      membershipLevel: 'Gold',
      color: 'silver',
      email: 'info@mercedes-benz.com',
      city: 'Stuttgart',
      company: 'Mercedes-Benz Group',
      employees: 170000,
      role: 'Manufacturer',
      founded: 1926,
      country: 'Germany',
      evOnly: false,
      notes: 'Luxury vehicles with strong focus on innovation, safety, and comfort.'
    },
    {
      id: 5,
      name: 'Volkswagen',
      membershipLevel: 'Gold',
      color: 'darkslateblue',
      email: 'support@volkswagen.com',
      city: 'Wolfsburg',
      company: 'Volkswagen AG',
      employees: 675000,
      role: 'Manufacturer',
      founded: 1937,
      country: 'Germany',
      evOnly: false,
      notes: 'Global automotive group with broad portfolio from economy to luxury.'
    },
    {
      id: 6,
      name: 'Porsche',
      membershipLevel: 'Gold',
      color: 'darkorange',
      email: 'info@porsche.com',
      city: 'Stuttgart',
      company: 'Porsche AG',
      employees: 42000,
      role: 'Manufacturer',
      founded: 1931,
      country: 'Germany',
      evOnly: false,
      notes: 'High-performance sports cars blending heritage with cutting-edge tech.'
    },
    {
      id: 7,
      name: 'Hyundai',
      membershipLevel: 'Silver',
      color: 'steelblue',
      email: 'contact@hyundai.com',
      city: 'Seoul',
      company: 'Hyundai Motor Company',
      employees: 120000,
      role: 'Manufacturer',
      founded: 1967,
      country: 'South Korea',
      evOnly: false,
      notes: 'Rapidly evolving brand with strong value proposition and EV innovation.'
    },
    {
      id: 8,
      name: 'Ferrari',
      membershipLevel: 'Gold',
      color: 'firebrick',
      email: 'info@ferrari.com',
      city: 'Maranello',
      company: 'Ferrari N.V.',
      employees: 5400,
      role: 'Manufacturer',
      founded: 1939,
      country: 'Italy',
      evOnly: false,
      notes: 'Iconic Italian supercar brand focused on performance and exclusivity.'
    },
    {
      id: 9,
      name: 'Audi',
      membershipLevel: 'Silver',
      color: 'darkcyan',
      email: 'contact@audi.com',
      city: 'Ingolstadt',
      company: 'Audi AG',
      employees: 87000,
      role: 'Manufacturer',
      founded: 1909,
      country: 'Germany',
      evOnly: false,
      notes: 'Known for quattro AWD systems and minimalist premium interiors.'
    },
    {
      id: 10,
      name: 'Ford',
      membershipLevel: 'Silver',
      color: 'teal',
      email: 'info@ford.com',
      city: 'Dearborn',
      company: 'Ford Motor Company',
      employees: 173000,
      role: 'Manufacturer',
      founded: 1903,
      country: 'USA',
      evOnly: false,
      notes: 'American automaker with strong truck lineup and growing EV presence.'
    },
    {
      id: 11,
      name: 'Nissan',
      membershipLevel: 'Silver',
      color: 'darkgreen',
      email: 'support@nissan.com',
      city: 'Yokohama',
      company: 'Nissan Motor Company',
      employees: 138000,
      role: 'Manufacturer',
      founded: 1933,
      country: 'Japan',
      evOnly: false,
      notes: 'Global automaker, pioneer in EVs with the Leaf model.'
    },
    {
      id: 12,
      name: 'Chevrolet',
      membershipLevel: 'Bronze',
      color: 'orange',
      email: 'info@chevrolet.com',
      city: 'Detroit',
      company: 'Chevrolet',
      employees: 85000,
      role: 'Manufacturer',
      founded: 1911,
      country: 'USA',
      evOnly: false,
      notes: 'Mass-market brand with trucks, SUVs, and electric models.'
    },
    {
      id: 13,
      name: 'Rivian',
      membershipLevel: 'Bronze',
      color: 'limegreen',
      email: 'info@rivian.com',
      city: 'Plymouth',
      company: 'Rivian Automotive',
      employees: 10000,
      role: 'Manufacturer',
      founded: 2009,
      country: 'USA',
      evOnly: true,
      notes: 'EV-only startup focusing on trucks and SUVs for adventure and lifestyle.'
    },
    {
      id: 14,
      name: 'Lucid Motors',
      membershipLevel: 'Bronze',
      color: 'purple',
      email: 'contact@lucidmotors.com',
      city: 'Newark',
      company: 'Lucid Motors',
      employees: 5000,
      role: 'Manufacturer',
      founded: 2007,
      country: 'USA',
      evOnly: true,
      notes: 'Luxury EV startup with high-performance electric sedans.'
    },
    {
      id: 15,
      name: 'Volvo',
      membershipLevel: 'Silver',
      color: 'navy',
      email: 'support@volvo.com',
      city: 'Gothenburg',
      company: 'Volvo Cars',
      employees: 41000,
      role: 'Manufacturer',
      founded: 1927,
      country: 'Sweden',
      evOnly: false,
      notes: 'Swedish automaker focusing on safety, reliability, and EV transition.'
    },
    {
      id: 16,
      name: 'Polestar',
      membershipLevel: 'Bronze',
      color: 'cyan',
      email: 'info@polestar.com',
      city: 'Gothenburg',
      company: 'Polestar',
      employees: 2000,
      role: 'Manufacturer',
      founded: 2017,
      country: 'Sweden',
      evOnly: true,
      notes: 'EV-only premium brand spun off from Volvo for electric performance cars.'
    },
    {
      id: 17,
      name: 'Jaguar',
      membershipLevel: 'Silver',
      color: 'darkred',
      email: 'info@jaguar.com',
      city: 'Coventry',
      company: 'Jaguar Land Rover',
      employees: 38000,
      role: 'Manufacturer',
      founded: 1922,
      country: 'UK',
      evOnly: false,
      notes: 'British luxury brand producing cars and EVs, famous for performance and style.'
    },
    {
      id: 18,
      name: 'Lotus',
      membershipLevel: 'Bronze',
      color: 'green',
      email: 'contact@lotuscars.com',
      city: 'Hethel',
      company: 'Lotus Cars',
      employees: 1800,
      role: 'Manufacturer',
      founded: 1952,
      country: 'UK',
      evOnly: false,
      notes: 'Sports car manufacturer specializing in lightweight, high-performance vehicles.'
    },
    {
      id: 19,
      name: 'BYD',
      membershipLevel: 'Gold',
      color: 'darkgreen',
      email: 'support@byd.com',
      city: 'Shenzhen',
      company: 'BYD Auto',
      employees: 230000,
      role: 'Manufacturer',
      founded: 1995,
      country: 'China',
      evOnly: true,
      notes: 'China-based EV and battery leader producing cars, buses, and commercial vehicles.'
    },
    {
      id: 20,
      name: 'NIO',
      membershipLevel: 'Bronze',
      color: 'blue',
      email: 'info@nio.com',
      city: 'Shanghai',
      company: 'NIO Inc.',
      employees: 25000,
      role: 'Manufacturer',
      founded: 2014,
      country: 'China',
      evOnly: true,
      notes: 'Chinese EV startup specializing in premium electric SUVs and sedans.'
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
      'founded: number',
      'country: string',
      'evOnly: bool',
      'notes: string'
    ]
  };

  appearance = {
    alternationCount: 2,
    showRowLines: true,
    showColumnLines: true,
    showRowHeader: true
  };

  sorting = {
    enabled: true
  };

  selection = {
    enabled: true,
    allowCellSelection: true
  };

  headerButtons: any[] = [];

  layout = {
    rowHeight: 'auto',
    rowMinHeight: 60,
    allowCellsWrap: true
  };

  behavior = {
    columnResizeMode: 'growAndShrink'
  };

  editing = {
    enabled: true,
    mode: 'cell'
  };

  columns: any[] = [
    {
      label: 'Name',
      dataField: 'name',
      width: 250,
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
            className: 'name',
            label: record.name
          }
        ];
      }
    },
    {
      label: 'Company',
      dataField: 'company',
      width: 300
    },
    {
      label: 'E-mail',
      dataField: 'email',
      width: 300,
      template: 'email'
    },
    {
      label: 'City',
      dataField: 'city',
      width: 200,
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
      minWidth: 200,
      editor: 'textarea'
    },
    {
      label: 'Founded',
      dataField: 'founded',
      width: 150,
      align: 'center',
      cellsAlign: 'center'
    },
    {
      label: 'Country',
      dataField: 'country',
      width: 140
    }
  ];

  // For slider
  scaleValue = 20;

  ngAfterViewInit(): void {
    // Set initial font size
    this.setFontSize(this.scaleValue);
  }

  onSliderChange(event: any): void {
    const value = event.detail ? parseInt(event.detail.value, 10) : event.value;
    this.scaleValue = value;
    this.setFontSize(value);
  }

  setFontSize(fontSize: number): void {
    if (!this.grid) return;
    this.grid.beginUpdate();
    this.grid.forEachRow((row: any) => {
      row.minHeight = fontSize * 3;
    });
    this.grid.layout.rowMinHeight = fontSize * 3;
    (this.grid.nativeElement as HTMLElement).style.setProperty('--smart-font-size', `${fontSize}px`);
    this.grid.endUpdate();
  }
}