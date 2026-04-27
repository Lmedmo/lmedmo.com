import type { ContactInfoObj } from '$lib/data';

export interface ReferenceInfoTemp {
  first_name: string;
  last_name: string;
  relation: string;
  occupation: string;
  contact: ContactInfoObj;
  quote: string;
}