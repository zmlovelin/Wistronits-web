export class FromConfig {
  label: string; // label;
  key: string; // 表单字段
  type: string; // 表单类型
  inputType?: string; // 输入框类型
  width?: number;  //  表单主体的宽度
  require?: boolean; // 是否有必填星号
  initialValue?: any; // 初始值
  rule: any[];    // 同步校验规则
  asyncRules?: any[]; // 异步校验规则
  selectInfo?: any;  // 选择框（包括单选 多选 下拉选择 ）选项数据
  radioInfo?: any;
  modelChange?: (controls, $event, key, formOperate?) => void;   // 数据变化函数
  disabled?: boolean;
}


export class Rule {
  required?: boolean; // 是否为必填
  minLength?: number;  // 最小长度
  maxLength?: number;  // 最大长度
  min?: number; // 最小值
  max: number; // 最大值
  pattern: RegExp;
  msg?: string;    // 错误信息
  code?: string;  // 响应式表单显示错误代码

}
