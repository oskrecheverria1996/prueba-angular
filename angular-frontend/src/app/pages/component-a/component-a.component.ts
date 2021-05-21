import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements OnInit {

  data: any = '';
  @Output() mensaje = new EventEmitter<{}>();

  constructor() { }

  ngOnInit() {
    
  }

  fnEnviar() {
    this.mensaje.emit(this.data);
  }

}
