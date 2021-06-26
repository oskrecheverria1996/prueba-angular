import { Component, OnInit, Input } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { PeliculasService } from "../../../shared/api/services/peliculas.service";
import { UtilitiesService } from "../../../shared/api/services/utilities.service";

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.scss']
})
export class SalasComponent implements OnInit {

  @Input() listado_salas;
  @Input() pelicula_seleccionada;
  current_payload: any = null;

  constructor(private peliculasService: PeliculasService,
    private utilitiesService: UtilitiesService,
    private authService: NbAuthService,
    protected ref: NbDialogRef<SalasComponent>,) { }

  ngOnInit() {
    const self = this;
    self.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        self.current_payload = token.getValue();
      }
    });
  }

  
  fnAsignarSalaPelicula(pelicula_seleccionada, sala_seleccionada) {
    pelicula_seleccionada['sala'] = sala_seleccionada.nombre;
    this.peliculasService.fnSetAsignarSalaPelicula(this.current_payload, pelicula_seleccionada).subscribe(r => {
      if (r.status == 204) {
        this.dismiss(true);
        this.utilitiesService.showToast('top-right', 'success', 'Se ha actualizado la sala de la pelicula');
      }
      if (r.status == 206) {
        // this.submitted = false;
        // let error = this.utilitiesService.fnSetErrors(null, r.body.message)[0];
        // this.utilitiesService.showToast('top-right', 'warning', error);+
      }
    }, err => {
      if (err.status == 500) {
        // this.utilitiesService.showToast('top-right', 'danger', '', 'fas fa-radiation-alt');
        // this.submitted = false;
      }
      if (err.status == 409) {
        // this.submitted = false;
        // let error = this.utilitiesService.fnSetErrors(null, err.error.message)[0];
        // this.utilitiesService.showToast('top-right', 'warning', error);
      }
    });
  }

  
  dismiss(res?) {
    this.ref.close(res);
  }

}
