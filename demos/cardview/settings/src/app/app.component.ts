import { Component, ViewChild, OnInit, AfterViewInit } from "@angular/core";
import {
  CardViewComponent,
  Smart
} from "@smart-webcomponents-angular/cardview";
import { CheckBoxComponent } from "@smart-webcomponents-angular/checkbox";
import { DropDownListComponent } from "@smart-webcomponents-angular/dropdownlist";
import { RadioButtonComponent } from "@smart-webcomponents-angular/radiobutton";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild("cardview", { read: CardViewComponent, static: false })
  cardview!: CardViewComponent;
  @ViewChild("titleFieldComponent", { read: DropDownListComponent, static: false })
  titleFieldComponent!: DropDownListComponent;

  dataSource = new Smart.DataAdapter({
    dataSource: this.sampleData,
    dataFields: [
      "firstName: string",
      "lastName: string",
      "birthday: date",
      "petName: string",
      "productName: string",
      "price: number",
      "quantity: number",
      "timeOfPurchase: date",
      "travelPhotos: string",
      "contactPhotos: string"
    ]
  });

  columns = [
    { label: "First Name", dataField: "firstName", icon: "firstName" },
    { label: "Last Name", dataField: "lastName", icon: "lastName" },
    {
      label: "Birthday",
      dataField: "birthday",
      icon: "birthday",
      formatSettings: { formatString: "d" }
    },
    { label: "Pet Name", dataField: "petName", icon: "petName" },
    { label: "Product Name", dataField: "productName", icon: "productName" },
    {
      label: "Price",
      dataField: "price",
      icon: "price",
      formatSettings: { formatString: "c2" }
    },
    {
      label: "Quantity",
      dataField: "quantity",
      icon: "quantity",
      formatFunction: function (settings: any) {
        const value = settings.value;
        let className;
        if (value < 20) {
          className = "red";
        } else if (value < 35) {
          className = "yellow";
        } else {
          className = "green";
        }
        settings.template = `<div class="${className}">${value}</div>`;
      }
    },
    {
      label: "Time of Purchase",
      dataField: "timeOfPurchase",
      icon: "timeOfPurchase",
      formatSettings: { formatString: "hh:mm tt" }
    },
    {
      label: "Travel photos",
      dataField: "travelPhotos",
      icon: "photo",
      formatFunction: this.photoFormatFunction,
      image: true
    },
    {
      label: "Contact photos",
      dataField: "contactPhotos",
      icon: "photo",
      formatFunction: this.photoFormatFunction,
      image: true
    }
  ];

  cellOrientation = "horizontal";
  collapsible = true;
  coverField = "travelPhotos";
  titleField = "firstName";

  photoFormatFunction(settings: any) {
    const photoList = settings.value.split(",");
    let htmlResult = "";
    photoList.forEach((photoUrl: string) => {
      htmlResult += `<img class="thumb" src="${photoUrl}" />`;
    });
    settings.template = htmlResult;
  }

  handleCollapsibleChange(event: CustomEvent) {
    this.cardview.collapsible = event.detail.value;
  }

  handleIconsChange() {
    this.cardview.nativeElement.classList.toggle("disabled-icons");
  }

  handleCellsOrientationChange(orientation: string) {
    this.cardview.cellOrientation = orientation;
  }

  handleImageCoverModeChange(mode: string) {
    this.cardview.coverMode = mode;
  }

  handleTitleChange(event: CustomEvent) {

    switch (event.detail.index) {
      case 0:
        this.cardview.titleField = "firstName";
        break;
      case 1:
        this.cardview.titleField = "lastName";
        break;
      case 2:
        this.cardview.titleField = "petName";
        break;
    }
  }

  ngOnInit(): void {
    // onInit code.
  }

  ngAfterViewInit(): void {
    // afterViewInit code.
    this.init();
  }

  get sampleData() {
    const sampleData = [],
      firstNames = [
        "Andrew",
        "Nancy",
        "Shelley",
        "Regina",
        "Yoshi",
        "Antoni",
        "Mayumi",
        "Ian",
        "Peter",
        "Lars",
        "Petra",
        "Martin",
        "Sven",
        "Elio",
        "Beate",
        "Cheryl",
        "Michael",
        "Guylene"
      ],
      lastNames = [
        "Fuller",
        "Davolio",
        "Burke",
        "Murphy",
        "Nagase",
        "Saavedra",
        "Ohno",
        "Devling",
        "Wilson",
        "Peterson",
        "Winkler",
        "Bein",
        "Petersen",
        "Rossi",
        "Vileid",
        "Saylor",
        "Bjorn",
        "Nodier"
      ],
      petNames = [
        "Sam",
        "Bob",
        "Lucky",
        "Tommy",
        "Charlie",
        "Olliver",
        "Mixie",
        "Fluffy",
        "Acorn",
        "Beak"
      ],
      productNames = [
        "Black Tea",
        "Green Tea",
        "Caffe Espresso",
        "Doubleshot Espresso",
        "Caffe Latte",
        "White Chocolate Mocha",
        "Cramel Latte",
        "Caffe Americano",
        "Cappuccino",
        "Espresso Truffle",
        "Espresso con Panna",
        "Peppermint Mocha Twist"
      ],
      contactImages = [
        "andrew.png",
        "anne.png",
        "avril.jpeg",
        "janet.png",
        "johanna.jpeg",
        "johnny.jpeg",
        "laura.png",
        "margaret.png",
        "Maria.jpeg",
        "mark.jpeg",
        "maya.jpeg",
        "michael.png",
        "monica.jpeg",
        "nancy.png",
        "robert.png",
        "steven.jpeg",
        "steven.png",
        "toni.jpeg"
      ];
    for (let i = 0; i < 20; i++) {
      const row: any = {};
      row.firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      row.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      row.birthday = new Date(
        Math.round(Math.random() * (2018 - 1918) + 1918),
        Math.round(Math.random() * 11),
        Math.round(Math.random() * (31 - 1) + 1)
      );
      row.petName = petNames[Math.floor(Math.random() * petNames.length)];
      row.productName =
        productNames[Math.floor(Math.random() * productNames.length)];
      row.price = parseFloat((Math.random() * (100 - 0.5) + 0.5).toFixed(2));
      row.quantity = Math.round(Math.random() * (50 - 1) + 1);
      row.timeOfPurchase = new Date(
        2018,
        8,
        19,
        Math.round(Math.random() * 23),
        Math.round(Math.random() * (31 - 1) + 1)
      );
      row.travelPhotos = [];
      row.contactPhotos = [];
      const maxPhotos = Math.floor(Math.random() * Math.floor(3)) + 1;
      for (let i = 0; i < maxPhotos; i++) {
        row.travelPhotos.push(
          `https://htmlelements.com/demos/demos/images/travel/${Math.floor(Math.random() * 36) + 1}.jpg`
        );
        row.contactPhotos.push(
          `https://htmlelements.com/demos/demos/images/phonebook/${contactImages[Math.floor(Math.random() * contactImages.length)]
          }`
        );
      }
      row.travelPhotos = row.travelPhotos.join(",");
      row.contactPhotos = row.contactPhotos.join(",");
      sampleData[i] = row;
    }

    return sampleData;
  }

  init(): void {
    // init code.

    this.titleFieldComponent.addEventListener('change', this.handleTitleChange.bind(this) as EventListenerOrEventListenerObject)
  }
}