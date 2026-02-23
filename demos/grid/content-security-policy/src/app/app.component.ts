import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GridComponent } from '@smart-webcomponents-angular/grid';
import { GridModule } from '@smart-webcomponents-angular/grid';

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


  columns = [
    {
      label: "Task Name", width: 220, dataField: "Task Name", dataType: "string"
    },
    {
      label: "Assignee", width: 180, dataField: "Assignee", template: "tags", icon: "smart-icon-user", options: [
        { color: '#FFB74D', label: 'Jane Smith', value: 'Jane Smith' },
        { color: '#4DB6AC', label: 'John Doe', value: 'John Doe' },
        { color: '#81C784', label: 'Nancy Johnson', value: 'Nancy Johnson' },
        { color: '#64B5F6', label: 'Peter Parker', value: 'Peter Parker' },
        { color: '#BA68C8', label: 'George Wilson', value: 'George Wilson' },
        { color: '#FF7043', label: 'New Assignee', value: 'New Assignee' }
      ],
      summary: ['status'],
      filterEditor: {
        template: 'multi'
      }
    },
    {
      label: "Start Date", width: 180, dataField: "Start Date", dataType: "date", cellsFormat: 'M/d/yyyy', template: 'startDate', relationField: 'Due Date',
      filterEditor: {
        condition: 'RANGE'
      }
    },
    {
      label: "Due Date", width: 180, dataField: "Due Date", dataType: "date", cellsFormat: 'M/d/yyyy', template: 'dueDate', relationField: 'Status',
      templateSettings: {
        date: new Date(2025, 9, 31)
      },
      filterEditor: {
        condition: 'RANGE'
      }
    },
    {
      label: "Progress", dataField: "Progress", dataType: "number",
      template: 'progress',
      width: 150,
      templateSettings: {
        min: 0,
        max: 100,
        conditions: [
          { value: 0, color: '#FF6F61' },      // Red for 0%
          { value: 1, color: '#FFB74D' },      // Orange for 1-49%
          { value: 50, color: '#FFF176' },    // Yellow for 50%
          { value: 51, color: '#81C784' },     // Light Green for 51-99%
          { value: 100, color: '#4CAF50' }     // Green for 100%
        ],
        getComputedValue: (data: any) => {
          if (data['Status'] === 'Done') {
            return 100;
          }
          if (data['Status'] === 'Not Started') {
            return 0;
          }
          return data['Progress'];
        }
      },
      tooltip: 'This is a tooltip for the Progress header',
      tooltipRenderer: (id: any, dataField: any, value: any, formattedValue: any, data: any) => `Progress is&nbsp;<b>${formattedValue}%</b>`
    },
    {
      label: "Status", width: 180, dataField: "Status", template: "tags", options: [
        { color: '#EDEDED', label: 'Not Started', value: 'Not Started' }, // light gray
        { color: '#FFEBB6', label: 'In Progress', value: 'In Progress' }, // soft yellow
        { color: '#FF6F61', label: 'At Risk', value: 'At Risk' },         // coral/red for risk
        { color: '#64B5F6', label: 'Blocked', value: 'Blocked' },         // light blue
        { color: '#4DB6AC', label: 'Review', value: 'Review' },           // light teal
        { color: '#D1F7C4', label: 'Done', value: 'Done' }                // light green
      ],
      filterEditor: {
        template: 'multi'
      },
      summary: ['status'],
      description: 'The current status of the task',
      showDescriptionButton: true
    },
    {
      label: "Priority", width: 180, dataField: "Priority", template: "tags", options: [
        { color: '#DD5347', label: 'High', value: 'High' },
        { color: '#039BE5', label: 'Medium', value: 'Medium' },
        { color: '#33B679', label: 'Low', value: 'Low' }
      ],
      summary: ['status'],
      filterEditor: {
        template: 'multi'
      }
    },
    {
      label: "Tags", minWidth: 200, dataField: "Tags", template: "tags", filterEditor: { template: 'multi' }, templateSettings: { multiSelect: true },
      options: [
        { color: '#E57373', label: 'Frontend', value: 'Frontend' },
        { color: '#64B5F6', label: 'Backend', value: 'Backend' },
        { color: '#81C784', label: 'Design', value: 'Design' },
        { color: '#BA68C8', label: 'Testing', value: 'Testing' },
        { color: '#4FC3F7', label: 'Support', value: 'Support' },
        { color: '#4DB6AC', label: 'Deployment', value: 'Deployment' },
        { color: '#FFD54F', label: 'Documentation', value: 'Documentation' },
        { color: '#A1887F', label: 'Research', value: 'Research' },
        { color: '#90A4AE', label: 'Meeting', value: 'Meeting' }
      ]
    }
  ];

  dataSourceSettings = {
    dataFields: [
      { name: "Task ID", dataType: "number" },
      { name: "Task Name", dataType: "string" },
      { name: "Assignee", dataType: "string" },
      { name: "Start Date", dataType: "date" },
      { name: "Due Date", dataType: "date" },
      { name: "Progress", dataType: "number" },
      { name: "Status", dataType: "string" },
      { name: "Priority", dataType: "string" },
      { name: "Tags", dataType: "string" }
    ]
  };

  dataSource = [
    ["", "Design mockups", "Jane Smith", "2025-10-01", "2025-10-11", 30, "In Progress", "High", "Frontend, Design"],
    ["", "Write specs", "John Doe", "2025-10-03", "2025-10-10", 10, "In Progress", "Medium", "Backend, Documentation"],
    ["", "Dev setup", "Nancy Johnson", "2025-10-05", "2025-10-08", 50, "Done", "High", "Backend"],
    ["", "Frontend development", "Peter Parker", "2025-10-09", "2025-10-20", 25, "In Progress", "High", "Frontend"],
    ["", "Backend development", "George Wilson", "2025-10-11", "2025-10-22", 100, "Done", "High", "Backend"],
    ["", "Testing", "Peter Parker", "2025-10-21", "2025-10-25", 70, "Blocked", "Medium", "Testing"],
    ["", "Deployment", "Nancy Johnson", "2025-10-26", "2025-10-28", 60, "Review", "Low", "Deployment"],
    ["", "Project review", "Jane Smith", "2025-10-29", "2025-10-30", 50, "Review", "Low", "Meeting"],
    ["", "Client feedback", "John Doe", "2025-11-01", "2025-11-03", 70, "Not Started", "Medium", "Meeting"],
    ["", "Final adjustments", "Nancy Johnson", "2025-11-04", "2025-11-05", 50, "Done", "Medium", "Documentation"],
    ["", "Project closure", "George Wilson", "2025-11-10", "2025-11-07", 30, "Not Started", "Low", "Research"],
    ["", "Documentation", "Jane Smith", "2025-10-15", "2025-10-20", 15, "In Progress", "Medium", "Documentation"],
    ["", "Code review", "John Doe", "2025-10-18", "2025-10-22", 5, "In Progress", "High", "Testing"],
    ["", "User training", "Peter Parker", "2025-10-23", "2025-10-25", 0, "Not Started", "Low", "Meeting"],
    ["", "Post-launch support", "George Wilson", "2025-11-08", "2025-11-15", 10, "Not Started", "Medium", "Support"],
    ["", "Bug fixing", "Nancy Johnson", "2025-10-28", "2025-11-05", 40, "In Progress", "High", "Testing, Backend"],
    ["", "Feature enhancements", "Jane Smith", "2025-11-12", "2025-11-20", 20, "Not Started", "Medium", "Frontend, Backend"],
    ["", "Performance optimization", "John Doe", "2025-11-16", "2025-11-25", 0, "Not Started", "Low", "Backend"],
    ["", "Security audit", "Peter Parker", "2025-11-26", "2025-11-30", 0, "Not Started", "High", "Research"],
    ["", "Final presentation", "George Wilson", "2025-12-02", "2025-12-05", 0, "Not Started", "Medium", "Meeting"],
    ["", "Client feedback", "John Doe", "2025-11-01", "2025-11-03", 70, "Not Started", "Medium", "Meeting"],
    ["", "Final adjustments", "Nancy Johnson", "2025-11-04", "2025-11-05", 50, "Not Started", "Medium", "Documentation"]
  ];

  sorting = {
    enabled: true,
    mode: 'many'
  };

  layout = {
    rowHeight: 40
  };

  filtering = {
    enabled: true,
    filterRow: { visible: true }
  };

  editing = {
    enabled: true,
    allowDynamicButtons: true
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

  behavior = { rowResizeMode: 'growAndShrink', columnResizeMode: 'growAndShrink' };

  appearance = {
    showColumnIcon: true,
    alternationCount: 2
  };

  constructor() { }

  ngAfterViewInit(): void {
    // No imperative initialization needed; all handled via bindings.
  }
}