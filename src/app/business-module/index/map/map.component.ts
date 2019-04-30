import {Component, OnInit} from '@angular/core';
import {NzI18nService} from 'ng-zorro-antd';
import {MapLanguageInterface} from '../../../../assets/i18n/map/map.language.interface';
import jQ from 'jquery';
import {TilConfig} from "zmlovelin";

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

    cd = 'dd'
    dd = new TilConfig();
    public language: MapLanguageInterface;

    constructor(
        private $nzI18n: NzI18nService,
    ) {
    }

    ngOnInit() {
        this.dd.ds();
        const c = jQ('#ccc');
        c.css({'color': 'red', 'background': 'green'});
        // c.hide(1500)
        jQ(".axc-success").show();
        jQ(".axc-success").hover(() => {
           console.log(1)
        },()=> {
            console.log(2)
        }).stop();

        // jQ(".axc-success").show(100).delay(1500).fadeOut();
        this.language = this.$nzI18n.getLocaleData('map');
    }
    editAlert() {
        console.log('editAlert')
    }

}
