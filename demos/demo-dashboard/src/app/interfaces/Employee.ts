import { TeamEnum } from "../enums/TeamEnum";

export interface Employee {
    id: number,
    firstName: string;
    lastName: string;
    birthDate: string;
    hireDate: string;
    address: string;
    city: string;
    country: string;
    phone: string;
    departmentName: string;
    jobTitle: string;
    team: TeamEnum
}