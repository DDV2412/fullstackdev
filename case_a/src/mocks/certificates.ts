import { ICertificate, CertificateType } from "../interfaces/iCertificate";

const certificates: ICertificate[] = [
  {
    id: 1,
    name: "Finalis Lomba Coding",
    type: CertificateType.Competition,
    publisherId: "P001",
    publisherName: "EO Hack & Coding",
    point: 10,
    createdAt: new Date("2014-10-05T14:48:00.000Z"),
  },
  {
    id: 2,
    name: "Finalis Lomba Makan Kerupuk",
    type: CertificateType.Competition,
    publisherId: "P002",
    publisherName: "Panitia 17an Desa Juara",
    point: 20,
    createdAt: new Date("2010-10-05T14:48:00.000Z"),
  },
  {
    id: 3,
    name: "Juara 1 Lomba Panjat Pinang",
    type: CertificateType.Competition,
    publisherId: "P002",
    publisherName: "Panitia 17an Desa Jawara",
    point: 30,
    createdAt: new Date("2022-10-05T14:48:00.000Z"),
  },
  {
    id: 4,
    name: "Digital Marketing Sesi 1",
    type: CertificateType.Attendance,
    publisherId: "P003",
    publisherName: "EO Pelatihan",
    point: 5,
    createdAt: new Date("2014-10-05T14:48:00.000Z"),
  },
];

export default certificates;
