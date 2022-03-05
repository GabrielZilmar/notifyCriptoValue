import EndpointBuilder from "../../httpServer/utils/EndpointBuilder";
import { HttpMethod } from "../../../types/HttpMethod";
import authorizationPipe from "../../../pipes/Authorization.pipe";

export default EndpointBuilder.new("/api/test")
  .setHttpMethod(HttpMethod.GET)
  .addPipe([authorizationPipe])
  .setHandler(async (req, res) => {
    res.status(200).send(`Hello World!`);
  });
