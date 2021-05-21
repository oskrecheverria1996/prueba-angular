import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss']
})
export class ComponentBComponent implements OnInit {

  @Input() data;

  constructor() { }

  ngOnInit() {
  }

}
