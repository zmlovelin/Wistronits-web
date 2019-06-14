import {Component, OnInit, ViewChild} from '@angular/core';
import {MapComponent} from "../map/map.component";

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit {

  @ViewChild(MapComponent) private childCmp: MapComponent;
  constructor(
  ) { }

  ngOnInit() {
    this.childCmp.editAlert();
  }

}
