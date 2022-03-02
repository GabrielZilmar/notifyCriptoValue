import EndpointBuilder from "../../httpServer/utils/EndpointBuilder";
import { HttpMethod } from "../../../types/HttpMethod";

export default EndpointBuilder.new("/api/test")
  .setHttpMethod(HttpMethod.GET)
  .setHandler(async (req, res) => {
    res.send("Hello World!");
  });
