import { Component, OnInit } from '@angular/core';
import {GlobelService} from "../../../core-module/windowG/globel";

@Component({
  selector: 'app-window-g',
  templateUrl: './window-g.component.html',
  styleUrls: ['./window-g.component.scss']
})
export class WindowGComponent implements OnInit {

  constructor(
      private GlobelService: GlobelService
  ) { }

  ngOnInit() {
    console.log(this.GlobelService.mapType);
  }
  login() {
    sessionStorage.setItem('token', '0000000');
    this.GlobelService.mapType = sessionStorage.getItem('token');
    this.GlobelService.getFacilityStatusNameObj.token = sessionStorage.getItem('token');
  }
  nulogin() {
    console.log(this.GlobelService.mapType);
    sessionStorage.setItem('token', '');
    this.GlobelService.getFacilityStatusNameObj.token = sessionStorage.getItem('token');

  }

}
