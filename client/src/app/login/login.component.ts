import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { catchError } from 'rxjs/operators';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  message: string;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  login(username, password) {
    this.auth.login(username, password)
      .subscribe(res => {
        console.log(res);
        if (res) {
          location.reload();
          this.router.navigate(['/users', username]);

        }
    });
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
