import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Smart, GridComponent } from '@smart-webcomponents-angular/grid';
import { GetData } from '../assets/data';

import { GridModule } from '@smart-webcomponents-angular/grid';

import { ButtonModule } from '@smart-webcomponents-angular/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ButtonModule,  GridModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit {
 @ViewChild('grid', { static: false }) grid!: GridComponent;

  appearance = {
      showRowHeaderNumber: true
    }
    dataSource= [{
      ticker: "US10Y",
      name: "U.S. Treasury 10-Year Bond",
      instrument: "Bond",
      quantity: 1e3,
      purchaseDate: "2025-06-01",
      purchasePrice: 100,
      price: 102.5,
      timeline: [103.53, 100.45, 72.77, 74.83, 66.63, 59.45, 63.55, 61.5, 68.67, 64.58, 133.25, 132.22, 77.9, 78.92, 71.75, 76.88, 69.7, 76.88, 77.9, 114.8, 119.92, 113.78, 114.8, 126.08]
    }, {
      ticker: "CAD30Y",
      name: "Canada 30-Year Government Bond",
      instrument: "Bond",
      quantity: 550,
      purchaseDate: "2025-06-10",
      purchasePrice: 96,
      price: 97,
      timeline: [93.12, 100.88, 95.06, 97.97, 93.12, 97.97, 97.97, 94.09, 71.78, 70.81, 67.9, 65.96, 146.47, 147.44, 148.41, 145.5, 141.62, 144.53, 116.4, 119.31, 60.14, 52.38, 120.28, 119.31]
    }, {
      ticker: "MUB",
      name: "iShares National Muni Bond ETF",
      instrument: "ETF",
      quantity: 75,
      purchaseDate: "2025-06-11",
      purchasePrice: 115,
      price: 116,
      timeline: [117.16, 117.16, 111.36, 111.36, 111.36, 114.84, 113.68, 120.64, 118.32, 119.48, 114.84, 111.36, 113.68, 111.36, 111.36, 113.68, 118.32, 113.68, 113.68, 113.68, 111.36, 145, 148.48, 139.2]
    }, {
      ticker: "BTC-USD",
      name: "Bitcoin",
      instrument: "Crypto",
      quantity: 200,
      purchaseDate: "2025-06-15",
      purchasePrice: 3e4,
      price: 29e3,
      timeline: [30450, 28130, 18850, 20300, 20590, 21170, 20590, 20880, 40890, 34510, 24070, 22040, 22910, 30740, 28130, 28420, 29e3, 28710, 30160, 34510, 33060, 33060, 32770, 33060]
    }, {
      ticker: "T",
      name: "AT&T Inc.",
      instrument: "Stock",
      quantity: 100,
      purchaseDate: "2025-06-15",
      purchasePrice: 20,
      price: 21.5,
      timeline: [20.86, 21.29, 20.43, 21.07, 21.93, 21.07, 22.14, 21.07, 20.86, 27.95, 25.15, 25.37, 26.45, 24.94, 26.45, 26.88, 24.94, 26.02, 25.15, 26.66, 26.66, 25.8, 26.45, 26.88]
    }, {
      ticker: "FRN2027",
      name: "France Government Bond 2027",
      instrument: "Bond",
      quantity: 400,
      purchaseDate: "2025-06-15",
      purchasePrice: 102,
      price: 103,
      timeline: [73.13, 74.16, 72.1, 129.78, 122.57, 123.6, 126.69, 129.78, 122.57, 123.6, 121.54, 87.55, 82.4, 86.52, 81.37, 85.49, 82.4, 83.43, 111.24, 114.33, 135.96, 139.05, 134.93, 134.93]
    }, {
      ticker: "ADI",
      name: "Analog Devices, Inc.",
      instrument: "Stock",
      quantity: 30,
      purchaseDate: "2025-06-17",
      purchasePrice: 160,
      price: 165,
      timeline: [136.95, 132, 135.3, 135.3, 145.2, 145.2, 118.8, 120.45, 130.35, 115.5, 120.45, 113.85, 115.5, 227.7, 229.35, 235.95, 234.3, 237.6, 224.4, 229.35, 232.65, 237.6, 231, 226.05]
    }, {
      ticker: "AIG",
      name: "American International Group",
      instrument: "Stock",
      quantity: 80,
      purchaseDate: "2025-06-18",
      purchasePrice: 52,
      price: 53,
      timeline: [54.06, 53, 50.88, 50.88, 50.35, 53.53, 55.12, 50.35, 34.98, 34.98, 51.94, 56.18, 56.18, 56.18, 56.18, 56.71, 56.18, 51.94, 63.6, 59.89, 60.95, 60.42, 60.42, 63.6]
    }, {
      ticker: "DAL",
      name: "Delta Air Lines Inc",
      instrument: "Stock",
      quantity: 70,
      purchaseDate: "2025-06-18",
      purchasePrice: 40,
      price: 42,
      timeline: [40.32, 40.74, 43.68, 44.1, 43.26, 22.68, 24.78, 23.52, 22.26, 22.26, 24.36, 21.42, 22.68, 22.26, 21.42, 27.72, 28.14, 55.86, 54.18, 54.6, 55.02, 57.96, 21.42, 49.14]
    }, {
      ticker: "BP",
      name: "BP plc",
      instrument: "Stock",
      quantity: 75,
      purchaseDate: "2025-06-18",
      purchasePrice: 305,
      price: 315,
      timeline: [315, 324.45, 302.4, 236.25, 330.75, 340.2, 252, 418.95, 406.35, 444.15, 463.05, 311.85, 327.6, 368.55, 355.95, 198.45, 189, 201.6, 195.3, 182.7, 198.45, 220.5, 236.25, 242.55]
    }, {
      ticker: "MA",
      name: "Mastercard Inc",
      instrument: "Stock",
      quantity: 15,
      purchaseDate: "2025-06-20",
      purchasePrice: 350,
      price: 360,
      timeline: [363.6, 342, 367.2, 363.6, 374.4, 363.6, 367.2, 230.4, 205.2, 439.2, 460.8, 460.8, 460.8, 457.2, 453.6, 460.8, 464.4, 435.6, 446.4, 435.6, 529.2, 529.2, 540, 507.6]
    }, {
      ticker: "VGT",
      name: "Vanguard Information Tech ETF",
      instrument: "ETF",
      quantity: 25,
      purchaseDate: "2025-06-20",
      purchasePrice: 370,
      price: 375,
      timeline: [375, 510, 506.25, 480, 506.25, 491.25, 491.25, 536.25, 543.75, 562.5, 525, 510, 513.75, 498.75, 495, 528.75, 525, 498.75, 521.25, 498.75, 498.75, 510, 506.25, 502.5]
    }, {
      ticker: "PBR",
      name: "Petrobras",
      instrument: "Stock",
      quantity: 100,
      purchaseDate: "2025-06-20",
      purchasePrice: 10,
      price: 11,
      timeline: [11.55, 6.05, 6.16, 13.64, 13.75, 14.85, 14.19, 7.48, 7.37, 7.37, 7.7, 7.81, 13.42, 13.64, 12.98, 15.73, 16.17, 15.51, 15.84, 15.07, 14.08, 14.52, 14.63, 9.9]
    }, {
      ticker: "EUBOND",
      name: "Eurozone 20-Year Government Bond",
      instrument: "Bond",
      quantity: 150,
      purchaseDate: "2025-06-20",
      purchasePrice: 100,
      price: 101,
      timeline: [103.02, 97.97, 101, 103.02, 97.97, 82.82, 75.75, 74.74, 79.79, 80.8, 80.8, 76.76, 73.73, 78.78, 74.74, 83.83, 81.81, 82.82, 81.81, 106.05, 103.02, 108.07, 108.07, 64.64]
    }, {
      ticker: "CORPBOND",
      name: "Corporate Bond Generic",
      instrument: "Bond",
      quantity: 200,
      purchaseDate: "2025-06-20",
      purchasePrice: 105,
      price: 106,
      timeline: [104.94, 108.12, 110.24, 102.82, 107.06, 107.06, 103.88, 110.24, 136.74, 134.62, 134.62, 128.26, 132.5, 61.48, 55.12, 58.3, 82.68, 85.86, 72.08, 71.02, 66.78, 74.2, 75.26, 73.14]
    }, {
      ticker: "JNJ",
      name: "Johnson & Johnson",
      instrument: "Stock",
      quantity: 40,
      purchaseDate: "2025-06-25",
      purchasePrice: 160,
      price: 165,
      timeline: [160.05, 166.65, 166.65, 165, 156.75, 141.9, 156.75, 143.55, 196.35, 188.1, 196.35, 196.35, 209.55, 214.5, 204.6, 207.9, 209.55, 211.2, 216.15, 133.65, 122.1, 135.3, 127.05, 125.4]
    }, {
      ticker: "V",
      name: "Visa Inc",
      instrument: "Stock",
      quantity: 25,
      purchaseDate: "2025-06-30",
      purchasePrice: 210,
      price: 215,
      timeline: [215, 221.45, 210.7, 208.55, 215, 212.85, 223.6, 206.4, 223.6, 210.7, 223.6, 219.3, 208.55, 206.4, 208.55, 208.55, 223.6, 215, 210.7, 219.3, 208.55, 223.6, 212.85, 225.75]
    }, {
      ticker: "PEP",
      name: "PepsiCo Inc",
      instrument: "Stock",
      quantity: 40,
      purchaseDate: "2025-06-30",
      purchasePrice: 160,
      price: 165,
      timeline: [163.35, 168.3, 237.6, 245.85, 234.3, 222.75, 232.65, 163.35, 165, 176.55, 163.35, 168.3, 161.7, 161.7, 168.3, 150.15, 148.5, 161.7, 155.1, 161.7, 161.7, 158.4, 186.45, 176.55]
    }, {
      ticker: "UBER",
      name: "Uber Technologies Inc",
      instrument: "Stock",
      quantity: 70,
      purchaseDate: "2025-06-30",
      purchasePrice: 44,
      price: 46,
      timeline: [46, 45.54, 46, 46, 45.54, 69.92, 66.7, 68.08, 69.92, 67.62, 68.08, 70.38, 68.08, 69.92, 44.16, 42.32, 44.62, 43.7, 45.54, 42.32, 41.4, 45.54, 43.7, 45.08]
    }, {
      ticker: "XLF",
      name: "Financial Select Sector SPDR Fund",
      instrument: "ETF",
      quantity: 75,
      purchaseDate: "2025-06-30",
      purchasePrice: 33,
      price: 34.5,
      timeline: [50.71, 49.34, 52.09, 48.99, 49.68, 50.71, 49.34, 25.18, 24.15, 25.18, 23.8, 25.53, 23.46, 24.84, 24.49, 46.58, 46.23, 26.22, 26.91, 43.13, 44.85, 44.16, 45.89, 45.2]
    }, {
      ticker: "MRNA",
      name: "Moderna Inc",
      instrument: "Stock",
      quantity: 50,
      purchaseDate: "2025-06-30",
      purchasePrice: 150,
      price: 155,
      timeline: [148.8, 155, 151.9, 159.65, 165.85, 161.2, 165.85, 167.4, 82.15, 83.7, 193.75, 187.55, 187.55, 139.5, 141.05, 151.9, 148.8, 125.55, 120.9, 133.3, 125.55, 130.2, 133.3, 128.65]
    }, {
      ticker: "VYM",
      name: "Vanguard High Dividend Yield ETF",
      instrument: "ETF",
      quantity: 40,
      purchaseDate: "2025-06-30",
      purchasePrice: 90,
      price: 92,
      timeline: [95.68, 118.68, 111.32, 117.76, 114.08, 116.84, 68.08, 73.6, 65.32, 87.4, 57.04, 57.96, 58.88, 50.6, 52.44, 75.44, 70.84, 60.72, 56.12, 54.28, 53.36, 51.52, 55.2, 49.68]
    }, {
      ticker: "GER30Y",
      name: "Germany 30-Year Government Bond",
      instrument: "Bond",
      quantity: 200,
      purchaseDate: "2025-07-01",
      purchasePrice: 95,
      price: 96.5,
      timeline: [69.48, 62.73, 70.44, 72.38, 70.44, 63.69, 68.52, 66.58, 69.48, 67.55, 68.52, 70.44, 60.8, 54.04, 108.08, 109.04, 106.15, 103.26, 109.04, 78.17, 75.27, 53.08, 50.18, 62.73]
    }, {
      ticker: "KO",
      name: "Coca-Cola Co",
      instrument: "Stock",
      quantity: 80,
      purchaseDate: "2025-07-03",
      purchasePrice: 58.5,
      price: 60,
      timeline: [57.6, 61.8, 61.8, 61.8, 62.4, 49.8, 47.4, 44.4, 48.6, 34.2, 36, 34.2, 36.6, 55.8, 36, 57.6, 54, 51.6, 49.2, 51, 67.2, 62.4, 82.2, 85.8]
    }, {
      ticker: "GOOGL",
      name: "Alphabet Inc",
      instrument: "Stock",
      quantity: 15,
      purchaseDate: "2025-07-05",
      purchasePrice: 2300,
      price: 2500,
      timeline: [1825, 1675, 1775, 3475, 3425, 3425, 3500, 3425, 3475, 3425, 2425, 2275, 2325, 2300, 2275, 2300, 2275, 2425, 2450, 2300, 2350, 2275, 2250, 1250]
    }, {
      ticker: "TLH",
      name: "iShares 10-20 Year Treasury Bond ETF",
      instrument: "ETF",
      quantity: 100,
      purchaseDate: "2025-07-05",
      purchasePrice: 135,
      price: 138,
      timeline: [140.76, 136.62, 136.62, 135.24, 132.48, 85.56, 78.66, 78.66, 82.8, 80.04, 82.8, 78.66, 80.04, 85.56, 77.28, 81.42, 84.18, 81.42, 85.56, 186.3, 135.24, 184.92, 179.4, 182.16]
    }, {
      ticker: "TSLA",
      name: "Tesla Inc",
      instrument: "Stock",
      quantity: 50,
      purchaseDate: "2025-07-10",
      purchasePrice: 860.5,
      price: 880,
      timeline: [871.2, 448.8, 704, 712.8, 730.4, 739.2, 756.8, 1302.4, 1249.6, 1284.8, 1249.6, 1293.6, 1302.4, 1267.2, 1240.8, 651.2, 642.4, 607.2, 624.8, 915.2, 932.8, 880, 932.8, 862.4]
    }, {
      ticker: "TLT",
      name: "iShares 20+ Year Treasury Bond ETF",
      instrument: "ETF",
      quantity: 40,
      purchaseDate: "2025-07-10",
      purchasePrice: 120,
      price: 118.5,
      timeline: [120.87, 117.31, 117.31, 113.76, 123.24, 113.76, 123.24, 106.65, 98.35, 98.35, 101.91, 94.8, 99.54, 93.62, 75.84, 161.16, 168.27, 150.5, 148.13, 149.31, 117.31, 114.94, 122.06, 123.24]
    }, {
      ticker: "QCOM",
      name: "Qualcomm Inc",
      instrument: "Stock",
      quantity: 45,
      purchaseDate: "2025-07-10",
      purchasePrice: 135,
      price: 140,
      timeline: [138.6, 144.2, 137.2, 74.2, 103.6, 106.4, 113.4, 103.6, 203, 203, 211.4, 100.8, 98, 156.8, 110.6, 105, 172.2, 113.4, 112, 106.4, 116.2, 114.8, 112, 201.6]
    }, {
      ticker: "PCG",
      name: "PG&E Corporation",
      instrument: "Stock",
      quantity: 100,
      purchaseDate: "2025-07-10",
      purchasePrice: 12,
      price: 12.5,
      timeline: [12.5, 12.25, 12.38, 12.25, 12.25, 12.75, 7.5, 7.63, 7.38, 6.88, 7, 6.88, 13.75, 14.37, 13.75, 13.88, 17.5, 17.5, 17.25, 17.75, 17.13, 17.5, 13.25, 10.13]
    }, {
      ticker: "RBLX",
      name: "Roblox Corporation",
      instrument: "Stock",
      quantity: 50,
      purchaseDate: "2025-07-10",
      purchasePrice: 40,
      price: 42.5,
      timeline: [44.63, 42.5, 38.68, 35.7, 50.57, 52.7, 39.95, 40.38, 42.08, 38.68, 39.95, 40.8, 41.23, 41.65, 58.23, 56.53, 55.68, 55.68, 58.65, 55.68, 58.23, 54.83, 56.95, 58.65]
    }, {
      ticker: "ORCL",
      name: "Oracle Corporation",
      instrument: "Stock",
      quantity: 50,
      purchaseDate: "2025-07-12",
      purchasePrice: 88,
      price: 90,
      timeline: [86.4, 91.8, 92.7, 91.8, 90.9, 94.5, 116.1, 114.3, 116.1, 114.3, 114.3, 111.6, 115.2, 109.8, 117.9, 110.7, 112.5, 117.9, 117, 97.2, 90, 94.5, 89.1, 91.8]
    }, {
      ticker: "NFLX",
      name: "Netflix Inc",
      instrument: "Stock",
      quantity: 20,
      purchaseDate: "2025-07-12",
      purchasePrice: 420,
      price: 435,
      timeline: [413.25, 426.3, 217.5, 239.25, 230.55, 204.45, 239.25, 421.95, 439.35, 400.2, 652.5, 669.9, 630.75, 661.2, 665.55, 665.55, 261, 252.3, 256.65, 234.9, 256.65, 247.95, 265.35, 239.25]
    }, {
      ticker: "AMD",
      name: "Advanced Micro Devices",
      instrument: "Stock",
      quantity: 30,
      purchaseDate: "2025-07-14",
      purchasePrice: 105,
      price: 110,
      timeline: [113.3, 112.2, 116.6, 112.2, 117.7, 111.1, 113.3, 107.8, 112.2, 116.6, 108.9, 110, 91.3, 91.3, 95.7, 130.9, 129.8, 125.4, 126.5, 125.4, 132, 132, 106.7, 114.4]
    }, {
      ticker: "CSCO35",
      name: "Cisco Systems 2035 Corporate Bond",
      instrument: "Bond",
      quantity: 500,
      purchaseDate: "2025-07-15",
      purchasePrice: 98.75,
      price: 99.5,
      timeline: [103.48, 101.49, 101.49, 98.5, 102.48, 97.51, 102.48, 104.48, 87.56, 86.56, 86.56, 88.56, 86.56, 82.58, 82.58, 80.59, 80.59, 85.57, 83.58, 88.56, 82.58, 79.6, 61.69, 59.7]
    }, {
      ticker: "INTC",
      name: "Intel Corp",
      instrument: "Stock",
      quantity: 60,
      purchaseDate: "2025-07-15",
      purchasePrice: 48,
      price: 50,
      timeline: [48, 49.5, 43, 40.5, 43, 41.5, 42, 42, 42, 43.5, 42.5, 55, 56.5, 56.5, 54.5, 69.5, 71.5, 69.5, 69.5, 73, 71.5, 72.5, 71, 69]
    }, {
      ticker: "SONY",
      name: "Sony Group Corporation",
      instrument: "Stock",
      quantity: 50,
      purchaseDate: "2025-07-15",
      purchasePrice: 8200,
      price: 8300,
      timeline: [8051, 8300, 8549, 9296, 9296, 9379, 9047, 4565, 4980, 4897, 4482, 4565, 5063, 12533, 12782, 12201, 12367, 12201, 11952, 12201, 12118, 12616, 12284, 12201]
    }, {
      ticker: "IYR",
      name: "iShares U.S. Real Estate ETF",
      instrument: "ETF",
      quantity: 70,
      purchaseDate: "2025-07-15",
      purchasePrice: 95,
      price: 97,
      timeline: [94.09, 82.45, 85.36, 83.42, 78.57, 77.6, 81.48, 73.72, 81.48, 73.72, 80.51, 76.63, 78.57, 72.75, 105.73, 100.88, 108.64, 105.73, 132.89, 134.83, 135.8, 129.01, 130.95, 132.89]
    }, {
      ticker: "GOVT",
      name: "iShares U.S. Treasury Bond ETF",
      instrument: "ETF",
      quantity: 150,
      purchaseDate: "2025-07-15",
      purchasePrice: 25,
      price: 25.5,
      timeline: [24.99, 24.73, 30.34, 30.09, 30.34, 31.62, 34.94, 23.71, 23.21, 24.48, 36.72, 35.7, 36.21, 37.48, 35.19, 35.19, 26.52, 26.78, 27.03, 14.54, 15.3, 34.43, 35.19, 33.41]
    }, {
      ticker: "ETH-USD",
      name: "Ethereum",
      instrument: "Crypto",
      quantity: 10,
      purchaseDate: "2025-07-18",
      purchasePrice: 1500,
      price: 1800,
      timeline: [1764, 1872, 1890, 1836, 1710, 2286, 1224, 1170, 2196, 2196, 2250, 2232, 2142, 2214, 2286, 2178, 1944, 1530, 1584, 2070, 2160, 2106, 2178, 2142]
    }, {
      ticker: "F",
      name: "Ford Motor Company",
      instrument: "Stock",
      quantity: 150,
      purchaseDate: "2025-07-18",
      purchasePrice: 12,
      price: 12.5,
      timeline: [8.5, 7.88, 8, 8.38, 18.38, 19.13, 19.13, 18.25, 19.13, 18.75, 19.13, 18.5, 18.5, 18.5, 18.75, 18.88, 18.13, 13.13, 12.88, 13.63, 12.75, 12.5, 7.5, 7.75]
    }, {
      ticker: "CAT",
      name: "Caterpillar Inc",
      instrument: "Stock",
      quantity: 40,
      purchaseDate: "2025-07-18",
      purchasePrice: 220,
      price: 225,
      timeline: [333, 328.5, 319.5, 326.25, 326.25, 321.75, 326.25, 272.25, 274.5, 272.25, 198, 209.25, 209.25, 204.75, 146.25, 150.75, 144, 139.5, 146.25, 148.5, 146.25, 135, 146.25, 155.25]
    }, {
      ticker: "LTC-USD",
      name: "Litecoin",
      instrument: "Crypto",
      quantity: 100,
      purchaseDate: "2025-07-18",
      purchasePrice: 130,
      price: 140,
      timeline: [137.2, 112, 106.4, 119, 116.2, 116.2, 109.2, 110.6, 196, 200.2, 204.4, 197.4, 102.2, 107.8, 100.8, 103.6, 102.2, 105, 103.6, 190.4, 168, 170.8, 177.8, 169.4]
    }, {
      ticker: "TSLABOND",
      name: "Tesla 2028 Corporate Bond",
      instrument: "Bond",
      quantity: 250,
      purchaseDate: "2025-07-18",
      purchasePrice: 98,
      price: 100,
      timeline: [97, 102, 97, 97, 95, 102, 100, 57, 52, 52, 58, 54, 51, 59, 57, 136, 139, 139, 137, 132, 129, 122, 122, 123]
    }, {
      ticker: "IEF",
      name: "iShares 7-10 Year Treasury Bond ETF",
      instrument: "ETF",
      quantity: 90,
      purchaseDate: "2025-07-19",
      purchasePrice: 105,
      price: 106,
      timeline: [106, 102.82, 108.12, 124.02, 127.2, 131.44, 120.84, 122.96, 127.2, 126.14, 130.38, 66.78, 74.2, 65.72, 71.02, 69.96, 74.2, 79.5, 73.14, 74.2, 78.44, 69.96, 69.96, 74.2]
    }, {
      ticker: "XOM",
      name: "Exxon Mobil Corporation",
      instrument: "Stock",
      quantity: 100,
      purchaseDate: "2025-07-20",
      purchasePrice: 90,
      price: 95,
      timeline: [95.95, 96.9, 90.25, 97.85, 47.5, 52.25, 48.45, 48.45, 53.2, 54.15, 55.1, 46.55, 55.1, 87.4, 88.35, 92.15, 112.1, 110.2, 115.9, 113.05, 66.5, 63.65, 61.75, 66.5]
    }, {
      ticker: "XLE",
      name: "Energy Select Sector SPDR Fund",
      instrument: "ETF",
      quantity: 50,
      purchaseDate: "2025-07-20",
      purchasePrice: 75,
      price: 78,
      timeline: [81.12, 78, 74.88, 81.12, 89.7, 88.92, 90.48, 87.36, 91.26, 97.5, 102.96, 96.72, 70.2, 71.76, 70.98, 70.2, 55.38, 52.26, 51.48, 55.38, 56.16, 58.5, 80.34, 75.66]
    }, {
      ticker: "GE35C",
      name: "General Electric 2035 Corporate Bond",
      instrument: "Bond",
      quantity: 600,
      purchaseDate: "2025-07-20",
      purchasePrice: 98.5,
      price: 99,
      timeline: [103.95, 96.03, 100.98, 148.5, 73.26, 73.26, 142.56, 141.57, 143.55, 96.03, 98.01, 125.73, 126.72, 130.68, 127.71, 130.68, 68.31, 74.25, 71.28, 69.3, 72.27, 75.24, 66.33, 69.3]
    }, {
      ticker: "SHOP",
      name: "Shopify Inc",
      instrument: "Stock",
      quantity: 30,
      purchaseDate: "2025-07-20",
      purchasePrice: 480,
      price: 490,
      timeline: [504.7, 504.7, 504.7, 490, 470.4, 490, 475.3, 504.7, 450.8, 416.5, 455.7, 524.3, 499.8, 509.6, 539, 543.9, 534.1, 543.9, 686, 695.8, 715.4, 700.7, 690.9, 730.1]
    }, {
      ticker: "SAP",
      name: "SAP SE",
      instrument: "Stock",
      quantity: 30,
      purchaseDate: "2025-07-21",
      purchasePrice: 105,
      price: 108,
      timeline: [108, 110.16, 103.68, 110.16, 119.88, 115.56, 109.08, 116.64, 115.56, 114.48, 119.88, 111.24, 111.24, 111.24, 111.24, 117.72, 72.36, 75.6, 84.24, 83.16, 60.48, 61.56, 63.72, 65.88]
    }, {
      ticker: "MSFT",
      name: "Microsoft Corp",
      instrument: "Stock",
      quantity: 30,
      purchaseDate: "2025-07-22",
      purchasePrice: 280,
      price: 300,
      timeline: [309, 288, 387, 399, 402, 384, 402, 156, 159, 168, 162, 162, 144, 396, 375, 387, 384, 378, 399, 387, 390, 396, 195, 174]
    }, {
      ticker: "SLV",
      name: "iShares Silver Trust",
      instrument: "ETF",
      quantity: 150,
      purchaseDate: "2025-07-22",
      purchasePrice: 22,
      price: 23,
      timeline: [24.61, 25.3, 25.53, 18.63, 16.1, 16.56, 16.56, 15.18, 15.87, 12.42, 13.57, 12.88, 14.72, 15.87, 14.72, 14.49, 15.41, 14.95, 14.95, 14.72, 15.41, 14.49, 16.56, 30.59]
    }, {
      ticker: "MO",
      name: "Altria Group Inc",
      instrument: "Stock",
      quantity: 80,
      purchaseDate: "2025-07-22",
      purchasePrice: 48,
      price: 50,
      timeline: [48.5, 51.5, 48, 50, 50.5, 48.5, 52, 52, 49, 50, 44, 46.5, 47.5, 48, 49, 49, 53, 71.5, 72, 66, 68, 44, 41, 59]
    }, {
      ticker: "MRK",
      name: "Merck & Co Inc",
      instrument: "Stock",
      quantity: 50,
      purchaseDate: "2025-07-22",
      purchasePrice: 85,
      price: 88,
      timeline: [88.88, 84.48, 88, 83.6, 88, 85.36, 85.36, 89.76, 50.16, 67.76, 65.12, 65.12, 62.48, 62.48, 62.48, 68.64, 65.12, 129.36, 79.2, 81.84, 117.04, 116.16, 117.92, 113.52]
    }, {
      ticker: "EQNR",
      name: "Equinor ASA",
      instrument: "Stock",
      quantity: 80,
      purchaseDate: "2025-07-22",
      purchasePrice: 22,
      price: 23,
      timeline: [23.46, 23.92, 23.46, 24.84, 25.3, 16.33, 14.95, 15.18, 15.18, 16.33, 16.1, 15.41, 14.49, 14.49, 14.72, 14.95, 16.56, 15.41, 15.64, 15.87, 14.95, 14.72, 15.41, 16.1]
    }, {
      ticker: "ABBV",
      name: "AbbVie Inc.",
      instrument: "Stock",
      quantity: 50,
      purchaseDate: "2025-07-22",
      purchasePrice: 140,
      price: 145,
      timeline: [149.35, 184.15, 184.15, 187.05, 182.7, 182.7, 185.6, 175.45, 188.5, 181.25, 188.5, 104.4, 97.15, 100.05, 98.6, 100.05, 98.6, 94.25, 89.9, 102.95, 200.1, 189.95, 195.75, 191.4]
    }, {
      ticker: "UAL",
      name: "United Airlines Holdings Inc",
      instrument: "Stock",
      quantity: 75,
      purchaseDate: "2025-07-22",
      purchasePrice: 45,
      price: 47,
      timeline: [58.75, 59.22, 40.42, 39.95, 41.36, 42.3, 41.83, 44.18, 41.83, 42.77, 43.24, 41.36, 42.3, 41.36, 61.1, 59.22, 58.28, 61.57, 62.98, 60.16, 58.75, 44.18, 40.42, 66.74]
    }, {
      ticker: "SOL-USD",
      name: "Solana",
      instrument: "Crypto",
      quantity: 120,
      purchaseDate: "2025-07-22",
      purchasePrice: 35,
      price: 38,
      timeline: [38, 22.42, 36.86, 38, 35.34, 36.48, 35.34, 56.62, 56.62, 57.38, 54.72, 53.96, 52.82, 52.44, 55.1, 53.2, 55.1, 52.44, 54.72, 52.82, 55.1, 55.1, 52.44, 53.58]
    }, {
      ticker: "MCD",
      name: "McDonald's Corporation",
      instrument: "Stock",
      quantity: 30,
      purchaseDate: "2025-07-25",
      purchasePrice: 250,
      price: 255,
      timeline: [262.65, 257.55, 252.45, 255, 252.45, 260.1, 247.35, 257.55, 242.25, 255, 252.45, 262.65, 252.45, 252.45, 260.1, 255, 255, 252.45, 249.9, 247.35, 260.1, 357, 362.1, 359.55]
    }, {
      ticker: "PYPL",
      name: "PayPal Holdings Inc",
      instrument: "Stock",
      quantity: 30,
      purchaseDate: "2025-07-25",
      purchasePrice: 110,
      price: 115,
      timeline: [155.25, 147.2, 146.05, 132.25, 142.6, 151.8, 148.35, 146.05, 144.9, 146.05, 141.45, 142.6, 97.75, 88.55, 87.4, 87.4, 96.6, 96.6, 93.15, 93.15, 95.45, 93.15, 89.7, 87.4]
    }, {
      ticker: "JPM30",
      name: "JP Morgan 2030 Corporate Bond",
      instrument: "Bond",
      quantity: 450,
      purchaseDate: "2025-07-25",
      purchasePrice: 99.5,
      price: 100,
      timeline: [102, 104, 105, 100, 104, 124, 131, 134, 136, 132, 131, 138, 129, 132, 100, 94, 140, 113, 115, 122, 118, 119, 141, 145]
    }, {
      ticker: "SQ",
      name: "Block Inc",
      instrument: "Stock",
      quantity: 30,
      purchaseDate: "2025-07-25",
      purchasePrice: 75,
      price: 77.5,
      timeline: [79.83, 75.95, 78.28, 75.95, 80.6, 79.83, 77.5, 73.63, 72.85, 62, 58.13, 60.45, 60.45, 61.23, 61.23, 60.45, 60.45, 58.9, 59.68, 62.78, 74.4, 48.05, 44.18, 103.85]
    }, {
      ticker: "NGG",
      name: "National Grid plc",
      instrument: "Stock",
      quantity: 40,
      purchaseDate: "2025-07-28",
      purchasePrice: 850,
      price: 860,
      timeline: [903, 903, 885.8, 842.8, 868.6, 903, 903, 817, 817, 885.8, 894.4, 894.4, 877.2, 877.2, 834.2, 825.6, 817, 860, 851.4, 817, 808.4, 791.2, 791.2, 791.2]
    }, {
      ticker: "VWO",
      name: "Vanguard FTSE Emerging Markets ETF",
      instrument: "ETF",
      quantity: 120,
      purchaseDate: "2025-07-30",
      purchasePrice: 50,
      price: 50.5,
      timeline: [51.01, 51.01, 75.25, 75.75, 73.73, 77.77, 77.77, 76.76, 74.23, 74.23, 73.73, 65.65, 66.16, 62.12, 63.13, 64.64, 32.83, 32.83, 32.32, 32.32, 32.32, 33.33, 30.8, 32.83]
    }, {
      ticker: "GILD",
      name: "Gilead Sciences Inc",
      instrument: "Stock",
      quantity: 60,
      purchaseDate: "2025-07-30",
      purchasePrice: 68,
      price: 70,
      timeline: [67.9, 69.3, 69.3, 67.2, 72.1, 36.4, 35.7, 35.7, 35.7, 32.9, 34.3, 36.4, 37.1, 32.9, 38.5, 36.4, 36.4, 35, 38.5, 55.3, 51.1, 49, 53.2, 52.5]
    }, {
      ticker: "BILI",
      name: "Bilibili Inc",
      instrument: "Stock",
      quantity: 70,
      purchaseDate: "2025-07-30",
      purchasePrice: 30,
      price: 31.5,
      timeline: [33.08, 31.18, 27.41, 28.35, 34.02, 33.08, 32.76, 33.08, 34.34, 33.39, 34.34, 23, 21.1, 18.9, 21.1, 20.79, 20.16, 19.21, 21.73, 18.59, 21.1, 20.16, 23.31, 22.68]
    }, {
      ticker: "CVS",
      name: "CVS Health Corporation",
      instrument: "Stock",
      quantity: 75,
      purchaseDate: "2025-08-01",
      purchasePrice: 85,
      price: 86,
      timeline: [83.42, 84.28, 87.72, 86, 88.58, 82.56, 83.42, 89.44, 86, 82.56, 86, 86.86, 84.28, 82.56, 88.58, 83.42, 90.3, 86, 49.02, 56.76, 49.88, 49.02, 50.74, 117.82]
    }, {
      ticker: "TIP",
      name: "iShares TIPS Bond ETF",
      instrument: "ETF",
      quantity: 80,
      purchaseDate: "2025-08-05",
      purchasePrice: 112,
      price: 113.5,
      timeline: [161.17, 156.63, 150.96, 158.9, 153.23, 157.77, 154.36, 140.74, 136.2, 152.09, 157.77, 158.9, 153.23, 149.82, 158.9, 153.23, 152.09, 154.36, 157.77, 152.09, 90.8, 90.8, 89.67, 133.93]
    }, {
      ticker: "GBTC",
      name: "Grayscale Bitcoin Trust (BTC)",
      instrument: "ETF",
      quantity: 100,
      purchaseDate: "2025-08-05",
      purchasePrice: 30,
      price: 28,
      timeline: [27.44, 28, 18.2, 38.36, 39.2, 39.76, 39.48, 40.04, 38.64, 18.48, 17.92, 32.76, 30.8, 32.2, 26.04, 28.28, 28.28, 28.28, 27.44, 26.32, 35, 34.44, 36.4, 31.64]
    }, {
      ticker: "LMT",
      name: "Lockheed Martin Corporation",
      instrument: "Stock",
      quantity: 15,
      purchaseDate: "2025-08-05",
      purchasePrice: 430,
      price: 440,
      timeline: [457.6, 422.4, 462, 444.4, 572, 554.4, 589.6, 369.6, 378.4, 378.4, 391.6, 382.8, 391.6, 387.2, 356.4, 378.4, 374, 387.2, 510.4, 541.2, 519.2, 541.2, 541.2, 510.4]
    }, {
      ticker: "DE10YT",
      name: "Germany 10-Year Government Bond",
      instrument: "Bond",
      quantity: 700,
      purchaseDate: "2025-08-05",
      purchasePrice: 104,
      price: 104.5,
      timeline: [82.56, 81.51, 77.33, 79.42, 78.38, 80.47, 78.38, 79.42, 86.73, 86.73, 84.65, 78.38, 136.9, 81.51, 83.6, 78.38, 81.51, 82.56, 76.28, 82.56, 74.19, 74.19, 80.47, 81.51]
    }, {
      ticker: "CRM",
      name: "Salesforce, Inc.",
      instrument: "Stock",
      quantity: 40,
      purchaseDate: "2025-08-05",
      purchasePrice: 190,
      price: 195,
      timeline: [189.15, 204.75, 196.95, 195, 196.95, 202.8, 185.25, 189.15, 189.15, 193.05, 187.2, 183.3, 183.3, 183.3, 191.1, 183.3, 113.1, 117, 130.65, 117, 115.05, 200.85, 206.7, 210.6]
    }, {
      ticker: "ARKK",
      name: "ARK Innovation ETF",
      instrument: "ETF",
      quantity: 25,
      purchaseDate: "2025-08-05",
      purchasePrice: 45,
      price: 46,
      timeline: [48.3, 28.52, 26.22, 27.6, 25.76, 26.22, 26.22, 27.14, 24.84, 28.52, 26.22, 24.38, 28.52, 24.38, 59.34, 60.72, 57.96, 64.4, 61.18, 29.9, 47.38, 47.84, 46.46, 48.3]
    }, {
      ticker: "XMR-USD",
      name: "Monero",
      instrument: "Crypto",
      quantity: 50,
      purchaseDate: "2025-08-05",
      purchasePrice: 200,
      price: 210,
      timeline: [216.3, 216.3, 216.3, 138.6, 142.8, 157.5, 144.9, 147, 157.5, 151.2, 142.8, 216.3, 302.4, 310.8, 315, 126, 134.4, 138.6, 140.7, 138.6, 138.6, 132.3, 132.3, 189]
    }, {
      ticker: "MTCH",
      name: "Match Group Inc",
      instrument: "Stock",
      quantity: 45,
      purchaseDate: "2025-08-08",
      purchasePrice: 95,
      price: 100,
      timeline: [99, 100, 97, 116, 123, 61, 59, 55, 59, 52, 57, 53, 53, 130, 127, 125, 127, 54, 49, 134, 106, 113, 113, 108]
    }, {
      ticker: "AMZN",
      name: "Amazon.com Inc",
      instrument: "Stock",
      quantity: 20,
      purchaseDate: "2025-08-10",
      purchasePrice: 3200,
      price: 3300,
      timeline: [3168, 4587, 4521, 4554, 4422, 4422, 4521, 4587, 4356, 4356, 4620, 4389, 4488, 4620, 4587, 4686, 4818, 4917, 4818, 4818, 4653, 3300, 3234, 3168]
    }, {
      ticker: "NYCMUNI",
      name: "New York Municipal Bond 2040",
      instrument: "Bond",
      quantity: 300,
      purchaseDate: "2025-08-10",
      purchasePrice: 101.25,
      price: 101.75,
      timeline: [103.78, 98.7, 100.73, 133.29, 127.19, 131.26, 105.82, 107.86, 103.78, 111.93, 71.22, 69.19, 151.61, 147.54, 144.48, 148.56, 147.54, 147.54, 151.61, 150.59, 151.61, 153.64, 144.48, 149.57]
    }, {
      ticker: "RIO",
      name: "Rio Tinto Group",
      instrument: "Stock",
      quantity: 45,
      purchaseDate: "2025-08-10",
      purchasePrice: 4800,
      price: 4900,
      timeline: [4753, 4753, 4753, 4949, 4802, 4655, 3969, 4165, 3920, 4263, 4018, 4165, 3822, 4214, 3969, 2499, 2450, 2842, 2940, 2842, 2450, 3577, 3724, 5586]
    }, {
      ticker: "VZ25B",
      name: "Verizon 2025 Corporate Bond",
      instrument: "Bond",
      quantity: 500,
      purchaseDate: "2025-08-10",
      purchasePrice: 101,
      price: 101.5,
      timeline: [97.44, 85.26, 53.8, 57.86, 51.77, 118.75, 121.8, 128.91, 135, 71.05, 76.13, 105.56, 101.5, 96.42, 102.52, 103.53, 101.5, 140.07, 137.03, 85.26, 85.26, 76.13, 136.01, 101.5]
    }, {
      ticker: "CABOND",
      name: "California Municipal Bond",
      instrument: "Bond",
      quantity: 100,
      purchaseDate: "2025-08-10",
      purchasePrice: 102,
      price: 103.5,
      timeline: [117.99, 114.89, 121.09, 113.85, 57.96, 52.79, 52.79, 51.75, 52.79, 56.93, 51.75, 52.79, 48.64, 49.68, 48.64, 54.86, 53.82, 55.89, 52.79, 50.71, 57.96, 52.79, 49.68, 48.64]
    }, {
      ticker: "MMM",
      name: "3M Co",
      instrument: "Stock",
      quantity: 30,
      purchaseDate: "2025-08-11",
      purchasePrice: 160,
      price: 158,
      timeline: [158, 154.84, 153.26, 143.78, 184.86, 181.7, 183.28, 118.5, 127.98, 129.56, 132.72, 129.56, 124.82, 129.56, 127.98, 135.88, 129.56, 126.4, 159.58, 148.52, 153.26, 150.1, 115.34, 115.34]
    }, {
      ticker: "PG",
      name: "Procter & Gamble Co",
      instrument: "Stock",
      quantity: 30,
      purchaseDate: "2025-08-12",
      purchasePrice: 140,
      price: 142.5,
      timeline: [138.22, 106.88, 102.6, 112.58, 126.83, 121.13, 121.13, 118.27, 122.55, 116.85, 116.85, 119.7, 182.4, 180.97, 114, 115.43, 116.85, 118.27, 114, 119.7, 119.7, 111.15, 168.15, 159.6]
    }, {
      ticker: "BRK.B",
      name: "Berkshire Hathaway Inc. Class B",
      instrument: "Stock",
      quantity: 5,
      purchaseDate: "2025-08-12",
      purchasePrice: 292,
      price: 300,
      timeline: [405, 405, 393, 396, 411, 399, 408, 399, 393, 396, 399, 390, 228, 231, 435, 420, 414, 414, 444, 438, 429, 426, 441, 441]
    }, {
      ticker: "TOT",
      name: "TotalEnergies SE",
      instrument: "Stock",
      quantity: 55,
      purchaseDate: "2025-08-12",
      purchasePrice: 42,
      price: 43.5,
      timeline: [42.2, 43.5, 42.2, 42.2, 44.37, 43.5, 24.36, 23.93, 22.62, 20.88, 22.62, 40.45, 53.51, 53.51, 54.81, 53.51, 54.81, 52.2, 53.51, 53.51, 53.07, 53.51, 52.63, 52.63]
    }, {
      ticker: "ZM",
      name: "Zoom Video Communications",
      instrument: "Stock",
      quantity: 40,
      purchaseDate: "2025-08-12",
      purchasePrice: 110,
      price: 115,
      timeline: [112.7, 117.3, 92, 86.25, 93.15, 90.85, 158.7, 159.85, 159.85, 152.95, 164.45, 141.45, 136.85, 94.3, 94.3, 92, 169.05, 167.9, 166.75, 165.6, 163.3, 167.9, 161, 166.75]
    }, {
      ticker: "SPOT",
      name: "Spotify Technology SA",
      instrument: "Stock",
      quantity: 35,
      purchaseDate: "2025-08-12",
      purchasePrice: 110,
      price: 112,
      timeline: [113.12, 116.48, 164.64, 156.8, 162.4, 160.16, 157.92, 157.92, 67.2, 61.6, 54.88, 61.6, 56, 124.32, 133.28, 108.64, 110.88, 112, 115.36, 113.12, 115.36, 143.36, 141.12, 141.12]
    }, {
      ticker: "BND",
      name: "Vanguard Total Bond Market ETF",
      instrument: "ETF",
      quantity: 200,
      purchaseDate: "2025-08-15",
      purchasePrice: 79.5,
      price: 80,
      timeline: [77.6, 82.4, 80.8, 81.6, 69.6, 67.2, 67.2, 68.8, 69.6, 65.6, 65.6, 68, 68, 66.4, 70.4, 70.4, 68, 84.8, 55.2, 52, 52, 92, 97.6, 93.6]
    }, {
      ticker: "BLK",
      name: "BlackRock, Inc.",
      instrument: "Stock",
      quantity: 20,
      purchaseDate: "2025-08-15",
      purchasePrice: 720,
      price: 730,
      timeline: [715.4, 708.1, 584, 890.6, 854.1, 890.6, 379.6, 408.8, 408.8, 372.3, 408.8, 438, 365, 423.4, 430.7, 401.5, 372.3, 401.5, 941.7, 934.4, 934.4, 963.6, 970.9, 970.9]
    }, {
      ticker: "NKE",
      name: "Nike Inc",
      instrument: "Stock",
      quantity: 60,
      purchaseDate: "2025-08-15",
      purchasePrice: 105,
      price: 108,
      timeline: [108, 108, 103.68, 111.24, 111.24, 109.08, 108, 106.92, 112.32, 106.92, 156.6, 157.68, 162, 153.36, 157.68, 159.84, 158.76, 155.52, 159.84, 153.36, 152.28, 157.68, 160.92, 81]
    }, {
      ticker: "ADBE",
      name: "Adobe Inc",
      instrument: "Stock",
      quantity: 15,
      purchaseDate: "2025-08-15",
      purchasePrice: 480,
      price: 490,
      timeline: [705.6, 710.5, 720.3, 735, 739.9, 725.2, 637, 632.1, 328.3, 298.9, 656.6, 681.1, 676.2, 700.7, 705.6, 690.9, 646.8, 641.9, 651.7, 646.8, 641.9, 622.3, 641.9, 289.1]
    }, {
      ticker: "QQQ",
      name: "Invesco QQQ Trust",
      instrument: "ETF",
      quantity: 25,
      purchaseDate: "2025-08-15",
      purchasePrice: 370,
      price: 380,
      timeline: [361, 391.4, 452.2, 456, 440.8, 467.4, 467.4, 182.4, 201.4, 190, 459.8, 471.2, 467.4, 459.8, 471.2, 467.4, 486.4, 391.4, 459.8, 444.6, 459.8, 456, 475, 444.6]
    }, {
      ticker: "NIO",
      name: "NIO Inc",
      instrument: "Stock",
      quantity: 100,
      purchaseDate: "2025-08-15",
      purchasePrice: 20,
      price: 21,
      timeline: [20.58, 21.42, 20.16, 21.84, 21.84, 23.1, 21.63, 22.05, 23.1, 22.47, 22.68, 22.05, 23.31, 22.47, 31.29, 16.17, 15.75, 16.38, 16.38, 15.75, 16.38, 16.17, 16.59, 16.8]
    }, {
      ticker: "HYG",
      name: "iShares iBoxx $ High Yield Corporate Bond ETF",
      instrument: "ETF",
      quantity: 100,
      purchaseDate: "2025-08-18",
      purchasePrice: 87,
      price: 87.5,
      timeline: [87.5, 122.5, 126, 70, 70.88, 63, 70, 65.63, 70, 69.13, 70, 67.38, 63.88, 63.88, 59.5, 64.75, 61.25, 60.37, 91, 96.25, 96.25, 94.5, 89.25, 97.13]
    }, {
      ticker: "XBI",
      name: "SPDR S&P Biotech ETF",
      instrument: "ETF",
      quantity: 60,
      purchaseDate: "2025-08-19",
      purchasePrice: 80,
      price: 82,
      timeline: [78.72, 85.28, 78.72, 82.82, 109.06, 101.68, 104.96, 85.28, 50.84, 51.66, 69.7, 70.52, 71.34, 67.24, 71.34, 65.6, 71.34, 66.42, 68.06, 67.24, 68.88, 70.52, 65.6, 68.06]
    }, {
      ticker: "ENB",
      name: "Enbridge Inc",
      instrument: "Stock",
      quantity: 50,
      purchaseDate: "2025-08-20",
      purchasePrice: 40,
      price: 41,
      timeline: [39.77, 41.41, 39.77, 41, 39.77, 42.64, 42.64, 41.41, 40.59, 38.95, 40.18, 39.36, 30.75, 29.93, 29.93, 31.98, 28.7, 29.52, 22.55, 25.42, 23.78, 23.37, 22.14, 21.73]
    }, {
      ticker: "BCH-USD",
      name: "Bitcoin Cash",
      instrument: "Crypto",
      quantity: 85,
      purchaseDate: "2025-08-20",
      purchasePrice: 300,
      price: 310,
      timeline: [294.5, 325.5, 322.4, 322.4, 306.9, 306.9, 313.1, 310, 241.8, 260.4, 235.6, 248, 300.7, 297.6, 279, 303.8, 350.3, 368.9, 161.2, 142.6, 362.7, 359.6, 368.9, 375.1]
    }, {
      ticker: "SCHD",
      name: "Schwab U.S. Dividend Equity ETF",
      instrument: "ETF",
      quantity: 50,
      purchaseDate: "2025-08-21",
      purchasePrice: 65,
      price: 66.5,
      timeline: [63.17, 67.17, 41.23, 43.23, 44.55, 47.21, 47.21, 47.21, 41.9, 41.9, 43.89, 45.22, 46.55, 46.55, 41.9, 34.58, 75.14, 74.48, 89.78, 93.1, 93.77, 92.44, 92.44, 91.77]
    }, {
      ticker: "ITB2031",
      name: "Italy 2031 Government Bond",
      instrument: "Bond",
      quantity: 300,
      purchaseDate: "2025-08-21",
      purchasePrice: 99,
      price: 99.5,
      timeline: [96.52, 94.52, 98.5, 95.52, 97.51, 97.51, 102.48, 55.72, 50.74, 132.34, 125.37, 132.34, 132.34, 64.67, 64.67, 71.64, 76.61, 67.66, 73.63, 72.64, 68.66, 106.47, 117.41, 117.41]
    }, {
      ticker: "JPM",
      name: "JPMiorgan Chase & Co",
      instrument: "Stock",
      quantity: 45,
      purchaseDate: "2025-08-22",
      purchasePrice: 125,
      price: 130,
      timeline: [161.2, 157.3, 149.5, 136.5, 144.3, 133.9, 133.9, 139.1, 140.4, 143, 143, 141.7, 146.9, 148.2, 170.3, 171.6, 165.1, 167.7, 166.4, 169, 172.9, 169, 166.4, 98.8]
    }, {
      ticker: "C",
      name: "Citigroup Inc",
      instrument: "Stock",
      quantity: 70,
      purchaseDate: "2025-08-22",
      purchasePrice: 45,
      price: 47.5,
      timeline: [45.6, 35.15, 32.77, 32.77, 34.2, 42.27, 46.07, 43.7, 44.65, 42.75, 44.17, 45.6, 46.07, 43.23, 42.75, 44.17, 32.77, 65.55, 66.97, 64.6, 66.97, 63.18, 65.55, 67.45]
    }, {
      ticker: "FDX",
      name: "FedEx Corporation",
      instrument: "Stock",
      quantity: 20,
      purchaseDate: "2025-08-22",
      purchasePrice: 230,
      price: 240,
      timeline: [247.2, 264, 139.2, 122.4, 280.8, 297.6, 285.6, 278.4, 319.2, 319.2, 328.8, 333.6, 316.8, 333.6, 324, 276, 283.2, 283.2, 266.4, 271.2, 273.6, 271.2, 273.6, 276]
    }, {
      ticker: "SBUX",
      name: "Starbucks Corp",
      instrument: "Stock",
      quantity: 55,
      purchaseDate: "2025-08-22",
      purchasePrice: 85,
      price: 88,
      timeline: [90.64, 88.88, 128.48, 124.08, 122.32, 126.72, 91.52, 92.4, 92.4, 89.76, 87.12, 61.6, 59.84, 54.56, 133.76, 126.72, 130.24, 126.72, 130.24, 132.88, 133.76, 124.96, 129.36, 127.6]
    }, {
      ticker: "ADA-USD",
      name: "Cardano",
      instrument: "Crypto",
      quantity: 500,
      purchaseDate: "2025-08-22",
      purchasePrice: .5,
      price: .55,
      timeline: [.56, .58, .54, .53, .56, .52, .57, .55, .42, .4, .42, .4, .45, .46, .44, .46, .46, .47, .46, .44, .47, .46, .46, .44]
    }, {
      ticker: "DIS",
      name: "Walt Disney Co",
      instrument: "Stock",
      quantity: 35,
      purchaseDate: "2025-08-24",
      purchasePrice: 115,
      price: 120,
      timeline: [118.8, 123.6, 123.6, 120, 121.2, 117.6, 123.6, 115.2, 115.2, 124.8, 174, 171.6, 58.8, 73.2, 84, 78, 80.4, 80.4, 76.8, 78, 84, 146.4, 150, 148.8]
    }, {
      ticker: "AAPL",
      name: "Apple Inc",
      instrument: "Stock",
      quantity: 75,
      purchaseDate: "2025-08-25",
      purchasePrice: 145,
      price: 150,
      timeline: [153, 148.5, 154.5, 151.5, 148.5, 157.5, 144, 157.5, 150, 114, 117, 127.5, 121.5, 115.5, 124.5, 115.5, 126, 120, 117, 118.5, 123, 120, 120, 127.5]
    }, {
      ticker: "LYFT",
      name: "Lyft, Inc.",
      instrument: "Stock",
      quantity: 65,
      purchaseDate: "2025-08-25",
      purchasePrice: 16,
      price: 17,
      timeline: [17, 17.17, 17.68, 17.51, 17, 17.51, 17, 17.85, 14.28, 13.94, 14.28, 14.28, 14.62, 15.3, 15.47, 14.79, 14.11, 13.94, 15.47, 15.64, 14.45, 14.79, 25.16, 24.65]
    }, {
      ticker: "RTX",
      name: "Raytheon Technologies Corporation",
      instrument: "Stock",
      quantity: 35,
      purchaseDate: "2025-08-25",
      purchasePrice: 85,
      price: 88,
      timeline: [91.52, 86.24, 95.04, 94.16, 93.28, 98.56, 94.16, 90.64, 95.92, 95.04, 92.4, 91.52, 97.68, 97.68, 48.4, 47.52, 50.16, 55.44, 54.56, 88, 90.64, 90.64, 94.16, 87.12]
    }, {
      ticker: "TM",
      name: "Toyota Motor Corp",
      instrument: "Stock",
      quantity: 35,
      purchaseDate: "2025-08-25",
      purchasePrice: 7300,
      price: 7400,
      timeline: [7474, 7622, 7474, 7400, 7992, 7696, 7548, 7622, 6068, 6068, 5846, 6068, 6364, 5846, 5994, 6216, 5994, 6068, 6364, 5772, 6364, 6364, 7918, 7548]
    }, {
      ticker: "JP10Y",
      name: "Japan 10-Year Government Bond",
      instrument: "Bond",
      quantity: 300,
      purchaseDate: "2025-08-25",
      purchasePrice: 99,
      price: 100,
      timeline: [117, 115, 120, 114, 116, 120, 119, 118, 119, 111, 121, 115, 117, 102, 100, 102, 96, 56, 53, 65, 76, 78, 79, 76]
    }, {
      ticker: "GS10Y",
      name: "Goldman Sachs 10-Year Corporate Bond",
      instrument: "Bond",
      quantity: 200,
      purchaseDate: "2025-08-28",
      purchasePrice: 100.5,
      price: 101,
      timeline: [103.02, 104.03, 99.99, 104.03, 62.62, 63.63, 61.61, 66.66, 52.52, 57.57, 57.57, 57.57, 54.54, 48.48, 57.57, 50.5, 57.57, 54.54, 51.51, 53.53, 50.5, 143.42, 146.45, 140.39]
    }, {
      ticker: "DKNG",
      name: "DraftKings Inc",
      instrument: "Stock",
      quantity: 100,
      purchaseDate: "2025-08-28",
      purchasePrice: 18,
      price: 19,
      timeline: [19.38, 18.81, 19.95, 19.76, 19.76, 19, 19.19, 13.11, 12.54, 11.97, 10.45, 11.4, 16.91, 15.01, 15.58, 23.56, 22.8, 16.15, 19.19, 19.57, 27.36, 26.98, 28.5, 28.5]
    }, {
      ticker: "GLD",
      name: "SPDR Gold Trust",
      instrument: "ETF",
      quantity: 100,
      purchaseDate: "2025-09-01",
      purchasePrice: 170.25,
      price: 172,
      timeline: [168.56, 175.44, 247.68, 244.24, 239.08, 249.4, 237.36, 251.12, 245.96, 237.36, 245.96, 247.68, 254.56, 244.24, 251.12, 251.12, 240.8, 187.48, 192.64, 184.04, 189.2, 194.36, 256.28, 258]
    }, {
      ticker: "SPY",
      name: "SPDR S&P 500 ETF Trust",
      instrument: "ETF",
      quantity: 20,
      purchaseDate: "2025-09-01",
      purchasePrice: 420,
      price: 430,
      timeline: [430, 305.3, 335.4, 305.3, 322.5, 309.6, 335.4, 313.9, 305.3, 485.9, 477.3, 275.2, 296.7, 283.8, 279.5, 296.7, 283.8, 563.3, 412.8, 417.1, 430, 614.9, 279.5, 249.4]
    }, {
      ticker: "CVX",
      name: "Chevron Corp",
      instrument: "Stock",
      quantity: 40,
      purchaseDate: "2025-09-01",
      purchasePrice: 150,
      price: 155,
      timeline: [159.65, 145.7, 159.65, 147.25, 153.45, 173.6, 161.2, 165.85, 161.2, 172.05, 168.95, 173.6, 159.65, 164.3, 162.75, 170.5, 201.5, 190.65, 198.4, 124, 116.25, 114.7, 125.55, 182.9]
    }, {
      ticker: "IWM",
      name: "iShares Russell 2000 ETF",
      instrument: "ETF",
      quantity: 60,
      purchaseDate: "2025-09-01",
      purchasePrice: 190,
      price: 192,
      timeline: [153.6, 167.04, 155.52, 165.12, 167.04, 168.96, 130.56, 136.32, 122.88, 128.64, 138.24, 124.8, 136.32, 138.24, 122.88, 122.88, 132.48, 124.8, 128.64, 138.24, 274.56, 257.28, 257.28, 255.36]
    }, {
      ticker: "HSBC",
      name: "HSBC Holdings plc",
      instrument: "Stock",
      quantity: 60,
      purchaseDate: "2025-09-01",
      purchasePrice: 620,
      price: 630,
      timeline: [611.1, 611.1, 598.5, 648.9, 630, 636.3, 648.9, 630, 585.9, 623.7, 617.4, 611.1, 604.8, 573.3, 598.5, 863.1, 907.2, 875.7, 919.8, 894.6, 875.7, 919.8, 913.5, 365.4]
    }, {
      ticker: "USB30Y",
      name: "U.S. Treasury 30-Year Bond",
      instrument: "Bond",
      quantity: 800,
      purchaseDate: "2025-09-01",
      purchasePrice: 95,
      price: 96.5,
      timeline: [138, 134.14, 135.1, 132.21, 137.03, 135.1, 103.26, 99.39, 100.36, 98.43, 95.53, 94.57, 99.39, 100.36, 98.43, 60.8, 60.8, 57.9, 56.94, 65.62, 50.18, 70.44, 71.41, 80.09]
    }, {
      ticker: "VOOG",
      name: "Vanguard S&P 500 Growth ETF",
      instrument: "ETF",
      quantity: 20,
      purchaseDate: "2025-09-01",
      purchasePrice: 200,
      price: 205,
      timeline: [205, 207.05, 211.15, 198.85, 196.8, 215.25, 202.95, 198.85, 200.9, 198.85, 207.05, 209.1, 213.2, 205, 194.75, 207.05, 202.95, 200.9, 205, 196.8, 196.8, 205, 135.3, 147.6]
    }, {
      ticker: "DOT-USD",
      name: "Polkadot",
      instrument: "Crypto",
      quantity: 200,
      purchaseDate: "2025-09-01",
      purchasePrice: 18,
      price: 19,
      timeline: [18.05, 18.24, 23.56, 23.56, 22.42, 18.24, 16.72, 17.67, 17.1, 18.43, 17.1, 18.43, 16.91, 16.72, 16.53, 15.2, 15.77, 15.01, 26.41, 24.7, 25.46, 26.41, 25.46, 25.65]
    }, {
      ticker: "ICLN",
      name: "iShares Global Clean Energy ETF",
      instrument: "ETF",
      quantity: 70,
      purchaseDate: "2025-09-01",
      purchasePrice: 22,
      price: 23,
      timeline: [23.46, 23.92, 16.79, 33.58, 33.12, 34.27, 32.89, 34.04, 15.18, 15.64, 28.06, 28.52, 28.29, 31.97, 32.89, 31.05, 32.43, 25.99, 14.95, 14.03, 13.11, 15.41, 16.79, 25.76]
    }, {
      ticker: "IBM",
      name: "IBM Corp",
      instrument: "Stock",
      quantity: 25,
      purchaseDate: "2025-09-05",
      purchasePrice: 140,
      price: 142,
      timeline: [147.68, 213, 217.26, 211.58, 213, 201.64, 198.8, 200.22, 190.28, 201.64, 190.28, 191.7, 203.06, 190.28, 201.64, 190.28, 190.28, 102.24, 132.06, 139.16, 136.32, 142, 140.58, 137.74]
    }, {
      ticker: "VOO",
      name: "Vanguard S&P 500 ETF",
      instrument: "ETF",
      quantity: 10,
      purchaseDate: "2025-09-05",
      purchasePrice: 380,
      price: 385,
      timeline: [373.45, 515.9, 519.75, 512.05, 527.45, 515.9, 277.2, 284.9, 296.45, 288.75, 273.35, 296.45, 288.75, 308, 304.15, 288.75, 304.15, 300.3, 288.75, 254.1, 254.1, 250.25, 234.85, 227.15]
    }, {
      ticker: "BABA",
      name: "Alibaba Group Holding Ltd",
      instrument: "Stock",
      quantity: 25,
      purchaseDate: "2025-09-05",
      purchasePrice: 88,
      price: 90,
      timeline: [94.5, 93.6, 86.4, 85.5, 91.8, 90.9, 91.8, 86.4, 91.8, 89.1, 85.5, 81.9, 81.9, 81, 71.1, 76.5, 71.1, 73.8, 67.5, 93.6, 92.7, 97.2, 96.3, 101.7]
    }, {
      ticker: "SPCE",
      name: "Virgin Galactic Holdings Inc",
      instrument: "Stock",
      quantity: 85,
      purchaseDate: "2025-09-05",
      purchasePrice: 8,
      price: 8.5,
      timeline: [8.76, 8.5, 8.67, 8.76, 8.41, 8.76, 8.16, 8.33, 8.16, 7.82, 7.65, 7.14, 7.14, 7.74, 7.14, 7.31, 10.63, 10.54, 10.63, 11.3, 10.54, 11.05, 10.96, 11.13]
    }, {
      ticker: "EONGY",
      name: "E.ON SE",
      instrument: "Stock",
      quantity: 70,
      purchaseDate: "2025-09-07",
      purchasePrice: 9,
      price: 9.5,
      timeline: [4.94, 9.03, 9.31, 9.5, 9.21, 9.69, 9.12, 10.64, 11.3, 11.02, 7.88, 7.03, 7.98, 7.88, 8.36, 7.6, 7.98, 8.27, 7.7, 9.69, 9.31, 9.6, 9.31, 8.93]
    }, {
      ticker: "NVDA",
      name: "NVIDIA Corporation",
      instrument: "Stock",
      quantity: 40,
      purchaseDate: "2025-09-10",
      purchasePrice: 450,
      price: 500,
      timeline: [415, 435, 415, 395, 425, 435, 405, 300, 530, 570, 545, 515, 480, 495, 260, 240, 260, 255, 260, 245, 270, 260, 275, 245]
    }, {
      ticker: "PFE",
      name: "Pfizer Inc",
      instrument: "Stock",
      quantity: 60,
      purchaseDate: "2025-09-10",
      purchasePrice: 39,
      price: 40,
      timeline: [41.2, 38.4, 38.8, 40, 52.4, 53.6, 50, 50.4, 52.4, 52, 36, 37.6, 35.2, 38, 37.2, 37.6, 34.4, 36.4, 36.4, 35.2, 38, 24.4, 20.8, 23.2]
    }, {
      ticker: "BA",
      name: "Boeing Co",
      instrument: "Stock",
      quantity: 30,
      purchaseDate: "2025-09-10",
      purchasePrice: 180,
      price: 185,
      timeline: [188.7, 181.3, 192.4, 188.7, 194.25, 179.45, 190.55, 247.9, 247.9, 255.3, 127.65, 129.5, 127.65, 136.9, 138.75, 136.9, 129.5, 135.05, 114.7, 123.95, 125.8, 155.4, 247.9, 231.25]
    }, {
      ticker: "TWTR",
      name: "Twitter Inc",
      instrument: "Stock",
      quantity: 90,
      purchaseDate: "2025-09-10",
      purchasePrice: 36,
      price: 38,
      timeline: [38, 39.52, 22.8, 23.94, 22.8, 22.42, 23.94, 21.66, 23.56, 22.04, 22.42, 21.28, 23.18, 21.28, 21.66, 23.18, 23.56, 22.04, 22.04, 44.08, 44.46, 23.94, 25.08, 26.6]
    }, {
      ticker: "HON",
      name: "Honeywell International Inc",
      instrument: "Stock",
      quantity: 25,
      purchaseDate: "2025-09-10",
      purchasePrice: 210,
      price: 215,
      timeline: [225.75, 309.6, 266.6, 270.9, 279.5, 268.75, 283.8, 273.05, 184.9, 178.45, 187.05, 219.3, 324.65, 309.6, 320.35, 311.75, 313.9, 189.2, 313.9, 320.35, 326.8, 311.75, 238.65, 258]
    }, {
      ticker: "USB2025",
      name: "US Corporate Bond 2025",
      instrument: "Bond",
      quantity: 100,
      purchaseDate: "2025-09-10",
      purchasePrice: 102,
      price: 103,
      timeline: [119.48, 122.57, 123.6, 116.39, 116.39, 122.57, 121.54, 119.48, 118.45, 89.61, 87.55, 90.64, 83.43, 91.67, 56.65, 55.62, 49.44, 55.62, 49.44, 50.47, 49.44, 48.41, 51.5, 51.5]
    }, {
      ticker: "SPAB",
      name: "SPDR Portfolio Aggregate Bond ETF",
      instrument: "ETF",
      quantity: 60,
      purchaseDate: "2025-09-10",
      purchasePrice: 28,
      price: 28.5,
      timeline: [29.64, 27.64, 27.36, 14.82, 14.54, 15.68, 15.11, 13.68, 13.68, 13.39, 28.79, 28.79, 27.64, 28.5, 28.21, 27.64, 29.36, 26.79, 31.64, 32.49, 31.64, 32.49, 33.34, 15.39]
    }, {
      ticker: "GE",
      name: "General Electric Company",
      instrument: "Stock",
      quantity: 85,
      purchaseDate: "2025-09-12",
      purchasePrice: 75,
      price: 77,
      timeline: [80.85, 78.54, 75.46, 74.69, 77, 73.92, 74.69, 76.23, 77, 76.23, 71.61, 77.77, 103.95, 99.33, 100.87, 101.64, 93.17, 92.4, 97.02, 93.94, 93.17, 93.17, 97.79, 51.59]
    }, {
      ticker: "UKGILT10",
      name: "UK 10-Year Gilt",
      instrument: "Bond",
      quantity: 350,
      purchaseDate: "2025-09-12",
      purchasePrice: 98,
      price: 98.5,
      timeline: [94.56, 94.56, 100.47, 146.76, 140.85, 137.9, 145.78, 137.9, 138.88, 118.2, 120.17, 50.23, 112.29, 64.03, 70.92, 102.44, 103.43, 101.45, 98.5, 92.59, 92.59, 87.67, 94.56, 94.56]
    }]
	
    dataSourceSettings = {
      dataFields: [
		  { name: "ticker", dataType: "string" },
		  { name: "name", dataType: "string" },
		  { name: "instrument", dataType: "string" },
		  { name: "quantity", dataType: "number" },
		  { name: "purchaseDate", dataType: "date" },
		  { name: "purchasePrice", dataType: "number" },
		  { name: "price", dataType: "number" },
		  { name: "timeline", dataType: "any" }
      ]
    }
    selection = {
      enabled: true,
      allowCellSelection: true,
      allowRowHeaderSelection: true,
      allowColumnHeaderSelection: true,
      mode: 'extended'
    }
    summaryRow = {
      visible: true,
      editing: true
    }
    behavior = {
      columnResizeMode: 'growAndShrink',
      allowColumnReorder: true
    }
    layout = {
      rowMinHeight: 40
    }
    columns = [
      {
        label: 'Ticker', dataField: 'ticker', width: 350, dataType: 'string', template: (formatObject: any) => {
          const data = formatObject.data;
          const value = formatObject.value;
          const imgSrc = './images/' + value + '.png';

          if (!formatObject.template) {
            formatObject.template = '<div style="margin-left: 10px; align-items: center; gap: 5px;" class="smart-flex">' +
              '<img src="' + imgSrc + '" style="width: 20px; height: 20px; border-radius: 32px;"/>' +
              '<span style="font-weight: bold;">' + value + '</span><span>' + data.name + '</span></div>';
          }
          else {
            const img = formatObject.template.children[0];
            const ticker = formatObject.template.children[1];
            const name = formatObject.template.children[2];

            img.src = imgSrc;
            ticker.textContent = value;
            name.textContent = data.name;
          }
        }
      },
      {
        label: 'Instrument', dataField: 'instrument', template: 'tags', options: [
          { color: '#18BFFF', label: 'Bond', value: 'Bond' },
          { color: '#F82B60', label: 'ETF', value: 'ETF' },
          { color: '#6B1CB0', label: 'Crypto', value: 'Crypto' },
          { color: '#1283DA', label: 'Stock', value: 'Stock' }
        ], width: 100, dataType: 'string'
      },
      { label: 'Purchase Date', align: 'right', width: 200, dataField: 'purchaseDate', dataType: 'date' },
      {
        label: 'Purchase Price', align: 'right', width: 200, dataField: 'purchasePrice', dataType: 'number', cellsFormat: 'c2',
        template: (settings: any) => {
          const data = settings.data;
          let price = data.price;
          let purchasePrice = data.purchasePrice;

          let isUp: boolean = false;
          let isPurchaseUp: boolean = false;

          if (data.oldPrice !== undefined) {
            isUp = price > data.oldPrice;
            isPurchaseUp = purchasePrice > data.oldPurchasePrice;
          }
          else {
            data.oldPurchasePrice = data.purchasePrice;
            data.oldPrice = data.price;
          }

          let arrow = isUp  ? '↑' : '↓';
          let color = isUp  ? '#00d647' : '#ff4d4f';

          let purchaseArrow = isPurchaseUp  ? '↑' : '↓';
          let purchaseColor = isPurchaseUp  ? '#00d647' : '#ff4d4f';
          const purchaseDifference = purchasePrice - data.oldPurchasePrice;

          if (purchaseDifference === 0) {
            purchaseArrow = '';
            purchaseColor = '';
            arrow = '';
            color = '';
          }

          if (!settings.template) {
            settings.template = document.createElement('div');
            settings.template.style.marginRight = '10px';
            settings.template.style.display = 'flex';
            settings.template.style.alignItems = 'center';
            settings.template.style.justifyContent = 'end';
            settings.template.style.height = '100%';
            settings.template.style.gap = '10px';

            if (purchaseDifference === 0) {
              purchaseColor = 'transparent';
            }

            settings.template.innerHTML = '<span style="align-items: center; font-weight: bold; color: ' + purchaseColor + ';">' + purchaseDifference.toFixed(2) + ' ' + purchaseArrow + '</span>' +
              '<span style="font-size: 12px; color: #ffffff;  display: flex; align-items: center; height: 25px; padding: 3px 6px; border-radius: 15px; background: #00d647' + color + ';">$' + price.toFixed(2) + ' ' + arrow + '</span>';
          }
          else {
            let symbol = purchaseDifference > 0 ? '+' : '';
            settings.template.children[0].textContent = symbol + purchaseDifference.toFixed(2) + ' ' + purchaseArrow;
            settings.template.children[0].style.color = purchaseColor;
            settings.template.children[1].textContent = '$' + price.toFixed(2);

          }

          data.oldPurchasePrice = data.purchasePrice;
          data.oldPrice = data.price;
        }
      },
      {
        label: 'Total', align: 'right', width: 200, dataField: 'price', dataType: 'number', cellsFormat: 'c2', template: (settings: any) => {
          const data = settings.data;
          const quantity = data.quantity;
          let price = data.price;
          let total = quantity * price;
          let isUp: boolean = false;

          if (data.oldPrice !== undefined) {
            isUp = price > data.oldPrice;
          }
          else {
            data.oldPrice = data.price;
          }
          let arrow = isUp ? '↑' : '↓';
          let color = isUp  ? '#00d647' : '#ff4d4f';

          if (!settings.template) {
            arrow = '';
            color = '';
            settings.template = document.createElement('div');
            settings.template.style.marginRight = '10px';
            settings.template.style.display = 'flex';
            settings.template.style.alignItems = 'center';
            settings.template.style.justifyContent = 'end';
            settings.template.style.height = '100%';
            settings.template.innerHTML = '<span>&nbsp;</span><span style="display: flex; align-items: center; font-size: 12px; color: #ffffff; height: 25px; padding: 3px 6px; border-radius: 15px; background: #1283DA' + ';">$' + total.toFixed(2) + ' ' + arrow + '</span>';
          }
          else {
            settings.template.children[1].textContent = '$' + total.toFixed(2) + ' ' + arrow;
          }
          data.oldPrice = data.price;
        }
      },
      {
        label: 'Timeline', dataField: 'timeline', template: 'sparklines', templateSettings: {
          type: 'column'
        }, dataType: 'string'
      }
    ]

  ngAfterViewInit(): void {
    const updatePortfolio = (portfolio: any[], intervalDays = 1) => {
      portfolio.forEach(asset => {
        // --- Update purchaseDate ---
        let date = new Date(asset.purchaseDate);
        date.setDate(date.getDate() + intervalDays);
        asset.purchaseDate = date.toISOString().split("T")[0]; // yyyy-mm-dd format

        // --- Update price with small random fluctuation ---
        let change = (Math.random() - 0.5) * 2; // between -1 and +1
        asset.price = Math.max(0, +(asset.price + change).toFixed(2)); // avoid negatives

        // --- Update purchasePrice slowly towards current price ---
        let purchaseChange = (asset.price - asset.purchasePrice) * 0.05;
        asset.purchasePrice = +(asset.purchasePrice + purchaseChange).toFixed(2);

        // --- Update timeline (append new price, keep fixed length) ---
        asset.timeline.push(asset.price);
        if (asset.timeline.length > 24) {
          asset.timeline.shift(); // keep latest 24 points
        }
      });

      return portfolio;
    };

    setInterval(() => {
      this.grid.beginUpdate();
      updatePortfolio(this.grid.dataSource);
      // only refresh the cell values.
      this.grid.endUpdate(false);
    }, 1000);
  }
}