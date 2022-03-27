import axios from "axios";
import { Method } from "axios";

const request = async <T>(
  method: Method,
  url: string,
  body: any = {}
): Promise<T> =>
  axios({
    method,
    url,
    data: body
  })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });

export default request;
