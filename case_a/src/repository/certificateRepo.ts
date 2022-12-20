import certificates from "../mocks/certificates";
import { ICertificate } from "../interfaces/iCertificate";

type CertificatesByYear = { [year: number]: ICertificate[] };

type TotalPointsByPublisher = { [publisherId: string]: number };

class CertificateRepo {
  certificate: ICertificate[] = certificates;

  findAll = async (
    sortBy: string | undefined,
    order: "asc" | "desc" | undefined
  ) => {
    if (sortBy === "createdAt") {
      return this.certificate.sort((a: ICertificate, b: ICertificate) => {
        return order === "asc"
          ? new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          : new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
    }

    if (sortBy === "publishYear") {
      return this.certificate.reduce(
        (acc: CertificatesByYear, curr: ICertificate) => {
          const year = new Date(curr.createdAt).getFullYear();
          if (!acc[year]) {
            acc[year] = [];
          }
          acc[year].push(curr);
          return acc;
        },
        {}
      );
    }

    if (sortBy === "totalPoin") {
      return this.certificate.reduce(
        (acc: TotalPointsByPublisher, curr: ICertificate) => {
          if (!acc[curr.publisherId]) {
            acc[curr.publisherId] = 0;
          }
          acc[curr.publisherId] += curr.point;
          return acc;
        },
        {}
      );
    }

    return this.certificate;
  };
}

export default new CertificateRepo();
