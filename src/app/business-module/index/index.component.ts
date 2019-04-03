import { Component, OnInit } from '@angular/core';
import {NzI18nService, NzModalService} from 'ng-zorro-antd';
import {IndexLanguageInterface} from '../../../assets/i18n/index/index.language.interface';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  isVisible = false;
  constructor(
    private $nzI18n: NzI18nService,
    private modalService: NzModalService
  ) { }
  public language: IndexLanguageInterface;
  ngOnInit() {
    this.language = this.$nzI18n.getLocaleData('index');
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

