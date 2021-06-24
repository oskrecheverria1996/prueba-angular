import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UtilitiesService } from '../services/utilities.service';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  url_host: any = environment.apiUrl;
  data_headers_request: any = '';
  
  constructor(public http: HttpClient, private utility: UtilitiesService) { }
  
  fnSetDefineTokenAuthorization(payload) {
    this.data_headers_request = new HttpHeaders().set('authorization', payload);
    return this.data_headers_request;
  }
  
  fnGetPeliculas(guid_user): Observable<any>{
    const headers = this.fnSetDefineTokenAuthorization(guid_user);
    return this.http.get(this.url_host + 'getPeliculas',
      {
        observe: 'response',
        headers: headers,
        reportProgress: true,
      });
  }
  
  fnGetSalas(guid_user): Observable<any>{
    const headers = this.fnSetDefineTokenAuthorization(guid_user);
    return this.http.get(this.url_host + 'getSalas',
      {
        observe: 'response',
        headers: headers,
        reportProgress: true,
      });
  }

  fnSetAsignarSalaPelicula(guid_user, data_object): Observable<any>{
    const headers = this.fnSetDefineTokenAuthorization(guid_user);
    return this.http.put(this.url_host + 'asignarSalaPelicula', data_object,
      {
        observe: 'response',
        headers: headers,
        reportProgress: true,
      });
  }
  
}
