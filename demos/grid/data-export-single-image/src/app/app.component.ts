import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Smart, GridComponent } from '@smart-webcomponents-angular/grid';
import { GetEmployees } from '../assets/data';

import { GridModule } from '@smart-webcomponents-angular/grid';
import { ButtonModule } from '@smart-webcomponents-angular/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  ButtonModule, GridModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;


	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
	}

	sorting = {
		enabled: true
	}
	
	behavior = {
		columnResizeMode: 'growAndShrink'
	}
	
	dataSource = new Smart.DataAdapter({
	    dataSource: GetEmployees(),
		dataFields: [
			'id: number',
			'firstName: string',
			'lastName: string',
			'title: string',
			'notes: string',
			'city: string',
			'country: string',
			'homePhone: string'
		]
	})

    dataExport = {
	   formatData: (rows: any, exportColumns: any, data: any, completed: any) => {
		let imagesCount = 0;
		let base64Count = 0;

		// convert image to base64
		const imageUrlToBase64 = async (url: string) => {
			const data = await fetch(url);
			const blob = await data.blob();
			return new Promise((resolve, reject) => {
				const reader = new FileReader();
				reader.readAsDataURL(blob);
				reader.onloadend = () => {
					const base64data = reader.result;
					resolve(base64data);
				};
				reader.onerror = reject;
			});
		};

		let hasImageUrl = false;
		for (let i = 0; i < rows.length; i++) {
			const rowData = rows[i];
			for (let j = 0; j < exportColumns.length; j++) {
				const column = exportColumns[j];

				if (column.dataField === 'Photo') {
					let value = 'https://raw.githubusercontent.com/HTMLElements/@smart-webcomponents-angular/master/demos/images/phonebook/' + rowData.firstName.toLowerCase() + '.png';

					let images: any = [];

					if (!value) {
						continue;
					}

					if (value.indexOf(',') >= 0) {
						images = value.split(',');
						let base64Images = [];
						if (images[0].indexOf('data:image') >= 0) {
							for (let f = 0; f < images.length; f += 2) {
								const image = images[f] + ',' + images[f + 1];
								base64Images.push(image);
							}
						}
						if (base64Images.length) {
							images = base64Images;
						}
					}
					else {
						images = [value];
					}

					// update the data cell 
					rowData[column.dataField] = images;
					imagesCount += images.length;
					for (let m = 0; m < images.length; m++) {
						const image = images[m];
						if (image.indexOf('data:image') >= 0) {
							base64Count++;
							continue;
						}

						hasImageUrl = true;
						imageUrlToBase64(image).then((data) => {
							images[m] = data;
							base64Count++;
							// when all images are in base64 format, export the Grid.
							if (base64Count === imagesCount) {
								completed(rows);
							}
						})
					}
				}
			}
		}

		if (base64Count === imagesCount && hasImageUrl === false) {
			completed(rows);
		}
	},
	addImageToCell: (index: number, column: string, currentValue: any, value: any) => {
		if (column === 'Photo' && value) {
			return {
				image: {
					id: 'myImage' + index,
					base64: value,
					imageType: 'png',
					width: 40,
					height: 50,
					position: {
						offsetX: 10,
						offsetY: 5.5,
					},
				},
				value
			}
		}
		
		return null;
	},
	
	setRowHeight: (index: number) => {
		return 50;
	}
	}
	
	selection = {
		enabled: true,
		checkBoxes: {
			enabled: true
		}
	}

    onRowInit = (index: number, row: any) => {
		if (index === 0 || index === 3 || index === 7 || index === 8 || index === 4) {
			row.selected = true;
		}
	}
			
	columns = [
	    {
			label: 'Photo', cardSpan: true, cardHeight: 3, dataField: 'Photo', width: 60, cellsVerticalAlign: 'middle', verticalAlign: 'middle', align: 'center', cellsAlign: 'center', formatFunction(settings: any) {
				settings.template = '<img height="50" width="90" src="' + 'https://raw.githubusercontent.com/HTMLElements/@smart-webcomponents-angular/master/demos/images/phonebook/' + settings.row.data.firstName.toLowerCase() + '.png"/>';
			}
		},
		{
			label: 'First Name', dataField: 'firstName',
		},
		{
			label: 'Last Name', dataField: 'lastName'
		},
		{ label: 'Title', dataField: 'title', align: 'left', width: 200 },
		{
			label: 'City', dataField: 'city'
		},
		{ label: 'Country', width: 70, cellsAlign: 'center', align: 'left', dataField: 'country' },
		{ label: 'Phone', dataField: 'homePhone', align: 'left', template: '<a href="#{{value}}">{{value}}</a>' }
	]
}