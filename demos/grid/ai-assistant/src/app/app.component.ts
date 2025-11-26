import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { GridComponent } from '@smart-webcomponents-angular/grid';
import { GridModule } from '@smart-webcomponents-angular/grid';

@Component({
  selector: 'app-root',
  imports: [GridModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('grid', { static: false }) grid!: GridComponent;

  columns = [
    { label: 'Task ID', allowEdit: false, dataType: 'number', template: 'autoNumber' },
    { label: 'Task Name' },
    {
      label: 'Assignee', template: 'tags', icon: 'smart-icon-user', options: [
        { color: '#FFB74D', label: 'Jane Smith', value: 'Jane Smith' },
        { color: '#4DB6AC', label: 'John Doe', value: 'John Doe' },
        { color: '#81C784', label: 'Nancy Johnson', value: 'Nancy Johnson' },
        { color: '#64B5F6', label: 'Peter Parker', value: 'Peter Parker' },
        { color: '#BA68C8', label: 'George Wilson', value: 'George Wilson' },
        { color: '#FF7043', label: 'New Assignee', value: 'New Assignee' }
      ]
    },
    { label: 'Start Date', dataType: 'date' },
    { label: 'Due Date', dataType: 'date' },
    { label: 'Progress', dataType: 'number' },
    {
      label: 'Status', template: 'tags', options: [
        { color: '#EDEDED', label: 'Not Started', value: 'Not Started' }, // light gray
        { color: '#FFEBB6', label: 'In Progress', value: 'In Progress' }, // soft yellow
        { color: '#FF6F61', label: 'At Risk', value: 'At Risk' },         // coral/red for risk
        { color: '#D1F7C4', label: 'Done', value: 'Done' }                // light green
      ]
    },
    {
      label: 'Priority', template: 'tags', options: [
        { color: '#DD5347', label: 'High', value: 'High' },
        { color: '#039BE5', label: 'Medium', value: 'Medium' },
        { color: '#33B679', label: 'Low', value: 'Low' }
      ]
    }
  ];

  dataSource = [
    ['', 'Design mockups', 'Jane Smith', '2025-06-01', '2025-06-07', 0, 'Not Started', 'High'],
    ['', 'Write specs', 'John Doe', '2025-06-03', '2025-06-10', 10, 'In Progress', 'Medium'],
    ['', 'Dev setup', 'Nancy Johnson', '2025-06-05', '2025-06-08', 0, 'Not Started', 'High'],
    ['', 'Frontend development', 'Peter Parker', '2025-06-09', '2025-06-20', 25, 'In Progress', 'High'],
    ['', 'Backend development', 'George Wilson', '2025-06-11', '2025-06-22', 20, 'In Progress', 'High'],
    ['', 'Testing', 'Peter Parker', '2025-06-21', '2025-06-25', 0, 'Not Started', 'Medium'],
    ['', 'Deployment', 'Nancy Johnson', '2025-06-26', '2025-06-28', 0, 'Not Started', 'Low'],
    ['', 'Project review', 'Jane Smith', '2025-06-29', '2025-06-30', 0, 'Not Started', 'Low'],
    ['', 'Client feedback', 'John Doe', '2025-07-01', '2025-07-03', 0, 'Not Started', 'Medium'],
    ['', 'Final adjustments', 'Nancy Johnson', '2025-07-04', '2025-07-05', 0, 'Not Started', 'Medium'],
    ['', 'Project closure', 'George Wilson', '2025-07-06', '2025-07-07', 0, 'Not Started', 'Low'],
    ['', 'Documentation', 'Jane Smith', '2025-06-15', '2025-06-20', 15, 'In Progress', 'Medium'],
    ['', 'Code review', 'John Doe', '2025-06-18', '2025-06-22', 5, 'In Progress', 'High'],
    ['', 'User training', 'Peter Parker', '2025-06-23', '2025-06-25', 0, 'Not Started', 'Low'],
    ['', 'Post-launch support', 'George Wilson', '2025-07-08', '2025-07-15', 0, 'Not Started', 'Medium']
  ];

  sorting = {
    enabled: true,
    mode: 'many'
  };

  layout = {
    rowHeight: 40
  };

  filtering = {
    enabled: true
  };

  editing = {
    enabled: true
  };

  selection = {
    enabled: true,
    allowCellSelection: true,
    allowRowHeaderSelection: true,
    allowColumnHeaderSelection: true,
    mode: 'extended'
  };

  summaryRow = {
    visible: true,
    editing: true
  };

  grouping = {
    enabled: true
  };

  behavior = {
    rowResizeMode: 'growAndShrink',
    columnResizeMode: 'growAndShrink'
  };

  header = {
    visible: true,
    buttons: ['columns', 'ai'],
    onInit: (item: any) => {
      // no-op as in original
    }
  };

  appearance = {
    showRowNumberColumn: true,
    rowNumberColumnWidth: 50,
    alternationCount: 2,
    gridLines: {
      horizontal: true,
      vertical: false
    }
  };

  ai = {
    prompts: [
      'Which tasks are at risk?',
      'List all high-priority tasks that are currently in progress.',
      'What is the average progress of tasks?',
      'Sort the tasks by due date in ascending order.',
      'Filter tasks assigned to Peter Parker.',
      'Highlight tasks assigned to Jane Smith.'
    ]
  };

  ngAfterViewInit(): void {
    // No additional initialization needed since all inputs are bound
  }
}
