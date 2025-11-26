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

  dataSource = [
    [
      "Grand Horizon Hotel",
      "The room was spacious and had a beautiful view, but the Wi-Fi was slow.",
      4,
      "$$$",
      "Barcelona, Spain",
      "Deluxe Suite",
      4,
      3,
      "Yes"
    ],
    [
      "Seaside Retreat",
      "Amazing beachfront location! The staff were warm and welcoming.",
      5,
      "$$",
      "Nice, France",
      "Ocean View Room",
      5,
      5,
      "Yes"
    ],
    [
      "Mountain Crest Lodge",
      "Cozy vibe, but the heating in my room wasn’t great.",
      3,
      "$$",
      "Zermatt, Switzerland",
      "Alpine Cabin Room",
      3,
      4,
      "No"
    ],
    [
      "Urban Nights Inn",
      "Good value, but the walls were a bit thin.",
      3,
      "$",
      "Berlin, Germany",
      "Standard Room",
      4,
      3,
      "Yes"
    ],
    [
      "Royal Orchid Suites",
      "Luxurious hotel, though check-in took way too long.",
      4,
      "$$$",
      "Singapore",
      "Executive Suite",
      5,
      4,
      "Yes"
    ],
    [
      "Silverwood Resort",
      "Fantastic pools and an excellent breakfast buffet!",
      5,
      "$$",
      "Phuket, Thailand",
      "Family Villa",
      5,
      5,
      "Yes"
    ],
    [
      "Sunrise Hotel",
      "Comfortable bed, but the bathroom wasn’t perfectly clean.",
      3,
      "$$",
      "Lisbon, Portugal",
      "Superior Room",
      3,
      4,
      "No"
    ],
    [
      "Maple Leaf Residence",
      "Modern rooms and fantastic service — highly recommended!",
      5,
      "$$",
      "Toronto, Canada",
      "Premium Room",
      5,
      5,
      "Yes"
    ],
    [
      "Lakeside Haven",
      "Quiet area, but the shuttle service was unreliable.",
      4,
      "$$",
      "Lake Tahoe, USA",
      "Lakeview Suite",
      4,
      3,
      "No"
    ],
    [
      "Golden Peak Hotel",
      "Loved the rooftop bar! The room decor felt a bit old.",
      4,
      "$$$",
      "Tokyo, Japan",
      "Panorama Suite",
      5,
      4,
      "Yes"
    ]
  ];

  dataSourceSettings: any = {
    dataFields: [
      'hotel: string',
      'review: string',
      'rating: number',
      'price: string',
      'location: string',
      'room: string',
      'clean: number',
      'service: number',
      'again: string'
    ]
  };

  appearance = {
    showColumnIcon: true
  };

  layout = {
    rowHeight: 90
  };

  selection = {
    enabled: true,
    mode: 'extended',
    allowCellSelection: true
  };

  sorting = {
    enabled: true
  };

  ai = {
    promptVariables: [
      { name: 'review', dataField: 'review' },
      { name: 'rating', dataField: 'rating' }
    ]
  };

  columns = [
    {
      label: "Hotel", dataField: "hotel", width: 160
    },
    {
      label: "Review", dataField: "review", width: 200
    },
    // ⭐ STAR RATING TEMPLATE
    {
      label: "Rating",
      dataField: "rating",
      width: 150,
      template: 'rating'
    },
    // 🤖 AI RESPONSE TEMPLATE
    {
      label: "Response",
      dataField: "response",
      width: 450,
      tooltipRenderer: (id: any, dataField: any, value: any, formattedValue: any, data: any) => {
        if (data.response) {
          return `${data.response}`;
        }
        return '';
      },
      AIQuery: `The following is a hotel review along with its star rating (out of 5). Provide a brief, polite response from the hotel's management addressing the guest's feedback.
Review: "{{review}}"
Rating: {{rating}} stars`,
      template: 'ai'
    },
    // 📍 LOCATION
    {
      label: "Location",
      dataField: "location",
      width: 180,
      template: (o: { value: string; template: string }) => {
        o.template = `
          <span class="location-chip">
            <span class="material-icons">location_on</span>
            ${o.value}
          </span>`;
      }
    },
    // 🛏️ ROOM TYPE
    {
      label: "Room Type",
      dataField: "room",
      width: 300,
      template: (o: { value: string; template: string }) => {
        o.template = `
          <span class="room-type-tag">
            <span class="material-icons">king_bed</span>
            ${o.value}
          </span>`;
      }
    },
    // 🧹 CLEANLINESS (New!)
    {
      label: "Cleanliness",
      dataField: "clean",
      width: 130,
      template: (o: { value: number; template: string }) => {
        o.template = `
          <span class="metric-chip">
            <span class="material-icons">cleaning_services</span>
            ${o.value}/5
          </span>`;
      }
    },
    // 🛎️ SERVICE (New!)
    {
      label: "Service",
      dataField: "service",
      width: 120,
      template: (o: { value: number; template: string }) => {
        o.template = `
          <span class="metric-chip">
            <span class="material-icons">room_service</span>
            ${o.value}/5
          </span>`;
      }
    },
    // 👍 WOULD STAY AGAIN
    {
      label: "Stay Again?",
      dataField: "again",
      width: 150,
      template: (o: { value: string; template: string }) => {
        const yes = o.value === "Yes";
        o.template = `
          <span class="${yes ? "yes-pill" : "no-pill"}">
            <span class="material-icons">
              ${yes ? "check_circle" : "cancel"}
            </span>
            ${o.value}
          </span>`;
      }
    }
  ];

  ngAfterViewInit(): void {
    // Initialize the grid with the defined properties

  }
}
