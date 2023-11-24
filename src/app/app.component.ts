import { Component, OnInit } from '@angular/core';
import { AuthService } from './common/services/spring-backend/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  openedOnParent = false;
  searchForm!: FormGroup

  constructor(public authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.authService.loadJWtTokenFromLocalStorage();
    this.searchForm = this.formBuilder.group({
      searchInput: this.formBuilder.control("")
    })
  }

  handleDrawer(): void {
    this.openedOnParent = !this.openedOnParent;
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