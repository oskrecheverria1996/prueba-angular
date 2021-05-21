import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  user: any = {};
  current_payload: any = null;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
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
      }
    });
  }

}
