import * as express from "express";
import * as cors from "cors";
import * as http from "http";
import * as glob from "glob";
import EndpointBuilder from "./utils/EndpointBuilder";
import config from "../../config";

export class HttpServer {
  private async setup(): Promise<http.Server> {
    const app = express();

    app.use(cors({ origin: true }));
    app.use(express.json());

    const endpointFiles = "../**/routes/*.ts";

    await Promise.all(
      glob
        .sync(endpointFiles, { cwd: __dirname, root: __dirname })
        .map(async (path) => {
          const endpoint = (await import(path)).default as EndpointBuilder;

          console.info(
            `[ROUTE] ${endpoint
              .getHttpMethod()
              .toUpperCase()} ${endpoint.getPath()}`
          );

          endpoint.register(app);
        })
    );

    const port = config.port || 8000;
    const server = app.listen(port);

    console.info(`[SERVER] Running on port ${port}`);

    return server;
  }

  async start(): Promise<void> {
    await this.setup();
  }
}

export default HttpServer;
