import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {FormOperate} from './form-opearte.service';
import {FromConfig} from './from-config';

@Component({
  selector: 'zm-from-group',
  templateUrl: './from-group.component.html',
  styleUrls: ['./from-group.component.scss']
})
export class FromGroupComponent implements OnInit, OnChanges {

  @Input()
  column;
  @Input()
  isDisabled: boolean;
  @Output()
  formInstance = new EventEmitter();

  formGroup = new FormGroup({});
  formOperate: FormOperate;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.column) {
      this.initForm();
    }
  }

  private initForm() {
    this.formGroup = new FormGroup({});
    this.formOperate = new FormOperate(this.formGroup, this.column);
    this.column.forEach((item: FromConfig) => {
      const value = item.initialValue || null;
      const formControl = new FormControl({value, disabled: this.isDisabled || item.disabled}, this.formOperate.addRule(item.rule),
        this.formOperate.addAsyncRule(item.asyncRules));
      this.formGroup.addControl(item.key, formControl);
    });
    this.formInstance.emit({instance: this.formOperate});
  }

  modelChange(controls, $event, col) {
    if (col.modelChange) {
      col.modelChange(controls, $event, col.key, this.formOperate);
    }

  }


}
