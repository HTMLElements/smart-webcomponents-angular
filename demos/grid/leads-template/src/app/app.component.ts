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


   sorting = {
        enabled: true,
        mode: 'many'
    }
	
    filtering = {
        enabled: true,
        filterRow: {
            visible: true
        }
    }
	
    appearance = {
        showColumnIcon: true
    }
	
    behavior = {
        columnResizeMode: 'growAndShrink',
    }
	
    columns =
        [
            {
                label: "Name",
                dataField: "Name",
                filterMenuMode: 'set',
                freeze: true,
                icon: 'smart-icon-user',
                cellsClassName: 'customer-cell',
                width: 350,
                template: (formatObject: any) => {
                    const record = formatObject.row.data;
                    formatObject.template = [
                        {
                            className: 'tag',
                            style: {
                                background: record.Color,
                                marginRight: '10px'
                            },
                            label: record.Name
								  ?.split(' ')
								  ?.map((name: string) => name[0])
								  ?.join('')
                        },
                        {
                            children: [
                                {
                                    className: 'name',
                                    label: record.Name
                                },
                                {
                                    className: 'membership',
                                    label: `${record.Position || ''}`
                                }
                            ]
                        },
                        {
                            className: 'actions',
                            nodeName: 'smart-button',
                            style: {
                                borderRadius: '50%',
                                width: '30px',
                                height: '30px',
                                background: record.Color,
                                color: '#fff',
                                position: 'absolute',
                                right: '45px',
                                marginLeft: '10px',
                                '--smart-button-padding': '3px 3px',
                                '--smart-button-font-size': '12px'
                            },
                            label: '<span class="show smart-grid-icon smart-icon-mode-edit"></span>',
                            onClick: (event: CustomEvent, formatObject: any) => {
                                this.grid.beginEdit(formatObject.row.id);
                            }
                        },
                        {
                            className: 'menu',
                            nodeName: 'smart-button',
                            label: '<span class="show smart-grid-icon smart-icon-menu"></span>',
                            style: {
                                borderRadius: '50%',
                                width: '30px',
                                height: '30px',
                                position: 'absolute',
                                right: '10px',
                                background: record.Color,
                                color: '#fff',
                                marginLeft: '5px',
                                '--smart-button-padding': '3px 3px',
                                '--smart-button-font-size': '12px'
                            },
                            onClick: (event: MouseEvent, formatObject: any) => {

                                const menu = this.grid.nativeElement['_customMenu'] || new Smart.Menu({
                                    dataSource: [
                                        { label: 'View Profile', value: 'view' },
                                        { label: 'Send Message', value: 'message' },
                                        { label: 'Schedule Meeting', value: 'schedule' },
                                        { label: 'Add Note', value: 'note' },
                                    ],
                                    onItemClick: function (event: CustomEvent) {
                                        const item = event.detail.item;
                                        const value = item.value;
                                        const record = formatObject.row.data;
                                        if (value === 'view') {
                                            alert(`Viewing profile of ${record.Name}`);
                                        } else if (value === 'message') {
                                            alert(`Sending message to ${record.Name}`);
                                        } else if (value === 'schedule') {
                                            alert(`Scheduling meeting with ${record.Name}`);
                                        } else if (value === 'note') {
                                            alert(`Adding note for ${record.Name}`);
                                        }
                                    },
                                    appendTo: '#menuContainer',
                                    mode: 'dropDown'

                                });
                                this.grid.nativeElement['_customMenu'] = menu;
                                menu.open(event.pageX + 15, event.pageY + 15);
                                event.stopPropagation();
                                event.preventDefault();
                            }
                        }
                    ];
                }
            },
            {
                width: 200,
                label: "Position",
                dataField: "Position",
                filterMenuMode: 'set'
            },
            {
                width: 200,
                label: "Seniority",
                dataField: "Seniority",
                template: "tags",
                filterMenuMode: 'multi',
                options: [
                    { color: '#4CAF50', label: 'Junior', value: 'Junior' },
                    { color: '#2196F3', label: 'Mid-level', value: 'Mid-level' },
                    { color: '#FF9800', label: 'Senior', value: 'Senior' },
                    { color: '#9C27B0', label: 'Executive', value: 'Executive' }
                ]
            },
            {
                width: 200,
                label: "Company",
                dataField: "Company",
                filterMenuMode: 'set'
            },
            {
                width: 200,
                label: "Location",
                dataField: "Location",
                filterMenuMode: 'set'
            },
            {
                label: "Last Interaction",
                dataField: "LastInteraction",
                dataType: "date",
                width: 200,
                filterEditor: {
                    template: 'list',
                    dataSource: [
                        'Last Week',
                        'Next Week',
                        'Last Month',
                        'Next Month',
                        'Last 3 Months',
                        'Next 3 Months',
                        'Last Year',
                        'Next Year'
                    ],
                    onChange: (event: CustomEvent, input: HTMLInputElement) => {
                        const value = event.detail.value;
                        const today = new Date();
                        let fromDate, toDate;

                        switch (value) {
                            case 'Last Week':
                                fromDate = new Date(today);
                                fromDate.setDate(today.getDate() - 7);
                                toDate = today;
                                break;
                            case 'Next Week':
                                fromDate = today;
                                toDate = new Date(today);
                                toDate.setDate(today.getDate() + 7);
                                break;
                            case 'Last Month':
                                fromDate = new Date(today);
                                fromDate.setMonth(today.getMonth() - 1);
                                toDate = today;
                                break;
                            case 'Next Month':
                                fromDate = today;
                                toDate = new Date(today);
                                toDate.setMonth(today.getMonth() + 1);
                                break;
                            case 'Last 3 Months':
                                fromDate = new Date(today);
                                fromDate.setMonth(today.getMonth() - 3);
                                toDate = today;
                                break;
                            case 'Next 3 Months':
                                fromDate = today;
                                toDate = new Date(today);
                                toDate.setMonth(today.getMonth() + 3);
                                break;
                            case 'Last Year':
                                fromDate = new Date(today);
                                fromDate.setFullYear(today.getFullYear() - 1);
                                toDate = today;
                                break;
                            case 'Next Year':
                                fromDate = today;
                                toDate = new Date(today);
                                toDate.setFullYear(today.getFullYear() + 1);
                                break;
                        }

                        if (!value || value === '-') {
                            this.grid.removeFilter('LastInteraction');
                            return;
                        }

                        const filterGroup = new Smart.FilterGroup();
                        const fromFilter = filterGroup.createFilter('date', fromDate, 'GREATER_THAN_OR_EQUAL');
                        const toFilter = filterGroup.createFilter('date', toDate, 'LESS_THAN_OR_EQUAL');

                        input.value = value;
                        filterGroup.addFilter('and', fromFilter);
                        filterGroup.addFilter('and', toFilter);

                        this.grid.addFilter('LastInteraction', filterGroup);
                    }
                }
            },
            {
                width: 250,
                label: "Tags",
                dataField: "Tags",
                filterMenuMode: 'multi',
                template: 'tags',
                options: [
                    { color: '#E91E63', label: 'react', value: 'react' },
                    { color: '#3F51B5', label: 'api', value: 'api' },
                    { color: '#009688', label: 'design', value: 'design' },
                    { color: '#FF5722', label: 'cloud', value: 'cloud' },
                    { color: '#795548', label: 'leadership', value: 'leadership' },
                    { color: '#607D8B', label: 'automation', value: 'automation' },
                    { color: '#8BC34A', label: 'crm', value: 'crm' },
                    { color: '#FFC107', label: 'seo', value: 'seo' },
                    { color: '#9E9E9E', label: 'testing', value: 'testing' },
                    { color: '#673AB7', label: 'strategy', value: 'strategy' },
                    { color: '#CDDC39', label: 'content', value: 'content' },
                    { color: '#FFEB3B', label: 'social', value: 'social' },
                    { color: '#00BCD4', label: 'flutter', value: 'flutter' },
                    { color: '#4CAF50', label: 'vue', value: 'vue' },
                    { color: '#2196F3', label: 'components', value: 'components' },
                    { color: '#FF9800', label: 'javascript', value: 'javascript' },
                    { color: '#9C27B0', label: 'backend', value: 'backend' },
                    { color: '#E91E63', label: 'machine learning', value: 'machine learning' },
                    { color: '#3F51B5', label: 'ai', value: 'ai' },
                    { color: '#009688', label: 'budgeting', value: 'budgeting' },
                    { color: '#FF5722', label: 'forecasting', value: 'forecasting' },
                    { color: '#795548', label: 'tickets', value: 'tickets' },
                    { color: '#607D8B', label: 'troubleshooting', value: 'troubleshooting' },
                    { color: '#FFC107', label: 'deals', value: 'deals' },
                    { color: '#673AB7', label: 'scaling', value: 'scaling' },
                    { color: '#00BCD4', label: 'process', value: 'process' },
                    { color: '#4CAF50', label: 'optimization', value: 'optimization' },
                    { color: '#2196F3', label: 'research', value: 'research' },
                    { color: '#FF9800', label: 'reports', value: 'reports' },
                    { color: '#E91E63', label: 'ui', value: 'ui' },
                    { color: '#3F51B5', label: 'performance', value: 'performance' },
                    { color: '#009688', label: 'roadmap', value: 'roadmap' },
                    { color: '#FF5722', label: 'figma', value: 'figma' },
                    { color: '#795548', label: 'nodejs', value: 'nodejs' },
                    { color: '#607D8B', label: 'aws', value: 'aws' },
                    { color: '#8BC34A', label: 'ci/cd', value: 'ci/cd' },
                    { color: '#9E9E9E', label: 'campaigns', value: 'campaigns' },
                    { color: '#673AB7', label: 'sql', value: 'sql' },
                    { color: '#CDDC39', label: 'dashboards', value: 'dashboards' },
                    { color: '#FFEB3B', label: 'recruitment', value: 'recruitment' },
                    { color: '#00BCD4', label: 'culture', value: 'culture' },
                    { color: '#2196F3', label: 'architecture', value: 'architecture' },
                    { color: '#FF9800', label: 'support', value: 'support' },
                    { color: '#9C27B0', label: 'onboarding', value: 'onboarding' },
                    { color: '#E91E63', label: 'requirements', value: 'requirements' },
                    { color: '#3F51B5', label: 'documentation', value: 'documentation' },
                    { color: '#009688', label: 'security', value: 'security' },
                    { color: '#FF5722', label: 'audits', value: 'audits' },
                    { color: '#673AB7', label: 'ios', value: 'ios' }
                ]
            },
            {
                width: 350,
                label: "Notes",
                cellsWrap: true,
                dataField: "Notes"
            }
        ]
		
    selection = {
        enabled: true,
        checkBoxes: {
            enabled: true
        }
    }
	
    data = [
        ["#FF9800", "Andrew Thompson", "Frontend Developer", "Mid-level", "TechNova", "New York, USA", "2026-01-15", "react, ui, performance", "Contacted on LinkedIn, interested in product updates."],
        ["#E91E63", "Michelle Carter", "Product Manager", "Senior", "BrightLabs", "London, UK", "2026-02-10", "roadmap, strategy", "Had a discovery call, requested a product demo."],
        ["#3F51B5", "Sofia Martinez", "UX Designer", "Mid-level", "PixelCraft", "Barcelona, Spain", "2026-01-28", "design, figma", "Attended a webinar, expressed interest in design features."],
        ["#009688", "Liam Johnson", "Backend Developer", "Senior", "CloudCore", "Berlin, Germany", "2026-03-02", "api, nodejs", "Referred by a mutual contact, exploring integration possibilities."],
        ["#FF5722", "Emma Wilson", "QA Engineer", "Junior", "SoftWorks", "Toronto, Canada", "2026-02-18", "testing, automation", "Signed up for a trial, actively testing the product."],
        ["#673AB7", "Daniel Brown", "DevOps Engineer", "Senior", "SkyNetics", "Amsterdam, Netherlands", "2026-03-12", "aws, ci/cd", "Had a technical discussion, interested in deployment features."],
        ["#4CAF50", "Olivia Davis", "Marketing Specialist", "Mid-level", "GrowthHub", "Sydney, Australia", "2026-01-22", "seo, campaigns", "Downloaded a whitepaper, interested in marketing analytics."],
        ["#FFC107", "Noah Miller", "Data Analyst", "Junior", "Insightify", "Chicago, USA", "2026-02-05", "sql, dashboards", "Attended a workshop, exploring data visualization capabilities."],
        ["#03A9F4", "Ava Taylor", "HR Manager", "Senior", "PeopleFirst", "Dublin, Ireland", "2026-03-08", "recruitment, culture", "Had an introductory call, interested in HR features."],
        ["#8BC34A", "William Anderson", "CTO", "Executive", "NextGen Systems", "San Francisco, USA", "2026-01-30", "leadership, architecture", "Expressed interest in enterprise solutions, requested a meeting."],
        ["#FFEB3B", "Sophia Thomas", "Customer Success Manager", "Mid-level", "ClientBridge", "Madrid, Spain", "2026-02-14", "support, onboarding", "Had a support ticket, interested in onboarding resources."],
        ["#9C27B0", "James Jackson", "Mobile Developer", "Senior", "AppWorks", "Stockholm, Sweden", "2026-03-18", "flutter, ios", "Attended a mobile development conference, interested in cross-platform capabilities."],
        ["#00BCD4", "Isabella White", "Business Analyst", "Mid-level", "EnterpriseX", "Paris, France", "2026-02-21", "requirements, documentation", "Had a requirements gathering session, interested in documentation features."],
        ["#FF5722", "Benjamin Harris", "Security Engineer", "Senior", "SecureIT", "Zurich, Switzerland", "2026-03-05", "security, audits", "Conducted a security audit, interested in compliance features."],
        ["#8BC34A", "Mia Martin", "Content Strategist", "Junior", "BrandFlow", "Los Angeles, USA", "2026-01-19", "content, social", "Created a content strategy, interested in social media analytics."],
        ["#795548", "Lucas Thompson", "Full Stack Developer", "Mid-level", "CodeBase", "Austin, USA", "2026-02-27", "javascript, backend", "Developed a new feature, interested in backend optimization."],
        ["#FF9800", "Charlotte Garcia", "Project Manager", "Senior", "AgileWorks", "Lisbon, Portugal", "2026-03-10", "ai, forecasting", "Led a project kickoff, interested in AI-driven forecasting."],
        ["#E91E63", "Henry Martinez", "AI Engineer", "Senior", "DeepVision", "Boston, USA", "2026-03-14", "machine learning, ai", "Implemented a machine learning model, interested in AI advancements."],
        ["#3F51B5", "Amelia Robinson", "Finance Manager", "Senior", "FinEdge", "Frankfurt, Germany", "2026-01-25", "budgeting, forecasting", "Reviewed financial reports, interested in forecasting tools."],
        ["#009688", "Elijah Clark", "Support Engineer", "Junior", "HelpDesk Pro", "Prague, Czech Republic", "2026-02-12", "tickets, troubleshooting", "Resolved a support ticket, interested in troubleshooting resources."],
        ["#FF9800", "Harper Rodriguez", "Sales Executive", "Mid-level", "SalesForceX", "Miami, USA", "2026-03-01", "crm, deals", "Closed a deal, interested in CRM features."],
        ["#673AB7", "Alexander Lewis", "System Architect", "Executive", "InfraTech", "Copenhagen, Denmark", "2026-03-20", "cloud, scaling", "Designed a new system architecture, interested in cloud scalability."],
        ["#E91E63", "Evelyn Lee", "UI Developer", "Mid-level", "Designify", "Seoul, South Korea", "2026-02-08", "vue, components", "Developed a new UI component, interested in Vue.js features."],
        ["#3F51B5", "Michael Walker", "Operations Manager", "Senior", "LogiCore", "Vienna, Austria", "2026-01-17", "process, optimization", "Optimized operational processes, interested in workflow automation."],
        ["#00BCD4", "Abigail Hall", "Research Analyst", "Junior", "DataMinds", "Helsinki, Finland", "2026-02-23", "research, reports", "Conducted market research, interested in report generation features."],
    ]
	
    layout = {
        rowHeight: 45
    } 
	
    editing: any = {
        enabled: true,
        mode: 'row',
        dialog: {
            enabled: true,
            sidePanel: true
        }
    }
	
    dataSourceSettings = {
        dataFields: [
            { name: 'Color', dataType: 'string' },
            { name: "Name", dataType: "string" },
            { name: "Position", dataType: "string" },
            { name: "Seniority", dataType: "string" },
            { name: "Company", dataType: "string" },
            { name: "Location", dataType: "string" },
            { name: "LastInteraction", dataType: "date" },
            { name: "Tags", dataType: "string" },
            { name: "Notes", dataType: "string" }
        ]
    }
	
  ngAfterViewInit(): void {
    // No additional initialization required as all config is bound via properties
  }
}