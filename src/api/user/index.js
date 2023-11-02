import { settings } from "../const";
import { request } from "../request";
export const postLogin = (body) =>
  request("post", `${settings.API}/api/user/login`, body);
