import { Component, OnInit } from '@angular/core';
import { AuthService } from './common/services/spring-services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authService.loadJWtTokenFromLocalStorage();
  }

  displayRole(roles: string): string {

    let role: string;

    if (roles.includes("ADMIN")) {
      role = "Administrator";
    } else if (roles.includes("MOD") && !roles.includes("ADMIN")) {
      role = "Moderator";
    } else {
      role = "Simple user"
    }
    return role;
  }
}