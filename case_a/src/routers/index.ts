import express from "express";
import certificate from "../controllers/certificate";

class Router {
  router: express.Router = express.Router();

  constructor() {
    this.router.get("/", (req, res) => {
      res.json({
        message: "Welcome My API",
      });
    });

    this.router.get("/certificate", certificate.findAll);
  }
}

export default new Router().router;
