import certificateService from "../src/services/certificateService";
import { ICertificate, CertificateType } from "../src/interfaces/iCertificate";

describe("certificateService", () => {
  let mockCertificates: ICertificate[];

  beforeEach(() => {
    mockCertificates = [
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
  });
  describe("sortByCreatedAt", () => {
    it("should sort the certificates by createdAt in ascending order", async () => {
      const sortedCertificates = await certificateService.findAll(
        "createdAt",
        "asc"
      );

      expect(sortedCertificates).toEqual([
        {
          id: 2,
          name: "Finalis Lomba Makan Kerupuk",
          type: "kejuaraan",
          publisherId: "P002",
          publisherName: "Panitia 17an Desa Juara",
          point: 20,
          createdAt: new Date("2010-10-05T14:48:00.000Z"),
        },
        {
          id: 1,
          name: "Finalis Lomba Coding",
          type: "kejuaraan",
          publisherId: "P001",
          publisherName: "EO Hack & Coding",
          point: 10,
          createdAt: new Date("2014-10-05T14:48:00.000Z"),
        },
        {
          id: 4,
          name: "Digital Marketing Sesi 1",
          type: "kehadiran",
          publisherId: "P003",
          publisherName: "EO Pelatihan",
          point: 5,
          createdAt: new Date("2014-10-05T14:48:00.000Z"),
        },
        {
          id: 3,
          name: "Juara 1 Lomba Panjat Pinang",
          type: "kejuaraan",
          publisherId: "P002",
          publisherName: "Panitia 17an Desa Jawara",
          point: 30,
          createdAt: new Date("2022-10-05T14:48:00.000Z"),
        },
      ]);
    });

    it("should sort the certificates by createdAt in descending order", async () => {
      const sortedCertificates = await certificateService.findAll(
        "createdAt",
        "desc"
      );

      expect(sortedCertificates).toEqual([
        {
          id: 3,
          name: "Juara 1 Lomba Panjat Pinang",
          type: "kejuaraan",
          publisherId: "P002",
          publisherName: "Panitia 17an Desa Jawara",
          point: 30,
          createdAt: new Date("2022-10-05T14:48:00.000Z"),
        },
        {
          id: 1,
          name: "Finalis Lomba Coding",
          type: "kejuaraan",
          publisherId: "P001",
          publisherName: "EO Hack & Coding",
          point: 10,
          createdAt: new Date("2014-10-05T14:48:00.000Z"),
        },
        {
          id: 4,
          name: "Digital Marketing Sesi 1",
          type: "kehadiran",
          publisherId: "P003",
          publisherName: "EO Pelatihan",
          point: 5,
          createdAt: new Date("2014-10-05T14:48:00.000Z"),
        },
        {
          id: 2,
          name: "Finalis Lomba Makan Kerupuk",
          type: "kejuaraan",
          publisherId: "P002",
          publisherName: "Panitia 17an Desa Juara",
          point: 20,
          createdAt: new Date("2010-10-05T14:48:00.000Z"),
        },
      ]);
    });
  });

  describe("Grouping Publish Year", () => {
    it("should grouping the certificates by publish year", async () => {
      const sortedCertificates = await certificateService.findAll(
        "publishYear",
        undefined
      );

      expect(sortedCertificates).toEqual({
        "2010": [
          {
            id: 2,
            name: "Finalis Lomba Makan Kerupuk",
            type: "kejuaraan",
            publisherId: "P002",
            publisherName: "Panitia 17an Desa Juara",
            point: 20,
            createdAt: new Date("2010-10-05T14:48:00.000Z"),
          },
        ],
        "2014": [
          {
            id: 1,
            name: "Finalis Lomba Coding",
            type: "kejuaraan",
            publisherId: "P001",
            publisherName: "EO Hack & Coding",
            point: 10,
            createdAt: new Date("2014-10-05T14:48:00.000Z"),
          },
          {
            id: 4,
            name: "Digital Marketing Sesi 1",
            type: "kehadiran",
            publisherId: "P003",
            publisherName: "EO Pelatihan",
            point: 5,
            createdAt: new Date("2014-10-05T14:48:00.000Z"),
          },
        ],
        "2022": [
          {
            id: 3,
            name: "Juara 1 Lomba Panjat Pinang",
            type: "kejuaraan",
            publisherId: "P002",
            publisherName: "Panitia 17an Desa Jawara",
            point: 30,
            createdAt: new Date("2022-10-05T14:48:00.000Z"),
          },
        ],
      });
    });
  });

  describe("Total Poin", () => {
    it("should the certificates by total poin", async () => {
      const sortedCertificates = await certificateService.findAll(
        "totalPoin",
        undefined
      );

      expect(sortedCertificates).toEqual({
        P001: 10,
        P002: 50,
        P003: 5,
      });
    });
  });
});
