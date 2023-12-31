import { message } from "antd";
import axios from "axios";

const axiosInstance = axios.create({
  timeout: 60000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (response?.data?.message) {
      message.success(response.data.message);
    }
    return {
      status: true,
      message: response?.data?.message || "success",
      result: response.data,
    };
  },
  (error) => {
    let errorMessage = "Lỗi hệ thống";
    if (error?.message?.includes("Network Error")) {
      errorMessage = "";
    } else {
      errorMessage = error?.message;
    }
    if (error?.response?.status === 401) {
      window.localStorage.clear();
    } else {
      return Promise.reject(error);
    }
    return {
      status: false,
      message: errorMessage,
      result: null,
    };
  }
);

export const requestSSO = (method, url, data) => {
  if (method === "get") {
    return axiosInstance.get(url, { params: data });
  } else if (method === "post") {
    return axiosInstance.post(url, data);
  } else if (method === "put") {
    return axiosInstance.put(url, data);
  } else if (method === "delete") {
    return axiosInstance.delete(url, { data });
  }
};
