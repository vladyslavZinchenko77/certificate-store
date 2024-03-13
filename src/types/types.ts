export interface Certificate{

    commonName: string;
    issuerName: string;
    validFrom: Date;
    validTo: Date;
}

export type CertificateList = Certificate[]