import type { LocationInfo } from "./basic";

export interface EducationInfoTemp {
  level: EducationLevel;
  iconkey: string;
  school_name: string;
  location: LocationInfo;
  credential: string;
  credential_type: CredentialType;
  major: string | null;
  specialization: string | null;
  graduated: string;
  credential_received_date: string;
  grade: number;
}

export const DEFAULT_EDUINFO: EducationInfoTemp = {
    level: "",
    iconkey: "missing",
    school_name: "",
    location: { city: "", state: "", country: "" },
    credential: "",
    credential_type: "",
    major: null,
    specialization: null,
    graduated: "",
    credential_received_date: "",
    grade: 0
}

export type EducationLevel = "High School" | "Post-Secondary" | string;// | "Undergraduate" | "Graduate" | "Post-Graduate";
export type CredentialType = "Diploma" | "Degree" | string;
