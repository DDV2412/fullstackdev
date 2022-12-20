import Express from "express";
import routers from "./routers";
import ErrorMiddleware from "./middleware/ErrorMiddleware";

class Application {
  app: Express.Application = Express();

  constructor() {
    this.app.use(routers);
    this.app.use(ErrorMiddleware);
  }
}

export default Application;
