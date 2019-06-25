import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-element-ref',
  templateUrl: './element-ref.component.html',
  styleUrls: ['./element-ref.component.scss']
})
export class ElementRefComponent implements OnInit {

  constructor(
      private elementRef: ElementRef
  ) { }

  ngOnInit() {
    const dd = this.elementRef.nativeElement.querySelector('#details').style.color = 'yellow'

  }

}
