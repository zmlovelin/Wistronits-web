import { Component, OnInit } from '@angular/core';
import {NzI18nService} from 'ng-zorro-antd';
import {MapLanguageInterface} from '../../../../assets/i18n/map/map.language.interface';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  public language: MapLanguageInterface;
  constructor(
    private $nzI18n: NzI18nService,
  ) { }

  ngOnInit() {
    this.language = this.$nzI18n.getLocaleData('map');
  }

}
