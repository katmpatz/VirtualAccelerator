import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Accelerator';

  constructor(private auth: AuthService) {}

  ngOnInit() {
    if (localStorage.getItem('vap-jwt-access-token') !== null) {
      this.auth.isLoggedIn = true;
    }
  }

}
