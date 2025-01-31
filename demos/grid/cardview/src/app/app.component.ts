import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GridComponent, GridLayout, GridEditing, GridDataSourceSettings, GridColumn, GridSelection, Smart } from '@smart-webcomponents-angular/grid';

function GenerateData() {
    const orderData = [], 
	productNames: string[] = ['Wireless Microphone System', 'One for the Blackbird, One for the Crow', 'Ultrean 6 Quart Air Fryer', 'NETGEAR WiFi Range Extender', 'YTD Men\'s Short Sleeve Polo Shirt', 'Sling Bag', 'Kantek Tablet Stand', 'Cuisinart C55CNS-8CFP', 'Panasonic Noise Cancelling Over The Ear Headphones', 'Magid GF18T Pesticide Glove', 'Ink+Ivy Alpine Cotton Duvet Cover', '12 Little Zoo Animals Toy Figure'], productPrices = [47.59, 7.48, 64.59, 29.99, 28.99, 25.49, 17.03, 10.14, 136.88, 7.73, 71.33, 6.99];
	  const firstNames: string[] = [
        "Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi", "Ian", "Peter", "Lars", "Petra", "Martin", "Sven", "Elio", "Beate", "Cheryl", "Michael", "Guylene"
    ];
    const lastNames: string[] = [
        "Fuller", "Davolio", "Burke", "Murphy", "Nagase", "Saavedra", "Ohno", "Devling", "Wilson", "Peterson", "Winkler", "Bein", "Petersen", "Rossi", "Vileid", "Saylor", "Bjorn", "Nodier"
    ];
	
	
    const countryCodes: any = [
        ["Albania", "AL", "ALB", 8],
        ["Algeria", "DZ", "DZA", 12],
        ["American Samoa", "AS", "ASM", 16],
        ["Andorra", "AD", "AND", 20],
        ["Angola", "AO", "AGO", 24],
        ["Anguilla", "AI", "AIA", 660],
        ["Antarctica", "AQ", "ATA", 10],
        ["Antigua and Barbuda", "AG", "ATG", 28],
        ["Argentina", "AR", "ARG", 32],
        ["Armenia", "AM", "ARM", 51],
        ["Aruba", "AW", "ABW", 533],
        ["Australia", "AU", "AUS", 36],
        ["Austria", "AT", "AUT", 40],
        ["Azerbaijan", "AZ", "AZE", 31],
        ["Bahamas (the)", "BS", "BHS", 44],
        ["Bahrain", "BH", "BHR", 48],
        ["Bangladesh", "BD", "BGD", 50],
        ["Barbados", "BB", "BRB", 52],
        ["Belarus", "BY", "BLR", 112],
        ["Belgium", "BE", "BEL", 56],
        ["Belize", "BZ", "BLZ", 84],
        ["Benin", "BJ", "BEN", 204],
        ["Bermuda", "BM", "BMU", 60],
        ["Bhutan", "BT", "BTN", 64],
        ["Bolivia (Plurinational State of)", "BO", "BOL", 68],
        ["Bonaire, Sint Eustatius and Saba", "BQ", "BES", 535],
        ["Bosnia and Herzegovina", "BA", "BIH", 70],
        ["Botswana", "BW", "BWA", 72],
        ["Bouvet Island", "BV", "BVT", 74],
        ["Brazil", "BR", "BRA", 76],
        ["British Indian Ocean Territory (the)", "IO", "IOT", 86],
        ["Brunei Darussalam", "BN", "BRN", 96],
        ["Bulgaria", "BG", "BGR", 100],
        ["Burkina Faso", "BF", "BFA", 854],
        ["Burundi", "BI", "BDI", 108],
        ["Cabo Verde", "CV", "CPV", 132],
        ["Cambodia", "KH", "KHM", 116],
        ["Cameroon", "CM", "CMR", 120],
        ["Canada", "CA", "CAN", 124],
        ["Cayman Islands (the)", "KY", "CYM", 136],
        ["Central African Republic (the)", "CF", "CAF", 140],
        ["Chad", "TD", "TCD", 148],
        ["Chile", "CL", "CHL", 152],
        ["China", "CN", "CHN", 156],
        ["Christmas Island", "CX", "CXR", 162],
        ["Cocos (Keeling) Islands (the)", "CC", "CCK", 166],
        ["Colombia", "CO", "COL", 170],
        ["Comoros (the)", "KM", "COM", 174],
        ["Congo (the Democratic Republic of the)", "CD", "COD", 180],
        ["Congo (the)", "CG", "COG", 178],
        ["Cook Islands (the)", "CK", "COK", 184],
        ["Costa Rica", "CR", "CRI", 188],
        ["Croatia", "HR", "HRV", 191],
        ["Cuba", "CU", "CUB", 192],
        ["Curaçao", "CW", "CUW", 531],
        ["Cyprus", "CY", "CYP", 196],
        ["Czechia", "CZ", "CZE", 203],
        ["Côte d'Ivoire", "CI", "CIV", 384],
        ["Denmark", "DK", "DNK", 208],
        ["Djibouti", "DJ", "DJI", 262],
        ["Dominica", "DM", "DMA", 212],
        ["Dominican Republic (the)", "DO", "DOM", 214],
        ["Ecuador", "EC", "ECU", 218],
        ["Egypt", "EG", "EGY", 818],
        ["El Salvador", "SV", "SLV", 222],
        ["Equatorial Guinea", "GQ", "GNQ", 226],
        ["Eritrea", "ER", "ERI", 232],
        ["Estonia", "EE", "EST", 233],
        ["Eswatini", "SZ", "SWZ", 748],
        ["Ethiopia", "ET", "ETH", 231],
        ["Falkland Islands (the) [Malvinas]", "FK", "FLK", 238],
        ["Faroe Islands (the)", "FO", "FRO", 234],
        ["Fiji", "FJ", "FJI", 242],
        ["Finland", "FI", "FIN", 246],
        ["France", "FR", "FRA", 250],
        ["French Guiana", "GF", "GUF", 254],
        ["French Polynesia", "PF", "PYF", 258],
        ["French Southern Territories (the)", "TF", "ATF", 260],
        ["Gabon", "GA", "GAB", 266],
        ["Gambia (the)", "GM", "GMB", 270],
        ["Georgia", "GE", "GEO", 268],
        ["Germany", "DE", "DEU", 276],
        ["Ghana", "GH", "GHA", 288],
        ["Gibraltar", "GI", "GIB", 292],
        ["Greece", "GR", "GRC", 300],
        ["Greenland", "GL", "GRL", 304],
        ["Grenada", "GD", "GRD", 308],
        ["Guadeloupe", "GP", "GLP", 312],
        ["Guam", "GU", "GUM", 316],
        ["Guatemala", "GT", "GTM", 320],
        ["Guernsey", "GG", "GGY", 831],
        ["Guinea", "GN", "GIN", 324],
        ["Guinea-Bissau", "GW", "GNB", 624],
        ["Guyana", "GY", "GUY", 328],
        ["Haiti", "HT", "HTI", 332],
        ["Heard Island and McDonald Islands", "HM", "HMD", 334],
        ["Holy See (the)", "VA", "VAT", 336],
        ["Honduras", "HN", "HND", 340],
        ["Hong Kong", "HK", "HKG", 344],
        ["Hungary", "HU", "HUN", 348],
        ["Iceland", "IS", "ISL", 352],
        ["India", "IN", "IND", 356],
        ["Indonesia", "ID", "IDN", 360],
        ["Iran (Islamic Republic of)", "IR", "IRN", 364],
        ["Iraq", "IQ", "IRQ", 368],
        ["Ireland", "IE", "IRL", 372],
        ["Isle of Man", "IM", "IMN", 833],
        ["Israel", "IL", "ISR", 376],
        ["Italy", "IT", "ITA", 380],
        ["Jamaica", "JM", "JAM", 388],
        ["Japan", "JP", "JPN", 392],
        ["Jersey", "JE", "JEY", 832],
        ["Jordan", "JO", "JOR", 400],
        ["Kazakhstan", "KZ", "KAZ", 398],
        ["Kenya", "KE", "KEN", 404],
        ["Kiribati", "KI", "KIR", 296],
        ["Korea (the Democratic People's Republic of)", "KP", "PRK", 408],
        ["Korea (the Republic of)", "KR", "KOR", 410],
        ["Kuwait", "KW", "KWT", 414],
        ["Kyrgyzstan", "KG", "KGZ", 417],
        ["Lao People's Democratic Republic (the)", "LA", "LAO", 418],
        ["Latvia", "LV", "LVA", 428],
        ["Lebanon", "LB", "LBN", 422],
        ["Lesotho", "LS", "LSO", 426],
        ["Liberia", "LR", "LBR", 430],
        ["Libya", "LY", "LBY", 434],
        ["Liechtenstein", "LI", "LIE", 438],
        ["Lithuania", "LT", "LTU", 440],
        ["Luxembourg", "LU", "LUX", 442],
        ["Macao", "MO", "MAC", 446],
        ["Madagascar", "MG", "MDG", 450],
        ["Malawi", "MW", "MWI", 454],
        ["Malaysia", "MY", "MYS", 458],
        ["Maldives", "MV", "MDV", 462],
        ["Mali", "ML", "MLI", 466],
        ["Malta", "MT", "MLT", 470],
        ["Marshall Islands (the)", "MH", "MHL", 584],
        ["Martinique", "MQ", "MTQ", 474],
        ["Mauritania", "MR", "MRT", 478],
        ["Mauritius", "MU", "MUS", 480],
        ["Mayotte", "YT", "MYT", 175],
        ["Mexico", "MX", "MEX", 484],
        ["Micronesia (Federated States of)", "FM", "FSM", 583],
        ["Moldova (the Republic of)", "MD", "MDA", 498],
        ["Monaco", "MC", "MCO", 492],
        ["Mongolia", "MN", "MNG", 496],
        ["Montenegro", "ME", "MNE", 499],
        ["Montserrat", "MS", "MSR", 500],
        ["Morocco", "MA", "MAR", 504],
        ["Mozambique", "MZ", "MOZ", 508],
        ["Myanmar", "MM", "MMR", 104],
        ["Namibia", "NA", "NAM", 516],
        ["Nauru", "NR", "NRU", 520],
        ["Nepal", "NP", "NPL", 524],
        ["Netherlands (the)", "NL", "NLD", 528],
        ["New Caledonia", "NC", "NCL", 540],
        ["New Zealand", "NZ", "NZL", 554],
        ["Nicaragua", "NI", "NIC", 558],
        ["Niger (the)", "NE", "NER", 562],
        ["Nigeria", "NG", "NGA", 566],
        ["Niue", "NU", "NIU", 570],
        ["Norfolk Island", "NF", "NFK", 574],
        ["Northern Mariana Islands (the)", "MP", "MNP", 580],
        ["Norway", "NO", "NOR", 578],
        ["Oman", "OM", "OMN", 512],
        ["Pakistan", "PK", "PAK", 586],
        ["Palau", "PW", "PLW", 585],
        ["Palestine, State of", "PS", "PSE", 275],
        ["Panama", "PA", "PAN", 591],
        ["Papua New Guinea", "PG", "PNG", 598],
        ["Paraguay", "PY", "PRY", 600],
        ["Peru", "PE", "PER", 604],
        ["Philippines (the)", "PH", "PHL", 608],
        ["Pitcairn", "PN", "PCN", 612],
        ["Poland", "PL", "POL", 616],
        ["Portugal", "PT", "PRT", 620],
        ["Puerto Rico", "PR", "PRI", 630],
        ["Qatar", "QA", "QAT", 634],
        ["Republic of North Macedonia", "MK", "MKD", 807],
        ["Romania", "RO", "ROU", 642],
        ["Russian Federation (the)", "RU", "RUS", 643],
        ["Rwanda", "RW", "RWA", 646],
        ["Réunion", "RE", "REU", 638],
        ["Saint Barthélemy", "BL", "BLM", 652],
        ["Saint Helena, Ascension and Tristan da Cunha", "SH", "SHN", 654],
        ["Saint Kitts and Nevis", "KN", "KNA", 659],
        ["Saint Lucia", "LC", "LCA", 662],
        ["Saint Martin (French part)", "MF", "MAF", 663],
        ["Saint Pierre and Miquelon", "PM", "SPM", 666],
        ["Saint Vincent and the Grenadines", "VC", "VCT", 670],
        ["Samoa", "WS", "WSM", 882],
        ["San Marino", "SM", "SMR", 674],
        ["Sao Tome and Principe", "ST", "STP", 678],
        ["Saudi Arabia", "SA", "SAU", 682],
        ["Senegal", "SN", "SEN", 686],
        ["Serbia", "RS", "SRB", 688],
        ["Seychelles", "SC", "SYC", 690],
        ["Sierra Leone", "SL", "SLE", 694],
        ["Singapore", "SG", "SGP", 702],
        ["Sint Maarten (Dutch part)", "SX", "SXM", 534],
        ["Slovakia", "SK", "SVK", 703],
        ["Slovenia", "SI", "SVN", 705],
        ["Solomon Islands", "SB", "SLB", 90],
        ["Somalia", "SO", "SOM", 706],
        ["South Africa", "ZA", "ZAF", 710],
        ["South Georgia and the South Sandwich Islands", "GS", "SGS", 239],
        ["South Sudan", "SS", "SSD", 728],
        ["Spain", "ES", "ESP", 724],
        ["Sri Lanka", "LK", "LKA", 144],
        ["Sudan (the)", "SD", "SDN", 729],
        ["Suriname", "SR", "SUR", 740],
        ["Svalbard and Jan Mayen", "SJ", "SJM", 744],
        ["Sweden", "SE", "SWE", 752],
        ["Switzerland", "CH", "CHE", 756],
        ["Syrian Arab Republic", "SY", "SYR", 760],
        ["Taiwan (Province of China)", "TW", "TWN", 158],
        ["Tajikistan", "TJ", "TJK", 762],
        ["Tanzania, United Republic of", "TZ", "TZA", 834],
        ["Thailand", "TH", "THA", 764],
        ["Timor-Leste", "TL", "TLS", 626],
        ["Togo", "TG", "TGO", 768],
        ["Tokelau", "TK", "TKL", 772],
        ["Tonga", "TO", "TON", 776],
        ["Trinidad and Tobago", "TT", "TTO", 780],
        ["Tunisia", "TN", "TUN", 788],
        ["Turkey", "TR", "TUR", 792],
        ["Turkmenistan", "TM", "TKM", 795],
        ["Turks and Caicos Islands (the)", "TC", "TCA", 796],
        ["Tuvalu", "TV", "TUV", 798],
        ["Uganda", "UG", "UGA", 800],
        ["Ukraine", "UA", "UKR", 804],
        ["United Arab Emirates (THE)", "AE", "ARE", 784],
        ["United Kingdom of Great Britain and Northern Ireland (the)", "GB", "GBR", 826],
        ["United States Minor Outlying Islands (the)", "UM", "UMI", 581],
        ["United States of America (the)", "US", "USA", 840],
        ["Uruguay", "UY", "URY", 858],
        ["Uzbekistan", "UZ", "UZB", 860],
        ["Vanuatu", "VU", "VUT", 548],
        ["Venezuela (Bolivarian Republic of)", "VE", "VEN", 862],
        ["Viet Nam", "VN", "VNM", 704],
        ["Virgin Islands (British)", "VG", "VGB", 92],
        ["Virgin Islands (U.S.)", "VI", "VIR", 850],
        ["Wallis and Futuna", "WF", "WLF", 876],
        ["Western Sahara", "EH", "ESH", 732],
        ["Yemen", "YE", "YEM", 887],
        ["Zambia", "ZM", "ZMB", 894],
        ["Zimbabwe", "ZW", "ZWE", 716],
        ["Åland Islands", "AX", "ALA", 248]
    ];
	
    for (let i = 0; i < 100; i++) {
        const productIndex = Math.floor(Math.random() * productNames.length);
        const countryCode = countryCodes[Math.floor(Math.random() * countryCodes.length)];

        const order: any = {
            id: i,
            productName: productNames[productIndex],
            price: productPrices[productIndex],
            quantity: Math.floor(Math.random() * 8) + 1,
            firstName: firstNames[Math.floor(Math.random() * firstNames.length)],
            lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
            bought: (Math.floor(Math.random() * 5) + 1) % 2 === 0,
            rating: Math.floor(Math.random() * 5) + 1,
            date: new Date((new Date()).getTime() - Math.floor(Math.random() * 9 + 1) * 86400000),
            countryCode: countryCode[1].toLowerCase(),
            country: countryCode[0],
            margin: Math.floor(Math.random() * 4) + 1,
            status: ['Received', 'Confirmed', 'Processing', 'Shipped', 'In transit', 'Delivered'][Math.floor(Math.random() * 6)]
        };
        order.total = parseFloat((order.price * order.quantity).toFixed(2));
        order.profit = parseFloat((((Math.floor(Math.random() * 30) + 9) / 100) * order.total).toFixed(2));
        orderData.push(order);
    }
    return orderData;
}

