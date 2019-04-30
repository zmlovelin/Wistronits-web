import {Component, OnInit} from '@angular/core';
import {fadeIn} from "../../../shared-module/anmition/fadeIn";


@Component({
    selector: 'app-name-editor',
    templateUrl: './name-editor.component.html',
    styleUrls: ['./name-editor.component.scss'],
    animations:[
        fadeIn
    ]
})
export class NameEditorComponent implements OnInit {

    isIndex = null;
    data = [
        {
            name: '励扬导航', hh: [
                {
                    imgUrl: '../../../../assets/img/login-bg.png',
                    title: 'wyoyubjbkj'
                },
                {
                    imgUrl: '../../../../assets/img/login-bg.png',
                    title: 'wyoyubjbkj'
                },
                {
                    imgUrl: '../../../../assets/img/login-bg.png',
                    title: 'wyoyubjbkj'
                },
                {
                    imgUrl: '../../../../assets/img/login-bg.png',
                    title: 'wyoyubjbkj'
                },
                {
                    imgUrl: '../../../../assets/img/login-bg.png',
                    title: 'wyoyubjbkj'
                }
            ]
        },
        {
            name: '励扬导航', hh: [
                {
                    imgUrl: '../../../../assets/img/login-bg.png',
                    title: 'wyoyubjbkj'
                }
            ]
        },
        {
            name: '励扬导航', hh: [
                {
                    imgUrl: '../../../../assets/img/login-bg.png',
                    title: 'wyoyubjbkj'
                },
                {
                    imgUrl: '../../../../assets/img/login-bg.png',
                    title: 'wyoyubjbkj'
                },
                {
                    imgUrl: '../../../../assets/img/login-bg.png',
                    title: 'wyoyubjbkj'
                }
            ]
        }
    ]

    constructor() {
    }

    ngOnInit() {

    }
    hoverLi(i) {
        this.isIndex = i;

    }
    hocerHide(i) {
        this.isIndex = null;
    }
}
