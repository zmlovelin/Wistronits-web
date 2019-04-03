import {en_US, zh_CN} from 'ng-zorro-antd';
import _zh_CN from '../../../assets/i18n/zh_CN';
import _en_US from '../../../assets/i18n/en_US';

/**
 * Created by xiaoconghu on 2018/11/20.
 */
export class CommonUtil {
  /**
   * 获取uuid
   * param {number} len
   * returns {string}
   */
  public static getUUid(len: number = 36) {
    const uuid = [];
    const str = '0123456789abcdef';
    for (let i = 0; i < len; i++) {
      uuid[i] = str.substr(Math.floor(Math.random() * 0x10), 1);
    }
    if (len === 36) {
      uuid[14] = '4';
      uuid[19] = str.substr((uuid[19] & 0x3 | 0x8), 1);
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    }
    return uuid.join('').replace(/-/g, '');
  }

  /**
   * 切换语言包
   * param localId
   * returns {any}
   */
  public static toggleNZi18n(localId?) {
    localId = localId || window.localStorage.getItem('localId') || 'en_US';
    let language;
    switch (localId) {
      case 'zh_CN':
        language = Object.assign(zh_CN, _zh_CN);
        break;
      case 'en_US':
        language = Object.assign(en_US, _en_US);
        break;
      default:
        language = Object.assign(zh_CN, _zh_CN);
        break;
    }
    return language;
  }

  /**
   * 时间格式化
   * param fmt
   * param date
   * returns {any}
   */
  public static dateFmt(fmt, date) {
    const o = {
      'M+': date.getMonth() + 1,                 // 月份
      'd+': date.getDate(),                    // 日
      'h+': date.getHours(),                   // 小时
      'm+': date.getMinutes(),                 // 分
      's+': date.getSeconds(),                 // 秒
      'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
      'S': date.getMilliseconds()             // 毫秒
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (const k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {

        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
      }
    }
    return fmt;

  }

  /**
   * 深拷贝
   * param obj   拷贝对象
   * returns {any[] | {}}   返回拷贝对象
   */
  public static deepClone(obj): any {
    const objClone = Array.isArray(obj) ? [] : {};
    if (obj && typeof obj === 'object') {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          // 判断ojb子元素是否为对象，如果是，递归复制
          if (obj[key] && typeof obj[key] === 'object') {
            objClone[key] = this.deepClone(obj[key]);
          } else {
            // 如果不是，简单复制
            objClone[key] = obj[key];
          }
        }
      }
    }
    return objClone;
  }

  /**
   * 判断用户是否有页面访问权限
   * param url
   */
  public static hasRole(url): boolean {
    let menuList = [];
    if (sessionStorage.getItem('menuList')) {
      menuList = JSON.parse(sessionStorage.getItem('menuList'));
      const menuInfo = this.findMenuInfo(menuList, url);
      if (menuInfo) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  /**
   * 根据url查询指定的菜单信息
   * param menuList
   * param url
   */
  public static findMenuInfo(menuList, url) {
    for (let i = 0; i < menuList.length; i++) {
      if (menuList[i].menuHref === url) {
        return menuList[i];
        break;
      } else if (menuList[i].children && menuList[i].children.length > 0) {
        this.findMenuInfo(menuList[i].children, url);
      }
    }
  }

  /**
   * 比较ip大小
   * param ipBegin
   * param ipEnd
   */
  public static compareIP(ipBegin: string, ipEnd: string) {
    let temp1;
    let temp2;
    if (ipBegin.includes('.')) {
      temp1 = ipBegin.split('.');
      temp2 = ipEnd.split('.');
      for (let i = 0; i < temp2.length; i++) {
        if (parseInt(temp1[i], 0) > parseInt(temp2[i], 0)) {
          return true;
        } else if (temp1[i] < temp2[i]) {
          return false;
        }
      }
    } else {
      temp1 = ipBegin.split(':');
      temp2 = ipEnd.split(':');
      for (let i = 0; i < temp2.length; i++) {
        if (temp1[i] > temp2[i]) {
          return true;
        } else if (temp1[i] < temp2[i]) {
          return false;
        }
      }
    }
  }

  /**
   * 返回几天前日期
   * param day
   */
  public static funDate(day: number) {
    const date1 = new Date();
    const time1 = date1.getFullYear() + '-' + (date1.getMonth() + 1) + '-' + date1.getDate();
    const date2 = new Date(time1);
    date2.setDate(date1.getDate() + day);
    return date2.getFullYear() + '-' + (date2.getMonth() + 1) + '-' + date2.getDate();
  }
}
