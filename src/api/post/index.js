import { settings } from "../const";
import { request } from "../request";
export const getAllPost = (year, month) =>
  request("get", `${settings.API}/api/post/all?year=${year}&month=${month}`);
export const getDetail = (id) =>
  request("get", `${settings.API}/api/post/${id}`);
