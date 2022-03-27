import EndpointBuilder from "../../httpServer/utils/EndpointBuilder";
import { HttpMethod } from "../../../types/HttpMethod";

export default EndpointBuilder.new("/test")
  .setHttpMethod(HttpMethod.GET)
  .setHandler(async (req, res) => {
    res.status(200).send("Teste");
  });
