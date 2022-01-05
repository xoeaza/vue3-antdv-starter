import axios from "axios";
import { notification } from "ant-design-vue";
import * as ENV from "@/constants/env";

export const HTTP = axios.create({
  baseURL: ENV.PUBLIC_URL,
  withCredentials: true,
  timeout: 10000,
  headers: {
    post: {
      "Content-Type": "application/json",
    },
  },
});

HTTP.defaults.retry = 2;
HTTP.defaults.retryDelay = 500;

function handleParams(api, rawData, rawMethod) {
  const newUrl = api;
  const method = rawMethod.toUpperCase();
  let data = {};
  if (method === "GET") {
    data = { params: rawData };
  }
  switch (method) {
    case "GET":
      data = { params: rawData };
      break;
    case "POST":
    case "PUT":
    case "PATCH":
      data = { data: rawData };
      break;
    default:
      data = { params: rawData };
      break;
  }

  const startTime = new Date().getTime();

  return Promise.resolve({
    url: newUrl,
    method,
    data,
    startTime,
  });
}

// 返回错误码之后的处理
function responseError(response) {
  const { status, data } = response;
  const { path, error } = data;
  const toastFn = (errorMsg) => {
    notification.error({
      message: "服务: " + path,
      description: error || errorMsg,
      duration: 2,
    });
  };
  const actions = new Map([
    [400, toastFn.bind(null, "参数错误")],
    [406, toastFn.bind(null, "请求接口失败")],
    [404, toastFn.bind(null, "不存在该数据")],
    [/499|498|500/, toastFn.bind(null, "Ohoo~ 出了点问题")],
    [
      401,
      () => {
        const { headers } = response;
        const { location = "" } = headers;
        if (location) window.location.replace(location);
      },
    ],
  ]);
  let action = [...actions].filter(([key, val]) => {
    return String(status).match ? String(status).match(key) : status;
  });
  action.forEach(([key, value]) => {
    value();
  });
}

function handleFail(option) {
  const { error, reject } = option;
  const { response } = error;
  if (response) {
    responseError(response);
  }
  reject(error);
}

// eslint-disable-next-line
export default (api, rawData = {}, method = "GET", extraHeaders = {}) => {
  return handleParams(api, rawData, method).then((options) => {
    return new Promise((resolve, reject) => {
      HTTP({
        withCredentials: true,
        url: options.url,
        method: options.method,
        headers: {
          timezoneoffset: Math.abs(new Date().getTimezoneOffset() / 60),
          locale: "zh_CN",
          ...extraHeaders,
        },
        ...options.data,
      }).then(
        (resp) => {
          resolve(resp.data);
        },
        (error) => {
          handleFail({
            error,
            reject,
            options,
          });
        }
      );
    });
  });
};
