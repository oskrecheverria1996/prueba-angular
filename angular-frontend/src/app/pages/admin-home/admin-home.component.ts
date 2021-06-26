import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { NbDialogService } from '@nebular/theme';
import { PeliculasService } from "../../shared/api/services/peliculas.service";
import { UtilitiesService } from "../../shared/api/services/utilities.service";
import { HorariosComponent } from "./horarios/horarios.component";
import { SalasComponent } from "./salas/salas.component";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  user: any = {};
  pelicula_seleccionada: any = null;
  mostrar_horarios: any = false;
  mostrar_salas: any = false;
  listado_peliculas: any = [];
  listado_salas: any = [];
  current_payload: any = null;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private peliculasService: PeliculasService,
    private utilitiesService: UtilitiesService,
    private dialogService: NbDialogService,
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

  fnAgregarSala(sala_seleccionada) {
    this.pelicula_seleccionada['sala'] = sala_seleccionada;
  }
 
  fnShowHorarios(pelicula_seleccionada) {
    let object_send = {};
    object_send['pelicula_seleccionada'] = JSON.parse(JSON.stringify(pelicula_seleccionada));
    this.dialogService.open(HorariosComponent, { context: object_send }).onClose.subscribe((res) => {
      // if(res) {
      //   this.fnGetCompetitorsOffers(this.current_payload);
      //   this.search_input = '';
      // }
    });
  }
 
  fnShowSalas(pelicula_seleccionada) {
    let object_send = {};
    object_send['listado_salas'] = JSON.parse(JSON.stringify(this.listado_salas));
    object_send['pelicula_seleccionada'] = JSON.parse(JSON.stringify(pelicula_seleccionada));
    this.dialogService.open(SalasComponent, { context: object_send }).onClose.subscribe((res) => {
      if(res) {
        this.fnGetSalas(this.current_payload);
        this.fnGetPeliculas(this.current_payload);
      }
    });
  }
  

}
