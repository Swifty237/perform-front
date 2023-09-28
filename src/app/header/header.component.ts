import { Component, OnInit } from '@angular/core';
import { AuthService } from '../common/services/connexion/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  handleLogout() {
    this.authService.logout();
  }
}
