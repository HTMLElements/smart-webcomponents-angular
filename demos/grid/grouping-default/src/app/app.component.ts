// app.component.ts

import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Smart } from '@smart-webcomponents-angular/grid';
import { GridComponent } from '@smart-webcomponents-angular/grid';
import { GridModule } from '@smart-webcomponents-angular/grid';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [GridModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class AppComponent implements AfterViewInit {
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;


  // Data source as in the original JS
  dataSource = [
    { name: 'Lion', class: 'Mammalia', description: 'Powerful big cat known as king of the savannah', color: '#c68642' },
    { name: 'Giraffe', class: 'Mammalia', description: 'Tallest land animal with long neck', color: '#daa520' },
    { name: 'Zebra', class: 'Mammalia', description: 'Striped herbivore of the savannah', color: '#000000' },
    { name: 'Rhino', class: 'Mammalia', description: 'Thick-skinned horned herbivore', color: '#708090' },
    { name: 'Hippo', class: 'Mammalia', description: 'Large semi-aquatic river mammal', color: '#6a5acd' },
    { name: 'Cheetah', class: 'Mammalia', description: 'Fastest land animal on Earth', color: '#f4a460' },
    { name: 'Leopard', class: 'Mammalia', description: 'Stealthy spotted big cat predator', color: '#8b4513' },
    { name: 'Buffalo', class: 'Mammalia', description: 'Large horned grazing mammal', color: '#2f4f4f' },
    { name: 'Hyena', class: 'Mammalia', description: 'Scavenging predator with strong jaws', color: '#b8860b' },

    { name: 'Crocodile', class: 'Reptilia', description: 'Large river-dwelling reptile predator', color: '#556b2f' },
    { name: 'Chameleon', class: 'Reptilia', description: 'Color-changing tree reptile', color: '#32cd32' },
    { name: 'Python', class: 'Reptilia', description: 'Large non-venomous constrictor snake', color: '#6b8e23' },

    { name: 'Ostrich', class: 'Aves', description: 'Largest flightless bird', color: '#2f4f4f' },
    { name: 'Flamingo', class: 'Aves', description: 'Pink wading bird with long legs', color: '#ff69b4' },
    { name: 'Eagle', class: 'Aves', description: 'Powerful bird of prey', color: '#8b4513' },

    { name: 'Frog', class: 'Amphibia', description: 'Moist-skinned jumping amphibian', color: '#32cd32' },

    { name: 'Tilapia', class: 'Actinopterygii', description: 'Freshwater African fish species', color: '#4682b4' },

    { name: 'Baobab', class: 'Plantae', description: 'Iconic African tree with massive trunk', color: '#8b5a2b' },
    { name: 'Acacia', class: 'Plantae', description: 'Thorny savannah tree', color: '#228b22' },
    { name: 'Grass', class: 'Plantae', description: 'Savannah ground vegetation', color: '#9acd32' }
  ];

  // Grid configuration
  sorting = { enabled: true };
  filtering = { enabled: true };
  selection = {
    enabled: true,
    allowCellSelection: true,
    mode: 'extended'
  };
  dataSourceSettings = {
    dataFields: [
      'name: string',
      'class: string',
      'description: string',
      'color: string'
    ]
  };
  layout = {
    rowHeight: 45
  };
  grouping = {
    enabled: true,
    groupBy: ['class'],
    renderMode: 'default',
    autoExpandAll: true
  };

  // FontAwesome icon mapping
  animalIcons: { [key: string]: string } = {
    Lion: 'fa-solid fa-paw',
    Giraffe: 'fa-solid fa-horse-head',
    Zebra: 'fa-solid fa-horse',
    Rhino: 'fa-solid fa-hippo',
    Hippo: 'fa-solid fa-hippo',
    Cheetah: 'fa-solid fa-paw',
    Leopard: 'fa-solid fa-paw',
    Buffalo: 'fa-solid fa-cow',
    Hyena: 'fa-solid fa-dog',

    Crocodile: 'fa-solid fa-dragon',
    Chameleon: 'fa-solid fa-frog',
    Python: 'fa-solid fa-worm',

    Ostrich: 'fa-solid fa-kiwi-bird',
    Flamingo: 'fa-solid fa-dove',
    Eagle: 'fa-solid fa-feather',

    Frog: 'fa-solid fa-frog',
    Tilapia: 'fa-solid fa-fish',

    Baobab: 'fa-solid fa-tree',
    Acacia: 'fa-solid fa-tree',
    Grass: 'fa-solid fa-seedling'
  };

  columns = [
    {
      dataField: 'name',
      label: 'Animal',
      align: 'center',
      cellsAlign: 'center',
      // Use an arrow function to preserve 'this'
      cellsRenderer: (row: number, dataField: string, value: string, record: any) => {
        const iconClass = this.animalIcons[value] || 'fa-solid fa-paw';
        return `
          <div style="font-size:14px; color:${record.color}">
            <i class="${iconClass}"></i> ${record.name}
          </div>
        `;
      }
    },
    { dataField: 'class', label: 'Class', width: '30%' },
    { dataField: 'description', label: 'Description', width: '50%' }
  ];

  constructor() {}

  ngAfterViewInit(): void {
    // No additional initialization required, as all config is bound via properties
  }
}