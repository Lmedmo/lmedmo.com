import type { LocationInfo } from "./basic";

export interface EmployerTemp {
    iconkey: string;
    name: string;
    roles: string[];
    tenure: EmploymentTenureTemp;
    location: LocationInfo;
    salary: string;
    duties: JobDutyTemp[];
}

export interface EmploymentTenureTemp {
    start: string;
    is_current: boolean;
    end: string;
}

export interface JobDutyTemp {
    label: string;
    description: string;
}