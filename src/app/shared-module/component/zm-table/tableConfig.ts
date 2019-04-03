export class ColumnConfig {
  public title: string;
  public type?: string;
  public key: string;
  public width?: number;
  public class?: string;
}

export class Operation {
  public btnType?: string; // 按钮类型
  public text: string; // 操作名称
  public className?: string; // 样式的类名
  public iconClassName?: string; // 有图标样式的类名
  public canDisabled?: boolean; // 当为头部按钮时 按钮是否可以被禁用
  public needConfirm?: boolean; // 操作需要确认
  public confirmTitle?: string; // 确认框的title
  public confirmContent?: string; // 确认框的内容信息
  public handle: any; // 操作处理程序
  public key?: string;
}

export class TableConfig {
  constructor() {
    this.topButtons = [];
    this.columnConfig = [];
    this.operation = [];
    this.leftBottomButtons = [];
    this.expendDataKey = 'expandData';
  }

  public topButtons?: Operation[];
  public columnConfig: ColumnConfig[];
  public operation?: Operation[];
  public leftBottomButtons?: [];
  public expendDataKey?: string;

}
