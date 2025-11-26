import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { GridComponent } from '@smart-webcomponents-angular/grid';
import { GridModule } from '@smart-webcomponents-angular/grid';
import { ListBoxModule, ListBoxComponent } from '@smart-webcomponents-angular/listbox';
@Component({
  selector: 'app-root',
  imports: [GridModule, ListBoxModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

  // ListBox references for filtering side panel
  @ViewChild('ownersListBox', { read: ListBoxComponent, static: false }) ownersListBox!: ListBoxComponent;
  @ViewChild('statusListBox', { read: ListBoxComponent, static: false }) statusListBox!: ListBoxComponent;
  @ViewChild('priorityListBox', { read: ListBoxComponent, static: false }) priorityListBox!: ListBoxComponent;

    sorting = {
      enabled: true,
      mode: 'many'
    }
    
	filtering = {
      enabled: true,
      filterMenu: {
        visible: false
      }
    }
	
    appearance = {
      showColumnIcon: true
    }
	
    columns = [
      { label: 'Feature', dataField: 'Feature' },
      {
        label: 'Owner', dataField: 'Owner', template: 'tags', icon: 'smart-icon-user', options: [
          { color: '#FFB900', label: 'Andrew', value: 'Andrew' },
          { color: '#D83B01', label: 'Michelle', value: 'Michelle' },
          { color: '#107C10', label: 'Sofia', value: 'Sofia' },
          { color: '#008272', label: 'Liam', value: 'Liam' },
          { color: '#5C2D91', label: 'Emma', value: 'Emma' }
        ]
      },
      { label: 'Target Release', dataField: 'Target Release', dataType: 'date' },
      {
        label: 'Status', dataField: 'Status', template: 'tags', options: [
          { color: '#FFB900', label: 'Planned', value: 'Planned' },
          { color: '#5C2D91', label: 'In Dev', value: 'In Dev' },
          { color: '#28A745', label: 'Released', value: 'Released' }
        ]
      },
      {
        label: 'Priority', dataField: 'Priority', template: 'tags', options: [
          { color: '#DD5347', label: 'Must-have', value: 'Must-have' },
          { color: '#FFC107', label: 'Should-have', value: 'Should-have' },
          { color: '#33B679', label: 'Nice-to-have', value: 'Nice-to-have' }
        ]
      }
    ]
	
    selection = {
      enabled: true,
      mode: 'many',
      checkBoxes: {
        enabled: true
      }
    } 
    dataSource = [
      ['User Authentication', 'Andrew', '2025-07-15', 'In Dev', 'Must-have'],
      ['Beta Dashboard', 'Michelle', '2025-08-01', 'Planned', 'Should-have'],
      ['Notifications', 'Sofia', '2025-07-30', 'Planned', 'Nice-to-have'],
      ['Reporting Module', 'Liam', '2025-09-10', 'In Dev', 'Must-have'],
      ['Data Export', 'Emma', '2025-08-20', 'Released', 'Should-have'],
      ['Mobile App', 'Andrew', '2025-10-05', 'Planned', 'Must-have'],
      ['API Integration', 'Michelle', '2025-09-15', 'In Dev', 'Should-have'],
      ['User Profiles', 'Sofia', '2025-07-25', 'Released', 'Nice-to-have'],
      ['Search Functionality', 'Liam', '2025-08-30', 'Planned', 'Must-have'],
      ['Settings Page', 'Emma', '2025-09-05', 'In Dev', 'Should-have'],
      ['Help Center', 'Andrew', '2025-10-15', 'Planned', 'Nice-to-have'],
      ['Live Chat Support', 'Michelle', '2025-09-25', 'In Dev', 'Must-have'],
      ['Performance Optimization', 'Sofia', '2025-11-01', 'Planned', 'Should-have'],
      ['Multi-language Support', 'Liam', '2025-10-20', 'Released', 'Nice-to-have'],
      ['Dark Mode', 'Emma', '2025-08-10', 'In Dev', 'Should-have'],
      ['Accessibility Features', 'Andrew', '2025-09-30', 'Planned', 'Must-have'],
      ['Audit Logs', 'Michelle', '2025-10-25', 'In Dev', 'Nice-to-have'],
      ['Two-Factor Authentication', 'Sofia', '2025-11-15', 'Planned', 'Must-have'],
      ['File Uploads', 'Liam', '2025-08-05', 'Released', 'Should-have'],
      ['Activity Feed', 'Emma', '2025-09-12', 'In Dev', 'Nice-to-have'],
      ['Calendar Integration', 'Andrew', '2025-10-30', 'Planned', 'Should-have'],
      ['Task Management', 'Michelle', '2025-11-20', 'In Dev', 'Must-have'],
      ['Email Templates', 'Sofia', '2025-08-18', 'Released', 'Nice-to-have'],
      ['Subscription Plans', 'Liam', '2025-09-22', 'Planned', 'Should-have'],
      ['Data Backup', 'Emma', '2025-10-12', 'In Dev', 'Must-have'],
      ['Integration with Third-Party Services', 'Andrew', '2025-11-30', 'Planned', 'Nice-to-have'],
      ['Custom Dashboards', 'Michelle', '2025-08-28', 'In Dev', 'Should-have'],
      ['User Onboarding', 'Sofia', '2025-09-18', 'Released', 'Must-have'],
      ['Feedback System', 'Liam', '2025-10-08', 'Planned', 'Nice-to-have'],
      ['Bug Tracking', 'Emma', '2025-11-10', 'In Dev', 'Should-have']
    ]
	
    dataSourceSettings = {
      dataFields: [
        { name: 'Feature', dataType: 'string' },
        { name: 'Owner', dataType: 'string' },
        { name: 'Target Release', dataType: 'date' },
        { name: 'Status', dataType: 'string' },
        { name: 'Priority', dataType: 'string' }
      ]
    }

  owners: string[] = ['Andrew', "Michelle", "Sofia", "Liam", "Emma"];
  statuses: string[] = ['Planned', 'In Dev', 'Released'];
  priorities: string[] = ['Must-have', 'Should-have', 'Nice-to-have'];

  ngAfterViewInit(): void {
    // Initialize selected values for list boxes
    setTimeout(() => {
      this.ownersListBox.selectedValues = [...this.owners];
      this.statusListBox.selectedValues = [...this.statuses];
      this.priorityListBox.selectedValues = [...this.priorities];
    }, 200);
  }

  onOwnersChange(event: any): void {
    const selectedOwners = this.ownersListBox.selectedValues;
    if (selectedOwners.length === this.owners.length) {
	  this.grid.removeFilter('Owner');
    } else {
		const filterGroup = new window.Smart.FilterGroup();

		selectedOwners.forEach(value => {
			const filter = filterGroup.createFilter('string', value, 'EQUAL');
			filterGroup.addFilter('or', filter);
		});

		this.grid.addFilter('Owner', filterGroup);
    }
  }

  onStatusChange(event: any): void {
    const selectedStatuses = this.statusListBox.selectedValues;
    if (selectedStatuses.length === this.statuses.length) {
	  this.grid.removeFilter('Status');
    } else {
     	const filterGroup = new window.Smart.FilterGroup();

		selectedStatuses.forEach(value => {
			const filter = filterGroup.createFilter('string', value, 'EQUAL');
			filterGroup.addFilter('or', filter);
		});

		this.grid.addFilter('Status', filterGroup);
    }
  }

  onPriorityChange(event: any): void {
    const selectedPriorities = this.priorityListBox.selectedValues;
    if (selectedPriorities.length === this.priorities.length) {
	  this.grid.removeFilter('Priority');
    } else {
     	const filterGroup = new window.Smart.FilterGroup();

		selectedPriorities.forEach(value => {
			const filter = filterGroup.createFilter('string', value, 'EQUAL');
			filterGroup.addFilter('or', filter);
		});

		this.grid.addFilter('Priority', filterGroup);
    }
  }
}