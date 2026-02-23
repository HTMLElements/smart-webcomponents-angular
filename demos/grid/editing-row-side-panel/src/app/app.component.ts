import { Component, ViewChild, AfterViewInit } from '@angular/core';
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


  // Data source as in the JS demo
  data: any[][] = [
    ["Acme Corp", "0", "info@acme.com", "555-0101", "Customer", "2025-07-20"],
    ["Beta Ltd", "1", "office@beta.com", "555-0102", "Prospect", "2025-07-18"],
    ["Gamma Inc", "2", "sales@gamma.com", "555-0103", "Lead", "2025-07-15"],
    ["Delta Co", "3", "contact@delta.com", "555-0104", "Customer", "2025-07-10"],
    ["Epsilon LLC", "4", "info@epsilon.com", "555-0105", "Prospect", "2025-07-05"],
    ["Zeta Group", "0", "info@zeta.com", "555-0106", "Lead", "2025-07-01"],
    ["Eta Enterprises", "1", "info@eta.com", "555-0107", "Customer", "2025-06-30"],
    ["Theta Solutions", "2", "info@theta.com", "555-0108", "Prospect", "2025-06-25"],
    [], [], []
  ];

  // Users for the collaborator column
  users = [
    { id: 0, color: '#8E24AA', name: 'Andrew', image: 'https://htmlelements.com/demos/images/people/andrew.png' },
    { id: 1, color: '#41B883', name: 'Anne', image: 'https://htmlelements.com/demos/images/people/anne.png' },
    { id: 2, color: '#53B9E6', name: 'Janet', image: 'https://htmlelements.com/demos/images/people/janet.png' },
    { id: 3, color: '#FFCD42', name: 'John', image: 'https://htmlelements.com/demos/images/people/john.png' },
    { id: 4, color: '#DD5347', name: 'Laura', image: 'https://htmlelements.com/demos/images/people/laura.png' }
  ];

  // Grid columns
  columns = [
    { label: "Client Name" },
    { label: "Contact Person", template: "collaborator", icon: "smart-icon-user" },
    { label: "Email", template: "email", placeholder: "user@example.com" },
    { label: "Phone", editor: "phone", placeholder: "###-####" },
    {
      label: "Status", template: "tags", options: [
        { color: '#FFA500', label: 'Lead', value: 'Lead' },
        { color: '#1E90FF', label: 'Prospect', value: 'Prospect' },
        { color: '#28A745', label: 'Customer', value: 'Customer' }
      ]
    },
    { label: "Last Contacted", dataType: "date" }
  ];

  // Grid appearance
  appearance = {
    alternationCount: 2,
    showRowHeader: true,
    showRowStatus: false,
    showRowComments: true,
    showRowHeaderSelectIcon: true,
    showRowHeaderFocusIcon: true,
    showColumnIcon: true,
    allowHover: true,
    allowColumnAutoPlaceholder: true,
    showRowHeaderNumber: true,
    showColumnHeaderDragIcon: true,
    showViewBarAsDropdown: true,
    showViewBar: true
  };

  // Sorting
  sorting = {
    enabled: true
  };

  // Layout
  layout = {
    rowHeight: 45
  };

  // Selection
  selection = {
    enabled: true
  };

  // Editing
  editing: any = {
    enabled: true,
    mode: 'row',
    dialog: {
      enabled: true,
      sidePanel: true
    },
    addNewRow: {
      visible: true,
      displayMode: 'button'
    }
  };

  // Header buttons
  header: any = {
    visible: true,
    buttons: [
      {
        innerHTML: `<smart-button>
          <span style="font-family: FontAwesome;" class="fa-plus-circle"></span>
          <span style="margin-left: 10px;">Add</span>
        </smart-button>`,
        command: () => {
          this.grid.addRow({});
        },
        style: {
          marginLeft: '10px',
          marginTop: '6px'
        },
        className: 'add-client-button',
        title: 'Adds a new client at bottom'
      },
      {
        innerHTML: `<smart-button>
          <span style="font-family: FontAwesome;" class="fa-plus-square"></span>
          <span style="margin-left: 10px;">Insert</span>
        </smart-button>`,
        command: () => {
          this.grid.addRow({}, false);
        },
        style: {
          marginLeft: '-10px',
          marginTop: '6px'
        },
        className: 'insert-client-button',
        title: 'Adds a new client at top'
      },
      {
        innerHTML: `<smart-button>
          <span style="font-family: FontAwesome;" class="fa-trash"></span>
          <span style="margin-left: 10px;">Delete</span>
        </smart-button>`,
        command: () => {
		  const selectedRow = this.grid.getSelectedRowsSync();
		  if (selectedRow && selectedRow[0]!) {
			this.grid.deleteRow(selectedRow[0]!);
		  }
		},
        style: {
          marginLeft: '20px',
          marginTop: '6px'
        },
        className: 'delete-client-button',
        title: 'Deletes the selected client'
      }
    ]
  };

  ngAfterViewInit(): void {
    // No additional initialization required, as all config is bound via properties
  }
}