import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GridComponent, GridColumn, DataAdapter, Smart } from '@smart-webcomponents-angular/grid';
import { GetEmployees } from '../assets/data'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
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

	behavior = {
		columnResizeMode: 'growAndShrink'
	}
	
    dataExport = {
	  formatData: (rows: any, exportColumns: any, dataSource: any, completed: any) => {
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

				if (column.dataField === 'Employee') {
					let value = '../../images/phonebook/' + dataSource[i].firstName.toLowerCase() + '.png';

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
							rowData[column.dataField] = data + ' ' + dataSource[i].firstName + ' ' + dataSource[i].lastName;

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
		if (column === 'Employee' && value) {
			return {
				image: {
					id: 'myImage' + index,
					base64: currentValue.split(' ')[0],
					imageType: 'png',
					width: 40,
					height: 50,
					position: {
						offsetX: 10,
						offsetY: 5.5,
					},
				},
				value: currentValue.split(' ')[1] + ' ' + currentValue.split(' ')[2]
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
			label: 'Employee', cardSpan: true, cardHeight: 3, dataField: 'Employee', width: 250, cellsVerticalAlign: 'middle', verticalAlign: 'middle', align: 'center', cellsAlign: 'center', formatFunction(settings: any) {
				settings.template = '<img height="50" width="50" src="' + '../../images/phonebook/' + settings.row.data.firstName.toLowerCase() + '.png"/>' + '<span>' + settings.row.data.firstName + ' ' + settings.row.data.lastName + '</span>';
			}
		},
		{ label: 'Title', dataField: 'title', align: 'left', width: 200 },
		{
			label: 'City', dataField: 'city'
		},
		{ label: 'Country', cellsAlign: 'center', align: 'left', dataField: 'country' }
	]
}