import { GridModule } from '@smart-webcomponents-angular/grid';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [  GridModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;

    dataSource: any[] = GenerateData();
	dataSourceSettings: any = {
		dataFields: [
			'id: number',
			'productName: string',
			'price: number',
			'quantity: number',
			'firstName: string',
			'lastName: string',
			'total: number',
			'bought: boolean',
			'rating: number',
			'date: date',
			'country: string',
			'margin: number',
			'profit: number',
			'status: string'
		]
	}
	
	selection: GridSelection = {
		enabled: true,
		mode: 'extended'
	};
	
	editing: any = {
		enabled: true,
		dialog: {
			height: 600
		}
	}
	
	layout: GridLayout = {
		cardMinWidth: 350
	}
	
	columns: GridColumn[] =[
		{ label: 'id', dataField: 'id', dataType: 'number', columnGroup: 'name', allowEdit: false, width: 130 },
		{
			label: 'First Name', dataField: 'firstName', columnGroup: 'name', width: 100
		},
		{ label: 'Last Name', dataField: 'lastName', columnGroup: 'name', width: 100 },
		{ label: 'Product Name', dataField: 'productName', columnGroup: 'product', dataType: 'string', width: 150 },
		{ label: 'Price', dataField: 'price', columnGroup: 'product', cellsFormat: 'c2', width: 150 },
		{ label: 'Rating', dataField: 'rating', columnGroup: 'product', template: 'rating', dataType: 'number', width: 150 },
		{ label: 'Quantity', dataField: 'quantity', columnGroup: 'order', dataType: 'number', width: 100 },
		{ label: 'Total', dataField: 'total', columnGroup: 'order', dataType: 'number', cellsFormat: 'c2', width: 150 },
		{ label: 'Bought', dataField: 'bought', columnGroup: 'order', template: 'checkBox', dataType: 'boolean', width: 100 },
		{ label: 'Order Date', dataField: 'date', columnGroup: 'order', dataType: 'date', cellsFormat: 'd', width: 150 },
		{
			label: 'Country', allowEdit: false, columnGroup: 'order', displayField: 'country', dataField: 'countryCode', width: 150, dataType: 'string', template: [[`<img loading="lazy" class="flag" style="width: 15px; height: 10px;" src="{{value}}" />`, 'countryCode', '../../grid/live-update-countries/flags/{{value}}.svg'], ['<span>{{value}}</span>', 'country']]
		},
		{
			label: 'Margin', dataField: 'margin', columnGroup: 'order', dataType: 'number', cellsFormat: 'p', width: 150
		},
		{ label: 'Profit', dataField: 'profit', columnGroup: 'order', dataType: 'number', cellsFormat: 'c2', width: 150 },
		{
			label: 'Status', dataField: 'status', dataType: 'string', width: 150, template: 'list', editor: {
				template: 'dropDownList',
				dataSource: [
					'Delivered',
					'Received',
					'Processing',
					'In transit',
					'Shipped',
					'Confirmed'
				]
			}, cellsClassName: function (index: number, dataField: string, value: string) {
				if (value === 'Delivered') {
					return 'delivered';
				}
				else if (value === 'Received') {
					return 'received';
				}
				else if (value === 'Processing') {
					return 'processing';
				}
				else if (value === 'In transit') {
					return 'inTransit';
				}
				else if (value === 'Processing') {
					return 'processing';
				}
				else if (value === 'Shipped') {
					return 'shipped';
				}
				else if (value === 'Confirmed') {
					return 'confirmed';
				}
				return '';
			}
		}
	]

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.


    }
}