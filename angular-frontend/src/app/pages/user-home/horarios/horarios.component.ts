import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.scss']
})
export class HorariosComponent implements OnInit {

  @Input() pelicula_seleccionada;

  constructor(protected ref: NbDialogRef<HorariosComponent>,) { }

  ngOnInit() {
  }
  
  dismiss(res?) {
    this.ref.close(res);
  }

}
