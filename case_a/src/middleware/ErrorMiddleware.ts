import { NextFunction, Request, Response } from "express";
const ErrorMiddleware = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  error.message = error.message || "Internal server error";

  error.statusCode = error.statusCode || 500;

  res.status = error.statusCode;

  res.json({
    status: false,
    message: error.message,
  });
};

export default ErrorMiddleware;
