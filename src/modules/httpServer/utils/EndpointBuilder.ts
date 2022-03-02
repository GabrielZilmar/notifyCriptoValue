import { IRouter } from "express";
import { HttpMethod } from "../../../types/HttpMethod";

type IHandler = (req: any, res: any) => Promise<void> | void;

class EndpointBuilder {
  private httpMethod: HttpMethod;
  private path: string;
  private handler: IHandler;
  private pipes: any[];

  static new(path: string): EndpointBuilder {
    const instance = new EndpointBuilder();
    instance.setPath(path);

    return instance;
  }

  constructor() {
    this.pipes = [];
  }

  public setPath(path: string): EndpointBuilder {
    this.path = path;
    return this;
  }

  public addPipe(pipe: any): EndpointBuilder {
    this.pipes.push(pipe);
    return this;
  }

  public setHttpMethod(httpMethod: HttpMethod): EndpointBuilder {
    this.httpMethod = httpMethod;
    return this;
  }

  public setHandler(handler: IHandler): EndpointBuilder {
    this.handler = handler;
    return this;
  }

  public getPath(): string {
    return this.path;
  }

  public getHttpMethod(): HttpMethod {
    return this.httpMethod;
  }

  public register(route: IRouter): void {
    switch (this.httpMethod) {
      case HttpMethod.DELETE:
        route.delete(this.path, this.handler, this.pipes);
        break;
      case HttpMethod.POST:
        route.post(this.path, this.handler, this.pipes);
        break;
      case HttpMethod.PUT:
        route.put(this.path, this.handler, this.pipes);
        break;
      default:
        route.get(this.path, this.handler, this.pipes);
        break;
    }
  }
}

export default EndpointBuilder;
