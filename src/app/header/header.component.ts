import { Component, OnInit } from '@angular/core';
import { AuthService } from '../common/services/spring-services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  searchForm!: FormGroup

  constructor(public authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchInput: this.formBuilder.control("")
    })
  }

  handleLogout() {
    this.authService.logout();
  }
}
