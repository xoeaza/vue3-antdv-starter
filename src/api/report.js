import { fetchApi } from "@/utils/index";
import { errorCaptured, transUrl } from "@/utils/commonUtil.js";
import * as ENV from "@/constants/env";

const BASE_URL = transUrl(ENV.API_BASE_URL) + "/api";

// 导航菜单
export const getLeftSideMenus = (userId) => {
  return errorCaptured(fetchApi(`${BASE_URL}/navigation/${userId}`));
};
