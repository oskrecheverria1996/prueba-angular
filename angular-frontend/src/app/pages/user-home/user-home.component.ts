import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { UtilitiesService } from "../../shared/api/services/utilities.service";

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  user: any = {};
  current_payload: any = null;
  data_message: any = ''; 
  data_header: any = ''; 

  constructor(public router: Router,
    private route: ActivatedRoute,
    private utilitiesService: UtilitiesService,
    private authService: NbAuthService,) { }

  ngOnInit() {
    const self = this;
    self.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      if (token.isValid()) {
        // here we receive a payload from the token and assigne it to our `user` variable
        self.user = token.getPayload().user;
        self.current_payload = token.getValue();
        if(self.user['role'] != 'user') {
          self.router.navigateByUrl('auth/login');
        }
      }
    });
  }

  fnEnviarMensaje(event) {
    this.data_message = event;
  }

  fnSendMessageHeader() {
    this.utilitiesService.fnSendMessage(this.data_header);
  }

}
