import { fetchApi } from "@/utils/index";
import { errorCaptured, transUrl } from "@/utils/commonUtil.js";
import * as ENV from "@/constants/env";

const BASE_URL = transUrl(ENV.API_SSO_URL);

// 获取用户信息
export const getUserInfo = (code) => {
  const defaultQuery = {
    code: null,
    state: false,
    appId: ENV.SSO_APP_ID,
  };
  const params = { ...defaultQuery, code };
  return errorCaptured(fetchApi(`${BASE_URL}/sso/login`, params, "POST"));
};

// 退出登录
export const logout = () => {
  return errorCaptured(fetchApi(`${BASE_URL}/sso/logout`));
};
