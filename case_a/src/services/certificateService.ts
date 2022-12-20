import CertificateRepo from "../repository/certificateRepo";

class CertificateService {
  findAll = async (
    sortBy: string | undefined,
    order: "asc" | "desc" | undefined
  ) => {
    return await CertificateRepo.findAll(sortBy, order);
  };
}

export default new CertificateService();
