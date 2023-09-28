import { Component } from '@angular/core';
import { StorageService } from './common/services/connexion/storage.service';
import { AuthService } from './common/services/connexion/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public authService: AuthService) { }

  ngOnInit() {

    this.authService.loadJWtTokenFromLocalStorage();

  }
}