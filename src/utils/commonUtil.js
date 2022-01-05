// 精确小数
export const RoundNum = (num, decimal) =>
  Math.round(num * 10 ** decimal) / 10 ** decimal;

// 错误捕获
export const errorCaptured = async (promise) => {
  try {
    let res = await promise;
    return [null, res];
  } catch (e) {
    return [e, null];
  }
};

// 防抖
export const debounce = (fn, ms = 50) => {
  let timer = 0;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn.apply(null, args), ms);
  };
};

// url 转换
export const transUrl = (url) => {
  if (url.endsWith("/")) {
    const lastIndex = url.lastIndexOf("/");
    return url.substr(0, lastIndex);
  }
  return url;
};
