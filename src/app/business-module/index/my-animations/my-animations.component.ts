import { Component, OnInit } from '@angular/core';
import {boxAnimate} from "../../../shared-module/anmition/show";

@Component({
  selector: 'app-my-animations',
  templateUrl: './my-animations.component.html',
  styleUrls: ['./my-animations.component.scss'],
  animations: [
    boxAnimate
  ]
})
export class MyAnimationsComponent implements OnInit {

  // 定义开始的状态
  private boxState: String = 'left';
  private _isTrue: Boolean = true;
  constructor() { }

  ngOnInit() {
  }
  start(): void {
    console.log('开始运动');
    if (this._isTrue) {
      this.boxState = 'right';
    } else {
      this.boxState = 'left';
    }
    this._isTrue = !this._isTrue;
  }


}
