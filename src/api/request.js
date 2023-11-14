import { message } from "antd";
import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  timeout: 60000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const userToken = localStorage.getItem("userToken");
    let tokenWithoutQuotes = userToken &&userToken?.replace(/"/g, '');
    if (userToken && userToken) {
      
      config.headers.Authorization = `Bearer ${tokenWithoutQuotes}`;
    }
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

export const request = (method, url, data) => {
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
