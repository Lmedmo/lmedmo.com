export interface BasicInfoObj {
  first_name: string;
  last_name: string;
  contact: ContactInfoObj;
  linked_accounts: LinkedAcctObj[];
  background: string;
}

export interface ContactInfoObj {
  email: string;
  phone: number;
}

export interface LocationInfo {
  city: string;
  state: string;
  country: string;
}

export interface LinkedAcctObj {
  description: LinkedAcctOption;
  username: string;
  url: string;
}
export type LinkedAcctOption = "GitHub" | "LinkedIn" | "X" | "Personal Website" | string;