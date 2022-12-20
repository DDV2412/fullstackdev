export enum CertificateType {
  Competition = "kejuaraan",
  Attendance = "kehadiran",
}

export interface ICertificate {
  id: number;
  name: string;
  type: CertificateType;
  publisherId: string;
  publisherName: string;
  point: number;
  createdAt: Date;
}
