import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/Employee';
import { TeamEnum } from '../enums/TeamEnum';
import { TeamsEfficinecy } from '../interfaces/TeamEfficiency';
import { SchedulerEvent } from 'smart-webcomponents-angular';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private firstNames = [
    'John', 'Jane', 'Michael', 'Sarah', 'David', 'Emily', 'Daniel', 'Olivia', 'Matthew', 'Emma',
    'Andrew', 'Sophia', 'James', 'Isabella', 'Christopher', 'Mia', 'Joseph', 'Ava', 'William', 'Abigail',
    'Nicholas', 'Emily', 'Jacob', 'Chloe', 'Daniel', 'Madison', 'Alexander', 'Elizabeth', 'Samuel', 'Grace'
  ];

  private lastNames = [
    'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Davis', 'Miller', 'Martinez', 'Anderson',
    'Taylor', 'Thomas', 'Jackson', 'White', 'Harris', 'Clark', 'Lewis', 'Young', 'Hall', 'Walker',
    'Allen', 'King', 'Wright', 'Lopez', 'Scott', 'Green', 'Adams', 'Baker', 'Gonzalez', 'Nelson'
  ];

  private cities = [
    'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego',
    'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'San Francisco', 'Indianapolis', 'Seattle', 'Denver',
    'Washington', 'Boston', 'Nashville', 'Baltimore', 'Oklahoma City', 'Portland', 'Las Vegas', 'Milwaukee',
    'Albuquerque', 'Tucson', 'Fresno', 'Sacramento', 'Long Beach', 'Kansas City'
  ];
  private countries = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'Australia', 'France', 'Spain', 'Japan',
    'Italy', 'Netherlands', 'Sweden', 'Switzerland', 'Brazil', 'Mexico', 'Argentina', 'India',
    'China', 'South Korea', 'Russia', 'South Africa', 'Egypt', 'Saudi Arabia', 'United Arab Emirates',
    'New Zealand', 'Singapore', 'Thailand', 'Israel', 'Turkey', 'Greece', 'Norway'
  ];

  private phonePrefixes = ['+1', '+44', '+49', '+61', '+33', '+81', '+34', '+39', '+31', '+46'];

  private departments = [
    'Sales', 'Marketing', 'Finance', 'Human Resources', 'Engineering', 'Product Management',
    'Customer Support', 'Operations', 'Research and Development', 'IT', 'Quality Assurance',
    'Business Development', 'Legal', 'Supply Chain', 'Administration'
  ];

  private jobTitles = [
    'Manager', 'Supervisor', 'Associate', 'Specialist', 'Analyst', 'Coordinator', 'Assistant',
    'Engineer', 'Developer', 'Designer', 'Architect', 'Consultant', 'Administrator', 'Executive',
    'Accountant', 'Marketer', 'Salesperson', 'Technician', 'Researcher', 'Trainer'
  ];

  private birthDates = this.generateRandomDates(100, '1980-01-01', '2000-12-31');
  private hireDates = this.generateRandomDates(100, '2010-01-01', '2023-07-04');
  private addresses = this.generateRandomAddresses(100);

  constructor() { }

  generateEmployees(numEmployees: number): Employee[] {

    const employees: Employee[] = [];

    for (let i = 0; i < numEmployees; i++) {
      const employee: Employee = {
        id: i + 1,
        firstName: this.getRandomValue(this.firstNames),
        lastName: this.getRandomValue(this.lastNames),
        birthDate: this.getRandomValue(this.birthDates),
        hireDate: this.getRandomValue(this.hireDates),
        address: this.getRandomValue(this.addresses),
        city: this.getRandomValue(this.cities),
        country: this.getRandomValue(this.countries),
        phone: this.generateRandomPhone(this.phonePrefixes),
        departmentName: this.getRandomValue(this.departments),
        jobTitle: this.getRandomValue(this.jobTitles),
        team: this.getRandomValue([TeamEnum.airTeam, TeamEnum.fireTeam, TeamEnum.spaceTeam, TeamEnum.waterTeam])
      };

      employees.push(employee);
    }

    return employees;
  }

  generateRandomDates(numDates: number, startDate: string, endDate: string): string[] {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    const dates: string[] = [];

    for (let i = 0; i < numDates; i++) {
      const randomTimestamp = start + Math.random() * (end - start);
      const randomDate = new Date(randomTimestamp);
      dates.push(randomDate.toISOString().slice(0, 10));
    }

    return dates;
  }

  generateRandomAddresses(numAddresses: number): string[] {
    const addresses: string[] = [];

    for (let i = 0; i < numAddresses; i++) {
      const streetNumber = Math.floor(Math.random() * 1000) + 1;
      const streetName = this.getRandomValue(this.firstNames);

      const city = this.getRandomValue(this.cities);
      const stateCode = this.getRandomValue(this.countries).substring(0, 2).toUpperCase();
      const zipCode = Math.floor(Math.random() * 90000) + 10000;
      const address = `${streetNumber} ${streetName} St, ${city}, ${stateCode} ${zipCode}`;
      addresses.push(address);
    }

    return addresses;
  }

  getRandomValue<T>(array: T[]): T {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
  }

  generateRandomPhone(prefixes: string[]): string {
    const prefix = this.getRandomValue(prefixes);
    const randomNumber = Math.floor(Math.random() * 900000000) + 100000000;
    return `${prefix}-${randomNumber}`;
  }

  getStaticEmployees(): Employee[] {
    return [
      {
        "id": 1,
        "firstName": "Jane",
        "lastName": "Brown",
        "birthDate": "1999-04-09",
        "hireDate": "2014-02-25",
        "address": "587 Michael St, Dallas, SW 60609",
        "city": "Dallas",
        "country": "Egypt",
        "phone": "+46-397619739",
        "departmentName": "Customer Support",
        "jobTitle": "Engineer",
        "team": TeamEnum.airTeam
      },
      {
        "id": 2,
        "firstName": "Jane",
        "lastName": "Allen",
        "birthDate": "1983-02-01",
        "hireDate": "2011-09-08",
        "address": "91 Elizabeth St, Fresno, EG 60702",
        "city": "Las Vegas",
        "country": "Brazil",
        "phone": "+46-654875884",
        "departmentName": "Human Resources",
        "jobTitle": "Administrator",
        "team": TeamEnum.fireTeam
      },
      {
        "id": 3,
        "firstName": "Abigail",
        "lastName": "Jackson",
        "birthDate": "1995-10-26",
        "hireDate": "2013-07-10",
        "address": "418 Grace St, Fresno, SO 79535",
        "city": "Albuquerque",
        "country": "Saudi Arabia",
        "phone": "+39-875242055",
        "departmentName": "Customer Support",
        "jobTitle": "Administrator",
        "team": TeamEnum.airTeam
      },
      {
        "id": 4,
        "firstName": "Emily",
        "lastName": "King",
        "birthDate": "1980-05-29",
        "hireDate": "2010-02-16",
        "address": "421 Emily St, Los Angeles, SA 81242",
        "city": "Fresno",
        "country": "Mexico",
        "phone": "+1-440568457",
        "departmentName": "Finance",
        "jobTitle": "Analyst",
        "team": TeamEnum.airTeam
      },
      {
        "id": 5,
        "firstName": "Andrew",
        "lastName": "Allen",
        "birthDate": "1980-05-22",
        "hireDate": "2023-06-30",
        "address": "966 Nicholas St, Fresno, GR 45945",
        "city": "San Diego",
        "country": "Italy",
        "phone": "+46-602284212",
        "departmentName": "Marketing",
        "jobTitle": "Engineer",
        "team": TeamEnum.waterTeam
      },
      {
        "id": 6,
        "firstName": "Olivia",
        "lastName": "Baker",
        "birthDate": "1994-08-18",
        "hireDate": "2015-11-04",
        "address": "715 Chloe St, Long Beach, FR 56207",
        "city": "Chicago",
        "country": "Norway",
        "phone": "+46-565968429",
        "departmentName": "Legal",
        "jobTitle": "Associate",
        "team": TeamEnum.airTeam
      },
      {
        "id": 7,
        "firstName": "Emily",
        "lastName": "Walker",
        "birthDate": "1995-12-05",
        "hireDate": "2020-05-03",
        "address": "199 Sarah St, Oklahoma City, BR 19499",
        "city": "Dallas",
        "country": "Switzerland",
        "phone": "+44-735528591",
        "departmentName": "IT",
        "jobTitle": "Technician",
        "team": TeamEnum.fireTeam
      },
      {
        "id": 8,
        "firstName": "Matthew",
        "lastName": "Miller",
        "birthDate": "1984-05-08",
        "hireDate": "2021-07-26",
        "address": "676 Samuel St, San Jose, EG 30747",
        "city": "Indianapolis",
        "country": "Argentina",
        "phone": "+46-384463056",
        "departmentName": "Human Resources",
        "jobTitle": "Accountant",
        "team": TeamEnum.airTeam
      },
      {
        "id": 9,
        "firstName": "Alexander",
        "lastName": "Harris",
        "birthDate": "1997-09-07",
        "hireDate": "2016-08-01",
        "address": "953 Mia St, Nashville, BR 37920",
        "city": "Las Vegas",
        "country": "Egypt",
        "phone": "+34-229934916",
        "departmentName": "Finance",
        "jobTitle": "Executive",
        "team": TeamEnum.airTeam
      },
      {
        "id": 10,
        "firstName": "Daniel",
        "lastName": "Smith",
        "birthDate": "1988-02-21",
        "hireDate": "2020-06-24",
        "address": "111 Olivia St, Jacksonville, SW 89007",
        "city": "San Diego",
        "country": "United States",
        "phone": "+33-882843970",
        "departmentName": "Research and Development",
        "jobTitle": "Administrator",
        "team": TeamEnum.fireTeam
      },
      {
        "id": 11,
        "firstName": "Nicholas",
        "lastName": "Jones",
        "birthDate": "1983-04-18",
        "hireDate": "2014-03-08",
        "address": "744 Alexander St, Los Angeles, CH 49589",
        "city": "San Diego",
        "country": "South Africa",
        "phone": "+1-514893082",
        "departmentName": "IT",
        "jobTitle": "Architect",
        "team": TeamEnum.waterTeam
      },
      {
        "id": 12,
        "firstName": "Olivia",
        "lastName": "Martinez",
        "birthDate": "1982-01-01",
        "hireDate": "2023-01-15",
        "address": "967 Grace St, Nashville, BR 89795",
        "city": "Austin",
        "country": "China",
        "phone": "+39-640719262",
        "departmentName": "Sales",
        "jobTitle": "Assistant",
        "team": TeamEnum.airTeam
      },
      {
        "id": 13,
        "firstName": "Elizabeth",
        "lastName": "Clark",
        "birthDate": "1995-04-28",
        "hireDate": "2015-08-23",
        "address": "558 Michael St, Baltimore, UN 95981",
        "city": "Tucson",
        "country": "Turkey",
        "phone": "+81-122280621",
        "departmentName": "Legal",
        "jobTitle": "Researcher",
        "team": TeamEnum.spaceTeam
      },
      {
        "id": 14,
        "firstName": "Emily",
        "lastName": "Jackson",
        "birthDate": "1984-05-08",
        "hireDate": "2018-11-19",
        "address": "919 Elizabeth St, Baltimore, ME 34411",
        "city": "Sacramento",
        "country": "Spain",
        "phone": "+46-344413779",
        "departmentName": "Quality Assurance",
        "jobTitle": "Consultant",
        "team": TeamEnum.airTeam
      },
      {
        "id": 15,
        "firstName": "Michael",
        "lastName": "Garcia",
        "birthDate": "1997-12-04",
        "hireDate": "2014-12-18",
        "address": "676 Samuel St, San Jose, EG 30747",
        "city": "Houston",
        "country": "Spain",
        "phone": "+34-561983156",
        "departmentName": "Operations",
        "jobTitle": "Trainer",
        "team": TeamEnum.spaceTeam
      },
      {
        "id": 16,
        "firstName": "Ava",
        "lastName": "Harris",
        "birthDate": "1991-07-28",
        "hireDate": "2013-06-19",
        "address": "709 Nicholas St, Tucson, UN 91422",
        "city": "Nashville",
        "country": "Greece",
        "phone": "+49-956204274",
        "departmentName": "Finance",
        "jobTitle": "Analyst",
        "team": TeamEnum.airTeam
      },
      {
        "id": 17,
        "firstName": "Sophia",
        "lastName": "Scott",
        "birthDate": "1982-09-12",
        "hireDate": "2011-07-02",
        "address": "711 Sarah St, Albuquerque, SO 58149",
        "city": "Oklahoma City",
        "country": "Argentina",
        "phone": "+31-205004376",
        "departmentName": "Finance",
        "jobTitle": "Analyst",
        "team": TeamEnum.fireTeam
      },
      {
        "id": 18,
        "firstName": "Madison",
        "lastName": "Miller",
        "birthDate": "1994-08-01",
        "hireDate": "2021-05-17",
        "address": "365 Daniel St, Kansas City, UN 94643",
        "city": "Milwaukee",
        "country": "Netherlands",
        "phone": "+61-126011334",
        "departmentName": "Marketing",
        "jobTitle": "Trainer",
        "team": TeamEnum.airTeam
      },
      {
        "id": 19,
        "firstName": "Sophia",
        "lastName": "Clark",
        "birthDate": "1995-02-17",
        "hireDate": "2018-11-19",
        "address": "711 Sarah St, Albuquerque, SO 58149",
        "city": "Seattle",
        "country": "Turkey",
        "phone": "+61-105772191",
        "departmentName": "Operations",
        "jobTitle": "Manager",
        "team": TeamEnum.airTeam
      },
      {
        "id": 20,
        "firstName": "Sarah",
        "lastName": "King",
        "birthDate": "1980-01-01",
        "hireDate": "2019-06-24",
        "address": "492 David St, Philadelphia, SI 30214",
        "city": "Jacksonville",
        "country": "Sweden",
        "phone": "+44-750176241",
        "departmentName": "Quality Assurance",
        "jobTitle": "Coordinator",
        "team": TeamEnum.spaceTeam
      },
      {
        "id": 21,
        "firstName": "Abigail",
        "lastName": "Young",
        "birthDate": "1997-12-25",
        "hireDate": "2012-01-09",
        "address": "124 Madison St, Los Angeles, SO 99120",
        "city": "Kansas City",
        "country": "Singapore",
        "phone": "+31-439206241",
        "departmentName": "Research and Development",
        "jobTitle": "Consultant",
        "team": TeamEnum.airTeam
      },
      {
        "id": 22,
        "firstName": "John",
        "lastName": "Lewis",
        "birthDate": "1998-05-23",
        "hireDate": "2015-11-04",
        "address": "194 Michael St, Los Angeles, UN 53969",
        "city": "Jacksonville",
        "country": "Singapore",
        "phone": "+46-752735787",
        "departmentName": "Quality Assurance",
        "jobTitle": "Salesperson",
        "team": TeamEnum.waterTeam
      },
      {
        "id": 23,
        "firstName": "Christopher",
        "lastName": "Jackson",
        "birthDate": "1980-10-28",
        "hireDate": "2022-10-24",
        "address": "421 John St, Denver, AR 33271",
        "city": "San Antonio",
        "country": "Greece",
        "phone": "+34-327024961",
        "departmentName": "IT",
        "jobTitle": "Accountant",
        "team": TeamEnum.waterTeam
      },
      {
        "id": 24,
        "firstName": "Emily",
        "lastName": "Young",
        "birthDate": "1998-05-23",
        "hireDate": "2015-11-03",
        "address": "198 Alexander St, Los Angeles, UN 55173",
        "city": "Jacksonville",
        "country": "South Africa",
        "phone": "+1-686961538",
        "departmentName": "Product Management",
        "jobTitle": "Consultant",
        "team": TeamEnum.spaceTeam
      },
      {
        "id": 25,
        "firstName": "Mia",
        "lastName": "Gonzalez",
        "birthDate": "1995-11-25",
        "hireDate": "2014-02-25",
        "address": "763 Jane St, Washington, GR 55385",
        "city": "Las Vegas",
        "country": "Switzerland",
        "phone": "+44-696917988",
        "departmentName": "Research and Development",
        "jobTitle": "Administrator",
        "team": TeamEnum.fireTeam
      },
      {
        "id": 26,
        "firstName": "Jane",
        "lastName": "Jones",
        "birthDate": "1982-09-12",
        "hireDate": "2021-10-16",
        "address": "421 Emily St, Los Angeles, SA 81242",
        "city": "Nashville",
        "country": "India",
        "phone": "+33-928189015",
        "departmentName": "Customer Support",
        "jobTitle": "Consultant",
        "team": TeamEnum.airTeam
      },
      {
        "id": 27,
        "firstName": "Samuel",
        "lastName": "Garcia",
        "birthDate": "1984-07-28",
        "hireDate": "2023-06-30",
        "address": "199 Sarah St, Oklahoma City, BR 19499",
        "city": "Milwaukee",
        "country": "Germany",
        "phone": "+49-674840306",
        "departmentName": "Human Resources",
        "jobTitle": "Developer",
        "team": TeamEnum.airTeam
      },
      {
        "id": 28,
        "firstName": "Mia",
        "lastName": "Taylor",
        "birthDate": "1980-05-29",
        "hireDate": "2013-08-27",
        "address": "208 David St, Chicago, ME 41206",
        "city": "Albuquerque",
        "country": "Norway",
        "phone": "+39-330000502",
        "departmentName": "Administration",
        "jobTitle": "Administrator",
        "team": TeamEnum.fireTeam
      },
      {
        "id": 29,
        "firstName": "Daniel",
        "lastName": "Taylor",
        "birthDate": "1988-11-21",
        "hireDate": "2023-01-15",
        "address": "876 Nicholas St, Washington, CH 71540",
        "city": "Houston",
        "country": "Greece",
        "phone": "+81-137575219",
        "departmentName": "Business Development",
        "jobTitle": "Analyst",
        "team": TeamEnum.airTeam
      },
      {
        "id": 30,
        "firstName": "Samuel",
        "lastName": "Green",
        "birthDate": "1991-09-08",
        "hireDate": "2014-02-25",
        "address": "804 Andrew St, San Antonio, AU 17043",
        "city": "San Jose",
        "country": "Argentina",
        "phone": "+33-290365722",
        "departmentName": "Human Resources",
        "jobTitle": "Analyst",
        "team": TeamEnum.waterTeam
      },
      {
        "id": 31,
        "firstName": "Matthew",
        "lastName": "Green",
        "birthDate": "1989-08-07",
        "hireDate": "2016-04-08",
        "address": "790 Jane St, Seattle, SO 27095",
        "city": "Sacramento",
        "country": "Saudi Arabia",
        "phone": "+81-212567282",
        "departmentName": "Engineering",
        "jobTitle": "Specialist",
        "team": TeamEnum.airTeam
      },
      {
        "id": 32,
        "firstName": "Olivia",
        "lastName": "Lewis",
        "birthDate": "1994-08-18",
        "hireDate": "2010-02-16",
        "address": "594 Mia St, Milwaukee, AU 19864",
        "city": "Long Beach",
        "country": "Switzerland",
        "phone": "+1-881773340",
        "departmentName": "Product Management",
        "jobTitle": "Developer",
        "team": TeamEnum.spaceTeam
      },
      {
        "id": 33,
        "firstName": "Elizabeth",
        "lastName": "Harris",
        "birthDate": "1982-09-12",
        "hireDate": "2011-08-03",
        "address": "108 Emma St, Kansas City, EG 99487",
        "city": "Milwaukee",
        "country": "Japan",
        "phone": "+34-600203482",
        "departmentName": "Supply Chain",
        "jobTitle": "Trainer",
        "team": TeamEnum.airTeam
      },
      {
        "id": 34,
        "firstName": "Joseph",
        "lastName": "White",
        "birthDate": "1984-10-10",
        "hireDate": "2011-08-16",
        "address": "764 James St, Washington, GR 57728",
        "city": "Boston",
        "country": "Italy",
        "phone": "+46-130098540",
        "departmentName": "Engineering",
        "jobTitle": "Consultant",
        "team": TeamEnum.airTeam
      },
      {
        "id": 35,
        "firstName": "Sarah",
        "lastName": "Gonzalez",
        "birthDate": "1998-11-22",
        "hireDate": "2010-07-28",
        "address": "711 Sarah St, Albuquerque, SO 58149",
        "city": "Philadelphia",
        "country": "Switzerland",
        "phone": "+33-145925647",
        "departmentName": "Marketing",
        "jobTitle": "Specialist",
        "team": TeamEnum.airTeam
      },
      {
        "id": 36,
        "firstName": "Emily",
        "lastName": "White",
        "birthDate": "1982-01-01",
        "hireDate": "2020-11-15",
        "address": "920 Sophia St, San Jose, EG 59697",
        "city": "Milwaukee",
        "country": "Israel",
        "phone": "+34-536423537",
        "departmentName": "Administration",
        "jobTitle": "Specialist",
        "team": TeamEnum.waterTeam
      },
      {
        "id": 37,
        "firstName": "Samuel",
        "lastName": "Jackson",
        "birthDate": "1997-12-04",
        "hireDate": "2019-01-26",
        "address": "235 Madison St, Albuquerque, CH 25324",
        "city": "Chicago",
        "country": "Japan",
        "phone": "+81-110501791",
        "departmentName": "Legal",
        "jobTitle": "Developer",
        "team": TeamEnum.spaceTeam
      },
      {
        "id": 38,
        "firstName": "Chloe",
        "lastName": "Scott",
        "birthDate": "1982-03-17",
        "hireDate": "2014-12-13",
        "address": "845 Abigail St, Jacksonville, RU 46297",
        "city": "Sacramento",
        "country": "India",
        "phone": "+81-192298034",
        "departmentName": "IT",
        "jobTitle": "Trainer",
        "team": TeamEnum.fireTeam
      },
      {
        "id": 39,
        "firstName": "Olivia",
        "lastName": "Green",
        "birthDate": "1989-08-07",
        "hireDate": "2011-09-08",
        "address": "108 Emma St, Kansas City, EG 99487",
        "city": "Indianapolis",
        "country": "Canada",
        "phone": "+31-537658366",
        "departmentName": "Product Management",
        "jobTitle": "Associate",
        "team": TeamEnum.airTeam
      },
      {
        "id": 40,
        "firstName": "Matthew",
        "lastName": "Davis",
        "birthDate": "1988-11-21",
        "hireDate": "2014-02-25",
        "address": "585 Mia St, New York, UN 96809",
        "city": "Tucson",
        "country": "India",
        "phone": "+33-165021573",
        "departmentName": "Administration",
        "jobTitle": "Manager",
        "team": TeamEnum.spaceTeam
      },
      {
        "id": 41,
        "firstName": "Christopher",
        "lastName": "Baker",
        "birthDate": "1995-11-25",
        "hireDate": "2010-04-05",
        "address": "594 Mia St, Milwaukee, AU 19864",
        "city": "Kansas City",
        "country": "Israel",
        "phone": "+34-891283810",
        "departmentName": "Operations",
        "jobTitle": "Engineer",
        "team": TeamEnum.waterTeam
      },
      {
        "id": 42,
        "firstName": "Mia",
        "lastName": "Jones",
        "birthDate": "1988-02-21",
        "hireDate": "2020-06-24",
        "address": "898 Joseph St, San Jose, FR 68955",
        "city": "Houston",
        "country": "Netherlands",
        "phone": "+1-491975576",
        "departmentName": "Administration",
        "jobTitle": "Developer",
        "team": TeamEnum.fireTeam
      },
      {
        "id": 43,
        "firstName": "Sarah",
        "lastName": "Thomas",
        "birthDate": "1989-03-23",
        "hireDate": "2019-08-26",
        "address": "31 Jane St, Portland, UN 60709",
        "city": "Austin",
        "country": "South Africa",
        "phone": "+33-882518826",
        "departmentName": "Marketing",
        "jobTitle": "Supervisor",
        "team": TeamEnum.airTeam
      },
      {
        "id": 44,
        "firstName": "Andrew",
        "lastName": "Nelson",
        "birthDate": "1990-08-26",
        "hireDate": "2019-01-09",
        "address": "295 Matthew St, Sacramento, UN 24214",
        "city": "Tucson",
        "country": "Brazil",
        "phone": "+34-224385391",
        "departmentName": "IT",
        "jobTitle": "Analyst",
        "team": TeamEnum.spaceTeam
      },
      {
        "id": 45,
        "firstName": "Alexander",
        "lastName": "Young",
        "birthDate": "1981-02-20",
        "hireDate": "2012-03-21",
        "address": "110 Sophia St, Washington, CA 36675",
        "city": "Washington",
        "country": "India",
        "phone": "+39-246845196",
        "departmentName": "Sales",
        "jobTitle": "Associate",
        "team": TeamEnum.spaceTeam
      },
      {
        "id": 46,
        "firstName": "Sophia",
        "lastName": "Hall",
        "birthDate": "1981-12-21",
        "hireDate": "2023-06-11",
        "address": "972 Samuel St, Boston, CA 15153",
        "city": "San Diego",
        "country": "Egypt",
        "phone": "+1-111938219",
        "departmentName": "Research and Development",
        "jobTitle": "Salesperson",
        "team": TeamEnum.spaceTeam
      },
      {
        "id": 47,
        "firstName": "Jacob",
        "lastName": "Jones",
        "birthDate": "1990-05-31",
        "hireDate": "2021-09-26",
        "address": "560 Ava St, Portland, FR 39053",
        "city": "Washington",
        "country": "China",
        "phone": "+39-602192002",
        "departmentName": "Business Development",
        "jobTitle": "Assistant",
        "team": TeamEnum.fireTeam
      },
      {
        "id": 48,
        "firstName": "Daniel",
        "lastName": "Scott",
        "birthDate": "1980-01-01",
        "hireDate": "2013-01-30",
        "address": "540 John St, Sacramento, SP 83541",
        "city": "San Diego",
        "country": "Mexico",
        "phone": "+44-923700884",
        "departmentName": "Human Resources",
        "jobTitle": "Developer",
        "team": TeamEnum.waterTeam
      },
      {
        "id": 49,
        "firstName": "James",
        "lastName": "Hall",
        "birthDate": "1980-05-29",
        "hireDate": "2021-03-12",
        "address": "524 Chloe St, Los Angeles, SI 20713",
        "city": "San Jose",
        "country": "France",
        "phone": "+46-731534313",
        "departmentName": "Research and Development",
        "jobTitle": "Administrator",
        "team": TeamEnum.airTeam
      },
      {
        "id": 50,
        "firstName": "William",
        "lastName": "Jackson",
        "birthDate": "1991-07-28",
        "hireDate": "2022-06-14",
        "address": "378 Isabella St, Indianapolis, RU 14191",
        "city": "Washington",
        "country": "Spain",
        "phone": "+31-443031969",
        "departmentName": "Quality Assurance",
        "jobTitle": "Associate",
        "team": TeamEnum.fireTeam
      },
      {
        "id": 51,
        "firstName": "Sophia",
        "lastName": "Miller",
        "birthDate": "1988-11-21",
        "hireDate": "2021-09-28",
        "address": "715 Chloe St, Long Beach, FR 56207",
        "city": "San Antonio",
        "country": "Singapore",
        "phone": "+49-965571819",
        "departmentName": "Supply Chain",
        "jobTitle": "Executive",
        "team": TeamEnum.airTeam
      },
      {
        "id": 52,
        "firstName": "Grace",
        "lastName": "White",
        "birthDate": "1999-05-01",
        "hireDate": "2021-11-08",
        "address": "124 Madison St, Los Angeles, SO 99120",
        "city": "Las Vegas",
        "country": "United Arab Emirates",
        "phone": "+49-819685738",
        "departmentName": "Customer Support",
        "jobTitle": "Architect",
        "team": TeamEnum.waterTeam
      },
      {
        "id": 53,
        "firstName": "Madison",
        "lastName": "Taylor",
        "birthDate": "1999-10-11",
        "hireDate": "2012-11-08",
        "address": "314 Jane St, San Antonio, UN 58071",
        "city": "Dallas",
        "country": "Russia",
        "phone": "+39-911405649",
        "departmentName": "Marketing",
        "jobTitle": "Consultant",
        "team": TeamEnum.airTeam
      },
      {
        "id": 54,
        "firstName": "Abigail",
        "lastName": "Baker",
        "birthDate": "1980-05-22",
        "hireDate": "2013-02-14",
        "address": "183 Matthew St, Houston, UN 64857",
        "city": "Nashville",
        "country": "Germany",
        "phone": "+46-566751299",
        "departmentName": "Engineering",
        "jobTitle": "Salesperson",
        "team": TeamEnum.fireTeam
      },
      {
        "id": 55,
        "firstName": "Chloe",
        "lastName": "King",
        "birthDate": "1999-02-16",
        "hireDate": "2012-03-21",
        "address": "895 Emma St, Jacksonville, EG 52850",
        "city": "San Antonio",
        "country": "Thailand",
        "phone": "+46-837524437",
        "departmentName": "Product Management",
        "jobTitle": "Developer",
        "team": TeamEnum.airTeam
      },
      {
        "id": 56,
        "firstName": "Nicholas",
        "lastName": "Johnson",
        "birthDate": "1984-12-10",
        "hireDate": "2019-09-05",
        "address": "920 Sophia St, San Jose, EG 59697",
        "city": "Indianapolis",
        "country": "Israel",
        "phone": "+34-740810950",
        "departmentName": "Research and Development",
        "jobTitle": "Assistant",
        "team": TeamEnum.waterTeam
      },
      {
        "id": 57,
        "firstName": "Grace",
        "lastName": "Young",
        "birthDate": "1982-01-01",
        "hireDate": "2010-12-05",
        "address": "199 Sarah St, Oklahoma City, BR 19499",
        "city": "Las Vegas",
        "country": "Italy",
        "phone": "+31-598109610",
        "departmentName": "Legal",
        "jobTitle": "Coordinator",
        "team": TeamEnum.waterTeam
      },
      {
        "id": 58,
        "firstName": "Sarah",
        "lastName": "Smith",
        "birthDate": "1989-03-22",
        "hireDate": "2022-05-08",
        "address": "381 Jane St, San Antonio, UN 74752",
        "city": "Los Angeles",
        "country": "South Africa",
        "phone": "+81-381189534",
        "departmentName": "Marketing",
        "jobTitle": "Technician",
        "team": TeamEnum.spaceTeam
      },
      {
        "id": 59,
        "firstName": "Emma",
        "lastName": "Nelson",
        "birthDate": "1984-05-08",
        "hireDate": "2022-09-26",
        "address": "325 Grace St, Denver, IT 74111",
        "city": "Baltimore",
        "country": "Japan",
        "phone": "+1-670145463",
        "departmentName": "Research and Development",
        "jobTitle": "Administrator",
        "team": TeamEnum.airTeam
      },
      {
        "id": 60,
        "firstName": "Alexander",
        "lastName": "Adams",
        "birthDate": "1989-03-22",
        "hireDate": "2017-10-27",
        "address": "108 Emma St, Kansas City, EG 99487",
        "city": "Washington",
        "country": "Russia",
        "phone": "+81-650499104",
        "departmentName": "Marketing",
        "jobTitle": "Designer",
        "team": TeamEnum.spaceTeam
      },
      {
        "id": 61,
        "firstName": "Elizabeth",
        "lastName": "Nelson",
        "birthDate": "1997-12-04",
        "hireDate": "2022-10-24",
        "address": "479 Madison St, Tucson, SO 11241",
        "city": "Indianapolis",
        "country": "Russia",
        "phone": "+46-480936878",
        "departmentName": "Administration",
        "jobTitle": "Coordinator",
        "team": TeamEnum.fireTeam
      },
      {
        "id": 62,
        "firstName": "Emily",
        "lastName": "Walker",
        "birthDate": "1987-05-25",
        "hireDate": "2010-03-31",
        "address": "708 Isabella St, Albuquerque, SA 58440",
        "city": "Tucson",
        "country": "Singapore",
        "phone": "+49-521312333",
        "departmentName": "Product Management",
        "jobTitle": "Specialist",
        "team": TeamEnum.waterTeam
      },
      {
        "id": 63,
        "firstName": "Jane",
        "lastName": "White",
        "birthDate": "1995-03-07",
        "hireDate": "2017-03-30",
        "address": "157 Ava St, Washington, SO 24386",
        "city": "San Diego",
        "country": "Singapore",
        "phone": "+31-738895063",
        "departmentName": "Engineering",
        "jobTitle": "Specialist",
        "team": TeamEnum.waterTeam
      },
      {
        "id": 64,
        "firstName": "Nicholas",
        "lastName": "Adams",
        "birthDate": "1987-03-28",
        "hireDate": "2022-10-24",
        "address": "715 Chloe St, Long Beach, FR 56207",
        "city": "Jacksonville",
        "country": "Israel",
        "phone": "+46-829066132",
        "departmentName": "Research and Development",
        "jobTitle": "Administrator",
        "team": TeamEnum.waterTeam
      },
      {
        "id": 65,
        "firstName": "Michael",
        "lastName": "Thomas",
        "birthDate": "1999-09-06",
        "hireDate": "2016-07-11",
        "address": "479 Madison St, Tucson, SO 11241",
        "city": "Indianapolis",
        "country": "United Kingdom",
        "phone": "+34-754453226",
        "departmentName": "Finance",
        "jobTitle": "Assistant",
        "team": TeamEnum.airTeam
      },
      {
        "id": 66,
        "firstName": "Michael",
        "lastName": "Lewis",
        "birthDate": "1991-04-08",
        "hireDate": "2014-03-08",
        "address": "267 Ava St, San Diego, ME 14648",
        "city": "Tucson",
        "country": "Greece",
        "phone": "+81-783590978",
        "departmentName": "Administration",
        "jobTitle": "Manager",
        "team": TeamEnum.airTeam
      },
      {
        "id": 67,
        "firstName": "Nicholas",
        "lastName": "Jones",
        "birthDate": "1980-08-26",
        "hireDate": "2011-09-08",
        "address": "845 Abigail St, Jacksonville, RU 46297",
        "city": "Houston",
        "country": "Sweden",
        "phone": "+31-195152714",
        "departmentName": "Customer Support",
        "jobTitle": "Architect",
        "team": TeamEnum.fireTeam
      },
      {
        "id": 68,
        "firstName": "Grace",
        "lastName": "Davis",
        "birthDate": "1991-08-06",
        "hireDate": "2015-11-03",
        "address": "549 Joseph St, Albuquerque, UN 38209",
        "city": "Denver",
        "country": "Japan",
        "phone": "+33-996168592",
        "departmentName": "Supply Chain",
        "jobTitle": "Designer",
        "team": TeamEnum.fireTeam
      },
      {
        "id": 69,
        "firstName": "Matthew",
        "lastName": "King",
        "birthDate": "1982-03-17",
        "hireDate": "2020-11-15",
        "address": "325 Grace St, Denver, IT 74111",
        "city": "San Diego",
        "country": "Sweden",
        "phone": "+49-353853077",
        "departmentName": "Customer Support",
        "jobTitle": "Specialist",
        "team": TeamEnum.airTeam
      },
      {
        "id": 70,
        "firstName": "Grace",
        "lastName": "Hall",
        "birthDate": "1998-11-22",
        "hireDate": "2019-09-21",
        "address": "800 John St, Denver, RU 77804",
        "city": "San Jose",
        "country": "Mexico",
        "phone": "+46-570738529",
        "departmentName": "Supply Chain",
        "jobTitle": "Researcher",
        "team": TeamEnum.spaceTeam
      },
      {
        "id": 71,
        "firstName": "Chloe",
        "lastName": "Gonzalez",
        "birthDate": "1996-11-15",
        "hireDate": "2022-03-09",
        "address": "876 Nicholas St, Washington, CH 71540",
        "city": "Baltimore",
        "country": "Germany",
        "phone": "+49-230025661",
        "departmentName": "Engineering",
        "jobTitle": "Manager",
        "team": TeamEnum.fireTeam
      },
      {
        "id": 72,
        "firstName": "Daniel",
        "lastName": "Miller",
        "birthDate": "1989-08-07",
        "hireDate": "2023-06-30",
        "address": "91 Christopher St, Indianapolis, ME 32993",
        "city": "New York",
        "country": "United States",
        "phone": "+49-273715463",
        "departmentName": "Supply Chain",
        "jobTitle": "Consultant",
        "team": TeamEnum.airTeam
      },
      {
        "id": 73,
        "firstName": "James",
        "lastName": "Smith",
        "birthDate": "1993-06-24",
        "hireDate": "2019-08-26",
        "address": "712 Andrew St, San Francisco, TH 58633",
        "city": "New York",
        "country": "Israel",
        "phone": "+49-389970886",
        "departmentName": "Engineering",
        "jobTitle": "Technician",
        "team": TeamEnum.waterTeam
      },
      {
        "id": 74,
        "firstName": "William",
        "lastName": "Walker",
        "birthDate": "1995-10-26",
        "hireDate": "2021-07-26",
        "address": "479 Madison St, Tucson, SO 11241",
        "city": "Kansas City",
        "country": "Netherlands",
        "phone": "+61-106981367",
        "departmentName": "Administration",
        "jobTitle": "Assistant",
        "team": TeamEnum.airTeam
      },
      {
        "id": 75,
        "firstName": "James",
        "lastName": "Walker",
        "birthDate": "1989-03-22",
        "hireDate": "2020-05-12",
        "address": "764 James St, Washington, GR 57728",
        "city": "Washington",
        "country": "Brazil",
        "phone": "+61-840331206",
        "departmentName": "Business Development",
        "jobTitle": "Assistant",
        "team": TeamEnum.spaceTeam
      },
      {
        "id": 76,
        "firstName": "Matthew",
        "lastName": "Baker",
        "birthDate": "1980-01-01",
        "hireDate": "2020-11-15",
        "address": "524 Chloe St, Los Angeles, SI 20713",
        "city": "Boston",
        "country": "Egypt",
        "phone": "+61-376817455",
        "departmentName": "Legal",
        "jobTitle": "Assistant",
        "team": TeamEnum.fireTeam
      },
      {
        "id": 77,
        "firstName": "Jane",
        "lastName": "Williams",
        "birthDate": "1987-04-30",
        "hireDate": "2012-03-21",
        "address": "711 Sarah St, Albuquerque, SO 58149",
        "city": "Dallas",
        "country": "Russia",
        "phone": "+81-250860420",
        "departmentName": "Customer Support",
        "jobTitle": "Specialist",
        "team": TeamEnum.fireTeam
      },
      {
        "id": 78,
        "firstName": "David",
        "lastName": "Nelson",
        "birthDate": "1983-02-01",
        "hireDate": "2010-02-28",
        "address": "665 Emily St, Fresno, SO 60104",
        "city": "Chicago",
        "country": "Russia",
        "phone": "+46-149602559",
        "departmentName": "Legal",
        "jobTitle": "Administrator",
        "team": TeamEnum.waterTeam
      },
      {
        "id": 79,
        "firstName": "Samuel",
        "lastName": "Gonzalez",
        "birthDate": "1989-08-07",
        "hireDate": "2013-02-14",
        "address": "265 Madison St, San Jose, SI 27890",
        "city": "Boston",
        "country": "China",
        "phone": "+1-390361549",
        "departmentName": "Operations",
        "jobTitle": "Associate",
        "team": TeamEnum.airTeam
      },
      {
        "id": 80,
        "firstName": "Madison",
        "lastName": "Nelson",
        "birthDate": "1994-01-14",
        "hireDate": "2014-02-25",
        "address": "378 Isabella St, Indianapolis, RU 14191",
        "city": "Sacramento",
        "country": "Spain",
        "phone": "+1-631656381",
        "departmentName": "Research and Development",
        "jobTitle": "Specialist",
        "team": TeamEnum.airTeam
      },
      {
        "id": 81,
        "firstName": "David",
        "lastName": "Johnson",
        "birthDate": "1981-02-20",
        "hireDate": "2021-10-16",
        "address": "594 Mia St, Milwaukee, AU 19864",
        "city": "Sacramento",
        "country": "Sweden",
        "phone": "+61-342562924",
        "departmentName": "Engineering",
        "jobTitle": "Designer",
        "team": TeamEnum.airTeam
      },
      {
        "id": 82,
        "firstName": "Elizabeth",
        "lastName": "Thomas",
        "birthDate": "1982-09-12",
        "hireDate": "2018-12-22",
        "address": "446 Elizabeth St, San Antonio, TU 28607",
        "city": "San Francisco",
        "country": "Switzerland",
        "phone": "+49-974608884",
        "departmentName": "Product Management",
        "jobTitle": "Analyst",
        "team": TeamEnum.waterTeam
      },
      {
        "id": 83,
        "firstName": "Joseph",
        "lastName": "Martinez",
        "birthDate": "1997-12-15",
        "hireDate": "2014-12-13",
        "address": "845 Abigail St, Jacksonville, RU 46297",
        "city": "Sacramento",
        "country": "Australia",
        "phone": "+39-773739377",
        "departmentName": "Product Management",
        "jobTitle": "Executive",
        "team": TeamEnum.fireTeam
      },
      {
        "id": 84,
        "firstName": "Daniel",
        "lastName": "Gonzalez",
        "birthDate": "1980-11-25",
        "hireDate": "2016-02-19",
        "address": "764 Christopher St, Kansas City, IT 85254",
        "city": "Washington",
        "country": "Netherlands",
        "phone": "+39-970759890",
        "departmentName": "Operations",
        "jobTitle": "Marketer",
        "team": TeamEnum.airTeam
      },
      {
        "id": 85,
        "firstName": "Olivia",
        "lastName": "Thomas",
        "birthDate": "1987-06-19",
        "hireDate": "2020-05-16",
        "address": "708 James St, Milwaukee, FR 36541",
        "city": "San Diego",
        "country": "New Zealand",
        "phone": "+33-759768167",
        "departmentName": "Business Development",
        "jobTitle": "Coordinator",
        "team": TeamEnum.airTeam
      },
      {
        "id": 86,
        "firstName": "Abigail",
        "lastName": "Jackson",
        "birthDate": "1991-04-08",
        "hireDate": "2021-10-16",
        "address": "31 Jane St, Portland, UN 60709",
        "city": "Philadelphia",
        "country": "United Kingdom",
        "phone": "+61-498624886",
        "departmentName": "Business Development",
        "jobTitle": "Specialist",
        "team": TeamEnum.spaceTeam
      },
      {
        "id": 87,
        "firstName": "Olivia",
        "lastName": "Jackson",
        "birthDate": "1997-12-25",
        "hireDate": "2015-11-04",
        "address": "558 Michael St, Baltimore, UN 95981",
        "city": "Sacramento",
        "country": "India",
        "phone": "+39-835049288",
        "departmentName": "Quality Assurance",
        "jobTitle": "Consultant",
        "team": TeamEnum.fireTeam
      },
      {
        "id": 88,
        "firstName": "Chloe",
        "lastName": "Jones",
        "birthDate": "1981-03-29",
        "hireDate": "2010-12-23",
        "address": "715 Chloe St, Long Beach, FR 56207",
        "city": "Indianapolis",
        "country": "Canada",
        "phone": "+46-439030959",
        "departmentName": "Product Management",
        "jobTitle": "Coordinator",
        "team": TeamEnum.spaceTeam
      },
      {
        "id": 89,
        "firstName": "Grace",
        "lastName": "Adams",
        "birthDate": "1996-10-02",
        "hireDate": "2023-06-11",
        "address": "587 Michael St, Dallas, SW 60609",
        "city": "Dallas",
        "country": "Canada",
        "phone": "+33-717526356",
        "departmentName": "Customer Support",
        "jobTitle": "Architect",
        "team": TeamEnum.waterTeam
      },
      {
        "id": 90,
        "firstName": "James",
        "lastName": "Allen",
        "birthDate": "1981-03-29",
        "hireDate": "2014-12-13",
        "address": "895 Emma St, Jacksonville, EG 52850",
        "city": "Indianapolis",
        "country": "Greece",
        "phone": "+81-553903573",
        "departmentName": "Customer Support",
        "jobTitle": "Associate",
        "team": TeamEnum.fireTeam
      },
      {
        "id": 91,
        "firstName": "William",
        "lastName": "Johnson",
        "birthDate": "1991-09-08",
        "hireDate": "2019-08-26",
        "address": "887 Samuel St, Nashville, UN 45926",
        "city": "Kansas City",
        "country": "Argentina",
        "phone": "+44-338670584",
        "departmentName": "Administration",
        "jobTitle": "Assistant",
        "team": TeamEnum.fireTeam
      },
      {
        "id": 92,
        "firstName": "Jacob",
        "lastName": "Young",
        "birthDate": "1984-07-28",
        "hireDate": "2013-07-10",
        "address": "525 Mia St, Tucson, NO 98305",
        "city": "Denver",
        "country": "Japan",
        "phone": "+44-493138139",
        "departmentName": "Administration",
        "jobTitle": "Engineer",
        "team": TeamEnum.fireTeam
      },
      {
        "id": 93,
        "firstName": "Michael",
        "lastName": "Miller",
        "birthDate": "1988-02-21",
        "hireDate": "2016-07-11",
        "address": "521 Elizabeth St, Houston, SP 74381",
        "city": "Washington",
        "country": "Argentina",
        "phone": "+1-711952834",
        "departmentName": "Business Development",
        "jobTitle": "Supervisor",
        "team": TeamEnum.waterTeam
      },
      {
        "id": 94,
        "firstName": "John",
        "lastName": "Williams",
        "birthDate": "1987-11-25",
        "hireDate": "2015-08-23",
        "address": "235 Madison St, Albuquerque, CH 25324",
        "city": "Nashville",
        "country": "Argentina",
        "phone": "+46-910535713",
        "departmentName": "Research and Development",
        "jobTitle": "Marketer",
        "team": TeamEnum.waterTeam
      },
      {
        "id": 95,
        "firstName": "Joseph",
        "lastName": "Green",
        "birthDate": "1984-12-10",
        "hireDate": "2010-03-05",
        "address": "533 Andrew St, Los Angeles, GE 82895",
        "city": "San Francisco",
        "country": "Spain",
        "phone": "+39-213251110",
        "departmentName": "Research and Development",
        "jobTitle": "Analyst",
        "team": TeamEnum.airTeam
      },
      {
        "id": 96,
        "firstName": "Isabella",
        "lastName": "Wright",
        "birthDate": "1993-07-20",
        "hireDate": "2021-09-28",
        "address": "147 Daniel St, Sacramento, RU 10237",
        "city": "Phoenix",
        "country": "New Zealand",
        "phone": "+46-912407290",
        "departmentName": "Marketing",
        "jobTitle": "Accountant",
        "team": TeamEnum.airTeam
      },
      {
        "id": 97,
        "firstName": "David",
        "lastName": "Walker",
        "birthDate": "1999-05-12",
        "hireDate": "2023-02-09",
        "address": "77 Samuel St, Fresno, TH 62935",
        "city": "Washington",
        "country": "Italy",
        "phone": "+1-538586150",
        "departmentName": "Research and Development",
        "jobTitle": "Developer",
        "team": TeamEnum.fireTeam
      },
      {
        "id": 98,
        "firstName": "Chloe",
        "lastName": "Wright",
        "birthDate": "1982-06-05",
        "hireDate": "2016-08-01",
        "address": "400 Daniel St, Denver, SA 61286",
        "city": "Dallas",
        "country": "South Korea",
        "phone": "+49-729671244",
        "departmentName": "Engineering",
        "jobTitle": "Researcher",
        "team": TeamEnum.airTeam
      },
      {
        "id": 99,
        "firstName": "Emma",
        "lastName": "Lewis",
        "birthDate": "1993-11-24",
        "hireDate": "2018-11-14",
        "address": "710 Samuel St, Indianapolis, GE 39566",
        "city": "Indianapolis",
        "country": "Australia",
        "phone": "+1-116562120",
        "departmentName": "Sales",
        "jobTitle": "Architect",
        "team": TeamEnum.spaceTeam
      },
      {
        "id": 100,
        "firstName": "Chloe",
        "lastName": "White",
        "birthDate": "2000-03-08",
        "hireDate": "2011-08-03",
        "address": "108 Emma St, Kansas City, EG 99487",
        "city": "New York",
        "country": "Saudi Arabia",
        "phone": "+33-327179728",
        "departmentName": "Quality Assurance",
        "jobTitle": "Supervisor",
        "team": TeamEnum.waterTeam
      }
    ]
  }

  getCountryCode(country: string) {
    switch (country) {
      case 'United States':
        return 'us';
      case 'Canada':
        return 'ca';
      case 'United Kingdom':
        return 'gb';
      case 'Germany':
        return 'de';
      case 'Australia':
        return 'au';
      case 'France':
        return 'fr';
      case 'Spain':
        return 'es';
      case 'Japan':
        return 'jp';
      case 'Italy':
        return 'it';
      case 'Netherlands':
        return 'nl';
      case 'Sweden':
        return 'se';
      case 'Switzerland':
        return 'ch';
      case 'Brazil':
        return 'br';
      case 'Mexico':
        return 'mx';
      case 'Argentina':
        return 'ar';
      case 'India':
        return 'in';
      case 'China':
        return 'cn';
      case 'South Korea':
        return 'kr';
      case 'Russia':
        return 'ru';
      case 'South Africa':
        return 'za';
      case 'Egypt':
        return 'eg';
      case 'Saudi Arabia':
        return 'sa';
      case 'United Arab Emirates':
        return 'ae';
      case 'New Zealand':
        return 'nz';
      case 'Singapore':
        return 'sg';
      case 'Thailand':
        return 'th';
      case 'Israel':
        return 'il';
      case 'Turkey':
        return 'tr';
      case 'Greece':
        return 'gr';
      case 'Norway':
        return 'no';
      default:
        return '';
    }
  }

  getImageByName(firstName: string) {
    const maleImages = ['andrew', 'johnny', 'mark', 'michael', 'robert', 'steven', 'toni'];
    const femaleImages = ['anne', 'avril', 'janet', 'johanna', 'laura', 'margaret', 'maria', 'maya', 'monica', 'nancy'];

    switch (firstName) {
      case 'John':
        return 'johnny'
      case 'Michael':
        return 'michael'
      case 'David':
        return 'mark'
      case 'Daniel':
        return 'toni'
      case 'Matthew':
        return 'robert'
      case 'Andrew':
        return 'andrew'
      case 'James':
        return 'steven'
      case 'Christopher':
        return 'michael'
      case 'Joseph':
        return 'johnny'
      case 'William':
        return 'steven'
      case 'Nicholas':
        return 'robert'
      case 'Jacob':
        return 'andrew'
      case 'Daniel':
        return 'johnny'
      case 'Alexander':
        return 'toni'
      case 'Samuel':
        return 'michael'
      case 'Jane':
        return 'janet'
      case 'Sarah':
        return 'monica'
      case 'Emily':
        return 'nancy'
      case 'Olivia':
        return 'avril'
      case 'Emma':
        return 'anne'
      case 'Sophia':
        return 'johanna'
      case 'Isabella':
        return 'laura'
      case 'Mia':
        return 'margaret'
      case 'Ava':
        return 'maria'
      case 'Abigail':
        return 'maya'
      case 'Emily':
        return 'monica'
      case 'Chloe':
        return 'nancy'
      case 'Madison':
        return 'janet'
      case 'Elizabeth':
        return 'anne'
      case 'Grace':
        return 'johanna';
      default:
        return ''
    }
  }

  generateTeamsEfficinecy(): TeamsEfficinecy[] {

    const today = new Date();

    const teamsEfficinecy: TeamsEfficinecy[] = []

    for (let i = 2020; i < today.getFullYear() + 1; i++) {

      for (let j = 0; j < 11; j++) {
        teamsEfficinecy.push({
          date: new Date(i, j, 15),
          fireTeam: Math.floor(Math.random() * 15000),
          waterTeam: Math.floor(Math.random() * 15000),
          airTeam: Math.floor(Math.random() * 15000),
          spaceTeam: Math.floor(Math.random() * 15000),
        })
      }
    }
    return teamsEfficinecy
  }

  getTeamsEfficinecy(): TeamsEfficinecy[] {
    return [
      {
        "date": "2020-01-14T22:00:00.000Z",
        "fireTeam": 4684,
        "waterTeam": 7092,
        "airTeam": 11082,
        "spaceTeam": 5952
      },
      {
        "date": "2020-02-14T22:00:00.000Z",
        "fireTeam": 6267,
        "waterTeam": 14349,
        "airTeam": 10743,
        "spaceTeam": 11917
      },
      {
        "date": "2020-03-14T22:00:00.000Z",
        "fireTeam": 10117,
        "waterTeam": 12373,
        "airTeam": 10026,
        "spaceTeam": 5328
      },
      {
        "date": "2020-04-14T21:00:00.000Z",
        "fireTeam": 14237,
        "waterTeam": 13420,
        "airTeam": 9269,
        "spaceTeam": 3736
      },
      {
        "date": "2020-05-14T21:00:00.000Z",
        "fireTeam": 14025,
        "waterTeam": 6277,
        "airTeam": 11728,
        "spaceTeam": 3339
      },
      {
        "date": "2020-06-14T21:00:00.000Z",
        "fireTeam": 13913,
        "waterTeam": 9289,
        "airTeam": 2010,
        "spaceTeam": 3499
      },
      {
        "date": "2020-07-14T21:00:00.000Z",
        "fireTeam": 9529,
        "waterTeam": 14600,
        "airTeam": 10886,
        "spaceTeam": 1620
      },
      {
        "date": "2020-08-14T21:00:00.000Z",
        "fireTeam": 12829,
        "waterTeam": 4265,
        "airTeam": 6451,
        "spaceTeam": 14070
      },
      {
        "date": "2020-09-14T21:00:00.000Z",
        "fireTeam": 10188,
        "waterTeam": 5331,
        "airTeam": 8387,
        "spaceTeam": 10449
      },
      {
        "date": "2020-10-14T21:00:00.000Z",
        "fireTeam": 47,
        "waterTeam": 14333,
        "airTeam": 5132,
        "spaceTeam": 4857
      },
      {
        "date": "2020-11-14T22:00:00.000Z",
        "fireTeam": 10980,
        "waterTeam": 3303,
        "airTeam": 10897,
        "spaceTeam": 13846
      },
      {
        "date": "2021-01-14T22:00:00.000Z",
        "fireTeam": 1131,
        "waterTeam": 13947,
        "airTeam": 11911,
        "spaceTeam": 2075
      },
      {
        "date": "2021-02-14T22:00:00.000Z",
        "fireTeam": 2542,
        "waterTeam": 2951,
        "airTeam": 12350,
        "spaceTeam": 9711
      },
      {
        "date": "2021-03-14T22:00:00.000Z",
        "fireTeam": 12861,
        "waterTeam": 2687,
        "airTeam": 12430,
        "spaceTeam": 6816
      },
      {
        "date": "2021-04-14T21:00:00.000Z",
        "fireTeam": 7845,
        "waterTeam": 2063,
        "airTeam": 606,
        "spaceTeam": 13619
      },
      {
        "date": "2021-05-14T21:00:00.000Z",
        "fireTeam": 8772,
        "waterTeam": 703,
        "airTeam": 1949,
        "spaceTeam": 4430
      },
      {
        "date": "2021-06-14T21:00:00.000Z",
        "fireTeam": 5487,
        "waterTeam": 10435,
        "airTeam": 5919,
        "spaceTeam": 12955
      },
      {
        "date": "2021-07-14T21:00:00.000Z",
        "fireTeam": 2847,
        "waterTeam": 10868,
        "airTeam": 1078,
        "spaceTeam": 8581
      },
      {
        "date": "2021-08-14T21:00:00.000Z",
        "fireTeam": 2199,
        "waterTeam": 10884,
        "airTeam": 2672,
        "spaceTeam": 6549
      },
      {
        "date": "2021-09-14T21:00:00.000Z",
        "fireTeam": 1070,
        "waterTeam": 3767,
        "airTeam": 4156,
        "spaceTeam": 3475
      },
      {
        "date": "2021-10-14T21:00:00.000Z",
        "fireTeam": 13432,
        "waterTeam": 6963,
        "airTeam": 3689,
        "spaceTeam": 5533
      },
      {
        "date": "2021-11-14T22:00:00.000Z",
        "fireTeam": 1296,
        "waterTeam": 3721,
        "airTeam": 6199,
        "spaceTeam": 2863
      },
      {
        "date": "2022-01-14T22:00:00.000Z",
        "fireTeam": 3099,
        "waterTeam": 4850,
        "airTeam": 8272,
        "spaceTeam": 1485
      },
      {
        "date": "2022-02-14T22:00:00.000Z",
        "fireTeam": 11745,
        "waterTeam": 6128,
        "airTeam": 5786,
        "spaceTeam": 418
      },
      {
        "date": "2022-03-14T22:00:00.000Z",
        "fireTeam": 2815,
        "waterTeam": 14295,
        "airTeam": 4398,
        "spaceTeam": 1186
      },
      {
        "date": "2022-04-14T21:00:00.000Z",
        "fireTeam": 2821,
        "waterTeam": 6386,
        "airTeam": 9869,
        "spaceTeam": 3185
      },
      {
        "date": "2022-05-14T21:00:00.000Z",
        "fireTeam": 5467,
        "waterTeam": 8429,
        "airTeam": 4995,
        "spaceTeam": 7407
      },
      {
        "date": "2022-06-14T21:00:00.000Z",
        "fireTeam": 6116,
        "waterTeam": 8083,
        "airTeam": 1276,
        "spaceTeam": 8876
      },
      {
        "date": "2022-07-14T21:00:00.000Z",
        "fireTeam": 10280,
        "waterTeam": 1468,
        "airTeam": 12110,
        "spaceTeam": 6818
      },
      {
        "date": "2022-08-14T21:00:00.000Z",
        "fireTeam": 9404,
        "waterTeam": 2773,
        "airTeam": 13441,
        "spaceTeam": 4764
      },
      {
        "date": "2022-09-14T21:00:00.000Z",
        "fireTeam": 2851,
        "waterTeam": 4339,
        "airTeam": 6305,
        "spaceTeam": 5025
      },
      {
        "date": "2022-10-14T21:00:00.000Z",
        "fireTeam": 5834,
        "waterTeam": 7716,
        "airTeam": 2073,
        "spaceTeam": 1149
      },
      {
        "date": "2022-11-14T22:00:00.000Z",
        "fireTeam": 14371,
        "waterTeam": 11623,
        "airTeam": 2122,
        "spaceTeam": 9570
      },
      {
        "date": "2023-01-14T22:00:00.000Z",
        "fireTeam": 4630,
        "waterTeam": 3030,
        "airTeam": 5724,
        "spaceTeam": 11531
      },
      {
        "date": "2023-02-14T22:00:00.000Z",
        "fireTeam": 13506,
        "waterTeam": 2140,
        "airTeam": 14437,
        "spaceTeam": 7708
      },
      {
        "date": "2023-03-14T22:00:00.000Z",
        "fireTeam": 425,
        "waterTeam": 2236,
        "airTeam": 2227,
        "spaceTeam": 2178
      },
      {
        "date": "2023-04-14T21:00:00.000Z",
        "fireTeam": 8840,
        "waterTeam": 4787,
        "airTeam": 13893,
        "spaceTeam": 12253
      },
      {
        "date": "2023-05-14T21:00:00.000Z",
        "fireTeam": 6721,
        "waterTeam": 10063,
        "airTeam": 9218,
        "spaceTeam": 5755
      },
      {
        "date": "2023-06-14T21:00:00.000Z",
        "fireTeam": 10856,
        "waterTeam": 12575,
        "airTeam": 2590,
        "spaceTeam": 5952
      },
      {
        "date": "2023-07-14T21:00:00.000Z",
        "fireTeam": 10798,
        "waterTeam": 2060,
        "airTeam": 12724,
        "spaceTeam": 1048
      },
      {
        "date": "2023-08-14T21:00:00.000Z",
        "fireTeam": 11703,
        "waterTeam": 6320,
        "airTeam": 1708,
        "spaceTeam": 4525
      },
      {
        "date": "2023-09-14T21:00:00.000Z",
        "fireTeam": 9062,
        "waterTeam": 6610,
        "airTeam": 14643,
        "spaceTeam": 9201
      },
      {
        "date": "2023-10-14T21:00:00.000Z",
        "fireTeam": 8360,
        "waterTeam": 14105,
        "airTeam": 9047,
        "spaceTeam": 3739
      },
      {
        "date": "2023-11-14T22:00:00.000Z",
        "fireTeam": 8678,
        "waterTeam": 14141,
        "airTeam": 14516,
        "spaceTeam": 6381
      },
      {
        "date": "2023-12-14T22:00:00.000Z",
        "fireTeam": 9478,
        "waterTeam": 18541,
        "airTeam": 19316,
        "spaceTeam": 9681
      }
    ]
  }

  getEmployeeEvents(): SchedulerEvent[] {
    let events: SchedulerEvent[] = [];

    const repeatingEvents = [
      {
        label: 'Design Review',
        dateStart: new Date(2023, 6, 3, 8, 30),
        dateEnd: new Date(2023, 6, 3, 9, 30),
        employeeId: 3,
        repeat: {
          repeatFreq: 'weekly',
          repeatOn: [1]
        }
      },
      {
        label: 'Google AdWords Strategy',
        dateStart: new Date(2023, 6, 4),
        dateEnd: new Date(2023, 6, 4),
        employeeId: 4,
        allDay: true,
        repeat: {
          repeatFreq: 'weekly',
          repeatOn: [4]
        }
      }, {
        label: 'New Brochures',
        dateStart: new Date(2023, 4, 6, 11, 30),
        dateEnd: new Date(2023, 4, 6 + 1, 14, 15),
        employeeId: 3,
        repeat: {
          repeatFreq: 'monthly',
          repeatInterval: 1,
          repeatOn: 12
        }
      },
      {
        label: 'Brochure Design Review',
        dateStart: new Date(2020, 6, 12, 13, 15),
        dateEnd: new Date(2020, 6, 14, 16, 15),
        employeeId: 1,
        repeat: {
          repeatFreq: 'yearly',
          repeatInterval: 10,
          repeatOn: { month: 7, Date: 17 },
        }
      }
    ]

    events = events.concat(repeatingEvents);

    const employee1Events = [
      {
        label: 'Organize Vacations and Team Buildings',
        dateStart: new Date(2023, 6, 10, 10, 0),
        dateEnd: new Date(2023, 6, 10, 12, 30),
        employeeId: 1
      }, {
        label: 'Lunch Break',
        dateStart: new Date(2023, 6, 21, 12),
        dateEnd: new Date(2023, 6, 21, 14, 30),
        employeeId: 1
      }, {
        label: 'Perform Additional Duties',
        dateStart: new Date(2023, 6, 6, 13, 0),
        dateEnd: new Date(2023, 6, 6, 15, 15),
        employeeId: 1
      }, {
        label: 'Install New Database',
        dateStart: new Date(2023, 6, 25, 9),
        dateEnd: new Date(2023, 6, 25, 12, 15),
        employeeId: 1
      }, {
        label: 'Make a Conversation With The Marketing',
        dateStart: new Date(2023, 6, 19, 9),
        dateEnd: new Date(2023, 6, 19, 12, 15),
        employeeId: 1
      }
    ]

    events = events.concat(employee1Events);

    const employee2Events = [{
      label: 'Discuss New Project',
      dateStart: new Date(2023, 6, 18, 8, 30),
      dateEnd: new Date(2023, 6, 18, 10, 30),
      employeeId: 2
    }, {
      label: 'Work On Task A',
      dateStart: new Date(2023, 6, 7, 12, 30),
      dateEnd: new Date(2023, 6, 7, 14, 45),
      employeeId: 2
    }, {
      label: 'Review Juniors Employees Work',
      dateStart: new Date(2023, 6, 13, 10, 0),
      dateEnd: new Date(2023, 6, 13, 11, 0),
      employeeId: 2
    }, {
      label: 'Prepare Weekly/Monthly Report',
      dateStart: new Date(2023, 6, 28, 13, 0),
      dateEnd: new Date(2023, 6, 28, 15, 15),
      employeeId: 2
    }, {
      label: 'Mantain Database',
      dateStart: new Date(2023, 6, 24, 11, 0),
      dateEnd: new Date(2023, 6, 24, 13, 30),
      employeeId: 2
    }]

    events = events.concat(employee2Events);

    const employee3Events = [{
      label: 'Interview Job Candidaties',
      dateStart: new Date(2023, 6, 5, 9, 30),
      dateEnd: new Date(2023, 6, 5, 11, 30),
      employeeId: 3
    }, {
      label: 'Meet With Customers',
      dateStart: new Date(2023, 6, 26, 14, 0),
      dateEnd: new Date(2023, 6, 26, 16, 0),
      employeeId: 3
    }, {
      label: 'Setup New Client Accounts',
      dateStart: new Date(2023, 6, 21, 12, 0),
      dateEnd: new Date(2023, 6, 21, 13, 35),
      employeeId: 3
    }, {
      label: 'Teach Junior Employees',
      dateStart: new Date(2023, 6, 11, 14),
      dateEnd: new Date(2023, 6, 11, 17),
      employeeId: 3
    }, {
      label: 'Welcome Junior Employees',
      allDay: true,
      dateStart: new Date(2023, 6, 10),
      dateEnd: new Date(2023, 6, 10),
      employeeId: 3
    }]

    events = events.concat(employee3Events);

    const employee4Events = [
      {
        label: 'Conduct Research On New Technologies',
        dateStart: new Date(2023, 6, 4, 13),
        dateEnd: new Date(2023, 6, 4, 15, 30),
        employeeId: 4
      }, {
        label: 'Visit New Tech Conference',
        dateStart: new Date(2023, 6, 26, 11, 0),
        dateEnd: new Date(2023, 6, 26, 13, 30),
        employeeId: 4
      }, {
        label: 'Prepare current Year Marketing Plan',
        dateStart: new Date(2023, 6, 3, 11, 0),
        dateEnd: new Date(2023, 6, 3, 13, 30),
        employeeId: 4
      }, {
        label: 'Visit Marketing Department',
        dateStart: new Date(2023, 6, 14, 11, 0),
        dateEnd: new Date(2023, 6, 14, 13, 30),
        employeeId: 4
      }
    ]

    events = events.concat(employee4Events);

    return events
  }
}
