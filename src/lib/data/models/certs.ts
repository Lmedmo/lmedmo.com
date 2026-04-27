export interface CertificateInfoTemp {
    iconkey: string;
    name: string;
    special_attributes: CertSpecAttrTemp[];
    description: string;
    links: string[];
}

export interface CertSpecAttrTemp {
    name: string;
    value: string;
}