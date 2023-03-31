import { excludeParseEventKeyList } from '@/enums/eventEnums';
/**
 * * JSON序列化，支持函数和 undefined
 * @param data
 */
export const JSONStringify = <T>(data: T) => {
  return JSON.stringify(
    data,
    (key, val) => {
      // 处理函数丢失问题
      if (typeof val === 'function') {
        return `${val}`;
      }
      // 处理 undefined 丢失问题
      if (typeof val === 'undefined') {
        return null;
      }
      return val;
    },
    2,
  );
};

/**
 * * JSON反序列化，支持函数和 undefined
 * @param data
 */
export const JSONParse = (data: string) => {
  return JSON.parse(data, (k, v) => {
    if (excludeParseEventKeyList.includes(k)) return v;
    if (
      typeof v === 'string' &&
      v.indexOf &&
      (v.indexOf('function') > -1 || v.indexOf('=>') > -1)
    ) {
      return eval(`(function(){return ${v}})()`);
    } else if (
      typeof v === 'string' &&
      v.indexOf &&
      v.indexOf('return ') > -1
    ) {
      const baseLeftIndex = v.indexOf('(');
      if (baseLeftIndex > -1) {
        const newFn = `function ${v.substring(baseLeftIndex)}`;
        return eval(`(function(){return ${newFn}})()`);
      }
    }
    return v;
  });
};

/**
 * * 存储本地会话数据
 * @param k 键名
 * @param v 键值（无需stringiiy）
 * @returns RemovableRef
 */
export const setLocalStorage = <T>(k: string, v: T) => {
  try {
    window.localStorage.setItem(k, JSONStringify(v));
  } catch (error) {
    return false;
  }
};

/**
 * * 获取本地会话数据
 * @param k 键名
 * @returns any
 */
export const getLocalStorage = (k: string) => {
  const item = window.localStorage.getItem(k);
  try {
    return item ? JSONParse(item) : item;
  } catch (err) {
    return item;
  }
};

/**
 * * 清除本地会话数据
 * @param name
 */
export const clearLocalStorage = (name: string) => {
  window.localStorage.removeItem(name);
};

/**
 * * 存储临时会话数据
 * @param k 键名
 * @param v 键值
 * @returns RemovableRef
 */
export const setSessionStorage = <T>(k: string, v: T) => {
  try {
    window.sessionStorage.setItem(k, JSON.stringify(v));
  } catch (error) {
    return false;
  }
};

/**
 * * 获取临时会话数据
 * @returns any
 */
export const getSessionStorage: (k: string) => any = (k: string) => {
  const item = window.sessionStorage.getItem(k);
  try {
    return item ? JSONParse(item) : item;
  } catch (err) {
    return item;
  }
};

/**
 * * 清除本地会话数据
 * @param name
 */
export const clearSessioStorage = (name: string) => {
  window.sessionStorage.removeItem(name);
};

export declare interface instanceObject {
  [key: string]: string;
}

/**
 * JSON转url参数
 * @param data Json格式数据
 * */
export const formatJsonToUrlParams = (data: instanceObject) => {
  return typeof data === 'object'
    ? Object.keys(data)
        .map((key) => {
          return `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`;
        })
        .join('&')
    : '';
};

/**
 * 格式化时间戳
 * @param timestamp 时间戳
 * @param showMs 是否显示毫秒
 * */
export const timestampFormatDate = function(timestamp: number, showMs?: boolean) {
  if (!timestamp || timestamp === -1) {
    return '-'
  }

  const date = new Date(timestamp)

  const y = date.getFullYear()

  let MM: any = date.getMonth() + 1
  MM = MM < 10 ? ('0' + MM) : MM

  let d: any = date.getDate()
  d = d < 10 ? ('0' + d) : d

  let h: any = date.getHours()
  h = h < 10 ? ('0' + h) : h

  let m: any = date.getMinutes()
  m = m < 10 ? ('0' + m) : m

  let s: any = date.getSeconds()
  s = s < 10 ? ('0' + s) : s

  let format = y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s

  if (showMs === true) {
    const ms = date.getMilliseconds()
    format += ':' + ms
  }

  return format
}

/**
 * 大数字转换 将数字分段显示，每三位用逗号隔开
 * @param value 数字值
 */
export const formatNumber = (value: string | number) => {
	value = value + '';
	return value.replace(/(\d)(?=(\d{3})+$)/g, "$1,");;
};
