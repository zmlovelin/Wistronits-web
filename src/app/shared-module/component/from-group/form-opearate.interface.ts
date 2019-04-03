import {FromConfig, Rule} from './from-config';
import {ValidatorFn} from '@angular/forms';

export interface FormOpearateInterface {
  /**
   * 为单个列新增校验规则
   *  param {FormItem} formItem
   */
  addValidRule(formItem: FromConfig): void;
  /**
   * 新增 同步 HTML 页面显示 校验规则 和 错误信息
   *  param {Rule[]} rule
   *  returns {ValidatorFn[]}
   */
  addRule(rule: Rule[]): ValidatorFn[];
}
