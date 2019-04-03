import { Component, OnInit } from '@angular/core';
import {NzI18nService, NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-open-model',
  templateUrl: './open-model.component.html',
  styleUrls: ['./open-model.component.scss']
})
export class OpenModelComponent implements OnInit {

  isVisible = false;
  constructor(
    private $nzI18n: NzI18nService,
    private modalService: NzModalService
  ) { }
  ngOnInit() {
  }

  showConfirm(): void {
    this.modalService.confirm({
      nzTitle: '<i>Do you Want to delete these items?</i>',
      nzContent: '<b>Some descriptions</b>',
      nzOkText: 'OK',
      nzCancelText: 'Cancel',
      nzOnOk: () => console.log('OK')
    });
  }

  showModel() {
    this.isVisible = true;
  }
  handleOk() {
    this.isVisible = false;
  }
  handleCancel() {
    this.isVisible = false;
  }

}
