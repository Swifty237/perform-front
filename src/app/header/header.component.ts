import { Component, EventEmitter, Input, OnInit, Output, ElementRef } from '@angular/core';
import { AuthService } from '../common/services/spring-backend/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  searchForm!: FormGroup

  @Input() opened!: boolean
  @Output() openedChange = new EventEmitter<boolean>();

  constructor(
    public authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchInput: this.formBuilder.control("")
    })
  }

  handleLogout() {
    this.authService.logout();
  }

  handleDrawer(): void {
    this.openedChange.emit(!this.opened);
  }

  closeNavigation() {

    const navToggler = document.getElementById('navToggler');
    if (navToggler?.classList.contains('collapsed')) {
      return;
    }
    navToggler?.click();

  }
}
