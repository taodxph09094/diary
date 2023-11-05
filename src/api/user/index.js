import { settings } from "../const";
import { requestSSO } from "../requestSSO";
export const postLogin = (body) =>
  requestSSO("post", `${settings.API}/api/user/login`, body);

export const postLogout = () =>
  requestSSO("post", `${settings.API}/api/user/logout`);
