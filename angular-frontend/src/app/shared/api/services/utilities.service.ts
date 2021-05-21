import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable, Observer } from 'rxjs';

import { NbToastrService } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  dataChange: Observable<any>;
  dataChangeObserver: any;

  constructor(private router: Router,
    public http: HttpClient,
    private toastrService: NbToastrService,) {
      this.dataChange = new Observable((observer: Observer<any>) => {
        this.dataChangeObserver = observer;
      });
    }

  fnSendMessage(data: any) {
    this.dataChangeObserver.next(data);    
  }

  showToast(position, status, message, icon?) {
    const duration = 6000;
    this.toastrService.show(status, message, { position, status, duration });
  }

  fnDestroySessionData(objectObserve) {
    localStorage.clear();
    sessionStorage.clear();
    objectObserve(true);
  }
}
