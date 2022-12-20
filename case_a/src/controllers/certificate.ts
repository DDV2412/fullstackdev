import { NextFunction, Request, Response } from "express";
import certificateService from "../services/certificateService";
import ResponseData from "../utils/ResponseData";

class CertificateController {
  findAll = async (req: Request, res: Response) => {
    try {
      const { sortBy, order }: any = req.query;

      const data = await certificateService.findAll(sortBy, order);

      res.json({
        status: true,
        payload: data,
      });
    } catch (error: any) {
      return new ResponseData(error.message, 500);
    }
  };
}

export default new CertificateController();
