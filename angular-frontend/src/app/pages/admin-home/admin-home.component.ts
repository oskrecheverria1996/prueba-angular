import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { PeliculasService } from "../../shared/api/services/peliculas.service";
import { UtilitiesService } from "../../shared/api/services/utilities.service";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  user: any = {};
  pelicula_seleccionada: any = null;
  listado_peliculas: any = [];
  listado_salas: any = [];
  current_payload: any = null;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private peliculasService: PeliculasService,
    private utilitiesService: UtilitiesService,
    private authService: NbAuthService,) { }

  ngOnInit() {
    const self = this;
    self.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        // here we receive a payload from the token and assigne it to our `user` variable
        self.user = token.getPayload().user;
        self.current_payload = token.getValue();
        if(self.user['role'] != 'admin') {
          self.router.navigateByUrl('auth/login');
        }
        self.fnGetPeliculas(self.current_payload);
        self.fnGetSalas(self.current_payload);
      }
    });
  }

  fnGetPeliculas(current_payload) {
    const self = this;
    self.peliculasService.fnGetPeliculas(current_payload).subscribe(r => {
      if (r.status == 200) {
        self.listado_peliculas = JSON.parse(JSON.stringify(r.body));
      }
    });
  }

  fnGetSalas(current_payload) {
    const self = this;
    self.peliculasService.fnGetSalas(current_payload).subscribe(r => {
      if (r.status == 200) {
        self.listado_salas = JSON.parse(JSON.stringify(r.body));
      }
    });
  }

  mostrarListaSalas(pelicula) {
    this.pelicula_seleccionada = pelicula;
  }

  fnAsignarSalaPelicula(pelicula_seleccionada, sala_seleccionada) {
    pelicula_seleccionada['sala'] = sala_seleccionada;
    this.peliculasService.fnSetAsignarSalaPelicula(this.current_payload, pelicula_seleccionada).subscribe(r => {
      if (r.status == 204) {
        this.pelicula_seleccionada = null;
        this.fnGetPeliculas(this.current_payload);
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

  fnAgregarSala(sala_seleccionada) {
    this.pelicula_seleccionada['sala'] = sala_seleccionada;
  }
 

}
