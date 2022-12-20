import Application from "./app";

class Server extends Application {
  port: number = 3000;
  host: string = "localhost";

  runServer() {
    this.app.listen(this.port, this.host, () => {
      console.log(`Server at running at http://${this.host}:${this.port}`);
    });
  }
}

new Server().runServer();
