import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UtilitiesService } from '../services/utilities.service';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url_host: any = environment.apiUrl;
  data_headers_request: any = '';
  
  constructor(public http: HttpClient, private utility: UtilitiesService) { }
 
  fnSetDefineTokenAuthorization(payload) {
    this.data_headers_request = new HttpHeaders().set('authorization', payload);
    return this.data_headers_request;
  }

  
  fnGetUsersList(guid_user): Observable<any>{
    const headers = this.fnSetDefineTokenAuthorization(guid_user);
    return this.http.get(this.url_host + 'getUsersList',
      {
        observe: 'response',
        headers: headers,
        reportProgress: true,
      });
  }

}
