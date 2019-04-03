import {FormOpearateInterface} from './form-opearate.interface';
import {FromConfig, Rule} from './from-config';
import {AsyncValidatorFn, FormGroup, ValidatorFn, Validators} from '@angular/forms';


export class FormOperate implements FormOpearateInterface {

  group: FormGroup;
  column;

  constructor(group, column) {
    this.group = group;
    this.column = column;
  }

  addValidRule(formItem: FromConfig): void {
    const validator = this.addRule(formItem.rule);
    this.group.controls[formItem.key].setValidators(validator);
  }

  addRule(rule: Rule[]): ValidatorFn[] {
    const validator = [];
    if (rule) {
      rule.forEach(item => {
        if (item.hasOwnProperty('required')) {
          validator.push(Validators.required);
          item.msg = item.msg || '此项为必填';
          item.code = 'required';
        }
        if (item.hasOwnProperty('minLength')) {
          validator.push(Validators.minLength(item.minLength));
          item.msg = item.msg || `最少输入${item.minLength}位`;
          item.code = 'minlength';
        }
        if (item.hasOwnProperty('maxLength')) {
          validator.push(Validators.maxLength(item.maxLength));
          item.msg = item.msg || `最多输入${item.maxLength}位`;
          item.code = 'maxlength';
        }
        if (item.hasOwnProperty('min')) {
          item.code = 'min';
          item.msg = item.msg || `不能小于${item.min}`;
          validator.push(Validators.min(item.min));
        }
        if (item.hasOwnProperty('max')) {
          item.code = 'max';
          item.msg = item.msg || `不能大于${item.max}`;
          validator.push(Validators.max(item.max));
        }
        if (item.hasOwnProperty('email')) {
          item.code = 'email';
          item.msg = item.msg || '邮箱格式有误';
          validator.push(Validators.email);
        }
        if (item.hasOwnProperty('pattern')) {
          item.code = 'pattern';
          item.msg = item.msg || '输入格式不正确！';
          validator.push(Validators.pattern(new RegExp(item.pattern)));
        }
      });
    }

    return validator;
  }


  addAsyncRule(rules: { asyncRule: AsyncValidatorFn, asyncCode: any }[]): AsyncValidatorFn[] {
    const control = [];
    if (rules) {
      rules.forEach((rule) => {
        control.push(rule.asyncRule);
      });
    }
    return control;
  }
  getValid(key?: string): boolean {
    if (key) {
      return this.group.controls[key].valid;
    } else {
      return this.group.valid;
    }
  }

  getData(key?: string): any {
    if (key) {
      return this.group.controls[key].value;
    } else {
      return this.group.value;
    }
  }

}
