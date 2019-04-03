import {Component, OnInit} from '@angular/core';
import {FromConfig} from '../../../shared-module/component/from-group/from-config';
import {FormOperate} from '../../../shared-module/component/from-group/form-opearte.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-jq',
  templateUrl: './jq.component.html',
  styleUrls: ['./jq.component.scss']
})
export class JqComponent implements OnInit {
  public isShow = false;
  formColumn: FromConfig[] = [];
  formStatus: FormOperate;

  constructor() {
  }

  ngOnInit() {
    this.initColumn();
  }

  public btnClick() {
    // const dom = document.getElementsByClassName('btn-g')[0];
    // dom.removeAttribute('btn-g');
    // dom.setAttribute('class', 'common-btn btn-r');
    this.isShow = !this.isShow;
  }

  formInstance(event) {
    this.formStatus = event.instance;
    console.log(this.formStatus);
  }

  private initColumn() {
    this.formColumn = [
      { // 巡检任务名称
        label: '巡检任务名称',
        key: 'inspectionTaskName',
        type: 'input',
        require: true,
        rule: [{required: true}, {minLength: 2}, {maxLength: 12}],
        asyncRules: [],
      },
      { // 巡检任务名称
        label: '巡检任务关系',
        key: 'inspectionTaskTime',
        type: 'input',
        rule: [{pattern: '^(?!_)[a-zA-Z0-9_\u4e00-\u9fa5]+$'}, {maxLength: 6}],
        asyncRules: [],
      },
      { // 巡检任务名称
        label: '巡检任务状态',
        key: 'inspectionTaskState',
        type: 'input',
        rule: [{minLength: 2}, {maxLength: 10}],
        asyncRules: [],
      },
      {
        label: '原始密码',
        key: 'password',
        width: 500,
        type: 'input',
        inputType: 'password',
        require: true,
        rule: [{required: true}],
        asyncRules: [],
        modelChange: (controls, event, item) => {
          setTimeout(() => {
            controls.newPassword.updateValueAndValidity();
          }, 100);
        },
      },
      {
        label: '新密码',
        key: 'newPassword',
        type: 'input',
        width: 500,
        inputType: 'password',
        require: true,
        rule: [{required: true}],
        asyncRules: [
          {
            asyncRule: (control: FormControl) => {
              return Observable.create(observer => {
                const data = this.formStatus.getData();
                if (control.value === data.password) {
                  observer.next({error: true, duplicated: true});
                } else {
                  observer.next(null);
                }
                observer.complete();
              });
            },
            asyncCode: 'duplicated', msg: '旧密码和新密码两次不能一致！'
          }
        ],
        modelChange: (controls, event, item) => {
          setTimeout(() => {
            controls.confirmNewPassword.updateValueAndValidity();
          }, 100);
        },
      },
      {
        label: '确认密码',
        width: 500,
        require: true,
        key: 'confirmNewPassword',
        inputType: 'password',
        type: 'input',
        rule: [{required: true}],
        asyncRules: [
          {
            // asyncRule: (control: FormControl) => {
            //   return Observable.create(observer => {
            //     const data = this.formStatus.getData();
            //     if (control.value === data.newPassword) {
            //       observer.next(null);
            //       observer.complete();
            //     } else {
            //       observer.next({error: true, duplicated: true});
            //       observer.complete();
            //     }
            //   });
            // },
            asyncRule: (control: FormControl) => {
              return Observable.create(observer => {
                const data = this.formStatus.getData();
                if (control.value !== data.newPassword) {
                  observer.next({error: true, duplicated: true});
                } else {
                  observer.next(null);
                }
                observer.complete();
              });
            },
            asyncCode: 'duplicated', msg: '确认密码和新密码不一致！'
          }
        ]
      },
    ];

  }

  addWorkTask() {
    const data = this.formStatus.group.getRawValue();
    console.log(data);
  }
}
