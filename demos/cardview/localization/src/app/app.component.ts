import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { CardViewColumn, CardViewComponent, Smart } from '@smart-webcomponents-angular/cardview';
import { RadioButtonComponent } from '@smart-webcomponents-angular/radiobutton';

import { CardViewModule } from '@smart-webcomponents-angular/cardview';import { RadioButtonModule } from '@smart-webcomponents-angular/radiobutton';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  CardViewModule, RadioButtonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('cardview', { read: CardViewComponent, static: false }) cardview!: CardViewComponent;
    @ViewChild('en', { read: RadioButtonComponent, static: false }) en!: RadioButtonComponent;
    @ViewChild('bg', { read: RadioButtonComponent, static: false }) bg!: RadioButtonComponent;

    generateData(length: number): any[] {
        const sampleData = [], firstNames = ['Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl', 'Michael', 'Guylene'], lastNames = ['Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase', 'Saavedra', 'Ohno', 'Devling', 'Wilson', 'Peterson', 'Winkler', 'Bein', 'Petersen', 'Rossi', 'Vileid', 'Saylor', 'Bjorn', 'Nodier'], petNames = ['Sam', 'Bob', 'Lucky', 'Tommy', 'Charlie', 'Olliver', 'Mixie', 'Fluffy', 'Acorn', 'Beak'], countries = ['Bulgaria', 'USA', 'UK', 'Singapore', 'Thailand', 'Russia', 'China', 'Belize'], productNames = ['Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Cramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'];
        for (let i = 0; i < length; i++) {
            const row: any = {};

            row.firstName = (i + 1) + '. ' + firstNames[Math.floor(Math.random() * firstNames.length)];
            row.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
            row.birthday = new Date(Math.round(Math.random() * (2018 - 1918) + 1918), Math.round(Math.random() * 11), Math.round(Math.random() * (31 - 1) + 1));
            row.petName = petNames[Math.floor(Math.random() * petNames.length)];
            row.country = countries[Math.floor(Math.random() * countries.length)];
            row.productName = productNames[Math.floor(Math.random() * productNames.length)];
            row.price = parseFloat((Math.random() * (100 - 0.5) + 0.5).toFixed(2));
            row.quantity = Math.round(Math.random() * (50 - 1) + 1);
            row.timeOfPurchase = new Date(2019, 0, 1, Math.round(Math.random() * 23), Math.round(Math.random() * (31 - 1) + 1));
            row.expired = Math.random() >= 0.5;
            row.attachments = [];
            const maxAttachments = Math.floor(Math.random() * Math.floor(3)) + 1;
            for (let i = 0; i < maxAttachments; i++) {
                row.attachments.push(`../../../src/images/travel/${Math.floor(Math.random() * 36) + 1}.jpg`);
            }
            row.attachments = row.attachments.join(',');
            sampleData[i] = row;
        }

        return sampleData;
    }


    dataSource = new Smart.DataAdapter({
        dataSource: this.generateData(50),
        dataFields: [
            'firstName: string',
            'lastName: string',
            'birthday: date',
            'petName: string',
            'country: string',
            'productName: string',
            'price: number',
            'quantity: number',
            'timeOfPurchase: date',
            'expired: boolean',
            'attachments: string'
        ]
    });

    columns: CardViewColumn[] = [
        { label: 'First Name', dataField: 'firstName', icon: 'firstName' },
        { label: 'Last Name', dataField: 'lastName', icon: 'lastName' },
        { label: 'Birthday', dataField: 'birthday', icon: 'birthday', formatSettings: { formatString: 'd' } },
        { label: 'Pet Name', dataField: 'petName', icon: 'petName' },
        { label: 'Country', dataField: 'country', icon: 'country' },
        { label: 'Product Name', dataField: 'productName', icon: 'productName' },
        { label: 'Price', dataField: 'price', icon: 'price', formatSettings: { formatString: 'c2' } },
        {
            label: 'Quantity', dataField: 'quantity', icon: 'quantity', formatFunction: function (settings) {
                const value = settings.value;
                let className;
                if (value < 20) {
                    className = 'red';
                }
                else if (value < 35) {
                    className = 'yellow';
                }
                else {
                    className = 'green';
                }
                settings.template = `<div class="${className}">${value}</div>`;
            }
        },
        { label: 'Time of Purchase', dataField: 'timeOfPurchase', icon: 'timeOfPurchase', formatSettings: { formatString: 'hh:mm tt' } },
        {
            label: 'Expired', dataField: 'expired', icon: 'expired', formatFunction: function (settings) {
                settings.template = settings.value ? '☑' : '☐';
            }
        },
        { label: 'Attachments', dataField: 'attachments', image: true }
    ];

    coverField: string = 'attachments';
    titleField: string = 'firstName'

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
        const that = this;
        const messages = {
            'en': {
                'addFilter': '+ Add filter',
                'addImage': 'Add',
                'and': 'And',
                'apply': 'Apply',
                'booleanFirst': '☐',
                'booleanLast': '☑',
                'cancel': 'Cancel',
                'CONTAINS': 'contains',
                'CONTAINS_CASE_SENSITIVE': 'contains (case sensitive)',
                'coverField': 'Cover field',
                'crop': 'Crop',
                'customize': 'Customize cards',
                'dateFirst': '1',
                'dateLast': '9',
                'dateTabLabel': 'DATE',
                'DOES_NOT_CONTAIN': 'does not contain',
                'DOES_NOT_CONTAIN_CASE_SENSITIVE': 'does not contain (case sensitive)',
                'draggedRecord': 'Record {{id}}',
                'EMPTY': 'empty',
                'ENDS_WITH': 'ends with',
                'ENDS_WITH_CASE_SENSITIVE': 'ends with (case sensitive)',
                'EQUAL': 'equal',
                'EQUAL_CASE_SENSITIVE': 'equal (case sensitive)',
                'filter': 'Filter',
                'filteredByMultiple': '{{n}} filters',
                'filteredByOne': '1 filter',
                'filterValuePlaceholder': 'Value',
                'find': 'Find a field',
                'findInView': 'Find in view',
                'firstBy': 'Sort by',
                'fit': 'Fit',
                'found': '{{nth}} of {{n}}',
                'from': 'from',
                'GREATER_THAN': 'greater than',
                'GREATER_THAN_OR_EQUAL': 'greater than or equal',
                'imageUrl': 'New image URL:',
                'incorrectStructure': '"dataSource" must be an instance of smartDataAdapter or an array of objects with key-value pairs.',
                'LESS_THAN': 'less than',
                'LESS_THAN_OR_EQUAL': 'less than or equal',
                'nextRecord': 'Next record',
                'noCoverField': 'No cover field',
                'noData': 'No data to display',
                'noFilters': 'No filters applied',
                'noMatches': 'No matched records',
                'noSorting': 'No sorting applied',
                'noResults': 'No results',
                'NOT_EMPTY': 'not empty',
                'NOT_EQUAL': 'not equal',
                'NOT_NULL': 'not null',
                'now': 'Now',
                'NULL': 'null',
                'numberFirst': '1',
                'numberLast': '9',
                'ok': 'OK',
                'or': 'Or',
                'pickAnother': 'Pick another field to sort by',
                'previousRecord': 'Previous record',
                'removeImage': 'Remove',
                'sort': 'Sort',
                'sortedByMultiple': 'Sorted by {{n}} fields',
                'sortedByOne': 'Sorted by 1 field',
                'STARTS_WITH': 'starts with',
                'STARTS_WITH_CASE_SENSITIVE': 'starts with (case sensitive)',
                'stringFirst': 'A',
                'stringLast': 'Z',
                'thenBy': 'then by',
                'timeTabLabel': 'TIME',
                'toggleVisibility': 'Toggle field visibility',
                'where': 'Where'
            },
            'bg': {
                'addFilter': '+ Добави филтър',
                'addImage': 'Добави',
                'and': 'И',
                'apply': 'Приложи',
                'applyOnce': 'Приложи',
                'booleanFirst': '☐',
                'booleanLast': '☑',
                'cancel': 'Отмени',
                'CONTAINS': 'съдържа',
                'CONTAINS_CASE_SENSITIVE': 'съдържа (главни и малки)',
                'coverField': 'Корица',
                'crop': 'Изр.',
                'customize': 'Настрой карти',
                'dateFirst': '1',
                'dateLast': '9',
                'dateTabLabel': 'ДАТА',
                'DOES_NOT_CONTAIN': 'не съдържа',
                'DOES_NOT_CONTAIN_CASE_SENSITIVE': 'не съдържа (главни и малки)',
                'draggedRecord': 'Запис {{id}}',
                'EMPTY': 'празно',
                'ENDS_WITH': 'завършва с',
                'ENDS_WITH_CASE_SENSITIVE': 'завършва с (главни и малки)',
                'EQUAL': 'равно на',
                'EQUAL_CASE_SENSITIVE': 'равно (главни и малки)',
                'filter': 'Филтрирай',
                'filteredByMultiple': '{{n}} филтъра',
                'filteredByOne': '1 филтър',
                'filterValuePlaceholder': 'Стойност',
                'find': 'Намери поле',
                'findInView': 'Намери',
                'firstBy': 'Подреди по',
                'fit': 'Пасв.',
                'found': '{{nth}} от {{n}}',
                'from': 'от',
                'GREATER_THAN': 'по-голямо от',
                'GREATER_THAN_OR_EQUAL': 'по-голямо или равно на',
                'imageUrl': 'URL на ново изображение:',
                'incorrectStructure': '"dataSource" трябва да е инстанция на smartDataAdapter или масив от обекти с двойки ключ-стойност.',
                'LESS_THAN': 'по-малко от',
                'LESS_THAN_OR_EQUAL': 'по-малко или равно на',
                'nextRecord': 'Следващ запис',
                'noCoverField': 'Без корица',
                'noData': 'Няма данни',
                'noFilters': 'Няма приложени филтри',
                'noMatches': 'Няма записи, отговарящи на условията',
                'noSorting': 'Няма приложено подреждане',
                'noResults': 'Няма резултати',
                'NOT_EMPTY': 'не е празно',
                'NOT_EQUAL': 'не е равно на',
                'NOT_NULL': 'не е null',
                'now': 'Сега',
                'NULL': 'null',
                'numberFirst': '1',
                'numberLast': '9',
                'ok': 'OK',
                'or': 'Или',
                'pickAnother': 'Избери друго поле по което да подредиш',
                'previousRecord': 'Предишен запис',
                'removeImage': 'Премахни',
                'sort': 'Подреди',
                'sortedByMultiple': 'Подредено по {{n}} полета',
                'sortedByOne': 'Подредено по 1 поле',
                'STARTS_WITH': 'започва с',
                'STARTS_WITH_CASE_SENSITIVE': 'започва с (главни и малки)',
                'stringFirst': 'А',
                'stringLast': 'Я',
                'thenBy': 'после по',
                'timeTabLabel': 'ЧАС',
                'toggleVisibility': 'Превключи видимостта на полето',
                'where': 'Където'
            }
        };


        that.cardview.messages = messages;

        that.en.addEventListener('change', function () {
            that.cardview.locale = 'en';
        });

        that.bg.addEventListener('change', function () {
            that.cardview.locale = 'bg';
        });
    }
}