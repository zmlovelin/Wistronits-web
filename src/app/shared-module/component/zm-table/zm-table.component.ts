import {Component, Input, OnInit, Output} from '@angular/core';
import {TableConfig} from './tableConfig';

@Component({
  selector: 'zm-table',
  templateUrl: './zm-table.component.html',
  styleUrls: ['./zm-table.component.scss']
})
export class ZmTableComponent implements OnInit {
  /**
   * 接受的后台数据
   */
  @Input()
  dataSet = [];
  /**
   * 前端配置列
   */
  @Input()
  tableConfig: TableConfig = new TableConfig();

  constructor() {
  }

  ngOnInit() {
  }

}
