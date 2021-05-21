import { Component, OnInit, AfterViewInit, ChangeDetectorRef, ChangeDetectionStrategy, Inject } from '@angular/core';
import { NbLoginComponent, NbAuthJWTToken, NbAuthResult, NbAuthService, NB_AUTH_OPTIONS } from '@nebular/auth';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment.prod';
import { NbDialogService } from '@nebular/theme';
import { UtilitiesService } from '../../../shared/api/services/utilities.service';
declare var $: any;

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class NgxLoginComponent extends NbLoginComponent implements OnInit, AfterViewInit {

  required: Boolean = true;
  minlength: Number = 8;
  maxlength: Number = 50;
  aria_invalid: Boolean = true;


  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = 'email';

  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  submitted: boolean = false;

  constructor(
    public service: NbAuthService,
    public cd: ChangeDetectorRef,
    public utilitiesService: UtilitiesService,
    public dialogService: NbDialogService,
    @Inject(NB_AUTH_OPTIONS) options: {},
    public router: Router) {
    super(service, options, cd, router);
  }

  ngOnInit() {
    const self = this;
    $(document).ready(function(){
    });

  }

  ngAfterViewInit() {
    
  }

  login(): void {
    this.service.authenticate(this.strategy, this.user).subscribe((result: NbAuthResult) => {
      if (result.isSuccess()) {
        if (result.getMessages()[0]['status'] == 200){
          // const redirect = result.getRedirect();
          // this.router.navigateByUrl(redirect);
          if(result.getMessages()[0]['body']['dataUser']['role'] == "admin") {
            this.router.navigateByUrl('pages/admin-home');
          }
          if(result.getMessages()[0]['body']['dataUser']['role'] == "user") {
            this.router.navigateByUrl('pages/user-home');
          }
        }
        if (result.getMessages()[0]['status'] == 206) {
          this.submitted = false;
          let message = result.getMessages()[0]['body']["message"];
          this.utilitiesService.showToast('top-right', 'warning', message);
        }
      } else {
        if (result.getErrors()[0]['status'] == 500) {
          this.submitted = false;
        }
      }
    });
  }
}
